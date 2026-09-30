# Bryanspaxe Website Upgrade

## Goal
Build a premium, mobile-first corporate website that presents Bryanspaxe as a credible industrial procurement and engineering partner across Nigeria, Ghana, and West Africa. Preserve the current brand’s blue, green, and Open Sans foundation while elevating its hierarchy, imagery, motion, and conversion flow.

## Pages and navigation
- Build a shared responsive header with logo, active-page states, desktop hover menus, and mobile accordion navigation.
- Create the homepage plus dedicated pages for Projects, Contact / Request a Quote, Instrumentation & Control, Electrical Supplies, Mechanical Supplies, Pipes & Fittings, Engineering Consultation, and Installation & Maintenance.
- Add a detailed global footer with verified Bryanspaxe contact information and direct phone/email links.

## Homepage
- Create an image-led industrial opening section with the required headline, supporting statement, “Get a Quote,” and “Explore Services” actions.
- Present the three core service pillars: Procurement, Engineering Services, and Installation & Maintenance.
- Add the eight-industry overview, six-step procurement process, four highlighted projects, OEM partner strip, and client credibility wall.
- Use restrained motion for key transitions and process progression, with reduced-motion support.

## Service and procurement pages
- Give each procurement category a focused catalogue layout, product imagery, concise descriptions, and quote actions.
- Cover all product groups specified in the brief.
- Build Engineering Consultation around feasibility, system design, project management, and technical support.
- Build Installation & Maintenance as one page with accessible tabs or accordions for all five required services and quote actions at the top and bottom.

## Projects
- Present all eight verified projects from the PRD with client, title, location, scope, outcome, and industry tags.
- Add usable industry filters and direct paths into the quote flow.

## Quote request
- Build the full validated form: name, company, email, phone, service type, project description, and specification upload.
- Enable Lovable Cloud so submissions and files are stored safely and Bryanspaxe can receive submission notifications.
- Show clear success and validation states without disrupting the enquiry flow.

## Brand, content, and media
- Use the supplied Bryanspaxe logo in the header and footer, and derive the favicon from it.
- Carry forward the current site’s Open Sans typography and established blue/green colors, expressed through a refined semantic design system.
- Create cohesive industrial photography for the homepage and service pages rather than using placeholders.
- Reuse only verified factual content from the current site and supplied documents; avoid inventing certifications, metrics, addresses, or outcomes.

## Quality and discoverability
- Add unique titles, descriptions, social metadata, accessible labels, meaningful image text, and clean page structure for every route.
- Optimize imagery and loading behavior for strong mobile performance.
- Verify navigation, menus, filters, accordions, form validation, and page layouts on desktop and mobile.
- Confirm the final preview has no build, runtime, console, or broken-link errors.

## Technical details
- Keep the existing TanStack Start routing structure and Tailwind v4 token system.
- Build shared site-shell and content components so every page stays visually consistent.
- Store uploaded/generated media through the project asset flow; keep a real optimized favicon in `public/`.
- Add the minimum Cloud schema, storage policy, and protected submission handling required for quote requests.
