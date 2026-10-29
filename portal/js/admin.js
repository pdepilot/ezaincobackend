/* BRISTS Admin Atelier — frontend-only content workspace.
   Data is stored in this browser's localStorage. Connect these CRUD methods
   to a secure server/API before using it as a live production CMS. */
(() => {
'use strict';
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const KEY = 'ezainco_brick_portal_cms_v2';

function resolveImgUrl(url, idx = 0){
 if(!url || typeof url !== 'string' || url.trim() === '') return `../assets/image-web/south${(idx % 13) + 1}.jpeg`;
 if(url.includes('.avif')) return `../assets/image-web/south${(idx % 13) + 1}.jpeg`;
 if(url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:')) return url;
 if(url.startsWith('assets/')) return '../' + url;
 if(url.startsWith('../assets/')) return url;
 if(!url.startsWith('../') && !url.startsWith('/')) return '../assets/image-web/' + url;
 return url;
}

let projectsViewMode = 'table';

const sections = {
 projects:{
  title:'Projects & Catalog',
  desc:'Curate completed architectural masonry spaces, client case studies, and pure brick photography for E-ZAINCO BRICK.',
  singular:'project',
  icon:'panels-top-left',
  fields:[
   ['title','Project title','text',true],
   ['category','Project category','select',true,['Residential Architecture','Commercial Masonry','Civic & Cultural Masonry','Ecclesiastical Masonry','Industrial Facility','Landscape & Pavers','Structural Masonry','Housing Development','Civil Infrastructure']],
   ['location','Location / City (e.g. New Owerri, Imo State)','text',false],
   ['client','Client / Scope (e.g. Private Luxury Residence)','text',false],
   ['year','Completion Year / Status (e.g. 2026, Completed)','text',false],
   ['image','Cover image URL / Upload','image',true],
   ['beforeImage','Before / Foundation image URL / Upload','image',false],
   ['gallery','Additional gallery image links (comma separated)','text',false],
   ['features','Key deliverables & highlights (e.g. 12.0 MPa Facing Brick, Flemish Bond Masonry)','text',false],
   ['description','Project summary & architectural concept','textarea',true],
   ['status','Visibility on website','select',true,['Published','Featured','Draft','Archived']]
  ]
 },
 journal:{
  title:'Journal / Blog',
  desc:'Publish helpful articles, architectural stories and design guides for the public website.',
  singular:'article',
  icon:'notebook-pen',
  fields:[
   ['title','Article title','text',true],
   ['slug','Article URL / slug (e.g. blog-post/blog-how-to-plan-interior-design-project-owerri.php)','text',true],
   ['category','Category','select',true,['Design Advice','Materials & Finishes','Inspiration','Studio News','Project Stories','Guides']],
   ['author','Author / Byline (e.g. Arc. Chinedu Brist)','text',true],
   ['date','Publication date (e.g. October 2026)','text',false],
   ['readTime','Reading duration (e.g. 6 Min Read)','text',false],
   ['image','Featured cover image URL / Upload','image',true],
   ['excerpt','Short excerpt / card lead summary','textarea',true],
   ['content','Full article writeup & content','textarea',false],
   ['tags','Topic tags (comma separated)','text',false],
   ['status','Status','select',true,['Published','Draft']]
  ]
 },
 services:{
  title:'Services',
  desc:'Manage the interior architecture, design and styling services offered across the public website.',
  singular:'service',
  icon:'armchair',
  fields:[
   ['title','Service name','text',true],
   ['category','Service type','select',true,['Residential','Commercial','Bespoke Styling','Consultation','Turnkey Fit-Out']],
   ['badge','Card badge / tag (e.g. Turnkey Luxury, Full-Service)','text',false],
   ['image','Service showcase image URL / Upload','image',true],
   ['deliverables','Included deliverables (e.g. 3D Visuals, MEP Plans, Site Supervision)','text',false],
   ['timeline','Typical duration / turnaround (e.g. 4–8 Weeks)','text',false],
   ['description','Comprehensive service description & approach','textarea',true],
   ['status','Status','select',true,['Published','Draft']]
  ]
 },
 pages:{
  title:'Website Pages',
  desc:'Control the pages, hero messaging, featured banners and SEO metadata of the BRISTS website.',
  singular:'page',
  icon:'files',
  fields:[
   ['title','Page title','text',true],
   ['slug','Page URL / slug (e.g. index.php, services.php, catalog.php)','text',true],
   ['heroEyebrow','Hero eyebrow / kicker (e.g. Tailored Capabilities)','text',false],
   ['heroTitle','Hero headline (e.g. End-to-End Interior Architecture & Styling)','text',false],
   ['image','Featured page header image URL / Upload','image',false],
   ['description','Page introduction / overview copy','textarea',false],
   ['seoTitle','SEO meta title','text',false],
   ['seoDescription','SEO meta description','textarea',false],
   ['status','Status','select',true,['Published','Draft']]
  ]
 },
 consultations:{
  title:'Consultations',
  desc:'Review consultation requests and update their progress.',
  singular:'consultation',
  icon:'calendar-check',
  fields:[
   ['title','Client name','text',true],
   ['email','Email address','email',true],
   ['phone','Phone number','tel',false],
   ['category','Project type','select',true,['Residential','Commercial','Office','Renovation','Other']],
   ['description','Client brief & requirements','textarea',false],
   ['status','Status','select',true,['New','Contacted','Scheduled','Completed','Cancelled']]
  ]
 },
 boq:{
  title:'Project briefs / BOQ',
  desc:'Organise project briefs and preliminary bill-of-quantities requests.',
  singular:'brief',
  icon:'clipboard-list',
  fields:[
   ['title','Client / project','text',true],
   ['email','Client email','email',false],
   ['category','Request type','select',true,['Project brief','Bill of quantities','Materials estimate','Site assessment']],
   ['budget','Indicative budget','text',false],
   ['description','Scope / notes','textarea',false],
   ['status','Status','select',true,['New','Reviewing','Quoted','Approved','Closed']]
  ]
 },
 team:{
  title:'Team',
  desc:'Maintain the architects, designers and leaders featured on the public website.',
  singular:'team member',
  icon:'users',
  fields:[
   ['title','Full name','text',true],
   ['category','Role / specialty (e.g. Lead Interior Architect & Founder)','text',true],
   ['image','Portrait photo URL / Upload','image',true],
   ['specialities','Core competencies (e.g. Spatial Planning, Custom Joinery, Acoustics)','text',false],
   ['email','Email address','email',false],
   ['phone','Phone number / WhatsApp','tel',false],
   ['description','Professional biography & experience','textarea',false],
   ['status','Status','select',true,['Published','Draft']]
  ]
 },
 testimonials:{
  title:'Testimonials',
  desc:'Manage client feedback and reviews shown across the website.',
  singular:'testimonial',
  icon:'message-square-quote',
  fields:[
   ['title','Client name','text',true],
   ['category','Project type / Location','text',false],
   ['image','Client photo URL / Upload (optional)','image',false],
   ['description','Testimonial quote','textarea',true],
   ['status','Status','select',true,['Published','Draft']]
  ]
 },
 faqs:{
  title:'FAQs',
  desc:'Answer common questions before visitors make an enquiry.',
  singular:'FAQ',
  icon:'circle-help',
  fields:[
   ['title','Question','text',true],
   ['category','Topic / Section','text',false],
   ['description','Answer','textarea',true],
   ['status','Status','select',true,['Published','Draft']]
  ]
 },
 materials:{
  title:'Materials library',
  desc:'Keep finish, furniture and materials references organised.',
  singular:'material',
  icon:'layers',
  fields:[
   ['title','Material / product name','text',true],
   ['category','Material category','select',true,['Flooring','Wall finish','Lighting','Furniture','Fabric','Hardware','Other']],
   ['image','Material swatch / photo URL / Upload','image',false],
   ['description','Notes & architectural specifications','textarea',false],
   ['status','Status','select',true,['Available','Archived']]
  ]
 },
 whatsapp:{
  title:'WhatsApp enquiries',
  desc:'Track WhatsApp leads recorded by the team.',
  singular:'WhatsApp enquiry',
  icon:'messages-square',
  fields:[
   ['title','Contact name','text',true],
   ['phone','WhatsApp number','tel',true],
   ['category','Interest','select',true,['Interior design','Consultation','Project estimate','Other']],
   ['description','Conversation notes','textarea',false],
   ['status','Status','select',true,['New','Replied','Follow-up','Converted','Closed']]
  ]
 }
};

const seed = {
 projects:[
  {id:'p1',title:'The Civic Brick Residence',category:'Residential Architecture',location:'New Owerri, Imo State',client:'Chief I. Nwachukwu',year:'2026',image:'../assets/image-web/south1.jpeg',features:'12.0 MPa Facing Brick, Flemish Bond Masonry, Natural Thermal Insulation, Zero Plaster',description:'A private luxury residential duplex requiring superior thermal comfort, zero wall painting maintenance, and exposed facing brickwork.',status:'Published'},
  {id:'p2',title:'Sanctuary Brick Villa',category:'Residential Architecture',location:'Ikenegbu, Owerri',client:'Private Family Villa',year:'2026',image:'../assets/image-web/south2.jpeg',features:'11.5 MPa Compressed Earth Brick, Architectural Sills, Deep Overhangs, Climate-Optimized Courtyard',description:'Contemporary tropical villa built entirely with high-density stabilized earth bricks, creating natural temperature regulation and timeless texture.',status:'Published'},
  {id:'p3',title:'Monochrome Structural Kitchen & Masonry Core',category:'Residential Masonry',location:'Works Layout, Owerri',client:'Executive Estate',year:'2025',image:'../assets/image-web/south3.jpeg',features:'Exposed Terracotta Brick Spine, Load-Bearing Piers, Fire-Resistant Kiln Bricks',description:'High-load masonry columns and architectural brick feature walls integrated with modern stone kitchen cabinetry and vaulted ceilings.',status:'Published'},
  {id:'p4',title:'Aura Commercial Chambers',category:'Commercial Masonry',location:'Victoria Island, Lagos',client:'Corporate Legal Firm',year:'2025',image:'../assets/image-web/south4.jpeg',features:'Sound-Attenuating Solid Bricks, Acoustic Pier Buffers, Low Carbon Footprint, Polished Pointing',description:'Prestigious corporate headquarters designed with acoustic brick partitions and authoritative architectural facades.',status:'Published'},
  {id:'p5',title:'Nordic Minimalist Brick Villa',category:'Residential Architecture',location:'Port Harcourt, Rivers State',client:'Private Executive Residence',year:'2025',image:'../assets/image-web/south5.jpeg',features:'Monolithic Masonry, Flemish Header Accents, High Compressive Earth Blocks',description:'Clean-lined architectural duplex celebrating earth masonry with large glass apertures and climate-adaptive ventilation.',status:'Published'},
  {id:'p6',title:'The Terrace Brick Compound',category:'Housing Development',location:'Enugu, Enugu State',client:'Residential Development Group',year:'2025',image:'../assets/image-web/south6.jpeg',features:'Uniform Density Interlocking Bricks, Cost-Effective Dry-Stack Joints, Rapid Build Schedule',description:'Gated residential terrace development constructed with precision hydraulic interlocking blocks for lifetime structural durability.',status:'Published'},
  {id:'p7',title:'Victoria Island Contemporary Brick Villa',category:'Contemporary Architecture',location:'Victoria Island, Lagos',client:'High Net-Worth Client',year:'2026',image:'../assets/image-web/south7.jpeg',features:'Premium Face Bricks, Architectural Lintels, Thermal Mass Walls',description:'High-end waterfront property showcasing brick craftsmanship, expansive verandas, and natural earthen aesthetics.',status:'Published'},
  {id:'p8',title:'E-ZAINCO Automated Block & Paver Facility',category:'Industrial Facility',location:'Owerri Industrial Layout, Imo State',client:'E-ZAINCO Industrial Core',year:'2026',image:'../assets/image-web/south8.jpeg',features:'Heavy-Duty Paving Blocks, Industrial Retaining Walls, Hydraulic Compaction',description:'Our primary production plant demonstrating maximum load capacity masonry and automated interlocking paver yard.',status:'Published'},
  {id:'p9',title:'Royal Heritage Courtyard & Pavings',category:'Landscape & Pavers',location:'Port Harcourt, Rivers State',client:'Royal Estate & Event Grounds',year:'2025',image:'../assets/image-web/south9.jpeg',features:'Heavy-Traffic Interlocking Pavers, Permeable Drainage, Weather-Resistant Pigment',description:'Extensive exterior landscape paving with high-density compressed pavers engineered to support heavy vehicle loads without subsidence.',status:'Published'},
  {id:'p10',title:'South Gate Architectural Arch & Piers',category:'Structural Masonry',location:'Umuahia, Abia State',client:'Civic Gate Project',year:'2025',image:'../assets/image-web/south10.jpeg',features:'Engineered Arch Masonry, High-Strength Red Brick, Anti-Efflorescence Mortar',description:'Grand entry portal featuring true structural masonry arches and fluted pilasters celebrating classical brick geometry.',status:'Published'},
  {id:'p11',title:'Modern Flemish Bond Duplex',category:'Residential Masonry',location:'Ikenegbu, Owerri',client:'Private Villa',year:'2026',image:'../assets/image-web/south11.jpeg',features:'Classic Flemish Bond, Integrated Planter Boxes, Natural Earth Tone Palette',description:'Two-story duplex built with alternating stretchers and headers, providing unmatched shear strength and textural depth.',status:'Published'},
  {id:'p12',title:'High-Load Brick Retaining Wall & Drainage',category:'Civil Infrastructure',location:'Awka, Anambra State',client:'State Infrastructure Partner',year:'2025',image:'../assets/image-web/south12.jpeg',features:'15.0 MPa Solid Engineering Bricks, Weep Hole Drainage, Erosion Prevention',description:'Steep slope stabilization using interlocking reinforced solid bricks to permanently safeguard hillside foundations.',status:'Published'},
  {id:'p13',title:'Precision Hydraform Interlocking Estate',category:'Housing Development',location:'Enugu, Enugu State',client:'Affordable Luxury Housing Scheme',year:'2026',image:'../assets/image-web/south13.jpeg',features:'Hydraulic Interlocking Earth Blocks, Zero Mortar Vertical Joints, 30% Cost Efficiency',description:'Eco-friendly housing estate delivering rapid construction speed, optimal thermal insulation, and exceptional earthquake/shear resistance.',status:'Published'}
 ],
 journal:[
  {id:'j1',title:'Why Masonry Architecture Outlasts Painted Render in Tropical Nigeria',slug:'journal.php#masonry-durability',category:'Materials & Finishes',author:'Engr. Chukwudi Zainco',date:'October 2026',readTime:'5 Min Read',image:'../assets/image-web/south1.jpeg',excerpt:'Continuous rainfall and humidity degrade exterior paint within months. Discover how high-density compressed facing bricks provide permanent color and zero wall maintenance.',content:'Compressed stabilized earth and kiln-fired clay bricks form a dense crystalline matrix resistant to moisture absorption and biological growth. Flemish bond pointing channels water away cleanly.',tags:'Masonry, Thermal Comfort, Durability',status:'Published'},
  {id:'j2',title:'Compressive Strength Standards for Solid Earth Masonry (NIS 87)',slug:'journal.php#nis87-standards',category:'Structural Standards',author:'E-ZAINCO Quality Control Lab',date:'September 2026',readTime:'6 Min Read',image:'../assets/image-web/south8.jpeg',excerpt:'How our 12.5 MPa hydraulic compression protocol exceeds standard load-bearing block requirements across residential and commercial developments.',content:'By balancing local red laterite with 7-9% Portland cement and compaction pressures exceeding 150 bar, each E-ZAINCO brick achieves uniform density and superior thermal lag.',tags:'Engineering, Compressive Strength, NIS 87',status:'Published'}
 ],
 services:[
  {id:'s1',title:'Compressed Earth & Facing Brick Supply',category:'Brick Manufacturing',badge:'Factory Direct',image:'../assets/image-web/south1.jpeg',deliverables:'12.0 MPa Solid Bricks, Interlocking Hydraform Blocks, Architectural Facing Bricks, Pallet Delivery',timeline:'2–4 Days Batch Dispatch',description:'Direct factory supply of certified solid and interlocking bricks delivered to project sites nationwide with quality test certificates.',status:'Published'},
  {id:'s2',title:'Master Bricklaying & Flemish Bond Masonry',category:'Site Execution',badge:'Certified Artisans',image:'../assets/image-web/south2.jpeg',deliverables:'Site Supervision, Flemish & English Bond Masonry, Concave Rake Pointing, Lintel Engineering',timeline:'Custom Project Schedule',description:'Professional masonry execution by certified bricklayers ensuring precise course alignment, structural bonds, and immaculate joints.',status:'Published'},
  {id:'s3',title:'Interlocking Paving & Courtyard Construction',category:'Hardscaping & Paving',badge:'Heavy Traffic',image:'../assets/image-web/south9.jpeg',deliverables:'Sub-Base Compaction, Heavy-Duty Pavers, Permeable Sand Beds, Drainage Kerbs',timeline:'1–3 Weeks',description:'Precision engineered exterior driveways, pedestrian walkways, and estate courtyards designed for zero sinking and maximum axle loads.',status:'Published'},
  {id:'s4',title:'Architectural Brick Consultation & BOQ Takeoff',category:'Technical Support',badge:'Free Estimate',image:'../assets/image-web/south4.jpeg',deliverables:'Brick Quantity Estimation, Thermal Mass Calculations, Structural Wall Detailing, Cost Comparison',timeline:'24–48 Hours',description:'Complete quantity surveyor takeoff calculating exact brick counts, mortar requirements, and cost savings vs plaster & paint.',status:'Published'}
 ],
 pages:[
  {id:'pg1',title:'Home',slug:'index.php',heroEyebrow:'E-ZAINCO BRICK NIGERIA',heroTitle:'Building Strength. Creating Legacy.',image:'../assets/image-web/south1.jpeg',description:'Premium compressed earth bricks, architectural facing masonry, and heavy-duty interlocking pavers engineered in Owerri, Imo State.',seoTitle:'E-ZAINCO BRICK | High-Density Solid & Interlocking Bricks',seoDescription:'High-density 12.5 MPa solid earth bricks, facing masonry, and interlocking pavers delivered across Nigeria.',status:'Published'},
  {id:'pg2',title:'Catalog',slug:'catalog.php',heroEyebrow:'Our Work in Pictures',heroTitle:'Built With Strength. Mastered in Masonry.',image:'../assets/image-web/south2.jpeg',description:'Explore completed residences, commercial complexes, and civic masonry landmarks engineered with E-ZAINCO bricks.',seoTitle:'Catalog | E-ZAINCO BRICK Nigeria',seoDescription:'Browse architectural masonry case studies, residential duplexes, and commercial brick facades.',status:'Published'},
  {id:'pg3',title:'Services',slug:'services.php',heroEyebrow:'Capabilities & Supply',heroTitle:'Factory Production & Master Masonry',image:'../assets/image-web/south3.jpeg',description:'From automated high-pressure brick manufacturing to on-site master laying and turn-key compound paving.',seoTitle:'Services & Supply | E-ZAINCO BRICK',seoDescription:'Brick supply, interlocking paver installation, and certified masonry contracting across Nigeria.',status:'Published'},
  {id:'pg4',title:'About Us',slug:'about.php',heroEyebrow:'The E-ZAINCO Standard',heroTitle:'Engineering Permanent Masonry Since Inception',image:'../assets/image-web/south8.jpeg',description:'Our mission, hydraulic plant technology, and certified 12.5 MPa compressive strength standards.',seoTitle:'About Us | E-ZAINCO BRICK Nigeria Ltd.',seoDescription:'Leading hydraulic brick and interlocking paver manufacturer in Owerri, Imo State.',status:'Published'},
  {id:'pg5',title:'Contact & Consultations',slug:'contact.php',heroEyebrow:'Factory Enquiries',heroTitle:'Request a Brick BOQ or Site Consultation',image:'../assets/image-web/south4.jpeg',description:'Reach our technical team for wholesale pricing, sample delivery, and project quantity calculations.',seoTitle:'Contact | E-ZAINCO BRICK Owerri',seoDescription:'Contact E-ZAINCO BRICK at Suite 11, Municipal Plaza, Ikenegbu, Owerri, Imo State.',status:'Published'}
 ],
 consultations:[
  {id:'c1',title:'Engr. Peter Obioma',email:'peter.obioma@example.com',phone:'+234 803 234 5678',category:'Residential Duplex',description:'Requires 22,000 facing bricks for a 5-bedroom duplex in New Owerri. Wants Flemish bond laying consultation.',status:'New',created:'Today'},
  {id:'c2',title:'Arc. Chinonso Eke',email:'eke.architecture@example.com',phone:'+234 806 876 5432',category:'Commercial Facade',description:'BOQ review for exterior brick cladding on a 3-storey office building along Port Harcourt Road.',status:'Scheduled',created:'Yesterday'},
  {id:'c3',title:'Chief Kenneth Nwosu',email:'knwosu@example.com',phone:'+234 701 345 6789',category:'Estate Perimeter Wall',description:'Supply of 45,000 heavy-load interlocking blocks for estate security wall in Enugu.',status:'Contacted',created:'Oct 25'}
 ],
 boq:[
  {id:'b1',title:'A. Okafor Residence',email:'client@example.com',category:'Facing brick takeoff',budget:'₦8.5m',description:'Preliminary estimate for exterior cladding, perimeter walling, and courtyard interlocking pavers.',status:'Reviewing'}
 ],
 team:[
  {id:'t1',title:'Engr. Chukwudi Zainco',category:'Managing Director & Lead Engineer',image:'../assets/image-web/south1.jpeg',specialities:'Hydraulic Compaction, Soil Mechanics, NIS 87 Standards',email:'director@ezaincobrick.com',phone:'+234 815 327 8764',description:'Over 15 years pioneering stabilized earth architecture and precision kiln brick manufacturing in southeastern Nigeria.',status:'Published'},
  {id:'t2',title:'Arc. Ifeanyi Okoli',category:'Head of Architectural Design & Site Supervision',image:'../assets/image-web/south2.jpeg',specialities:'Flemish & English Bonds, Lintel Details, Thermal Insulation',email:'masonry@ezaincobrick.com',phone:'+234 902 239 5340',description:'Specialist in bioclimatic building design and structural masonry facades that withstand high seasonal rainfall.',status:'Published'}
 ],
 testimonials:[
  {id:'te1',title:'Chief I. Nwachukwu',category:'Residential Client, New Owerri',image:'../assets/image-web/south1.jpeg',description:'The house stays naturally cool even during peak 34°C tropical heat. Zero painting or plastering maintenance forever. E-ZAINCO bricks are in a class of their own.',status:'Published'},
  {id:'te2',title:'Engr. Dave Mbachu',category:'Project Contractor, Enugu',image:'../assets/image-web/south6.jpeg',description:'We tested their bricks in the civil engineering lab at UNN: 12.8 MPa average compressive strength. Clean edges, uniform density, and on-time site dispatch.',status:'Published'}
 ],
 faqs:[
  {id:'f1',title:'Do E-ZAINCO bricks require exterior plaster or painting?',category:'Durability',description:'No! Our bricks are formulated and hydraulically compressed to be exposed permanently. They naturally resist water, weathering, and UV degradation, eliminating recurring painting costs for life.',status:'Published'},
  {id:'f2',title:'What is the compressive strength of your solid earth bricks?',category:'Technical Specs',description:'Our standard compressed earth bricks achieve 11.5 to 12.5 MPa, significantly exceeding standard 9-inch sandcrete blocks which typically range between 2.5 and 3.5 MPa.',status:'Published'},
  {id:'f3',title:'Do you deliver bricks outside Imo State?',category:'Logistics',description:'Yes. We coordinate articulated flatbed truck deliveries directly to project sites across Enugu, Abia, Anambra, Rivers, Delta, Lagos, and Abuja with secure strapping.',status:'Published'}
 ],
 materials:[
  {id:'m1',title:'Standard Red Facing Brick (230 x 110 x 75 mm)',category:'Facing Brick',image:'../assets/image-web/south1.jpeg',description:'High-density clay facing brick compressed at 12 MPa with natural terracotta tone and water-repellent finish.',status:'Available'},
  {id:'m2',title:'Hydraform Interlocking Block (220 x 220 x 115 mm)',category:'Interlocking Block',image:'../assets/image-web/south13.jpeg',description:'Precision tongue-and-groove compressed earth block allowing dry-stack masonry with minimal mortar.',status:'Available'},
  {id:'m3',title:'Heavy-Duty Driveway Paver (200 x 100 x 60 mm)',category:'Interlocking Paver',image:'../assets/image-web/south9.jpeg',description:'Solid high-compaction paver designed for heavy vehicle loads, car parks, and compound courtyards.',status:'Available'}
 ],
 whatsapp:[
  {id:'w1',title:'Dr. Obinna E.',phone:'+234 803 445 6677',category:'Brick purchase',description:'Inquired about 18,000 facing bricks for a new hospital annex project in Owerri.',status:'New'}
 ],
 homepage:{
  eyebrow:'E-ZAINCO BRICK NIGERIA',
  title:'Building Strength. Creating Legacy.',
  description:'Engineered solid earth & clay masonry with 12.5 MPa compressive strength. Natural thermal comfort, zero wall painting, and permanent structural elegance.',
  buttonText:'Request BOQ & Pricing',
  buttonLink:'contact.php#quote',
  secondaryButtonText:'Explore Catalog',
  secondaryButtonLink:'catalog.php',
  image:'../assets/image-web/south1.jpeg',
  image2:'../assets/image-web/south2.jpeg',
  image3:'../assets/image-web/south3.jpeg',
  trust1:'140+ Projects Delivered',
  trust2:'12.5 MPa Tested Strength',
  trust3:'Owerri Production Core',
  status:'Published'
 },
 profile:{
   name:'Engr. Chukwudi Zainco',
   role:'Operations Director & Chief Engineer',
   email:'admin@ezaincobrick.com',
   phone:'+234 815 327 8764',
   image:'',
   initials:'CZ',
   location:'Municipal Plaza, Ikenegbu, Owerri',
   bio:'Overseeing hydraulic compression operations, architectural brick manufacturing, and nationwide site logistics for E-ZAINCO BRICK.'
  }
};

let db = loadDb(), currentPage='dashboard', editId=null, editSection=null;

function loadDb(){
 try{
  let serverProjects = null;
  if(window.DB_PRELOADED_PROJECTS && Array.isArray(window.DB_PRELOADED_PROJECTS) && window.DB_PRELOADED_PROJECTS.length > 0){
   serverProjects = window.DB_PRELOADED_PROJECTS.map((p, idx) => ({
    id: 'p' + p.id,
    title: p.title,
    category: p.category || 'Masonry Architecture',
    location: p.location || 'Nigeria',
    client: p.testimonial_author || 'Client Project',
    year: p.timeline || '2026',
    image: resolveImgUrl(p.image, idx),
    features: p.dimensions || (p.compressive_strength ? `${p.compressive_strength} Compressive Strength` : 'Pure Earth Brick'),
    description: p.brief || p.approach || p.scope || 'Architectural masonry project engineered with E-ZAINCO bricks.',
    status: p.status || 'Published'
   }));
  }

  const saved=JSON.parse(localStorage.getItem(KEY));
  if(saved){
   const current = {
    ...structuredClone(seed),
    ...saved,
    homepage:{...seed.homepage,...(saved.homepage||{})},
    profile:{...seed.profile,...(saved.profile||{})}
   };

   let needsMigration = false;
   if(current.profile && current.profile.image && current.profile.image.includes('ezainco-brick-logo.png')){
    current.profile.image = '';
    current.profile.initials = 'CZ';
    needsMigration = true;
   }
   if(Array.isArray(current.projects)){
    const hasAvif = current.projects.some(p => p.image && (p.image.includes('.avif') || !p.image));
    const hasOldTitles = current.projects.some(p => p.title && (p.title.includes('Civic Penthouse') || p.title.includes('Sanctuary Master Retreat')));
    if(hasAvif || hasOldTitles || current.projects.length < 6){
     needsMigration = true;
    }
   } else {
    needsMigration = true;
   }

   if(needsMigration){
    current.projects = serverProjects || structuredClone(seed.projects);
    localStorage.setItem(KEY, JSON.stringify(current));
   }

   if(Array.isArray(current.projects)){
    current.projects.forEach((p, idx) => {
     p.image = resolveImgUrl(p.image, idx);
    });
   }

   return current;
  }

  const initial = structuredClone(seed);
  if(serverProjects){
   initial.projects = serverProjects;
  }
  localStorage.setItem(KEY, JSON.stringify(initial));
  return initial;
 }catch(e){
  return structuredClone(seed);
 }
}

function saveDb(){
 localStorage.setItem(KEY,JSON.stringify(db));
}

function escapeHtml(v=''){
 return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function icon(name){
 return `<i data-lucide="${name}"></i>`;
}

function refreshIcons(){
 if(window.lucide) window.lucide.createIcons();
}

function toast(msg,error=false){
 const el=document.createElement('div');
 el.className='toast'+(error?' error':'');
 el.textContent=msg;
 $('#toasts').append(el);
 setTimeout(()=>el.remove(),3200);
}

function setPage(page){
 currentPage=page;
 $$('.nav-link').forEach(a=>a.classList.toggle('active',a.dataset.page===page));
 $('#crumbTitle').textContent=page==='dashboard'?'Dashboard':(sections[page]?.title||({analytics:'Analytics',homepage:'Homepage & Hero',profile:'Admin profile',settings:'Settings'}[page]||page));
 render();
 $('#sidebar').classList.remove('mobile-open');
 $('#scrim').classList.remove('show');
}

function heading(title,desc,action=''){
 return `<div class="page-heading"><div><p class="eyebrow">E-ZAINCO BRICK / OPERATIONS PORTAL</p><h1>${title}</h1><p>${desc}</p></div><div class="heading-actions">${action}</div></div>`;
}

function button(label,action,primary=true,ic='plus'){
 return `<button class="btn ${primary?'btn-primary':'btn-quiet'}" data-action="${action}">${icon(ic)} ${label}</button>`;
}

function statusBadge(s='Draft'){
 let cl=String(s).toLowerCase().replace(/\s+/g,'-');
 return `<span class="status ${escapeHtml(cl)}">${escapeHtml(s)}</span>`;
}

function renderImageField(name, label, val='', required=false, hint='Paste an image link or browse to upload an image from your computer.'){
 const safeVal = escapeHtml(val);
 const previewImg = val ? `<img src="${safeVal}" alt="Preview" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">` : '';
 const fallbackIcon = `<span class="img-preview-empty" style="${val?'display:none':''}">${icon('image')}</span>`;
 return `<div class="form-field full">
  <label>${label}${required?' *':''}</label>
  <div class="img-field-group" data-img-group>
   <div class="img-preview-box" data-preview-box>
    ${previewImg}
    ${fallbackIcon}
   </div>
   <div class="img-inputs">
    <div class="img-input-row">
     <input name="${name}" type="text" class="img-url-input" value="${safeVal}" placeholder="Image URL (e.g. ../assets/image-web/... or https://...)" ${required?'required':''}>
     <label class="btn btn-quiet btn-upload" title="Choose image file from computer">
      ${icon('upload')} <span>Browse</span>
      <input type="file" accept="image/*" class="img-file-hidden">
     </label>
    </div>
    ${hint ? `<small class="hint">${hint}</small>` : ''}
   </div>
  </div>
 </div>`;
}

function render(){
 const target=$('#pageContent');
 if(currentPage==='dashboard') target.innerHTML=dashboard();
 else if(currentPage==='analytics') target.innerHTML=analytics();
 else if(currentPage==='homepage') target.innerHTML=homepage();
 else if(currentPage==='profile') target.innerHTML=profile();
 else if(currentPage==='settings') target.innerHTML=settings();
 else if(sections[currentPage]) target.innerHTML=sectionPage(currentPage);
 else target.innerHTML=dashboard();
 refreshIcons();
 updateCounts();
}

function dashboard(){
 const projects=db.projects||[], articles=db.journal||[], leads=db.consultations||[], published=projects.filter(x=>x.status==='Published').length;
 const stats=[['Masonry Projects',projects.length,'panels-top-left','Catalog records'],['Live Showcase Projects',published,'eye','Visible on website'],['Technical Journal',articles.length,'notebook-pen','Engineering insights'],['Consultation Requests',leads.length,'calendar-check','BOQ & supply leads']];
 return `${heading('Good afternoon, Operations Team 👋','Real-time production, site delivery, and masonry project tracking across Nigeria.',button('Add new project','new-project',true,'plus'))}
 <div class="welcome-banner">
   <div class="welcome-banner-inner">
    <div class="welcome-banner-left">
     <div class="welcome-logo-badge">
      <img src="../assets/logo/ezainco-brick-logo.png" alt="E-ZAINCO BRICK Logo">
     </div>
     <div class="welcome-copy">
      <p class="welcome-eyebrow">E-ZAINCO BRICK • OPERATIONS PORTAL</p>
      <h2 class="welcome-title">Engineered Density. Built for Legacy.</h2>
      <p class="welcome-desc">Real-time brick production, kiln schedules, automated BOQ requests, and nationwide architectural masonry tracking.</p>
     </div>
    </div>
    <div class="welcome-banner-right">
     <button class="btn welcome-btn" data-action="go-projects">${icon('arrow-up-right')} Manage Projects</button>
    </div>
   </div>
  </div>
 <div class="stats-grid">${stats.map((s,i)=>`<article class="stat-card"><div class="stat-head"><span>${s[0]}</span><span class="stat-icon ${i===2?'gold':''}">${icon(s[2])}</span></div><div class="stat-value">${s[1]}</div><div class="stat-foot"><strong>${i===0?'Projects':i===1?'Published':i===2?'Technical':'Client Intake'}</strong> · ${s[3]}</div></article>`).join('')}</div>
 <div class="content-grid"><section class="panel"><div class="panel-head"><div><h2>Operations &amp; Content Activity</h2><p>Active records across the E-ZAINCO platform</p></div><button class="text-link" data-page-link="analytics">View analytics ↗</button></div><div class="chart">${[['Projects',projects.length],['Journal',articles.length],['Services',(db.services||[]).length],['Pages',(db.pages||[]).length],['Team',(db.team||[]).length],['FAQs',(db.faqs||[]).length],['Reviews',(db.testimonials||[]).length]].map((x,i)=>`<div class="chart-col"><div class="chart-bars"><div class="bar ${i%2===0?'primary':''}" style="height:${Math.max(8,Math.min(100,x[1]*14))}%"></div></div><small>${x[0]}</small></div>`).join('')}</div><div class="chart-legend"><span><i class="legend-dot"></i>Active records</span><span><i class="legend-dot pale"></i>Inventory volume</span></div></section>
 <section class="panel"><div class="panel-head"><div><h2>Recent Factory &amp; Site Updates</h2><p>Latest operational records</p></div><span class="status published">System Online</span></div><div class="activity-list">${[{ic:'panels-top-left',title:'Masonry Catalog Synced',sub:`${projects.length} architectural projects with photo records`},{ic:'notebook-pen',title:'Technical Journal Ready',sub:`${articles.length} engineering articles active`},{ic:'calendar-check',title:'Client Consultation Queue',sub:`${leads.filter(x=>x.status==='New').length} pending client inquiry`},{ic:'shield-check',title:'Quality Control Verified',sub:'12.5 MPa tested compressive strength'}].map(x=>`<div class="activity"><span class="activity-icon">${icon(x.ic)}</span><div class="activity-copy"><b>${x.title}</b><small>${x.sub}</small></div></div>`).join('')}</div></section></div>
 <section class="panel"><div class="panel-head"><div><h2>Quick Operations</h2><p>Direct shortcuts for plant &amp; site tasks</p></div></div><div class="quick-grid">${[['projects','Add Masonry Project','New architectural case study','plus'],['journal','Publish Technical Article','Share engineering advice','notebook-pen'],['consultations','Review Quote Requests','Respond to builders & clients','calendar-check'],['homepage','Update Homepage Hero','Refresh first impression','panorama']].map(x=>`<button class="quick-action" data-action="quick-${x[0]}"><span class="stat-icon">${icon(x[3])}</span><span><b>${x[1]}</b><small>${x[2]}</small></span></button>`).join('')}</div></section>
 <div class="notice"><b>Operations Note:</b> Connected to E-ZAINCO BRICK database and local browser cache. Changes made here persist for production catalog showcases and client intake.</div>`;
}

function sectionPage(key){
 const s=sections[key],rows=db[key]||[];
 const isProjects = key === 'projects';
 return `${heading(s.title,s.desc,button('Add '+s.singular,'add-'+key,true,'plus'))}
 <section class="panel">
  <div class="table-tools">
   <label class="search-box">${icon('search')}<input id="tableSearch" placeholder="Search ${s.title.toLowerCase()}..." aria-label="Search records"></label>
   <select class="field-select" id="statusFilter"><option value="">All statuses</option>${[...new Set(rows.map(r=>r.status).filter(Boolean))].map(v=>`<option>${escapeHtml(v)}</option>`).join('')}</select>
   ${isProjects ? `<div class="view-mode-toggle" id="projectsViewToggle">
     <button type="button" class="view-mode-btn ${projectsViewMode==='table'?'active':''}" data-view-mode="table" title="Table list view">${icon('list')} Table</button>
     <button type="button" class="view-mode-btn ${projectsViewMode==='grid'?'active':''}" data-view-mode="grid" title="Visual gallery card view">${icon('layout-grid')} Visual Gallery</button>
   </div>` : ''}
   <span class="status">${rows.length} record${rows.length===1?'':'s'}</span>
  </div>
  <div id="tableMount">${isProjects && projectsViewMode==='grid' ? makeProjectCards(rows) : makeTable(key,rows)}</div>
  <div class="pagination">
   <span>Showing <b id="shownCount">${rows.length}</b> of ${rows.length} records</span>
   <span>E-ZAINCO BRICK Operations Storage</span>
  </div>
 </section>
 ${key==='consultations'||key==='whatsapp'?'<div class="notice">Connected to E-ZAINCO client intake. Process enquiries, record site visit dates, and update quote progress.</div>':''}`;
}

function makeTable(key,rows){
 const s=sections[key];
 if(!rows.length) return `<div class="empty">${icon('folder-open')}<b>No records yet</b><p>Add your first ${s.singular} to get started.</p></div>`;
 
 if(key==='projects'){
   return `<div class="table-wrap"><table class="projects-table"><thead><tr>
    <th>Project &amp; Location</th>
    <th>Category &amp; Catalog Specifications</th>
    <th>Status</th>
    <th>Updated</th>
    <th style="text-align:right">Actions</th>
   </tr></thead><tbody>${rows.map((r,idx)=>{
    const imgUrl = resolveImgUrl(r.image, idx);
    return `<tr data-record-row data-search="${escapeHtml([r.title,r.category,r.description,r.status,r.location,r.client,r.features,r.year].join(' ').toLowerCase())}" data-status="${escapeHtml(r.status||'')}">
     <td>
      <div class="project-item-cell">
       <div class="project-thumb-compact" data-lightbox-src="${escapeHtml(imgUrl)}" data-lightbox-title="${escapeHtml(r.title||'Project Photo')}" data-lightbox-sub="${escapeHtml(r.location||r.category||'')}" title="Click to view full photo">
        <img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(r.title||'Project')}" loading="lazy" onerror="this.onerror=null;this.src='../assets/image-web/south1.jpeg'">
       </div>
       <div class="project-item-info">
        <b>${escapeHtml(r.title||'Untitled Project')}</b>
        <small>${escapeHtml(r.location||'Nigeria')}${r.client ? ' · ' + escapeHtml(r.client) : ''}${r.year ? ' (' + escapeHtml(r.year) + ')' : ''}</small>
       </div>
      </div>
     </td>
     <td>
      <div class="project-spec-cell">
       <b>${escapeHtml(r.category||'Masonry Architecture')}</b>
       <small title="${escapeHtml(r.features||r.description||'')}">${escapeHtml(r.features||r.description||'Pure Earth & Clay Masonry')}</small>
      </div>
     </td>
     <td>${statusBadge(r.status||'Draft')}</td>
     <td>${escapeHtml(r.updated||r.created||'Active')}</td>
     <td>
      <div class="row-actions">
       <button class="icon-btn" title="Edit" aria-label="Edit" data-action="edit-${key}" data-id="${r.id}">${icon('pencil')}</button>
       <button class="icon-btn" title="Change status" aria-label="Change status" data-action="status-${key}" data-id="${r.id}">${icon('refresh-cw')}</button>
       <button class="icon-btn" title="Delete" aria-label="Delete" data-action="delete-${key}" data-id="${r.id}">${icon('trash-2')}</button>
      </div>
     </td>
    </tr>`;
   }).join('')}</tbody></table></div>`;
  }

 return `<div class="table-wrap"><table><thead><tr><th>Record</th><th>${key==='consultations'||key==='whatsapp'?'Contact / details':'Category / details'}</th><th>Status</th><th>Updated</th><th style="text-align:right">Actions</th></tr></thead><tbody>${rows.map((r,idx)=>`<tr data-record-row data-search="${escapeHtml([r.title,r.category,r.description,r.email,r.status,r.location,r.client,r.slug,r.author].join(' ').toLowerCase())}" data-status="${escapeHtml(r.status||'')}"><td><div class="item-cell">${r.image?`<img class="item-thumb" src="${escapeHtml(resolveImgUrl(r.image, idx))}" alt="" onerror="this.onerror=null;this.src='../assets/image-web/south1.jpeg'">`:`<div class="item-thumb" style="display:grid;place-items:center;color:var(--accent)">${icon(s.icon)}</div>`}<div><b>${escapeHtml(r.title||'Untitled')}</b><small>${escapeHtml(r.slug||r.location||r.client||r.author||r.created||'No extra details')}</small></div></div></td><td><b>${escapeHtml(r.category||r.email||r.phone||'—')}</b><small style="display:block;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--soft)">${escapeHtml(r.description||r.excerpt||r.deliverables||r.specialities||r.budget||'—')}</small></td><td>${statusBadge(r.status||'Draft')}</td><td>${escapeHtml(r.updated||r.created||'Active')}</td><td><div class="row-actions"><button class="icon-btn" title="Edit" aria-label="Edit" data-action="edit-${key}" data-id="${r.id}">${icon('pencil')}</button><button class="icon-btn" title="Change status" aria-label="Change status" data-action="status-${key}" data-id="${r.id}">${icon('refresh-cw')}</button><button class="icon-btn" title="Delete" aria-label="Delete" data-action="delete-${key}" data-id="${r.id}">${icon('trash-2')}</button></div></td></tr>`).join('')}</tbody></table></div>`;
}

function makeProjectCards(rows){
 if(!rows.length) return `<div class="empty">${icon('folder-open')}<b>No project records yet</b><p>Add your first architectural masonry project.</p></div>`;
 return `<div class="projects-gallery-grid">${rows.map((r, idx)=>{
  const imgUrl = resolveImgUrl(r.image, idx);
  return `<article class="project-card" data-record-row data-search="${escapeHtml([r.title,r.category,r.description,r.status,r.location,r.client,r.features,r.year].join(' ').toLowerCase())}" data-status="${escapeHtml(r.status||'')}">
   <div class="project-card-media" data-lightbox-src="${escapeHtml(imgUrl)}" data-lightbox-title="${escapeHtml(r.title||'Project Photo')}" data-lightbox-sub="${escapeHtml(r.location||r.category||'')}" title="Click to view full photo">
    <img src="${escapeHtml(imgUrl)}" alt="${escapeHtml(r.title||'Project')}" loading="lazy" onerror="this.onerror=null;this.src='../assets/image-web/south1.jpeg'">
    <span class="project-card-badge">${escapeHtml(r.category||'Masonry Architecture')}</span>
    <span class="project-card-status">${statusBadge(r.status||'Draft')}</span>
   </div>
   <div class="project-card-body">
    <h3 class="project-card-title">${escapeHtml(r.title||'Untitled Project')}</h3>
    <div class="project-card-meta">
     <span>${icon('map-pin')} ${escapeHtml(r.location||'Nigeria')}</span>
     ${r.year ? `<span>${icon('calendar')} ${escapeHtml(r.year)}</span>` : ''}
     ${r.client ? `<span>${icon('user')} ${escapeHtml(r.client)}</span>` : ''}
    </div>
    <p class="project-card-desc">${escapeHtml(r.description||r.features||'Pure earth and clay masonry engineered by E-ZAINCO BRICK.')}</p>
    <div class="project-card-foot">
     <span style="font-weight:700;color:var(--accent)">${escapeHtml(r.features ? r.features.split(',')[0] : 'Solid Earth Brick')}</span>
     <div class="row-actions">
      <button class="icon-btn" title="View Full Image" aria-label="View Full Image" data-action="view-img" data-img="${escapeHtml(imgUrl)}" data-title="${escapeHtml(r.title||'Project Photo')}">${icon('image')}</button>
      <button class="icon-btn" title="Edit" aria-label="Edit" data-action="edit-projects" data-id="${r.id}">${icon('pencil')}</button>
      <button class="icon-btn" title="Change status" aria-label="Change status" data-action="status-projects" data-id="${r.id}">${icon('refresh-cw')}</button>
      <button class="icon-btn" title="Delete" aria-label="Delete" data-action="delete-projects" data-id="${r.id}">${icon('trash-2')}</button>
     </div>
    </div>
   </div>
  </article>`;
 }).join('')}</div>`;
}

let analyticsRange=30;
function analytics(){
 const rangeLabels={7:'Last 7 Days',14:'Last 14 Days',30:'Last 30 Days',90:'Last 90 Days',0:'All Time'};
 const days=analyticsRange===0?30:Math.min(30,Math.max(7,analyticsRange));
 const fmt=n=>Number(n).toLocaleString('en-NG');
 const pages=[{label:'Home',slug:'index.php',views:184,uniques:132,last:'4 min ago'},{label:'Catalog',slug:'catalog.php',views:147,uniques:103,last:'18 min ago'},{label:'Services',slug:'services.php',views:119,uniques:88,last:'32 min ago'},{label:'Contact',slug:'contact.php',views:86,uniques:61,last:'1 hour ago'},{label:'Journal',slug:'journal.php',views:64,uniques:48,last:'2 hours ago'},{label:'About',slug:'about.php',views:51,uniques:39,last:'3 hours ago'}];
 const factor=analyticsRange===7?.34:analyticsRange===14?.58:analyticsRange===90?2.45:analyticsRange===0?5.8:1;
 const total=Math.round(651*factor),uniques=Math.round(471*factor),today=analyticsRange===0?23:Math.round(23*(analyticsRange===7?1.12:analyticsRange===14?.93:analyticsRange===90?1.08:1));
 const trend=Array.from({length:days},(_,i)=>{let d=new Date();d.setDate(d.getDate()-(days-1-i));let views=Math.round((9+(i*7)%18+Math.abs(Math.sin(i*1.31))*24)*(analyticsRange===90?1.5:analyticsRange===7?1.15:1));return {label:d.toLocaleDateString('en',{day:'2-digit',month:'short'}),views,uniques:Math.round(views*.69),today:i===days-1}});
 const max=Math.max(...trend.map(x=>x.views),1),maxPage=Math.max(...pages.map(x=>x.views),1);
 const hourly=Array.from({length:24},(_,h)=>({hour:h,views:Math.round(4+Math.abs(Math.sin((h-7)*.42))*28+(h>=10&&h<=16?12:0))}));const maxHour=Math.max(...hourly.map(x=>x.views),1);
 return `${heading('Traffic & Engagement Analytics','Daily traffic trend, page popularity and visitor engagement across the BRISTS website.',button('Export backup','export',false,'download'))}
 <div class="analytics-range" role="group" aria-label="Analytics timeframe">${Object.entries(rangeLabels).map(([k,v])=>`<button class="range-pill ${analyticsRange===Number(k)?'active':''}" data-range="${k}">${v}</button>`).join('')}</div>
 <div class="analytics-stats">
 <article class="analytics-stat"><div class="analytics-stat-icon terra">${icon('chart-no-axes-combined')}</div><div class="analytics-stat-value">${fmt(total)}</div><div class="analytics-stat-label">Total Page Views <span>· ${rangeLabels[analyticsRange]}</span></div></article>
 <article class="analytics-stat"><div class="analytics-stat-icon navy">${icon('users')}</div><div class="analytics-stat-value">${fmt(uniques)}</div><div class="analytics-stat-label">Est. Unique Visitors <span>· Sample sessions</span></div></article>
 <article class="analytics-stat"><div class="analytics-stat-icon amber">${icon('trending-up')}</div><div class="analytics-stat-value">${fmt(today)}</div><div class="analytics-stat-label">Views Today <span class="growth">+8.4% vs yesterday</span></div></article>
 <article class="analytics-stat"><div class="analytics-stat-icon blue">${icon('globe')}</div><div class="analytics-stat-value">${(total/Math.max(1,days)).toFixed(1)}</div><div class="analytics-stat-label">Daily Avg Views <span>· ${rangeLabels[analyticsRange]}</span></div></article>
 <article class="analytics-stat"><div class="analytics-stat-icon green">${icon('star')}</div><div class="analytics-stat-value page-value">Home</div><div class="analytics-stat-label">Top Visited <span>· ${fmt(Math.round(184*factor))} views</span></div></article></div>
 <section class="panel analytics-panel"><div class="panel-head"><div><h2>Daily Traffic Trend (Last ${days} Days)</h2><p>Daily aggregate page views and estimated unique visitor sessions</p></div><div class="analytics-legend"><span><i class="terra-dot"></i>Total Views</span><span><i class="amber-dot"></i>Unique Visitors</span></div></div>
 <div class="traffic-chart-scroll"><div class="traffic-chart" style="--trend-count:${days}">${trend.map(t=>`<div class="traffic-day" title="${t.label}: ${t.views} views, ${t.uniques} unique visitors"><b>${t.views}</b><div class="traffic-bars"><i class="views-bar" style="height:${Math.max(4,t.views/max*100)}%"></i><i class="unique-bar" style="height:${Math.max(4,t.uniques/max*100)}%"></i></div><small class="${t.today?'today':''}">${t.label}</small></div>`).join('')}</div></div></section>
 <div class="analytics-lower"><section class="panel analytics-panel page-performance"><div class="panel-head"><div><h2>Page-by-Page Performance</h2><p>Ranked by total views in the selected timeframe (${rangeLabels[analyticsRange]})</p></div></div><div class="table-wrap"><table><thead><tr><th>Page Name &amp; Slug</th><th class="right">Views</th><th class="right">Uniques</th><th>Share of Traffic</th><th class="right">Last Visited</th></tr></thead><tbody>${pages.map(p=>{let views=Math.round(p.views*factor),pct=Math.round(p.views/pages.reduce((a,x)=>a+x.views,0)*100);return `<tr><td><b class="analytics-page-name">${p.label}</b><small class="analytics-slug">/${p.slug}</small></td><td class="right strong-cell">${fmt(views)}</td><td class="right muted-cell">${fmt(Math.round(p.uniques*factor))}</td><td><div class="share-cell"><div class="share-track"><i style="width:${pct}%"></i></div><b>${pct}%</b></div></td><td class="right muted-cell nowrap">${p.last}</td></tr>`}).join('')}</tbody></table></div></section>
 <div class="analytics-side"><section class="panel analytics-panel"><div class="panel-head"><div><h2>Hourly Distribution</h2><p>Peak visitor hours · 24-hour clock</p></div></div><div class="hourly-chart">${hourly.map(h=>`<i title="${String(h.hour).padStart(2,'0')}:00 · ${h.views} sample views" style="height:${Math.max(5,h.views/maxHour*100)}%;background:${h.views/maxHour>.7?'var(--analytics-terra)':h.views/maxHour>.35?'var(--analytics-amber)':'var(--analytics-low)'}"></i>`).join('')}</div><div class="hourly-labels"><span>00:00 (12 AM)</span><span>12:00 (12 PM)</span><span>23:00 (11 PM)</span></div></section>
 <section class="analytics-privacy"><div class="privacy-icon">${icon('shield-check')}</div><div><h3>Analytics methodology</h3><p>This preview uses illustrative traffic data to demonstrate the reference layout. Connect a first-party analytics source to display real visitor counts, page views and timestamps.</p></div></section></div></div>
 <div class="notice">These traffic figures are illustrative demo data, not verified visits. The content management records remain stored locally in this browser; connect a backend or analytics provider for live website telemetry.</div>`;
}

function homepage(){
 const h=db.homepage||{};
 return `${heading('Homepage & Hero','Edit the hero slides, value propositions and primary call-to-actions visitors see when they arrive.',button('Save homepage','save-homepage',true,'check'))}
 <section class="panel">
  <div class="panel-head"><div><h2>Hero &amp; Above-the-Fold Messaging</h2><p>Control the hero copy, background images and buttons shown on the BRISTS homepage.</p></div>${statusBadge(h.status||'Published')}</div>
  <form id="homepageForm" class="form-grid" style="padding:0">
   <div class="form-field full"><label for="heroEyebrow">Eyebrow / Brand Kicker</label><input id="heroEyebrow" name="eyebrow" value="${escapeHtml(h.eyebrow||'')}"></div>
   <div class="form-field full"><label for="heroTitle">Main Headline *</label><textarea id="heroTitle" name="title" required>${escapeHtml(h.title||'')}</textarea></div>
   <div class="form-field full"><label for="heroDesc">Supporting Narrative *</label><textarea id="heroDesc" name="description" required>${escapeHtml(h.description||'')}</textarea></div>
   
   <div class="form-field"><label for="heroButton">Primary Button Label</label><input id="heroButton" name="buttonText" value="${escapeHtml(h.buttonText||'')}"></div>
   <div class="form-field"><label for="heroButtonLink">Primary Button Link</label><input id="heroButtonLink" name="buttonLink" value="${escapeHtml(h.buttonLink||'contact.php#booking')}"></div>
   <div class="form-field"><label for="heroSecButton">Secondary Button Label</label><input id="heroSecButton" name="secondaryButtonText" value="${escapeHtml(h.secondaryButtonText||'')}"></div>
   <div class="form-field"><label for="heroSecLink">Secondary Button Link</label><input id="heroSecLink" name="secondaryButtonLink" value="${escapeHtml(h.secondaryButtonLink||'catalog.php')}"></div>

   ${renderImageField('image', 'Hero Slide 1 Backdrop Image *', h.image, true, 'Primary backdrop image shown on first load.')}
   ${renderImageField('image2', 'Hero Slide 2 Backdrop Image', h.image2, false, 'Second rotating cross-fade slide.')}
   ${renderImageField('image3', 'Hero Slide 3 Backdrop Image', h.image3, false, 'Third rotating cross-fade slide.')}

   <div class="form-field"><label for="heroTrust1">Trust Highlight 1</label><input id="heroTrust1" name="trust1" value="${escapeHtml(h.trust1||'140+ Spaces Delivered')}"></div>
   <div class="form-field"><label for="heroTrust2">Trust Highlight 2</label><input id="heroTrust2" name="trust2" value="${escapeHtml(h.trust2||'100% On-Time Handover')}"></div>
   <div class="form-field"><label for="heroTrust3">Trust Highlight 3</label><input id="heroTrust3" name="trust3" value="${escapeHtml(h.trust3||'Owerri & Lagos Ateliers')}"></div>
   <div class="form-field"><label for="heroStatus">Hero Status</label><select id="heroStatus" name="status"><option ${h.status==='Published'?'selected':''}>Published</option><option ${h.status==='Draft'?'selected':''}>Draft</option></select></div>
   
   <div class="form-field full"><button class="btn btn-primary" type="submit">${icon('check')} Save homepage hero</button></div>
  </form>
 </section>
 <div class="notice">Saving here updates your local dashboard configuration. Connect these fields to your public site's content API to dynamically publish to live visitors.</div>`;
}

function profile(){
 const p=db.profile||{};
 const name=p.name||'Arc. Chinedu Brist';
 const initials=p.initials||'CB';
 const role=p.role||'Principal Architect & Studio Director';
 return `${heading('Admin Profile & Atelier Identity','Manage your studio identity, contact details and avatar photo.',`<div style="display:flex;gap:8px;"><button class="btn btn-quiet" data-action="logout">${icon('log-out')} Sign out</button>${button('Save profile','save-profile',true,'check')}</div>`)}
 <section class="panel">
  <div class="profile-card">
   <div class="avatar">${p.image?`<img src="${escapeHtml(p.image)}" alt="${escapeHtml(name)}">`:escapeHtml(initials)}</div>
   <div><h3>${escapeHtml(name)}</h3><p>${escapeHtml(role)} · BRISTS Atelier</p></div>
  </div>
  <form id="profileForm" class="form-grid" style="padding:0">
   <div class="form-field"><label>Full Name *</label><input name="name" required value="${escapeHtml(name)}"></div>
   <div class="form-field"><label>Email Address *</label><input name="email" type="email" required value="${escapeHtml(p.email||'')}"></div>
   <div class="form-field"><label>Designation / Role</label><input name="role" value="${escapeHtml(role)}"></div>
   <div class="form-field"><label>Direct Phone / WhatsApp</label><input name="phone" value="${escapeHtml(p.phone||'')}"></div>
   <div class="form-field"><label>Avatar Initials Fallback</label><input name="initials" maxlength="3" value="${escapeHtml(initials)}"></div>
   <div class="form-field"><label>Studio Base Location</label><input name="location" value="${escapeHtml(p.location||'Ikenegbu Atelier, Owerri')}"></div>

   ${renderImageField('image', 'Profile Avatar / Portrait Photo', p.image, false, 'Upload or paste an avatar image URL to personalize your admin account.')}

   <div class="form-field full"><label>Professional Bio / Atelier Vision</label><textarea name="bio">${escapeHtml(p.bio||'')}</textarea></div>
   <div class="form-field full"><button class="btn btn-primary" type="submit">${icon('check')} Save admin profile</button></div>
  </form>
 </section>
 <div class="notice">This profile is stored locally in this browser. To authenticate multiple staff members, integrate with a secure backend identity provider.</div>`;
}

function settings(){
 return `${heading('Workspace settings','Manage local preferences and back up your content records.',button('Export JSON backup','export',false,'download'))}
 <section class="panel"><div class="panel-head"><div><h2>Appearance</h2><p>Dashboard presentation preferences</p></div></div>
 <div class="setting-row"><div><b>Dark appearance</b><small>Use the botanical obsidian theme for this dashboard.</small></div><input class="switch" type="checkbox" id="darkSwitch" ${document.documentElement.dataset.theme==='dark'?'checked':''}></div>
 <div class="setting-row"><div><b>Compact navigation</b><small>Collapse the sidebar to give content more room on desktop.</small></div><input class="switch" type="checkbox" id="compactSwitch" ${$('#sidebar').classList.contains('collapsed')?'checked':''}></div></section>
 <section class="panel"><div class="panel-head"><div><h2>Data management</h2><p>Export a backup or restore the sample content.</p></div></div>
 <div class="setting-row"><div><b>Export all content</b><small>Download your local records as a JSON file.</small></div><button class="btn" data-action="export">${icon('download')} Export backup</button></div>
 <div class="setting-row"><div><b>Restore starter content</b><small>Replace local changes with the original demonstration records.</small></div><button class="btn btn-danger" data-action="reset">${icon('rotate-ccw')} Reset demo data</button></div></section>
 <div class="notice"><b>Security:</b> This template has no authentication or server-side validation. Before deployment, add a secure backend, role-based access, CSRF protection, upload validation, audit logs and database backups.</div>`;
}

function updateCounts(){
 $('#count-projects').textContent=(db.projects||[]).length;
 $('#count-consultations').textContent=(db.consultations||[]).length;
 const p=db.profile||{};
 const name=p.name||'Arc. Chinedu Brist';
 const initials=p.initials||'CB';
 if($('#sideAdminName')) $('#sideAdminName').textContent=name;
 if($('#topAdminName')) $('#topAdminName').textContent=name;
 const avatarContent = p.image ? `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(name)}">` : escapeHtml(initials);
 const sideAv = $('.sidebar-bottom .avatar');
 if(sideAv) sideAv.innerHTML = avatarContent;
 const topAv = $('.top-user .avatar');
 if(topAv) topAv.innerHTML = avatarContent;
}

function openModal(key,id=null){
 const s=sections[key];
 if(!s) return;
 editSection=key;
 editId=id;
 const record=id?(db[key]||[]).find(x=>x.id===id)||{}:{};
 $('#modalTitle').textContent=(id?'Edit ':'Add ')+s.singular;
 
 $('#formFields').innerHTML=s.fields.map(f=>{
  const [name,label,type,required,options]=f;
  let val=record[name]||'';
  
  if(type==='image'){
   return renderImageField(name, label, val, required, 'Paste image link or choose image file from device.');
  } else if(type==='textarea'){
   return `<div class="form-field full"><label>${label}${required?' *':''}</label><textarea name="${name}" ${required?'required':''}>${escapeHtml(val)}</textarea></div>`;
  } else if(type==='select'){
   return `<div class="form-field"><label>${label}${required?' *':''}</label><select name="${name}" ${required?'required':''}>${(options||[]).map(o=>`<option ${o===val?'selected':''}>${escapeHtml(o)}</option>`).join('')}</select></div>`;
  } else {
   const isFull = (name==='title'||name==='slug'||name==='features'||name==='deliverables'||name==='specialities'||name==='gallery');
   return `<div class="form-field ${isFull?'full':''}"><label>${label}${required?' *':''}</label><input name="${name}" type="${type}" value="${escapeHtml(val)}" ${required?'required':''} ${type==='url'?'placeholder="https://..."':''}></div>`;
  }
 }).join('');

 $('#modalBackdrop').classList.add('open');
 document.body.style.overflow='hidden';
 refreshIcons();
 const first=$('input,textarea,select',$('#formFields'));
 if(first) first.focus();
}

function closeModal(){
 $('#modalBackdrop').classList.remove('open');
 document.body.style.overflow='';
 editId=null;
 editSection=null;
}

function saveItem(e){
 e.preventDefault();
 if(!editSection) return;
 const key=editSection,form=new FormData(e.currentTarget),item={};
 for(const [k,v] of form.entries()){
  // only process named fields, ignore empty file inputs without name
  if(k) item[k]=String(v).trim();
 }
 const rows=db[key]||[];
 if(editId){
  const i=rows.findIndex(x=>x.id===editId);
  if(i>=0) rows[i]={...rows[i],...item,updated:'Just now'};
  toast('Changes saved.');
 }else{
  item.id=key.slice(0,2)+'_'+Date.now().toString(36);
  item.updated='Just now';
  rows.unshift(item);
  toast('New record added.');
 }
 db[key]=rows;
 saveDb();
 closeModal();
 render();
}

function filterTable(){
 const q=($('#tableSearch')?.value||'').toLowerCase(),st=$('#statusFilter')?.value||'';
 let shown=0;
 $$('[data-record-row]').forEach(r=>{
  const ok=(!q||r.dataset.search.includes(q))&&(!st||r.dataset.status===st);
  r.hidden=!ok;
  if(ok) shown++;
 });
 if($('#shownCount')) $('#shownCount').textContent=shown;
}

function exportData(){
 const blob=new Blob([JSON.stringify({exportedAt:new Date().toISOString(),data:db},null,2)],{type:'application/json'});
 const url=URL.createObjectURL(blob);
 const a=document.createElement('a');
 a.href=url;
 a.download='brists-content-backup.json';
 a.click();
 URL.revokeObjectURL(url);
 toast('Backup exported.');
}

function handleAction(action,id){
 if(action==='logout'){
  if(confirm('Are you sure you want to sign out of the Atelier?')){
   sessionStorage.removeItem('brists_admin_auth');
   localStorage.removeItem('brists_admin_auth');
   toast('Signed out successfully.');
   setTimeout(()=>{ window.location.href='login.php'; }, 400);
  }
  return;
 }
 if(action==='go-projects'){window.location.href='projects.php';return}
 if(action==='new-project'){openModal('projects');return}
 if(action.startsWith('quick-')){
  const k=action.slice(6);
  if(sections[k]||['homepage','analytics','journal','projects','consultations'].includes(k)){
   window.location.href=k+'.php';
  }
  return;
 }
 if(action.startsWith('add-')){openModal(action.slice(4));return}
 if(action.startsWith('edit-')){openModal(action.slice(5),id);return}
 if(action.startsWith('delete-')){
  const k=action.slice(7),r=(db[k]||[]).find(x=>x.id===id);
  if(!r) return;
  if(confirm(`Delete "${r.title||'this record'}"? This cannot be undone.`)){
   db[k]=db[k].filter(x=>x.id!==id);
   saveDb();
   render();
   toast('Record deleted.');
  }
  return;
 }
 if(action.startsWith('status-')){
  const k=action.slice(7),r=(db[k]||[]).find(x=>x.id===id);
  if(!r) return;
  const options=(sections[k].fields.find(f=>f[0]==='status')||[])[4]||['Published','Draft'];
  let i=options.indexOf(r.status);
  r.status=options[(i+1)%options.length];
  r.updated='Just now';
  saveDb();
  render();
  toast('Status changed to '+r.status+'.');
  return;
 }
 if(action==='export'){exportData();return}
 if(action==='reset'){
  if(confirm('Reset all demo content in this browser? Your current local changes will be lost.')){
   db=structuredClone(seed);
   saveDb();
   render();
   toast('Starter content restored.');
  }
  return;
 }
 if(action==='save-homepage'){
  const f=$('#homepageForm');
  if(f){
   const d=Object.fromEntries(new FormData(f));
   db.homepage={...(db.homepage||{}),...d};
   saveDb();
   render();
   toast('Homepage hero configuration saved locally.');
  }
  return;
 }
 if(action==='save-profile'){
  const f=$('#profileForm');
  if(f){
   const d=Object.fromEntries(new FormData(f));
   db.profile={...(db.profile||{}),...d};
   saveDb();
   render();
   updateCounts();
   toast('Admin profile updated.');
  }
  return;
 }
 if(action==='help'){
  toast('See README.md for setup and production integration steps.');
  return;
 }
}

// Global Image Input & File Upload Listener
document.addEventListener('input', e=>{
 if(e.target.id==='tableSearch') filterTable();
 
 if(e.target.classList.contains('img-url-input')){
  const group = e.target.closest('[data-img-group]');
  if(group){
   const box = group.querySelector('[data-preview-box]');
   const val = e.target.value.trim();
   if(box){
    if(val){
     box.innerHTML = `<img src="${escapeHtml(val)}" alt="Preview" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><span class="img-preview-empty" style="display:none"><i data-lucide="image"></i></span>`;
    }else{
     box.innerHTML = `<span class="img-preview-empty"><i data-lucide="image"></i></span>`;
    }
    refreshIcons();
   }
  }
 }
});

document.addEventListener('change', e=>{
 if(e.target.id==='statusFilter') filterTable();
 if(e.target.id==='darkSwitch') setTheme(e.target.checked?'dark':'light');
 if(e.target.id==='compactSwitch'){
  $('#sidebar').classList.toggle('collapsed',e.target.checked);
  $('.main').classList.toggle('expanded',e.target.checked);
 }
 
 if(e.target.classList.contains('img-file-hidden')){
  const file = e.target.files[0];
  if(file){
   const reader = new FileReader();
   reader.onload = ev => {
    const dataUrl = ev.target.result;
    const group = e.target.closest('[data-img-group]');
    if(group){
     const urlInput = group.querySelector('.img-url-input');
     const box = group.querySelector('[data-preview-box]');
     if(urlInput){
      urlInput.value = dataUrl;
      urlInput.dispatchEvent(new Event('input', {bubbles:true}));
     }
     if(box){
      box.innerHTML = `<img src="${dataUrl}" alt="Preview">`;
      refreshIcons();
     }
    }
   };
   reader.readAsDataURL(file);
  }
 }
});

function openLightbox(src, title='', sub=''){
 let box = $('#imgLightbox');
 if(!box){
  box = document.createElement('div');
  box.id = 'imgLightbox';
  box.className = 'img-lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.innerHTML = `<div class="img-lightbox-inner">
   <header class="img-lightbox-head">
    <div>
     <h3 id="lightboxTitle">Project Photo</h3>
     <small id="lightboxSub" style="color:var(--soft);font-size:10px"></small>
    </div>
    <button class="icon-btn" id="lightboxClose" aria-label="Close photo preview">${icon('x')}</button>
   </header>
   <div class="img-lightbox-media">
    <img id="lightboxImg" src="" alt="Project Photo">
   </div>
   <footer class="img-lightbox-foot">
    <span>E-ZAINCO BRICK • Architectural Masonry Showcase</span>
    <a id="lightboxDirectLink" href="#" target="_blank" class="text-link" style="font-weight:700">Open Full Original ↗</a>
   </footer>
  </div>`;
  document.body.appendChild(box);
 }
 $('#lightboxTitle').textContent = title || 'Project Photo';
 $('#lightboxSub').textContent = sub || 'Pure Brick Masonry • E-ZAINCO BRICK';
 $('#lightboxImg').src = src;
 $('#lightboxDirectLink').href = src;
 box.classList.add('open');
 refreshIcons();
}

function closeLightbox(){
 const box = $('#imgLightbox');
 if(box) box.classList.remove('open');
}

document.addEventListener('keydown', e=>{
 if(e.key === 'Escape'){
  closeLightbox();
  closeModal();
 }
});

document.addEventListener('click', e=>{
 const lbTrigger = e.target.closest('[data-lightbox-src]');
 if(lbTrigger){
  openLightbox(lbTrigger.dataset.lightboxSrc, lbTrigger.dataset.lightboxTitle, lbTrigger.dataset.lightboxSub);
  return;
 }

 const viewModeBtn = e.target.closest('[data-view-mode]');
 if(viewModeBtn){
  projectsViewMode = viewModeBtn.dataset.viewMode;
  $$('.view-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.viewMode === projectsViewMode));
  const mount = $('#tableMount');
  if(mount){
   const rows = db.projects || [];
   mount.innerHTML = projectsViewMode === 'grid' ? makeProjectCards(rows) : makeTable('projects', rows);
   refreshIcons();
  }
  return;
 }

 if(e.target.closest('#lightboxClose') || e.target.id === 'imgLightbox'){
  closeLightbox();
  return;
 }

 const nav=e.target.closest('.nav-link');
 if(nav){
  const targetHref=nav.getAttribute('href');
  if(targetHref && targetHref.endsWith('.php')){
   const curFile=location.pathname.split('/').pop()||'index.php';
   const isCurrent=(targetHref===curFile)||(targetHref==='dashboard.php'&&(curFile==='index.php'||curFile==='dashboard.php'))||(targetHref==='index.php'&&(curFile==='index.php'||curFile==='dashboard.php'));
   if(isCurrent){
    e.preventDefault();
    setPage(nav.dataset.page||'dashboard');
    return;
   }
   return;
  }
  if(nav.dataset.page){
   e.preventDefault();
   setPage(nav.dataset.page);
   return;
  }
 }
 
 const pageLink=e.target.closest('[data-page-link]');
 if(pageLink){
  const p=pageLink.dataset.pageLink;
  if(p){
   window.location.href=p+'.php';
   return;
  }
 }
 
 const act=e.target.closest('[data-action]');
 if(act){
  if(act.dataset.action === 'view-img'){
   openLightbox(act.dataset.img, act.dataset.title);
   return;
  }
  handleAction(act.dataset.action,act.dataset.id);
  return;
 }
 
 const rangeBtn=e.target.closest('[data-range]');
 if(rangeBtn){
  analyticsRange=Number(rangeBtn.dataset.range);
  render();
  return;
 }
 
 if(e.target.closest('#menuBtn')){$('#sidebar').classList.add('mobile-open');$('#scrim').classList.add('show')}
 if(e.target.closest('#sidebarClose')){$('#sidebar').classList.remove('mobile-open');$('#scrim').classList.remove('show')}
 if(e.target.closest('#collapseBtn')){$('#sidebar').classList.toggle('collapsed');$('.main').classList.toggle('expanded')}
 if(e.target.closest('#themeBtn')) toggleTheme();
 if(e.target.closest('#profileShortcut')){window.location.href='profile.php';return;}
 if(e.target.closest('#helpBtn')) handleAction('help');
 if(e.target.closest('#notificationsBtn')) toast('You are all caught up.');
 if(e.target.closest('#modalClose')||e.target.closest('#cancelModal')) closeModal();
 if(e.target.id==='scrim'){$('#sidebar').classList.remove('mobile-open');$('#scrim').classList.remove('show')}
});

document.addEventListener('submit', e=>{
 if(e.target.id==='itemForm') saveItem(e);
 if(e.target.id==='homepageForm'){e.preventDefault();handleAction('save-homepage')}
 if(e.target.id==='profileForm'){e.preventDefault();handleAction('save-profile')}
});

function setTheme(t){
 document.documentElement.dataset.theme=t;
 localStorage.setItem('brists-theme',t);
 const b=$('#themeBtn');
 if(b) b.innerHTML=icon(t==='dark'?'sun':'moon');
 if($('#darkSwitch')) $('#darkSwitch').checked=t==='dark';
 refreshIcons();
}

function toggleTheme(){
 setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');
}

function init(){
 const theme=localStorage.getItem('brists-theme');
 if(theme) setTheme(theme);
 $('#year').textContent=new Date().getFullYear();
 let file=location.pathname.split('/').pop().replace('.php','');
 if(!file||file==='index') file='dashboard';
 const hash=location.hash.replace('#','');
 const page=(hash&&(sections[hash]||['dashboard','analytics','homepage','profile','settings'].includes(hash)))?hash:file;
 if(page&&(sections[page]||['dashboard','analytics','homepage','profile','settings'].includes(page))){
  currentPage=page;
 }
 $$('.nav-link').forEach(a=>a.classList.toggle('active',a.dataset.page===currentPage));
 $('#crumbTitle').textContent=currentPage==='dashboard'?'Dashboard':(sections[currentPage]?.title||({analytics:'Analytics',homepage:'Homepage & Hero',profile:'Admin profile',settings:'Settings'}[currentPage]||currentPage));
 render();
 window.addEventListener('hashchange',()=>{
  const p=location.hash.slice(1);
  if(p&&(sections[p]||['dashboard','analytics','homepage','profile','settings'].includes(p))) setPage(p);
 });
}

init();
})();

