---
description: How to deploy the Next.js portfolio to Vercel or Netlify
---

# Deploying Your Portfolio

Since your portfolio is built with **Next.js**, the best and easiest ways to host it are **Vercel** (creators of Next.js) or **Netlify**. Both offer excellent free tiers for personal portfolios.

## Prerequisites

1.  **GitHub Repository**: Ensure your code is pushed to a GitHub repository.
    *   If you haven't done this yet:
        ```bash
        git init
        git add .
        git commit -m "Ready for deployment"
        # Create a repo on GitHub.com and follow instructions to push, e.g.:
        # git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
        # git push -u origin main
        ```

---

## Option 1: Vercel (Recommended)

Vercel is optimized for Next.js and requires almost zero configuration.

1.  **Create an Account**: Go to [vercel.com](https://vercel.com/signup) and sign up (continue with GitHub is easiest).
2.  **Import Project**:
    *   On your Vercel dashboard, click **"Add New..."** -> **"Project"**.
    *   Select **Continue with GitHub**.
    *   Find your `Portfolio` repository in the list and click **Import**.
3.  **Configure Project**:
    *   **Framework Preset**: It should auto-detect **Next.js**.
    *   **Root Directory**: Leave as `./` (default).
    *   **Build Command**: `next build` (default).
    *   **Output Directory**: `.next` (default).
    *   **Environment Variables**: If you used any (you likely didn't for this static version, except maybe for FormSubmit which is client-side), you don't need to add any.
4.  **Deploy**:
    *   Click **Deploy**.
    *   Wait about a minute. Vercel will build your site.
    *   Once done, you will get a live URL (e.g., `your-portfolio.vercel.app`).

---

## Option 2: Netlify

Netlify is another robust option.

1.  **Create an Account**: Go to [netlify.com](https://netlify.com) and sign up with GitHub.
2.  **New Site from Git**:
    *   Click **"Add new site"** -> **"Import an existing project"**.
    *   Select **GitHub**.
3.  **Select Repository**: Choose your portfolio repo.
4.  **Build Settings**:
    *   **Base directory**: (leave empty)
    *   **Build command**: `npm run build`
    *   **Publish directory**: `.next` (Netlify usually auto-detects Next.js via a plugin, but if asked, standard Next.js output is server-side. For a static export, you might need to change `next.config.js` to `output: 'export'` and publish directory to `out`. However, the standard dynamic deploy is easier).
5.  **Deploy**: Click **Deploy Site**.

---

## Important Note on "FormSubmit.co"

Since you are using `FormSubmit.co` for your contact form:
1.  **First Submission**: Once your site is live, **go to your contact form and send a test message yourself.**
2.  **Activation**: You will receive an email at `vedha.rajendran22004@gmail.com` asking to **Activate** this form for the new URL.
3.  **Confirm**: Click the activation link in that email. Now your form will work for everyone else!
