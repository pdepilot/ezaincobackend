/* BRISTS Admin Atelier — frontend-only content workspace.
   Data is stored in this browser's localStorage. Connect these CRUD methods
   to a secure server/API before using it as a live production CMS. */
(() => {
'use strict';
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const KEY = 'brists_atelier_cms_v1';

const sections = {
 projects:{
  title:'Projects & Catalog',
  desc:'Curate completed spaces, case studies and project imagery as featured on the BRISTS website.',
  singular:'project',
  icon:'panels-top-left',
  fields:[
   ['title','Project title','text',true],
   ['category','Project category','select',true,['Residential','Commercial','Hospitality','Bespoke Styling','Kitchen & Bath','Office','Renovation']],
   ['location','Location / City (e.g. Ikenegbu, Owerri)','text',false],
   ['client','Client / Scope (e.g. Private Luxury Residence)','text',false],
   ['year','Completion Year / Status (e.g. 2026, Completed)','text',false],
   ['image','Cover image URL / Upload','image',true],
   ['beforeImage','Before / Transformation image URL / Upload','image',false],
   ['gallery','Additional gallery image links (comma separated)','text',false],
   ['features','Key deliverables & highlights (e.g. Fluted Walnut Panelling, Ambient Cove LEDs)','text',false],
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
  {id:'p1',title:'The Civic Penthouse',category:'Residential',location:'Ikenegbu, Owerri',client:'Private Luxury Residence',year:'2026',image:'../assets/image-web/photo-1644057501622-dfa7dd26dbfb.avif',beforeImage:'../assets/image-web/photo-1598928506311-c55ded91a20c.avif',features:'Fluted Walnut Panelling, Ambient Cove Lighting, Panoramic Balcony',description:'Complete penthouse architectural fit-out balancing expansive daylight with tactile botanical luxury.',status:'Published'},
  {id:'p2',title:'Sanctuary Master Retreat',category:'Residential',location:'New Owerri',client:'Private Villa',year:'2026',image:'../assets/image-web/photo-1616594039964-ae9021a400a0.avif',features:'Acoustic Headboard Wall, Integrated Walk-In Robe, Warm Brass Hardware',description:'A serene master bedroom suite designed with soothing celadon palettes and tailored Italian textiles.',status:'Published'},
  {id:'p3',title:'Monochrome Quartz Kitchen',category:'Kitchen & Bath',location:'Works Layout, Owerri',client:'Family Residence',year:'2025',image:'../assets/image-web/photo-1704040686413-2c607dbd2f06.avif',features:'Waterfall Calacatta Quartz Island, Handleless Matte Black Cabinetry',description:'High-performance culinary workspace crafted with seamless quartz surfaces and concealed ambient task lighting.',status:'Published'},
  {id:'p4',title:'Aura Law Chambers',category:'Commercial',location:'Victoria Island, Lagos',client:'Commercial Firm',year:'2025',image:'../assets/image-web/premium_photo-1661879252375-7c1db1932572.avif',features:'Executive Boardroom Acoustics, Fluted Glass Partitions, Bespoke Conference Table',description:'Prestigious corporate chambers combining acoustic privacy with authoritative architectural presence.',status:'Published'},
  {id:'p5',title:'Nordic Minimalist Villa',category:'Residential',location:'Port Harcourt, Rivers State',client:'Private Villa',year:'2025',image:'../assets/image-web/photo-1598928506311-c55ded91a20c.avif',features:'Open-Concept Living, Natural White Oak Joinery, Low-VOC Mineral Washes',description:'Light-filled residence emphasizing clean lines, functional geometry and organic textures.',status:'Draft'}
 ],
 journal:[
  {id:'j1',title:'How to Plan an Interior Design Project in Owerri',slug:'blog-post/blog-how-to-plan-interior-design-project-owerri.php',category:'Design Advice',author:'Arc. Chinedu Brist',date:'October 2026',readTime:'6 Min Read',image:'../assets/image-web/photo-1699239116624-85268dce7377.avif',excerpt:'Why bringing an interior architect onboard during the early blockwork and lintel stage saves millions of naira in conduit re-channelling and ceiling rework.',content:'Planning an interior architecture project in Nigeria requires proactive coordination between structural engineers, MEP artisans, and finish specialists. Early spatial zoning prevents costly electrical re-routing and ensures every joinery piece sits seamlessly against finished walls.',tags:'Space Planning, Budgeting, Architecture',status:'Published'},
  {id:'j2',title:'Choosing Finishes for the Tropical Nigerian Climate',slug:'journal.php#tropical-finishes',category:'Materials & Finishes',author:'BRISTS Materials Lab',date:'September 2026',readTime:'5 Min Read',image:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80',excerpt:'Selecting moisture-resistant veneers, anti-fungal emulsion paints and thermal-efficient flooring that withstand seasonal humidity.',content:'The high humidity and temperature variations of southeastern Nigeria demand intentional material choices: sealed marine-grade ply substrates, sintered stone vanity tops, and breathable linen upholstery that retains its tactile richness over decades.',tags:'Materials, Climate, Luxury Finishes',status:'Published'}
 ],
 services:[
  {id:'s1',title:'Residential Interior Design',category:'Residential',badge:'Turnkey Luxury',image:'../assets/image-web/photo-1598928506311-c55ded91a20c.avif',deliverables:'3D Renders, Space Planning, Custom Joinery, Material Schedule, Procurement',timeline:'6–10 Weeks',description:'Complete design transformation for duplexes, penthouses, and private villas with bespoke cabinetry and curated lighting.',status:'Published'},
  {id:'s2',title:'Commercial & Corporate Workspaces',category:'Commercial',badge:'Corporate Architecture',image:'../assets/image-web/premium_photo-1661879252375-7c1db1932572.avif',deliverables:'Acoustic Layouts, Executive Offices, Boardroom AV Integration, Ergonomic Furnishing',timeline:'4–8 Weeks',description:'Purposeful workplaces designed to elevate client impressions, enhance team productivity and express brand identity.',status:'Published'},
  {id:'s3',title:'Bespoke Furniture & Joinery',category:'Bespoke Styling',badge:'Artisanal Craft',image:'../assets/image-web/photo-1758448755952-42b404bc6f39.avif',deliverables:'Custom Wardrobes, Kitchen Islands, Media Consoles, Architectural Panelling',timeline:'3–5 Weeks',description:'Custom-crafted millwork and artisanal furnishings precision-built to exact architectural specifications.',status:'Published'},
  {id:'s4',title:'Turnkey Fit-Out & Project Supervision',category:'Turnkey Fit-Out',badge:'Full-Service Execution',image:'../assets/image-web/photo-1644057501622-dfa7dd26dbfb.avif',deliverables:'Site Supervision, Subcontractor Quality Control, Milestone Reporting, White-Glove Handover',timeline:'8–16 Weeks',description:'End-to-end site management ensuring design intent, structural integrity, and flawless execution from slab to styling.',status:'Published'}
 ],
 pages:[
  {id:'pg1',title:'Home',slug:'index.php',heroEyebrow:'BRISTS INTERIOR DESIGN',heroTitle:'Spaces designed around the way you live',image:'../assets/image-web/photo-1644057501622-dfa7dd26dbfb.avif',description:'Thoughtful interiors, refined finishes and purposeful design for spaces that feel distinctly yours.',seoTitle:'BRISTS Interior Design | Luxury Spaces in Owerri & Lagos',seoDescription:'Award-winning interior architecture, bespoke styling and full turnkey execution in southeastern Nigeria.',status:'Published'},
  {id:'pg2',title:'Services',slug:'services.php',heroEyebrow:'Tailored Capabilities',heroTitle:'End-to-End Interior Architecture & Styling',image:'../assets/image-web/photo-1598928506311-c55ded91a20c.avif',description:'From initial structural zoning to bespoke furnishing and white-glove handover.',seoTitle:'Services | BRISTS Interior Architecture',seoDescription:'Residential, commercial, bespoke styling and turnkey fit-out capabilities.',status:'Published'},
  {id:'pg3',title:'Catalog',slug:'catalog.php',heroEyebrow:'Selected Works',heroTitle:'Curated Spaces & Recent Case Studies',image:'../assets/image-web/photo-1616594039964-ae9021a400a0.avif',description:'Explore our signature completed projects across Owerri, Lagos, and southeastern Nigeria.',seoTitle:'Catalog | BRISTS Interior Design',seoDescription:'Explore signature residential and commercial projects by BRISTS.',status:'Published'},
  {id:'pg4',title:'About',slug:'about.php',heroEyebrow:'The Studio Atelier',heroTitle:'Architectural Rigour Meets Botanical Luxury',image:'../assets/image-web/photo-1757344454333-cc666252e596.avif',description:'The philosophy, leadership team, and craft standards behind BRISTS.',seoTitle:'About Us | BRISTS Interior Design Studio',seoDescription:'Meet the team and architectural principles defining BRISTS.',status:'Published'},
  {id:'pg5',title:'Journal',slug:'journal.php',heroEyebrow:'Studio Chronicles',heroTitle:'Insights on Interior Architecture & Living',image:'../assets/image-web/photo-1699239116624-85268dce7377.avif',description:'Practical guidance, material spotlights and studio perspectives.',seoTitle:'The Journal | BRISTS Interior Design',seoDescription:'Design advice and project stories from the BRISTS atelier.',status:'Published'},
  {id:'pg6',title:'Contact',slug:'contact.php',heroEyebrow:'Studio Consultations',heroTitle:'Begin Your Space Transformation',image:'../assets/image-web/premium_photo-1661879252375-7c1db1932572.avif',description:'Book an on-site or digital consultation with our lead interior architects.',seoTitle:'Contact & Consultations | BRISTS Atelier',seoDescription:'Book a consultation or reach the BRISTS design studio in Owerri.',status:'Published'}
 ],
 consultations:[
  {id:'c1',title:'Adaobi N.',email:'adaobi@example.com',phone:'+234 803 000 0011',category:'Residential',description:'Four-bedroom duplex renovation and bespoke open-plan living room redesign.',status:'New',created:'Today'},
  {id:'c2',title:'Emeka O.',email:'emeka@example.com',phone:'+234 806 000 0022',category:'Commercial',description:'Reception, client lounge and private executive boardroom fit-out.',status:'Scheduled',created:'Yesterday'},
  {id:'c3',title:'Studio Kora',email:'hello@example.com',phone:'+234 701 000 0033',category:'Office',description:'Acoustic ceiling zoning and ergonomic workspace planning for 14-person team.',status:'Contacted',created:'Oct 10'}
 ],
 boq:[
  {id:'b1',title:'A. Okafor Residence',email:'client@example.com',category:'Materials estimate',budget:'₦15m–₦22m',description:'Preliminary estimate for master retreat, walk-in closet and chef kitchen cabinetry.',status:'Reviewing'}
 ],
 team:[
  {id:'t1',title:'Arc. Chinedu Brist',category:'Lead Interior Architect & Founder',image:'../assets/image-web/photo-1757344454333-cc666252e596.avif',specialities:'Interior Architecture, Spatial Zoning, Luxury Residential',email:'chinedu@brists.design',phone:'+234 701 409 3037',description:'Over 12 years engineering high-end residential estates and executive spaces across southeastern Nigeria and Lagos.',status:'Published'},
  {id:'t2',title:'Amaka Nnamdi',category:'Senior Interior Designer & Styling Lead',image:'../assets/image-web/photo-1758448755952-42b404bc6f39.avif',specialities:'Material Curation, Botanical Accents, Lighting Design',email:'amaka@brists.design',phone:'+234 803 111 2233',description:'Passionate about sensory materiality, biophilic palettes and custom upholstery that evoke warmth and understated prestige.',status:'Published'}
 ],
 testimonials:[
  {id:'te1',title:'Chief & Lolo Iwuanyanwu',category:'Residential Penthouse',image:'../assets/image-web/photo-1757344454333-cc666252e596.avif',description:'BRISTS transformed our bare penthouse shell into an extraordinary sanctuary. Every joinery joint is immaculate and the lighting creates a calm, hotel-like atmosphere every evening.',status:'Published'},
  {id:'te2',title:'Barrister K. Adeleke',category:'Corporate Law Suite',description:'The acoustic zoning in our boardroom is flawless. BRISTS understood our standard of discretion and delivered a space that our clients continuously admire.',status:'Published'}
 ],
 faqs:[
  {id:'f1',title:'At what stage should we engage an interior architect?',category:'Getting started',description:'Ideally during the architectural planning or early blockwork stage. Bringing us onboard before electrical conduits and plumbing sleeves are cast saves significant time and prevents costly ceiling rework.',status:'Published'},
  {id:'f2',title:'Do you manage site fit-out and contractor execution outside Owerri?',category:'Service area',description:'Yes. We manage turnkey residential and corporate fit-outs across Owerri, Port Harcourt, Enugu, Asaba, and Lagos with structured milestone supervision.',status:'Published'}
 ],
 materials:[
  {id:'m1',title:'Fluted Natural Oak Veneer',category:'Furniture',image:'../assets/image-web/premium_photo-1661964402307-02267d1423f5.avif',description:'Architectural fluted wall panelling with matte polyurethane finish.',status:'Available'},
  {id:'m2',title:'Calacatta Oro Quartz',category:'Wall finish',image:'../assets/image-web/photo-1704040686413-2c607dbd2f06.avif',description:'Seamless, non-porous waterfall island surface with subtle gold veining.',status:'Available'}
 ],
 whatsapp:[
  {id:'w1',title:'Dr. Obinna',phone:'+234 803 445 6677',category:'Interior design',description:'Inquired about complete turnkey interior architecture for a newly constructed villa in Owerri.',status:'New'}
 ],
 homepage:{
  eyebrow:'BRISTS INTERIOR DESIGN',
  title:'Spaces designed around the way you live',
  description:'Thoughtful interiors, refined finishes and purposeful design for spaces that feel distinctly yours.',
  buttonText:'Book Consultation',
  buttonLink:'contact.php#booking',
  secondaryButtonText:'Explore Catalog',
  secondaryButtonLink:'catalog.php',
  image:'../assets/image-web/photo-1644057501622-dfa7dd26dbfb.avif',
  image2:'../assets/image-web/photo-1616594039964-ae9021a400a0.avif',
  image3:'../assets/image-web/photo-1704040686413-2c607dbd2f06.avif',
  trust1:'140+ Spaces Delivered',
  trust2:'100% On-Time Handover',
  trust3:'Owerri & Lagos Ateliers',
  status:'Published'
 },
 profile:{
  name:'Arc. Chinedu Brist',
  role:'Principal Architect & Studio Director',
  email:'chinedu@brists.design',
  phone:'+234 701 409 3037',
  image:'../assets/image-web/photo-1757344454333-cc666252e596.avif',
  initials:'CB',
  location:'Ikenegbu Atelier, Owerri',
  bio:'Directing spatial architecture, interior acoustics and bespoke furniture curation for luxury residential villas and commercial spaces.'
 }
};

let db = loadDb(), currentPage='dashboard', editId=null, editSection=null;

function loadDb(){
 try{
  const saved=JSON.parse(localStorage.getItem(KEY));
  if(saved){
   return {
    ...structuredClone(seed),
    ...saved,
    homepage:{...seed.homepage,...(saved.homepage||{})},
    profile:{...seed.profile,...(saved.profile||{})}
   };
  }
  return structuredClone(seed);
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
 return `<div class="page-heading"><div><p class="eyebrow">BRISTS ATELIER / CONTENT STUDIO</p><h1>${title}</h1><p>${desc}</p></div><div class="heading-actions">${action}</div></div>`;
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
 const stats=[['Projects managed',projects.length,'panels-top-left','Catalog records'],['Published projects',published,'eye','Visible on the website'],['Journal articles',articles.length,'notebook-pen','Insights and studio news'],['Consultation requests',leads.length,'calendar-check','Client enquiries received']];
 return `${heading('Good afternoon, Studio 👋','Here is what is happening across your digital studio today.',button('Add new content','new-project',true,'plus'))}
 <div class="welcome-banner"><div><p class="eyebrow" style="color:#D6E9DA">YOUR DIGITAL STUDIO</p><h2>Thoughtful spaces start here.</h2><p>Keep your Catalog fresh, your stories useful and every client enquiry moving forward.</p></div><button class="btn" data-action="go-projects">${icon('arrow-up-right')} Manage Catalog</button></div>
 <div class="stats-grid">${stats.map((s,i)=>`<article class="stat-card"><div class="stat-head"><span>${s[0]}</span><span class="stat-icon ${i===2?'gold':''}">${icon(s[2])}</span></div><div class="stat-value">${s[1]}</div><div class="stat-foot"><strong>${i===0?'Catalog':i===1?'Published':i===2?'Editorial':'Client care'}</strong> · ${s[3]}</div></article>`).join('')}</div>
 <div class="content-grid"><section class="panel"><div class="panel-head"><div><h2>Content activity</h2><p>Current content distribution across your studio</p></div><button class="text-link" data-page-link="analytics">View analytics ↗</button></div><div class="chart">${[['Projects',projects.length],['Journal',articles.length],['Services',(db.services||[]).length],['Pages',(db.pages||[]).length],['Team',(db.team||[]).length],['FAQs',(db.faqs||[]).length],['Reviews',(db.testimonials||[]).length]].map((x,i)=>`<div class="chart-col"><div class="chart-bars"><div class="bar ${i%2===0?'primary':''}" style="height:${Math.max(8,Math.min(100,x[1]*14))}%"></div></div><small>${x[0]}</small></div>`).join('')}</div><div class="chart-legend"><span><i class="legend-dot"></i>Published & managed content</span><span><i class="legend-dot pale"></i>Content volume</span></div></section>
 <section class="panel"><div class="panel-head"><div><h2>Recent activity</h2><p>Latest workspace changes</p></div><span class="status published">Live demo</span></div><div class="activity-list">${[{ic:'panels-top-left',title:'Catalog workspace ready',sub:`${projects.length} project records available`},{ic:'notebook-pen',title:'Journal workspace ready',sub:`${articles.length} article records available`},{ic:'calendar-check',title:'Client intake review',sub:`${leads.filter(x=>x.status==='New').length} new consultation request(s)`},{ic:'shield-check',title:'Browser storage enabled',sub:'Changes stay in this browser'}].map(x=>`<div class="activity"><span class="activity-icon">${icon(x.ic)}</span><div class="activity-copy"><b>${x.title}</b><small>${x.sub}</small></div></div>`).join('')}</div></section></div>
 <section class="panel"><div class="panel-head"><div><h2>Quick actions</h2><p>Jump into a frequent studio task</p></div></div><div class="quick-grid">${[['projects','Add Catalog project','Create a case study','plus'],['journal','Write a journal post','Share useful insight','notebook-pen'],['consultations','Review consultations','Respond to potential clients','calendar-check'],['homepage','Edit homepage hero','Refresh your first impression','panorama']].map(x=>`<button class="quick-action" data-action="quick-${x[0]}"><span class="stat-icon">${icon(x[3])}</span><span><b>${x[1]}</b><small>${x[2]}</small></span></button>`).join('')}</div></section>
 <div class="notice"><b>Prototype note:</b> This is a frontend-only working template. Records are saved to this browser with localStorage; it does not yet update the public website or securely process real client submissions. See README.md for the integration checklist.</div>`;
}

function sectionPage(key){
 const s=sections[key],rows=db[key]||[];
 return `${heading(s.title,s.desc,button('Add '+s.singular,'add-'+key,true,'plus'))}
 <section class="panel">
  <div class="table-tools">
   <label class="search-box">${icon('search')}<input id="tableSearch" placeholder="Search ${s.title.toLowerCase()}..." aria-label="Search records"></label>
   <select class="field-select" id="statusFilter"><option value="">All statuses</option>${[...new Set(rows.map(r=>r.status).filter(Boolean))].map(v=>`<option>${escapeHtml(v)}</option>`).join('')}</select>
   <span class="status">${rows.length} record${rows.length===1?'':'s'}</span>
  </div>
  <div id="tableMount">${makeTable(key,rows)}</div>
  <div class="pagination">
   <span>Showing <b id="shownCount">${rows.length}</b> of ${rows.length} records</span>
   <span>Local workspace storage</span>
  </div>
 </section>
 ${key==='consultations'||key==='whatsapp'?'<div class="notice">For a live site, connect the public form/WhatsApp lead capture to a secured backend endpoint. This page currently manages demo records only.</div>':''}`;
}

function makeTable(key,rows){
 const s=sections[key];
 if(!rows.length) return `<div class="empty">${icon('folder-open')}<b>No records yet</b><p>Add your first ${s.singular} to get started.</p></div>`;
 return `<div class="table-wrap"><table><thead><tr><th>Record</th><th>${key==='consultations'||key==='whatsapp'?'Contact / details':'Category / details'}</th><th>Status</th><th>Updated</th><th style="text-align:right">Actions</th></tr></thead><tbody>${rows.map(r=>`<tr data-record-row data-search="${escapeHtml([r.title,r.category,r.description,r.email,r.status,r.location,r.client,r.slug,r.author].join(' ').toLowerCase())}" data-status="${escapeHtml(r.status||'')}"><td><div class="item-cell">${r.image?`<img class="item-thumb" src="${escapeHtml(r.image)}" alt="" onerror="this.style.visibility='hidden'">`:`<div class="item-thumb" style="display:grid;place-items:center;color:var(--accent)">${icon(s.icon)}</div>`}<div><b>${escapeHtml(r.title||'Untitled')}</b><small>${escapeHtml(r.slug||r.location||r.client||r.author||r.created||'No extra details')}</small></div></div></td><td><b>${escapeHtml(r.category||r.email||r.phone||'—')}</b><small style="display:block;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--soft)">${escapeHtml(r.description||r.excerpt||r.deliverables||r.specialities||r.budget||'—')}</small></td><td>${statusBadge(r.status||'Draft')}</td><td>${escapeHtml(r.updated||r.created||'Active')}</td><td><div class="row-actions"><button class="icon-btn" title="Edit" aria-label="Edit" data-action="edit-${key}" data-id="${r.id}">${icon('pencil')}</button><button class="icon-btn" title="Change status" aria-label="Change status" data-action="status-${key}" data-id="${r.id}">${icon('refresh-cw')}</button><button class="icon-btn" title="Delete" aria-label="Delete" data-action="delete-${key}" data-id="${r.id}">${icon('trash-2')}</button></div></td></tr>`).join('')}</tbody></table></div>`;
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

document.addEventListener('click', e=>{
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

