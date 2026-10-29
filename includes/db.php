<?php
/**
 * E-ZAINCO BRICK — Database Connection & Auto-Setup
 * Database Name: e-zainco-brick
 */

define('DB_HOST', '127.0.0.1');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'e-zainco-brick');
define('DB_CHARSET', 'utf8mb4');

/**
 * Get PDO Database Connection
 * Automatically initializes database & tables if they don't exist yet.
 *
 * @return PDO
 */
function getDbConnection() {
    static $pdo = null;

    if ($pdo !== null) {
        return $pdo;
    }

    try {
        // First connect to MySQL server without database to verify / create it
        $rootDsn = "mysql:host=" . DB_HOST . ";charset=" . DB_CHARSET;
        $rootPdo = new PDO($rootDsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]);

        // Auto-create database with backticks (hyphens in DB name require backticks in MySQL)
        $rootPdo->exec("CREATE DATABASE IF NOT EXISTS `" . DB_NAME . "` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");

        // Connect to the specific database
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
        $pdo = new PDO($dsn, DB_USER, DB_PASS, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]);

        // Ensure database schema is migrated and seeded
        initializeSchema($pdo);

        return $pdo;
    } catch (PDOException $e) {
        error_log("Database Connection Error: " . $e->getMessage());
        throw new RuntimeException("Could not connect to database `" . DB_NAME . "`: " . $e->getMessage());
    }
}

/**
 * Initialize Schema & Tables
 */
function initializeSchema(PDO $pdo) {
    // 1. Users / Administrators table
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `users` (
            `id` INT AUTO_INCREMENT PRIMARY KEY,
            `name` VARCHAR(150) NOT NULL,
            `email` VARCHAR(191) NOT NULL UNIQUE,
            `password` VARCHAR(255) NOT NULL,
            `role` VARCHAR(50) DEFAULT 'admin',
            `avatar` VARCHAR(255) NULL,
            `phone` VARCHAR(50) NULL,
            `status` ENUM('active', 'inactive') DEFAULT 'active',
            `last_login` DATETIME NULL,
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    // Seed default admin if not exists
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM `users` WHERE `email` = ?");
    $stmt->execute(['admin@ezaincobrick.com']);
    if ($stmt->fetchColumn() == 0) {
        $hashed = password_hash('ZaincoBrick2026!', PASSWORD_BCRYPT);
        $insert = $pdo->prepare("
            INSERT INTO `users` (`name`, `email`, `password`, `role`, `status`)
            VALUES (?, ?, ?, 'superadmin', 'active')
        ");
        $insert->execute([
            'Engr. Chukwudi Zainco',
            'admin@ezaincobrick.com',
            $hashed
        ]);
    }

    // 2. Quote Requests & Client Consultations
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `consultations` (
            `id` INT AUTO_INCREMENT PRIMARY KEY,
            `name` VARCHAR(150) NOT NULL,
            `email` VARCHAR(191) NOT NULL,
            `phone` VARCHAR(50) NOT NULL,
            `category` VARCHAR(100) DEFAULT 'General Inquiry',
            `location` VARCHAR(200) NULL,
            `estimated_quantity` INT NULL,
            `budget_range` VARCHAR(100) NULL,
            `message` TEXT NOT NULL,
            `drawings_file` VARCHAR(255) NULL,
            `status` ENUM('new', 'contacted', 'scheduled', 'completed', 'archived') DEFAULT 'new',
            `notes` TEXT NULL,
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    // 3. Projects & Catalog Case Studies
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `projects` (
            `id` INT AUTO_INCREMENT PRIMARY KEY,
            `title` VARCHAR(200) NOT NULL,
            `slug` VARCHAR(200) NOT NULL UNIQUE,
            `category` VARCHAR(100) NOT NULL,
            `location` VARCHAR(150) NOT NULL,
            `image` VARCHAR(255) NOT NULL,
            `dimensions` VARCHAR(150) NULL,
            `compressive_strength` VARCHAR(50) DEFAULT '12.5 MPa',
            `timeline` VARCHAR(100) NULL,
            `scope` TEXT NULL,
            `brief` TEXT NULL,
            `approach` TEXT NULL,
            `testimonial` TEXT NULL,
            `testimonial_author` VARCHAR(150) NULL,
            `style_tags` TEXT NULL,
            `featured` TINYINT(1) DEFAULT 0,
            `status` ENUM('Published', 'Draft', 'Archived') DEFAULT 'Published',
            `sort_order` INT DEFAULT 0,
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    // 4. Products / Material Inventory
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `products` (
            `id` INT AUTO_INCREMENT PRIMARY KEY,
            `name` VARCHAR(150) NOT NULL,
            `sku` VARCHAR(50) NOT NULL UNIQUE,
            `category` VARCHAR(100) NOT NULL,
            `description` TEXT NULL,
            `compressive_strength` VARCHAR(50) DEFAULT '12.5 MPa',
            `dimensions` VARCHAR(100) DEFAULT '220mm x 105mm x 65mm',
            `weight` VARCHAR(50) DEFAULT '3.2 kg',
            `price_per_unit` DECIMAL(10,2) DEFAULT 0.00,
            `pallet_quantity` INT DEFAULT 500,
            `stock_status` ENUM('In Stock', 'Made to Order', 'Pre-Order') DEFAULT 'In Stock',
            `image` VARCHAR(255) NULL,
            `status` ENUM('Active', 'Inactive') DEFAULT 'Active',
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    // 5. Bill of Quantities (BOQ) Calculations
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `boq_requests` (
            `id` INT AUTO_INCREMENT PRIMARY KEY,
            `client_name` VARCHAR(150) NOT NULL,
            `email` VARCHAR(191) NOT NULL,
            `phone` VARCHAR(50) NOT NULL,
            `project_type` VARCHAR(100) NOT NULL,
            `project_location` VARCHAR(150) NOT NULL,
            `wall_area_sqm` DECIMAL(10,2) NULL,
            `perimeter_length_m` DECIMAL(10,2) NULL,
            `paving_area_sqm` DECIMAL(10,2) NULL,
            `brick_spec_id` INT NULL,
            `estimated_bricks_count` INT NULL,
            `estimated_mortar_bags` INT NULL,
            `estimated_total_cost` DECIMAL(12,2) NULL,
            `status` ENUM('Pending Review', 'Estimated', 'Quoted', 'Approved', 'Declined') DEFAULT 'Pending Review',
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    // 6. Journal / News Posts
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `journal_posts` (
            `id` INT AUTO_INCREMENT PRIMARY KEY,
            `title` VARCHAR(255) NOT NULL,
            `slug` VARCHAR(255) NOT NULL UNIQUE,
            `category` VARCHAR(100) DEFAULT 'Masonry Insights',
            `excerpt` TEXT NOT NULL,
            `content` LONGTEXT NOT NULL,
            `image` VARCHAR(255) NOT NULL,
            `author` VARCHAR(150) DEFAULT 'Engr. Chukwudi Zainco',
            `read_time` VARCHAR(50) DEFAULT '4 min read',
            `status` ENUM('Published', 'Draft', 'Archived') DEFAULT 'Published',
            `views` INT DEFAULT 0,
            `published_at` DATETIME NULL,
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    // 7. Testimonials
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `testimonials` (
            `id` INT AUTO_INCREMENT PRIMARY KEY,
            `client_name` VARCHAR(150) NOT NULL,
            `role_title` VARCHAR(150) NULL,
            `location` VARCHAR(150) NULL,
            `project_type` VARCHAR(100) NULL,
            `quote` TEXT NOT NULL,
            `rating` INT DEFAULT 5,
            `status` ENUM('Published', 'Pending', 'Archived') DEFAULT 'Published',
            `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    // 8. Site Settings & Enterprise Parameters
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `settings` (
            `id` INT AUTO_INCREMENT PRIMARY KEY,
            `setting_key` VARCHAR(100) NOT NULL UNIQUE,
            `setting_value` TEXT NULL,
            `setting_group` VARCHAR(50) DEFAULT 'general',
            `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    // Seed default settings if empty
    $count = $pdo->query("SELECT COUNT(*) FROM `settings`")->fetchColumn();
    if ($count == 0) {
        $defaults = [
            ['company_name', 'E-ZAINCO BRICK Nigeria Ltd.', 'general'],
            ['tagline', 'Building Strength. Creating Legacy.', 'general'],
            ['factory_address', 'Suite 11, Municipal Plaza, Umez Eronini Street, Ikenegbu, Owerri, Imo State', 'general'],
            ['phone', '+234 815 327 8764', 'contact'],
            ['phone_alt', '+234 902 239 5340', 'contact'],
            ['whatsapp', '2347014093037', 'contact'],
            ['email', 'info@ezaincobrick.com', 'contact'],
            ['sales_email', 'sales@ezaincobrick.com', 'contact'],
            ['operating_hours', 'Mon - Sat: 8:00 AM - 6:00 PM', 'contact'],
            ['default_compressive_strength', '12.5 MPa', 'factory'],
            ['daily_production_capacity', '15,000 Bricks / Day', 'factory'],
        ];

        $ins = $pdo->prepare("INSERT INTO `settings` (`setting_key`, `setting_value`, `setting_group`) VALUES (?, ?, ?)");
        foreach ($defaults as $row) {
            $ins->execute($row);
        }
    }

    // Seed initial projects if empty
    $projCount = $pdo->query("SELECT COUNT(*) FROM `projects`")->fetchColumn();
    if ($projCount == 0) {
        $initialProjects = [
            [
                'The Civic Brick Residence',
                'civic-brick-residence',
                'residential',
                'New Owerri, Imo State',
                'assets/image-web/south1.jpeg',
                '480 sq.m Built Area • 12.0 MPa Facing Brick',
                '12.0 MPa',
                '8 Weeks Handover',
                'Foundation Reinforcement, Facing Brick Cladding, Interlocking Courtyard, Moisture Barrier Pointing',
                'A private luxury residential duplex requiring superior thermal comfort, zero wall painting maintenance, and exposed facing brickwork.',
                'Selected high-density red laterite facing bricks compressed at 12 MPa. Laid using Flemish bond masonry with water-shedding concave joints.',
                'The house stays naturally cool even in 34°C tropical heat. We have zero painting or plastering maintenance forever.',
                'Chief I. Nwachukwu, Property Owner',
                '["Solid Earth Brick", "Flemish Bond", "Zero Plaster", "Thermal Comfort"]',
                1
            ],
            [
                'Sanctuary Brick Villa',
                'sanctuary-brick-villa',
                'residential',
                'Ikenegbu, Owerri',
                'assets/image-web/south2.jpeg',
                '360 sq.m Residential Masonry • 11.5 MPa CEB',
                '11.5 MPa',
                '4 Weeks Handover',
                'Load-Bearing Brickwork, Structural Lintels, Parapet Capping',
                'A modern residential villa utilizing hydraulic compressed earth blocks (CEB) to achieve aesthetic warmth and structural integrity.',
                'Utilized precision hydraulic CEB blocks with interlocking tongue-and-groove joints, minimizing mortar lines and accelerating wall erection.',
                'The build speed was incredible. Solid, soundproof, and exceptionally cool indoors.',
                'Arc. Obinna Eze, Lead Architect',
                '["Hydraform Interlocking", "Eco-Friendly", "Acoustic Insulation"]',
                1
            ],
            [
                'Aura Commercial Brick Plaza',
                'aura-commercial-brick-plaza',
                'commercial',
                'Municipal Plaza, Owerri',
                'assets/image-web/south3.jpeg',
                '850 sq.m Commercial Elevation • 12.5 MPa Structural',
                '12.5 MPa',
                '6 Weeks Handover',
                'Structural Load-Bearing Columns, Cladding Panels, Balustrades',
                'A high-traffic commercial complex requiring fire resistance, durable exterior aesthetics, and low lifetime operational costs.',
                'Engineered reinforced structural brick pillars and exposed cladding panels treated with silicone anti-efflorescence sealants.',
                'E-ZAINCO delivered on time and our commercial tenants love the distinctive brick character.',
                'Chief Engr. D. Okoro, Plaza Developer',
                '["Commercial Masonry", "Fire-Rated", "Zero Maintenance"]',
                1
            ],
            [
                'Terracotta Facade Pavilion',
                'terracotta-facade-pavilion',
                'facades',
                'Federal Housing Estate, Owerri',
                'assets/image-web/south4.jpeg',
                '240 sq.m Architectural Facade Cladding',
                '11.8 MPa',
                '5 Weeks Handover',
                'Exposed Brick Cladding, Archways, Weatherproof Pointing',
                'An architectural exterior renovation converting an existing sandcrete building into a distinguished exposed brick pavilion.',
                'Anchored wire-cut facing brick tiles with polymer-modified adhesive and precision tuckpointing for permanent bond strength.',
                'Transformed our dated house into an architectural landmark in the estate.',
                'Dr. & Mrs. K. Anya, Homeowners',
                '["Brick Facade", "Tuckpointing", "Architectural Renovation"]',
                1
            ],
            [
                'Heritage Brick Perimeter Estate',
                'heritage-brick-perimeter-estate',
                'perimeter',
                'Victoria Island / Lekki, Lagos',
                'assets/image-web/south5.jpeg',
                '180m Linear Perimeter • 3.2m Height',
                '13.0 MPa',
                '5 Weeks Handover',
                'Foundational Footing, Reinforced Brick Piers, Coping Capping',
                'A high-security private estate perimeter wall requiring robust defense, erosion resistance, and premium architectural appearance.',
                'Constructed double-skin solid brickwork with reinforced intermediate piers every 3 meters, capped with water-shedding triangular coping bricks.',
                'Solid as a fortress and beautiful from every angle. Much stronger and better looking than ordinary sandcrete perimeter walls.',
                'Barr. T. Adeleke, Estate Secretary',
                '["Heavy-Duty Wall", "Anti-Climb Coping", "Double-Skin"]',
                1
            ],
            [
                'Sovereign Interlocking Courtyard',
                'sovereign-interlocking-courtyard',
                'perimeter',
                'Independence Layout, Enugu',
                'assets/image-web/south6.jpeg',
                '520 sq.m Driveway & Courtyard Paving',
                '14.5 MPa',
                '3 Weeks Handover',
                'Sub-Base Compaction, Edge Curbs, Paver Installation, Joint Sealing',
                'An expansive estate driveway and reception courtyard subject to heavy SUV traffic and heavy rainy season water runoff.',
                'Compacted crusher-run base with 60mm heavy-duty interlocking pavers arranged in a herringbone pattern with polymeric joint sand.',
                'Zero sinking, zero pooling water after downpours. The driveway handles heavy vehicles easily without a single cracked paver.',
                'Engr. C. Umeh, Civil Contractor',
                '["Heavy-Duty Pavers", "High-Traffic", "Permeable Drainage"]',
                1
            ]
        ];

        $insProj = $pdo->prepare("
            INSERT INTO `projects` 
            (`title`, `slug`, `category`, `location`, `image`, `dimensions`, `compressive_strength`, `timeline`, `scope`, `brief`, `approach`, `testimonial`, `testimonial_author`, `style_tags`, `featured`)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ");

        foreach ($initialProjects as $p) {
            $insProj->execute($p);
        }
    }
}
