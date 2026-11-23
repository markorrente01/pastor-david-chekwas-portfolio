# DAVID CHEKWAS — FULL-STACK PORTFOLIO PROJECT

## 1. Project Overview

Build a premium, modern, full-stack personal portfolio website for a fictional African male entrepreneur, business strategist, and international keynote speaker named **David Chekwas**.

The project consists of:
- A public-facing portfolio website.
- A private administrator dashboard/CMS.
- A React frontend developed first using mock data and mock APIs.
- A Django REST Framework backend developed afterward.
- Integration between the frontend and backend.
- Production-minded deployment and security practices.

This is a portfolio project intended to demonstrate professional frontend and backend development skills. Build it with production standards in mind without unnecessary enterprise-level complexity.

**Important:** David Chekwas is a fictional demonstration personality. All biographies, achievements, awards, clients, organisations, events, statistics, and testimonials must be treated as fictional sample content. Never present them as real-world facts.

## 2. Brand Identity and Positioning

**Name:** David Chekwas

**Professional identity:**
- Entrepreneur
- Business Strategist
- International Keynote Speaker

**Tagline:**
"Think bigger. Lead differently. Build what matters."

**Personality:**
- Bold
- Intelligent
- Unconventional
- Confident
- Thought-provoking
- Forward-thinking

**Target audience:**
- Business owners
- Entrepreneurs
- Executives
- Organisations
- Event organisers
- Leadership teams

**Brand positioning:**

David Chekwas challenges conventional thinking about business, leadership, innovation, and growth. His work focuses on helping individuals and organisations question outdated approaches, think strategically, and build meaningful businesses.

**Geographical positioning:**
"Based in Africa, speaking globally."

## 3. Design Direction

### Primary design reference
Ken Hughes website.

### Secondary design reference
Steven Bartlett — specifically for motion design, transitions, and interactive experiences.

The website should feel:
- Editorial
- Bold
- Immersive
- Premium
- Modern
- Visually distinctive
- Unconventional

Avoid generic luxury speaker portfolio templates.

Preserve the bold editorial personality of the primary reference while incorporating the sophisticated motion and interactions associated with the secondary reference.

### Working colour palette

- Dark: `#111111`
- Warm Ivory: `#F5F2EB`
- White: `#FFFFFF`
- Gold: `#D6A84B`
- Muted Grey: `#77736C`
- Charcoal: `#282828`

### Typography candidates

- Space Grotesk — display typography.
- DM Sans — body text and UI.
- Instrument Serif — editorial contrast.

Final typography can be refined during design-system implementation.

## 4. Homepage Hero

**Eyebrow:**

`ENTREPRENEUR · BUSINESS STRATEGIST · SPEAKER`

**Main headline:**

`THINK BIGGER. LEAD DIFFERENTLY.`

**Supporting text:**

"Challenging the way the world thinks about business, leadership and growth."

**Primary CTA:**

"Bring David to your stage"

**Secondary CTA:**

"Explore the work"

The hero should be immersive, dark, editorial, and visually memorable.

Use an expressive portrait composition, oversized typography, layered depth, and carefully choreographed entrance animations.

## 5. Signature Animation Direction — APPROVED AND LOCKED

The definitive motion reference is the upgraded standalone HTML showcase:

`kairo-animation-showcase-v2.html`

The project identity has changed to David Chekwas, but the approved animation direction remains unchanged.

This is a core design requirement. Do not simplify it into ordinary fade-ins, basic scroll reveals, or generic Framer Motion animations.

### Overall direction

A hybrid of:
- Cinematic editorial motion.
- Experimental creative-developer interactions.

Complexity level: High, but purposeful.

The motion should feel intentional, premium, smooth, and connected to the storytelling.

### Approved signature interactions

#### A. Hero entrance
- Animated name reveal.
- Layered portrait reveal.
- Oversized kinetic typography.
- Masked image transitions.
- Coordinated entrance choreography.

#### B. Custom cursor
- Custom mouse-trace cursor.
- Smooth trailing ring.
- Interactive expansion on hover.
- Different cursor states for interactive elements.
- Appropriate touch/mobile fallback.

This is one of the user's favourite elements. Preserve its distinctive character.

#### C. Interactive portrait
- Mouse-controlled 3D-style parallax.
- Subtle translation and rotation.
- Layered depth.
- Smooth pointer movement.
- Responsive fallback for touch devices.

#### D. Main signature scroll choreography

This is the most important animation sequence.

- Pin the hero during the scroll transition.
- Expand the portrait beyond its original mask.
- Transition the oversized headline out of view.
- Gradually shift the background from dark to warm ivory.
- Transform the portrait into the next editorial section.
- Preserve visual continuity between the hero and the following section.

The transition should feel like one connected cinematic scene rather than unrelated section animations.

#### E. About section
- Image scaling and mask reveals.
- Staggered text entrances.
- Layered editorial composition.

#### F. Statement section
- Large kinetic typography.
- Staggered word or line reveals.
- Carefully timed text transitions.

#### G. Speaking topics
- Staggered entrance animations.
- Hover transformations.
- Subtle depth and interaction.

#### H. Media section
- Horizontal scroll storytelling.
- Draggable media cards.
- Scroll-linked animation.
- Responsive fallback.

#### I. Testimonials
- Large quotation reveal.
- Editorial typography.
- Subtle entrance choreography.

#### J. Events
- Staggered card entrances.
- Subtle depth effects.
- Refined hover interactions.

#### K. Final CTA
- Animated typography.
- Rotating concentric rings.
- Distinctive visual ending.

### Motion technology

Use each technology for a clear purpose:

- **GSAP + ScrollTrigger:** Complex timelines, pinned scenes, scroll-driven transitions, and coordinated sequences.
- **Motion for React:** Component transitions, UI interactions, hover states, and standard React animation needs.
- **SVG:** Masks, path drawing, and morphing effects.
- **CSS:** Visual effects, transitions, and lightweight interactions.
- **Three.js / React Three Fiber:** Optional, only when a meaningful 3D experience genuinely improves the result.

Avoid having GSAP and Motion compete to control the same elements.

### Performance and accessibility

- Respect `prefers-reduced-motion`.
- Provide responsive touch fallbacks.
- Avoid layout shifts.
- Lazy-load expensive media and effects.
- Keep animations smooth.
- Avoid unnecessary continuous animation.
- Ensure content remains usable without animation.

The HTML showcase is a visual reference, not production React code. Recreate its visual language using the actual project architecture.

The showcase uses external GSAP and Google Fonts CDNs and remote Unsplash placeholder images, so it requires internet access. Its sound toggle is only a UI placeholder; it does not implement actual sound.

## 6. Frontend Technology Stack

The frontend stack is final. Do not reopen the framework decision or recommend switching to Next.js.

- React
- TypeScript
- Vite
- Tailwind CSS v4
- React Router
- TanStack Query v5
- Axios
- Motion for React
- GSAP
- GSAP ScrollTrigger
- React Hook Form
- Zod
- Lucide React
- Vitest
- React Testing Library
- Playwright
- ESLint
- Prettier

Zustand may be introduced only if a genuine client-side state requirement arises.

## 7. Backend Technology Stack

The backend will be developed after the frontend foundation and major features.

- Python
- Django
- Django REST Framework
- JWT authentication
- PostgreSQL

Media storage provider will be decided during backend development. Cloudinary or compatible object storage may be considered.

Email provider will also be decided later.

## 8. Deployment Strategy

Expected deployment setup:

- GitHub — source control.
- Vercel — frontend hosting.
- Django-compatible hosting provider — backend.
- PostgreSQL hosting provider — database.
- External object storage — uploaded media, when selected.

The frontend and backend will use separate subdomains under one purchased domain if needed.

Example:

- `app.example.com`
- `api.example.com`

The database must connect privately to Django. The frontend must never connect directly to PostgreSQL.

## 9. Public Website Routes

- `/` — Home
- `/about` — About David
- `/speaking` — Speaking
- `/media` — Media
- `/events` — Events
- `/testimonials` — Testimonials
- `/insights` — Insights listing
- `/insights/:slug` — Individual article
- `/resources` — Resources
- `/contact` — Contact and booking

### Homepage section order

1. Hero / introduction
2. Credibility and recognition strip
3. About David
4. Signature speaking topics
5. Speaker reel / media
6. Testimonials and impact
7. Events and appearances
8. Insights
9. Booking CTA and footer

The credibility strip must use fictional demonstration content.

## 10. Speaking Topics

Use these initial topics:

1. **The Future of Leadership**
   Leading when the old rules no longer work.

2. **Beyond the Startup Mindset**
   Building businesses that outgrow their founders.

3. **The Strategy Advantage**
   Stop being busy. Start being intentional.

4. **Rethinking Business in the Digital Age**
   The future won't wait for your organization to catch up.

5. **The Human Side of Business**
   People build businesses. Leadership determines what they become.

## 11. Admin Dashboard and CMS

The website includes a private administrator dashboard.

Initially, there will be one administrator.

### Admin routes

- `/admin/login`
- `/admin/dashboard`
- `/admin/profile`
- `/admin/pages`
- `/admin/speaking-topics`
- `/admin/media`
- `/admin/events`
- `/admin/testimonials`
- `/admin/insights`
- `/admin/resources`
- `/admin/inquiries`
- `/admin/settings`

### Dashboard design

Use a subtle combination of:
- Professional SaaS dashboard design.
- The visual identity of the public website.

The dashboard should feel clean, organised, and professional without looking like an unrelated template.

### CMS capabilities

The administrator should be able to:

- Edit text and website content.
- Upload and manage media.
- Create, edit, delete, and publish speaking topics.
- Manage events.
- Manage testimonials.
- Create and manage articles.
- Manage downloadable resources.
- View and manage booking inquiries.
- Edit SEO metadata.
- Control homepage section visibility.
- Reorder homepage sections.

Homepage flexibility is an explicit requirement.

The administrator must be able to edit homepage content, enable or disable sections, and change their display order.

### Content management standards

Support where appropriate:

- Draft, published, and archived states.
- Slugs.
- Featured content.
- SEO fields.
- Display ordering.
- Media alt text.
- Search and filters.
- Pagination.
- Upload progress.
- Form validation.
- Destructive-action confirmation.
- Content preview before publishing where practical.

Avoid unnecessary CMS complexity.

## 12. Booking Inquiry System

The public booking form should collect:

- Name
- Email
- Organisation
- Event name
- Event type
- Event date
- Location
- Message

Submissions should be stored in the database.

### Inquiry statuses

- New
- Contacted
- Confirmed
- Closed

Administrators should be able to:
- View inquiries.
- Update their status.
- Add internal notes.
- Review submitted information.

Email notification will not be implemented initially. Database storage comes first; email can be added later.

## 13. SEO Strategy

Initial strategy: Basic SPA SEO, with improvements later.

Do not change frameworks just for SEO.

Implement:

- Page titles.
- Meta descriptions.
- Open Graph metadata.
- Semantic HTML.
- Logical heading hierarchy.
- Image alt text.
- Canonical URLs where appropriate.
- Sitemap.
- Robots configuration.
- Structured data where appropriate.

Prerendering or other SEO improvements can be considered later.

## 14. Frontend Architecture

Use a feature-based React TypeScript architecture.

Proposed structure:

```text
src/
├── app/
│   ├── App.tsx
│   ├── router.tsx
│   ├── providers/
│   └── layouts/
├── features/
│   ├── home/
│   ├── about/
│   ├── speaking/
│   ├── media/
│   ├── events/
│   ├── testimonials/
│   ├── insights/
│   ├── resources/
│   ├── contact/
│   ├── auth/
│   └── admin/
│       ├── dashboard/
│       ├── profile/
│       ├── pages/
│       ├── speaking-topics/
│       ├── media/
│       ├── events/
│       ├── testimonials/
│       ├── insights/
│       ├── resources/
│       ├── inquiries/
│       └── settings/
├── shared/
│   ├── api/
│   ├── components/
│   ├── ui/
│   ├── hooks/
│   ├── animations/
│   ├── utils/
│   ├── types/
│   └── constants/
├── assets/
└── styles/
```

Feature folders should contain only relevant subfolders such as:

- `api`
- `components`
- `hooks`
- `pages`
- `schemas`
- `types`
- `data`

Do not create unnecessary empty architectural layers.

### Coding rules

- `.tsx` for React components.
- `.ts` for hooks, API functions, types, utilities, and schemas.
- Avoid `any`.
- Use explicit types.
- Define interfaces for component props.
- Do not use `React.FC`.
- Keep pages focused on composition.
- Keep UI components free of unnecessary business logic.
- Keep feature-specific code inside its feature until reuse is justified.
- Use TanStack Query v5 for server state.
- Use mock APIs and mock data until the backend is ready.
- Use React Hook Form and Zod for forms.
- Maintain separate public and admin layouts.
- Introduce Zustand only when justified.
- Use one central Axios instance and API base URL.

### Environment variables

Example:

`VITE_API_BASE_URL=http://127.0.0.1:8000/api/v1`

Vite exposes variables prefixed with `VITE_` to browser code.

Never put private Django settings, database credentials, JWT signing secrets, or private API keys in frontend environment variables.

Commit `.env.example`, but ignore actual `.env` files.

## 15. Authentication and Security

There will initially be one administrator.

Implement:

- Protected frontend routes.
- Backend authentication and authorization.
- Short-lived access tokens.
- A secure refresh-token strategy.
- Consider HttpOnly and Secure cookies for refresh tokens, with an appropriate CSRF strategy.
- Avoid long-lived authentication tokens in localStorage.
- Backend authorization must protect every private endpoint.
- Frontend route protection alone is not security.

Also consider:

- Validation on both frontend and backend.
- Login rate limiting.
- Upload validation.
- Correct CORS configuration.
- CSRF protection.
- Booking inquiry spam protection.

## 16. Testing Strategy

Use essential tests first, with Playwright for important user journeys.

### Unit and component tests

- Vitest.
- React Testing Library.

### End-to-end tests

Use Playwright for:

1. Public navigation.
2. Viewing speaking topics.
3. Submitting a booking inquiry.
4. Administrator login.
5. Creating and editing content.
6. Changing homepage section visibility and order.
7. Managing booking inquiries.

Do not pursue comprehensive coverage before features exist.

## 17. Git and GitHub Workflow

Use this branching strategy:

- `main` — production only. Never commit directly.
- `dev` — integration branch.
- `feature/<name>` — feature branches created from `dev`.
- `fix/<name>` — bug fixes.
- `chore/<name>` — maintenance and configuration tasks.

### Workflow example

```bash
git switch dev
git pull origin dev
git switch -c feature/homepage

# Work on the feature.

git add .
git commit -m "feat(home): implement homepage sections"
git push -u origin feature/homepage
```

Open a pull request into `dev`, review and merge it, then merge `dev` into `main` when preparing a release.

### Conventional commit types

- `feat`
- `fix`
- `refactor`
- `style`
- `chore`
- `docs`
- `test`

No separate staging branch or GitHub Actions pipeline is required initially.

Vercel Git integration will handle preview deployments.

## 18. Vercel Deployment

Configure:

- Framework preset: Vite.
- Root directory: `./`
- Build command: `npm run build`
- Output directory: `dist`
- Production branch: `main`.

The `dev` and feature branches should receive preview deployments.

### Suggested package scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  }
}
```

Commit the lockfile and maintain a consistent Node.js version.

### Suggested `.gitignore`

```gitignore
node_modules/
dist/
.env
.env.*
.vercel/
!.env.example
```

### SPA rewrite

Use a `vercel.json` file:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This allows React Router routes to work on direct navigation and page refresh.

## 19. Additional Production Considerations

- Optimise images using WebP or AVIF where appropriate.
- Avoid committing large video files.
- Use an external media provider for large assets.
- Configure HTTPS.
- Configure CORS and CSRF correctly.
- Configure Django `ALLOWED_HOSTS`.
- Use secure cookies in production.
- Plan database backups.
- Add monitoring and logging when deploying.
- Have a rollback strategy.

## 20. Project Documentation

Create:

```text
docs/
├── architecture.md
├── folder-structure.md
├── design-system.md
├── api-contracts.md
├── development-workflow.md
└── deployment.md
```

Keep documentation aligned with the actual implementation.

## 21. Development Phases

Follow this sequence:

1. Project initialization, dependencies, GitHub, and Vercel.
2. Design system, global styling, typography, and shared components.
3. Public layout, navigation, and footer.
4. Homepage and approved signature animation.
5. Remaining public pages.
6. Admin layout and navigation.
7. Admin CMS features.
8. Mock API integration and frontend tests.
9. Django project and backend architecture.
10. Database models, APIs, and authentication.
11. Connect frontend to Django.
12. Security, performance, and end-to-end tests.
13. Production deployment and documentation.

Work one feature at a time. Do not rush ahead or implement several unrelated features together.

## 22. How ChatGPT Should Collaborate on This Project

Act as a senior frontend architect, technical partner, and practical development mentor.

The user is a frontend developer who is learning backend development, particularly Django. Explain backend concepts in a clear, beginner-friendly way when necessary.

The user prefers:
- Direct and practical explanations.
- Concise answers without unnecessary theory.
- Professional architecture without overengineering.
- Complete code for a feature rather than scattered snippets.
- Preserving the existing UI when integrating logic.
- Diagnosing problems before rewriting code.
- Working incrementally and reviewing each feature before moving on.

### Preferred feature delivery workflow

For each feature:

1. Briefly explain the implementation plan.
2. Deliver complete code for that feature, grouped by exact file paths.
3. Provide one consolidated Bash scaffolding script after all feature files are ready.
4. Provide required dependency installation commands.
5. Identify existing files that need modifications and provide complete updated versions.
6. Integrate the feature into the application.
7. Provide a concise testing and review checklist.
8. Move to the next feature only after the current feature has been reviewed.

### Bash scaffolding preferences

When generating Bash scripts to create directories and files:

- Use `git rev-parse --show-toplevel`.
- Validate that `package.json` and `src/` exist.
- Define base path variables.
- Use `mkdir -p`.
- Use Bash arrays where appropriate.
- Use `touch` for file creation.
- Skip existing files where practical.
- Report created and skipped file counts.

Remember that `touch` does not truncate existing files.

### Additional collaboration rules

- Do not add dependencies without a clear reason.
- Do not rewrite existing files unnecessarily.
- Preserve the established UI when adding functionality.
- Clearly identify mock features and deferred backend functionality.
- Avoid unnecessary explanations before code.
- Do not introduce enterprise complexity without a genuine requirement.
- Treat the approved animation showcase as a serious design requirement.

## 23. Final Project Principle

Build **David Chekwas** as a distinctive, premium, immersive speaker portfolio rather than a generic template.

The public website should deliver a memorable visual experience, particularly through the hero, signature scroll choreography, typography, portrait interactions, and editorial storytelling.

The admin dashboard should make content management practical and flexible.

The codebase should remain maintainable, typed, modular, and understandable.

The frontend comes first, followed by the Django backend and full integration.

**Do not sacrifice the approved visual direction for implementation convenience. Preserve the cinematic and experimental motion identity while making it responsive, accessible, and performant.**