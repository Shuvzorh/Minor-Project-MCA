# Web Design / Frontend / AI Resource Library — 2026

**Updated:** 23 September 2026  
**Reference project:** [Shuvzorh/Minor-Project-MCA](https://github.com/Shuvzorh/Minor-Project-MCA)

This is the refreshed resource library for the project's vibe: **social impact + maps + real-time coordination + friendly product UI + meaningful motion + AI-assisted workflows**.

The goal is not to collect every trendy tool. The goal is to collect tools that can help build a **distinctive, production-like FoodBridge experience**.

---

# 0. Product Direction

## The vibe

```text
SOCIAL IMPACT
      +
LOCATION INTELLIGENCE
      +
REAL-TIME COORDINATION
      +
FRIENDLY PRODUCT DESIGN
      +
FUNCTIONAL MOTION
      +
AI ASSISTANCE
      +
IMPACT VISUALIZATION
```

## The ideal product feeling

> **"A beautiful, real-time food-rescue network."**

Use technology to make the product clearer and more useful, not merely more animated.

---

# 1. Recommended Priority Map

Legend:

- **P0 — Core:** directly relevant to the next version
- **P1 — Strong fit:** very useful for the product's identity
- **P2 — Optional:** valuable for advanced experiences
- **REF:** inspiration/reference rather than a dependency

| Priority | Resource / Technology | Role |
|---|---|---|
| P0 | MapLibre GL JS | Modern interactive maps |
| P0 | Supabase Realtime | Live donation / pickup updates |
| P0 | shadcn/ui + Base UI | Modern accessible product UI |
| P0 | Motion | React transitions and interaction |
| P0 | Tailwind CSS v4 | Design system / styling |
| P0 | React Aria | Accessible interaction primitives |
| P0 | TanStack Query | Server-state fetching/caching |
| P1 | deck.gl | High-performance geospatial visualization |
| P1 | Rive | Interactive state-driven animation |
| P1 | Vercel AI SDK | AI tools / matching / generative UI |
| P1 | H3 | Geospatial indexing / aggregation |
| P1 | Turf.js | Client/server geospatial calculations |
| P1 | PWA + Workbox | Offline/mobile field workflows |
| P1 | Dexie.js | IndexedDB / offline local data |
| P2 | PostGIS | Serious geospatial data layer |
| P2 | TanStack Router | Type-safe routing |
| P2 | Spline | 3D storytelling |
| P2 | Unicorn Studio | WebGL visual experiences |
| P2 | Shaders | Advanced visual effects |
| REF | Godly | Website inspiration |
| REF | SiteInspire | Website inspiration |
| REF | 60fps | Interaction/motion inspiration |
| REF | Collect UI | UI inspiration |

---

# 2. UI Components & Design Systems

## 2.1 Component Libraries

| Resource | URL | Use |
|---|---|---|
| Uiverse | https://uiverse.io/ | Copy-paste UI elements and effects |
| 21st.dev | https://21st.dev/home | React/shadcn blocks and components |
| HeroUI | https://heroui.com/ | Production React UI components |
| React Bits | https://reactbits.dev/ | Creative/animated React components |
| Vengeance UI | https://www.vengenceui.com/ | Interactive animated components |
| Animate UI | https://animate-ui.com/ | Motion-oriented React components |
| ObsidianUI | https://www.obsidianui.dev/components | Interactive React/Tailwind components |
| Bencho | https://bencho.dev/ | Interactive frontend components |

## 2.2 Modern Headless Foundations

### Base UI — P0
https://base-ui.com/

Unstyled, composable, accessible React primitives. It works with Tailwind and animation libraries and gives full control over the visual layer.

**Why it matches:** excellent for building a custom FoodBridge design language rather than looking like a stock component kit.

### shadcn/ui — P0
https://ui.shadcn.com/

Use it as a composable implementation system, especially with Base UI or React Aria.

Current direction to know:
- Base UI became the default base for new shadcn projects in July 2026.
- React Aria was added as another first-class shadcn component base.
- shadcn also expanded its component work into chat interfaces and registries.

### React Aria — P0 / P1
https://react-aria.adobe.com/

Style-free accessible components with strong keyboard, focus, screen-reader, mobile, drag-and-drop and internationalization support.

---

# 3. Motion & Animation

## Core

| Resource | URL | Role |
|---|---|---|
| Motion | https://motion.dev/ | React animation, layout transitions, gestures |
| GSAP | https://gsap.com/ | Timelines, complex sequences, scroll animation |
| Anime.js | https://animejs.com/ | Lightweight JavaScript animation |
| Barba.js | https://barba.js.org/ | Page transitions |
| Lenis | https://www.lenis.dev/showcase | Smooth scrolling |
| GSAP Skills | https://github.com/greensock/gsap-skills | AI-agent guidance for GSAP |

## Native Web Motion — P0

### React ViewTransition
https://react.dev/

React 19.3, released on **9 September 2026**, made `<ViewTransition>` stable.

Useful for:
- donation card → donation detail
- map marker → detail card
- dashboard → analytics
- onboarding → app
- accepted → picked up → delivered

### View Transition API
https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API

Use browser-native view transitions for shared elements and navigation where appropriate.

### Modern CSS Motion
Keep an eye on:
- CSS scroll-driven animations
- `view-transition-name`
- CSS custom properties
- `:has()`
- container queries
- native transforms/transitions

---

# 4. Maps & Geospatial UX

This is one of the **most important new categories for FoodBridge**.

## 4.1 Map Rendering

### MapLibre GL JS — P0
https://maplibre.org/maplibre-gl-js/docs/

TypeScript + WebGL interactive maps using vector tiles.

Good for:
- live donation map
- NGO map
- volunteer positions
- custom branded map styling
- globe / advanced camera experiences

## 4.2 Geospatial Visualization

### deck.gl — P1
https://deck.gl/

High-performance WebGPU/WebGL2 visualization for large data sets.

Use for:
- food-demand heatmaps
- donation density
- animated routes
- region-level impact maps
- large marker datasets

### Turf.js — P1
https://turfjs.org/

JavaScript geospatial analysis library.

Useful for:
- radius queries
- distance calculations
- buffers
- bounding boxes
- points within polygons
- route/geometry calculations

### H3 — P1
https://h3geo.org/

Hierarchical hexagonal geospatial indexing.

Excellent for:
- neighborhood demand grids
- food availability density
- supply/demand heatmaps
- geographic aggregation
- matching nearby food and organizations

## 4.3 Geospatial Database

### PostGIS — P2
https://postgis.net/

Add when FoodBridge becomes more than a demo and you need:
- spatial queries
- geographic indexes
- nearest-neighbor searches
- geometry/geography storage
- serious map analytics

---

# 5. Real-Time Product Experiences

## Supabase Realtime — P0
https://supabase.com/docs/guides/realtime

Supports:
- Broadcast
- Presence
- database changes

Perfect for:

```text
Donation posted
    ↓
NGO notified
    ↓
NGO accepts
    ↓
Volunteer assigned
    ↓
Pickup started
    ↓
Food collected
    ↓
Delivery completed
```

Possible UI:

```text
● 12 meals available nearby
● NGO accepted 18 sec ago
● Volunteer 4 min away
● Pickup started
```

Use Realtime to make the system feel like a network rather than a static CRUD application.

---

# 6. AI-Native UX

## Vercel AI SDK — P0 / P1
https://ai-sdk.dev/

Use for:
- tool calling
- structured AI workflows
- streaming
- generative UI
- MCP integrations

### FoodBridge AI ideas

#### Smart Match

```text
80 meals
+
expiry time
+
food type
+
distance
+
NGO capacity
+
pickup availability
        ↓
recommended recipient
```

#### AI explanation

> "We recommend Green Hope NGO because it is 2.4 km away, accepts prepared meals, and has enough capacity for this donation."

#### AI operations assistant

```text
"Show urgent donations within 5 km."

"Which NGO has the capacity for 40 vegetarian meals?"

"Summarize today's completed pickups."
```

Important: AI should perform useful operations rather than exist only as a chatbot.

---

# 7. Offline / PWA / Field Work

This is a particularly strong match for volunteers.

## PWA

Reference:
https://web.dev/

Use:
- installable web app
- mobile-first field workflow
- offline shell
- reliable navigation

## Workbox — P1
https://developer.chrome.com/docs/workbox/

Useful for:
- precaching
- runtime caching
- offline strategies
- service-worker workflows

## Dexie.js — P1
https://dexie.org/

IndexedDB wrapper for local browser storage.

Useful for:

```text
ONLINE
  ↓
Download today's pickups

OFFLINE
  ↓
Open pickup
Mark collected
Write note
Capture local changes

ONLINE
  ↓
Sync changes
```

This is more aligned with FoodBridge's real-world use case than adding another decorative animation library.

---

# 8. Data Fetching & Application State

## TanStack Query — P0 / P1
https://tanstack.com/query/latest/docs/framework/react/overview

Useful for:
- fetching server data
- caching
- synchronization
- background updates
- stale-state management
- mutations
- pagination

Good fit for:
- donations
- NGOs
- user profiles
- pickup jobs
- notifications
- impact data

## TanStack Router — P2
https://tanstack.com/router/

Useful if the application grows into a more complex route/data architecture and you want stronger type-safe routing.

---

# 9. Interactive Animation Systems

## Rive — P1
https://rive.app/

Interactive graphics/state-machine animation.

Use it for meaningful product states rather than decorative hero art:

```text
Donation accepted
       ↓
animated confirmation

Pickup started
       ↓
vehicle / route animation

Food rescued
       ↓
impact animation

Goal reached
       ↓
celebration state
```

Rive can react to application state and user interaction through its runtimes.

---

# 10. 3D / WebGL / Creative Visuals

## Spline — P2
https://spline.design/

3D scenes and interactive 3D experiences.

Good for:
- campaign/marketing pages
- impact storytelling
- onboarding illustrations

## Unicorn Studio — P2
https://www.unicorn.studio/

Interactive visual/WebGL design without having to hand-code every shader interaction.

## Shaders — P2
https://shaders.com/

Advanced shader effects and shader-oriented visual components.

## Canvas UI — P2
https://canvasui.dev/components

Canvas/WebGL/WebGPU-oriented creative components.

---

# 11. AI Design & Agent Skills

| Resource | URL | Use |
|---|---|---|
| UI/UX Pro Max | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | Structured UI/UX guidance for coding agents |
| Taste Skill | https://www.tasteskill.dev/ | Stronger frontend/design output from AI |
| Impeccable | https://github.com/pbakaus/impeccable | Design language and AI design commands |
| SkillX | https://github.com/nextlevelbuilder/skillx | Skill discovery / marketplace |
| Antigravity Awesome Skills | https://github.com/sickn33/antigravity-awesome-skills | Agent skills collection |
| Manus | https://manus.im/ | General AI agent workflows |
| Superdesign | https://app.superdesign.dev/library?selected=high-contrast-landing-page&category=style | AI design library and references |
| MotionSites AI | https://motionsites.ai/ | AI website / landing-page prompts |
| Design Extractor | https://www.design-extractor.com/ | Extract site design language for AI/dev workflows |
| GSAP Skills | https://github.com/greensock/gsap-skills | AI-oriented GSAP implementation guidance |
| Claude SEO | https://github.com/AgriciDaniel/claude-seo | AI-assisted SEO workflows |

---

# 12. Inspiration & Reference Galleries

## Full Websites

| Resource | URL |
|---|---|
| SiteInspire | https://www.siteinspire.com/ |
| Godly | https://godly.website/ |
| Landing.Love | https://www.landing.love/ |

## UI / Product Design

| Resource | URL |
|---|---|
| Collect UI | https://collectui.com/ |
| Dribbble — Footer | https://dribbble.com/search/footer |

## Motion / Interaction

| Resource | URL |
|---|---|
| 60fps | https://60fps.design/ |
| Lenis Showcase | https://www.lenis.dev/showcase |

---

# 13. UX / QA / Accessibility

## Checklist Design — P0 / P1
https://www.checklist.design/

Use it for:
- interface review
- interaction consistency
- completeness
- common UX omissions

## Accessibility References

### React Aria
https://react-aria.adobe.com/

### Base UI
https://base-ui.com/

### WCAG
https://www.w3.org/WAI/standards-guidelines/wcag/

For FoodBridge, prioritize:
- keyboard navigation
- visible focus
- touch target sizes
- readable map controls
- reduced-motion support
- accessible notifications
- screen-reader labels
- strong color contrast

---

# 14. Styling / CSS Foundation

## Tailwind CSS v4 — P0
https://tailwindcss.com/

Tailwind v4.3 is current as of May 2026.

Useful modern areas:
- CSS-first configuration
- custom properties
- container queries
- logical properties
- scrollbar styling
- modern CSS integration

## Modern CSS to learn

```text
CSS Variables
Container Queries
CSS :has()
CSS Nesting
color-mix()
View Transitions
Scroll-driven animations
Logical properties
```

---

# 15. Email / Audio / Browser Utilities

| Resource | URL | Use |
|---|---|---|
| EmailJS | https://www.emailjs.com/ | Client-side email |
| Howler.js | https://howlerjs.com/ | Web audio / sounds |

These are useful when the product needs:
- confirmation emails
- pickup alerts
- optional sound feedback
- celebration / completion audio

---

# 16. SEO

## Claude SEO
https://github.com/AgriciDaniel/claude-seo

Useful for:
- technical SEO
- structured data
- semantic SEO
- AEO / GEO
- local SEO
- content workflows

For FoodBridge:
- searchable public donation/partner pages
- organization pages
- impact pages
- structured organization/event data

---

# 17. Suggested FoodBridge Architecture

```text
                    FOODBRIDGE
                         │
        ┌────────────────┼────────────────┐
        │                │                │
       UI              DATA              AI
        │                │                │
  shadcn/Base UI   TanStack Query     AI SDK
  React Aria       Supabase           Tool calls
  Tailwind         Realtime            Smart match
        │                │                │
        └────────────┬───┴───┬────────────┘
                     │       │
                   MAP     MOTION
                     │       │
                 MapLibre   Motion
                 deck.gl    Rive
                 H3        ViewTransition
                     │       │
                     └──┬────┘
                        │
                      IMPACT
                        │
              Charts / heatmaps / stats
                        │
                   PWA / OFFLINE
                        │
                  Volunteer workflows
```

---

# 18. Best Combination for the Current Project

## Keep

```text
React
Vite
Tailwind
Motion
Leaflet / React-Leaflet
Lucide
React Router
```

## Consider adding next

```text
shadcn/ui
Base UI
React Aria
TanStack Query
Supabase Realtime
MapLibre GL JS
Turf.js
H3
Rive
Vercel AI SDK
PWA / Workbox
Dexie.js
```

## Later / advanced

```text
deck.gl
PostGIS
TanStack Router
Spline
Unicorn Studio
Shaders
WebGPU
```

---

# 19. What to Build From These Tools

## A. Live Rescue Map

```text
          LIVE RESCUE NETWORK

  🟠 Food available
  🟢 NGO
  🔵 Volunteer
  ━━ Active route
  🔴 Urgent

  [Map]
```

## B. Rescue Timeline

```text
10:12  Donation posted
10:15  NGO accepted
10:19  Volunteer assigned
10:27  Pickup started
10:46  Food collected
11:02  Delivered
```

Use:
- Supabase Realtime
- Motion
- ViewTransition
- Rive

## C. Impact Dashboard

```text
12,482 meals rescued
3.7 tons food diverted
1,823 pickups
84 active organizations
2.1 tons estimated CO₂ avoided
```

Use:
- deck.gl
- H3
- charts
- Motion
- Supabase

## D. Smart Match

```text
80 meals available

Best match
────────────
Green Hope NGO

2.4 km away
Accepts prepared meals
Enough capacity
Pickup available

[Accept Match]
```

Use:
- AI SDK
- geospatial queries
- Supabase
- structured tool calling

## E. Volunteer Mode

```text
TODAY

3 pickups
2.8 km total

[ Start Route ]

OFFLINE READY ✓
```

Use:
- PWA
- Workbox
- Dexie
- MapLibre

---

# 20. The Visual Language to Aim For

Avoid turning the site into:

```text
3D hero
+
huge shader
+
random particles
+
AI chatbot
+
10 animation libraries
```

Instead aim for:

```text
CLARITY
  +
WARMTH
  +
MOTION
  +
LOCATION
  +
REAL-TIME STATUS
  +
IMPACT
```

### Visual principles

1. **Maps are product UI, not background decoration.**
2. **Motion communicates state.**
3. **AI performs useful actions.**
4. **3D explains impact rather than existing for its own sake.**
5. **Realtime events should visibly change the interface.**
6. **Mobile/field use matters.**
7. **Accessibility is part of the visual system.**
8. **The design should feel human and civic, not corporate-fintech.**

---

# 21. Top 15 to Explore First

If the list feels too large, start here:

```text
01. MapLibre GL JS
02. Supabase Realtime
03. shadcn/ui
04. Base UI
05. React Aria
06. TanStack Query
07. Rive
08. Vercel AI SDK
09. deck.gl
10. H3
11. Turf.js
12. Tailwind CSS v4
13. React ViewTransition
14. PWA / Workbox
15. Dexie.js
```

---

# 22. Quick Lookup

| Need | Start with |
|---|---|
| Beautiful React UI | shadcn/ui + Base UI |
| Accessible complex UI | React Aria |
| React animation | Motion |
| Complex animation | GSAP |
| Page transitions | React ViewTransition / Barba |
| Smooth scrolling | Lenis |
| Live updates | Supabase Realtime |
| Maps | MapLibre |
| Map analysis | Turf.js |
| Geographic aggregation | H3 |
| Huge map datasets | deck.gl |
| State-driven animation | Rive |
| AI actions | Vercel AI SDK |
| Offline workflow | PWA + Workbox + Dexie |
| Server data caching | TanStack Query |
| 3D | Spline |
| WebGL visuals | Unicorn Studio |
| Shaders | Shaders |
| UI inspiration | Collect UI / Dribbble |
| Website inspiration | SiteInspire / Godly / Landing.Love |
| Motion inspiration | 60fps |
| AI design guidance | UI/UX Pro Max / Impeccable / Taste Skill |
| Design reverse-engineering | Design Extractor |
| SEO | Claude SEO |

---

# 23. Current 2026 Notes

- **React 19.3** is available as of 9 September 2026, with View Transitions and Fragment Refs stable.
- **Tailwind CSS v4.3** shipped in May 2026.
- **shadcn/ui** made Base UI the default base for new projects in July 2026 while continuing to support Radix.
- **React Aria** is now a first-class component base in shadcn/ui.
- **Supabase Realtime** currently supports Broadcast, Presence and database change streaming.
- **MapLibre GL JS** is a TypeScript/WebGL vector-map foundation.
- **deck.gl** is designed for high-performance WebGPU/WebGL2 data visualization.
- **H3** is a strong fit for geographic aggregation and hex-grid analysis.
- **Vercel AI SDK** supports tool calling, generative UI and MCP integrations.
- **PWA/service-worker tooling** remains relevant for reliable offline-capable web applications.

---

# 24. Final Direction

The strongest stack for this project is not "maximum effects."

It is:

```text
MAP
   +
REALTIME
   +
MOTION
   +
AI
   +
ACCESSIBLE UI
   +
OFFLINE
   +
IMPACT DATA
```

That combination gives FoodBridge a coherent identity:

> **A living food-rescue network that users can see, understand, and act on in real time.**

---

## Sources

Selected official references used for the 2026 additions:

- React 19.3 — https://react.dev/blog/2026/09/09/react-19-3
- Tailwind CSS v4.3 — https://tailwindcss.com/blog/tailwindcss-v4-3
- shadcn Base UI default — https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default
- shadcn React Aria — https://ui.shadcn.com/docs/changelog/2026-07-react-aria
- Base UI — https://base-ui.com/
- React Aria — https://react-aria.adobe.com/
- Supabase Realtime — https://supabase.com/docs/guides/realtime
- MapLibre GL JS — https://maplibre.org/maplibre-gl-js/docs/
- deck.gl — https://deck.gl/docs
- Vercel AI SDK — https://ai-sdk.dev/
- H3 — https://h3geo.org/
- Turf.js — https://turfjs.org/
- PostGIS — https://postgis.net/
- Dexie — https://dexie.org/
- Workbox — https://developer.chrome.com/docs/workbox/
- View Transition API — https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
- TanStack Query — https://tanstack.com/query/latest/docs/framework/react/overview
- TanStack Router — https://tanstack.com/router/
- Rive — https://rive.app/

---

*Prepared as a practical reference library, not a recommendation that every listed tool should be adopted. Choose based on product requirements, bundle size, accessibility, maintainability, and team capability.*
