# Forge Automotive Frontend

Luxury automotive atelier frontend built with Next.js App Router, TypeScript, Redux Toolkit, Tailwind CSS, Motion, and GSAP.

## Structure
- `app/`: Route declarations and layout composition only.
- `components/`: UI components organized by feature and section.
- `constants/`: Global constants including icon re-exports (`constants/createIcons.ts`).
- `data/`: Content and static data models.
- `hooks/`: Custom React hooks.
- `lib/`: Third-party clients and helpers.
- `redux/`: Redux Toolkit store, slices, RTK Query API, and Provider.
- `styles/`: Global stylesheets and Motion animation definitions.
- `types/`: TypeScript definitions grouped by domain.
- `utils/`: Utility and pure helper functions.
- `validations/`: Zod schemas for forms and entities.
- `urls.ts`: Central routing and API endpoints.

## Development
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm start
```
