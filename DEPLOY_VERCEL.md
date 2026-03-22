# Vercel Deployment (Web App)

## Project Root

In Vercel, set **Root Directory** to:

`anything/apps/web`

## Build Settings

- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `build/client`

## Environment Variables

Add these in Vercel Project Settings -> Environment Variables:

- `AUTH_SECRET`
- `AUTH_URL`
- `DATABASE_URL`
- `NEXT_PUBLIC_BASE_CREATE_USER_CONTENT_URL`
- `NEXT_PUBLIC_CREATE_API_BASE_URL`
- `NEXT_PUBLIC_CREATE_BASE_URL`
- `NEXT_PUBLIC_PROJECT_GROUP_ID`

Use `anything/apps/web/.env.example` as the template.
