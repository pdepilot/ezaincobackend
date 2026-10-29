# BRISTS Admin Atelier — HTML/CSS/JavaScript Template

A responsive admin dashboard template inspired by the supplied `portal.zip` dashboard layout and adapted to the BRISTS Interior Design site's Verdant Luxe design system.

## Run it

1. Extract this `portal` folder.
2. Open `portal/index.php` in a modern browser. For the best local workflow, use VS Code with Live Server.
3. Navigate through the sidebar. Add, edit, search, filter, change status, delete, and export content records.
4. Use **Settings → Export backup** to download a JSON backup of the browser's current data.

## Included sections

- Dashboard and content metrics
- Analytics (content inventory metrics, not visitor tracking)
- Projects & portfolio
- Journal / blog
- Services
- Website pages and SEO fields
- Homepage hero content
- Consultations
- Project briefs / BOQ
- Team
- Testimonials
- FAQs
- Materials library
- WhatsApp enquiry log
- Admin profile and settings

## Design system

- Display font: Cormorant Garamond
- Interface font: Manrope
- Light palette: botanical alabaster `#F5F8F5`, forest emerald `#275C3E`, celadon `#D1E7D8`, champagne gold `#C29B38`
- Dark mode: obsidian/cypress surfaces with luminous jade accents
- Responsive sidebar, mobile drawer, collapsible desktop sidebar, searchable tables, status filters, modal forms, toast notifications and local theme preference.

## Important: prototype versus production CMS

This delivery deliberately uses only HTML, CSS and JavaScript. It stores records in the browser's `localStorage`, so changes are local to the browser/device and do **not** automatically update the public website, share across admin users, or receive real website form submissions. It is a working frontend template and data-management prototype, not a secure production CMS.

To make it control the supplied website for real, add a backend/API and database (for example PHP + MySQL, Node.js, or another server platform), then connect each CRUD action to authenticated endpoints. Also implement authentication and role permissions, server-side validation, CSRF protection, safe image uploads, input sanitisation, audit logs, and backups. Do not use browser localStorage as the source of truth for real client or business data.

## Integration map

The public site currently has static HTML pages such as `index.php`, `about.php`, `services.php`, `catalog.php`, `journal.php`, and `contact.php`. Those pages must be updated to load published content from the same backend/API used by this dashboard. The existing public `js/main.js` can continue handling presentation interactions, but content persistence and access control should be server-owned in a production implementation.

## Folder structure

```text
portal/
  index.php
  README.md
  css/
    admin.css
  js/
    admin.js
```

The CSS and JavaScript are kept in their own folders as requested. Google Fonts and Lucide icons use CDN links; the layout and core dashboard functions work without Lucide (icons may be absent) and the fonts fall back to system sans-serif if offline.
