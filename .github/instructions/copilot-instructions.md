# GitHub Copilot Instructions

This project is a **"Coming Soon" landing page** built using **Next.js + React** to be deployed on Vercel.

## Goals

- Generate a lightweight, responsive landing page.
- Use **React components** inside Next.js pages.
- Keep it simple: no heavy UI frameworks required.
- Ready for Vercel deployment (Hobby/free tier).
- Optional: Email signup form (static or using a service like Mailchimp/Formspree).

## Guidelines for Copilot

### 1. Project Structure

- Main landing page: `pages/index.js` (or `index.tsx` if using TypeScript).
- Components can be created in `components/` folder if needed.
- Styling:
  - Use inline CSS-in-JS (React `style` props) or simple CSS modules (`Home.module.css`).
  - Keep it minimal and responsive.

### 2. Content

- Page title: "Coming Soon".
- Main message: "🚀 Coming Soon".
- Optional subtext: "Stay tuned for something exciting."
- Optional: Email input + submit button.

### 3. Styling

- Center content vertically and horizontally.
- Use clean sans-serif fonts (system fonts preferred).
- Light background (e.g., `#f5f5f5`).
- Responsive design: works on mobile and desktop.

### 4. Deployment

- Must work on Vercel without extra configuration.
- Use static export if possible (`next export`), but dynamic Next.js features are fine too.
- No heavy Node.js backend required for MVP.

## Example Prompts for Copilot

- "Create a Next.js landing page with a centered 'Coming Soon' message."
- "Add a simple responsive email signup form below the message."
- "Style the page so text is centered and background is light gray."
