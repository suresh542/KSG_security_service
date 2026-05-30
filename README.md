# KSG Website

This project is a Vite + React website with a contact form powered by a Vercel serverless API route.

## Deployment on Vercel

1. Go to https://vercel.com/new
2. Connect your Git repository containing this project.
3. Set the project root to the repository root.
4. Add the following environment variables in the Vercel dashboard:
   - `EMAIL_HOST`
   - `EMAIL_PORT`
   - `EMAIL_SECURE`
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `EMAIL_TO` (optional, default: `ksgsantharaj@gmail.com`)

## Vercel support

- The frontend is built with Vite and deployed as a static site.
- The contact form submits to `api/contact`.
- The API route is implemented in `api/contact.js`.

## Local development

- Run `npm install` if needed.
- Run `npm run dev` to start Vite locally.
- For testing the contact form locally, run your local email backend or configure the same env vars with a valid SMTP account.
