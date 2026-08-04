<div align="center">

# Linn Portfolio

**A modern full-stack portfolio website for an IT Student & Developer**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com)
[![EmailJS](https://img.shields.io/badge/EmailJS-Email-FF6B35?style=flat-square)](https://emailjs.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com)

[Live Demo](https://linn-portfolio.vercel.app) · [Report Bug](https://github.com/coffeeespresso343/linn-portfolio/issues) · [GitHub](https://github.com/coffeeespresso343)

</div>

---

## 📖 Overview

A production-grade personal portfolio built from scratch with React + Tailwind CSS, deployed on Vercel with a serverless contact form powered by EmailJS and Supabase. No separate backend server needed — everything runs on Vercel's edge network.

---

## ✨ Features

| Category           | Features                                                                                                    |
| ------------------ | ----------------------------------------------------------------------------------------------------------- |
| **UI & Animation** | Custom cursor, terminal typewriter, animated skill bars, scroll-triggered fade-ins                          |
| **Navigation**     | Sticky navbar, active link highlight on scroll, mobile slide-out menu with Framer Motion                    |
| **Sections**       | Hero · About · Skills · Projects · Education · Collaborate · Testimonials · Contact                         |
| **Projects**       | Filterable grid by category (Web App / API / Collab)                                                        |
| **Testimonials**   | Single-card carousel with auto-rotate, prev/next nav, dot indicators, pause toggle                          |
| **Contact Form**   | Client + server validation, EmailJS sends to owner + auto-replies to visitor, Supabase stores every message |
| **Extras**         | Download CV button, share portfolio (copy / X / LinkedIn), `Ctrl+K` jump to contact                         |
| **Responsive**     | Mobile-first, works on all screen sizes                                                                     |

---

## 🛠️ Tech Stack

| Layer          | Technology            | Purpose                            |
| -------------- | --------------------- | ---------------------------------- |
| **Frontend**   | React 18 + Vite       | UI framework + build tool          |
| **Styling**    | Tailwind CSS          | Utility-first CSS                  |
| **Animation**  | Framer Motion         | Page transitions + mobile menu     |
| **Email**      | EmailJS               | Sends emails directly from browser |
| **Database**   | Supabase (PostgreSQL) | Stores contact form submissions    |
| **Deployment** | Vercel                | Hosting + serverless functions     |

---

## 📁 Project Structure

```
linn-portfolio/
├── public/
│   └── assets/
│       ├── profile.jpg          ← your profile photo (add this)
│       └── resume.pdf           ← your resume (add this)
│
├── api/
│   └── contact.js               ← Vercel Serverless Function (optional backup)
│
├── src/
│   ├── api/
│   │   ├── contactApi.js        ← orchestrates email + supabase
│   │   ├── emailjs.js           ← EmailJS send logic
│   │   ├── supabase.js          ← Supabase insert logic
│   │
│   ├── components/
│   │   ├── Navbar/              ← sticky nav + mobile menu
│   │   ├── Hero/                ← profile avatar + terminal + stats
│   │   ├── About/               ← profile card + learning ticker
│   │   ├── Skills/              ← animated skill bars + learning objectives
│   │   ├── Projects/            ← filterable project cards
│   │   ├── Education/           ← vertical timeline
│   │   ├── Collaborate/         ← collab cards + invite friends
│   │   ├── Testimonials/        ← single-card carousel
│   │   ├── Contact/             ← form + EmailJS + Supabase
│   │   ├── Footer/
│   │   ├── Toast/               ← global toast notifications
│   │   └── UI/
│   │       └── FadeIn.jsx       ← scroll-reveal wrapper
│   │
│   ├── context/
│        ├── ToastContext.jsx
│   ├── data/
│   │   ├── projects.js          ← all project content
│   │   ├── skills.js            ← skill bars + learning objectives
│   │   ├── education.js         ← timeline entries
│   │   └── testimonials.js      ← review cards
│   │
│   ├── hooks/
│   │   ├── useInView.js         ← IntersectionObserver hook
│   │   ├── useCounter.js        ← animated number counter
│   │   ├── useTerminal.js       ← typewriter terminal loop
│   │   └── useCursor.js         ← custom cursor + hover effects
│   │── sections/
│   │    ├── About.jsx
│   │    ├── Collab.jsx
│   │    ├── Contact.jsx
│   │    ├── Education.jsx
│   │    ├── Hero.jsx
│   │    ├── Projexts.jsx
│   │    ├── Skills.jsx
│   │    ├── Testimonials.jsx
│   │
│   │
│   │
│   ├── App.jsx                  ← root component
│   └── main.jsx                 ← React entry point
│
├── .env.local                   ← secrets (never committed)
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── vercel.json
└── supabase-setup.sql
```

---

## ⚡ Quick Start

### Prerequisites

- Node.js 18+
- [Supabase](https://supabase.com) account — free
- [EmailJS](https://emailjs.com) account — free (200 emails/month)
- [Vercel](https://vercel.com) account — free

---

### 1 — Clone & Install

```bash
git clone https://github.com/coffeeespresso343/linn-portfolio.git
cd linn-portfolio
npm install
```

---

### 2 — Supabase Setup

1. Create a project at [supabase.com](https://supabase.com) → region: **Southeast Asia (Singapore)**
2. Go to **SQL Editor → New Query** → paste and run `supabase-setup.sql`
3. Go to **Project Settings → Data API** and copy:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** key → `VITE_SUPABASE_ANON_KEY`

> ⚠️ Use the `anon` key here, NOT the `service_role` key. The anon key is safe for the browser.

---

### 3 — EmailJS Setup

1. Create account at [emailjs.com](https://emailjs.com)
2. **Email Services** → **Add New Service** → choose **Gmail** → connect your Gmail account → name it `portfolio_gmail` → copy **Service ID**
3. **Email Templates** → create two templates:

**Template 1 — Owner Notification**

```
Name:     owner_notification
To:       your.email@gmail.com
Subject:  📩 [Portfolio] {{subject_label}} from {{from_name}}
Content:  paste ownerTemplate HTML from src/api/emailTemplates.js
```

**Template 2 — Visitor Auto-Reply**

```
Name:     visitor_reply
To:       {{from_email}}
Subject:  Thanks for reaching out, {{from_name}}! 🙌
Content:  paste visitorTemplate HTML from src/api/emailTemplates.js
```

4. **Account → General** → copy your **Public Key**

---

### 4 — Environment Variables

Create `.env.local` in the project root:

```bash
# EmailJS — safe to expose in browser (no VITE_ restriction needed for EmailJS)
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_OWNER_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_VISITOR_TEMPLATE_ID=template_yyyyyyy
VITE_EMAILJS_PUBLIC_KEY=user_xxxxxxxxxxxxxxxxx

# Supabase — anon key only (safe for browser)
VITE_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxx
```

> `.env.local` is already in `.gitignore` — never commit this file.

---

### 5 — Run Locally

```bash
npm run dev
# → http://localhost:5173
```

Test the contact form — you should receive both the owner notification and the visitor auto-reply in your Gmail.

---

## 🚀 Deployment

Everything deploys to **Vercel only** — one platform, one command.

### Step 1 — Push to GitHub

```bash
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/coffeeespresso343/linn-portfolio.git
git push -u origin main
```

### Step 2 — Import to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repository
3. Settings:
   ```
   Framework Preset:  Vite
   Build Command:     npm run build
   Output Directory:  dist
   ```

### Step 3 — Add Environment Variables

In **Vercel Dashboard → Settings → Environment Variables**, add all 6 variables from your `.env.local`:

```
VITE_EMAILJS_SERVICE_ID          = service_xxxxxxx
VITE_EMAILJS_OWNER_TEMPLATE_ID   = template_xxxxxxx
VITE_EMAILJS_VISITOR_TEMPLATE_ID = template_yyyyyyy
VITE_EMAILJS_PUBLIC_KEY          = user_xxxxxxxxxx
VITE_SUPABASE_URL                = https://xxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY           = eyJhbGci...
```

### Step 4 — Deploy

Click **Deploy** → Vercel builds and deploys in ~60 seconds → your portfolio is live at `https://linn-portfolio.vercel.app`.

### Step 5 — Future Updates

```bash
# Any change → push → Vercel auto-redeploys in ~60s
git add .
git commit -m "fix: update project links"
git push
```

---

## 📬 Contact Form Flow

```
User fills form
      ↓
Client-side validation (React)
      ↓
EmailJS.send() × 2 (runs in browser, no server needed)
  ├── Owner notification  → your Gmail
  └── Auto-reply          → visitor's email
      ↓
Supabase.insert()
  └── Saves row to contact_messages table
      ↓
Success screen shown to user
```

**Variables used in EmailJS templates:**

| Variable            | Value                  |
| ------------------- | ---------------------- |
| `{{from_name}}`     | Sender's name          |
| `{{from_email}}`    | Sender's email         |
| `{{subject_label}}` | Human-readable subject |
| `{{message}}`       | Message body           |
| `{{want_collab}}`   | `Yes ✅` or `No`       |

---

## 🔒 Security

| Concern                | How it's handled                                                   |
| ---------------------- | ------------------------------------------------------------------ |
| Secrets in code        | All secrets in `.env.local` — never committed                      |
| Supabase key exposure  | Only `anon` key in browser — scoped to INSERT only via RLS         |
| EmailJS key exposure   | Public key is intentionally public — scoped to your templates only |
| SQL injection          | Supabase client uses parameterized queries automatically           |
| XSS in email templates | All user input sanitized before rendering in HTML emails           |
| Spam / abuse           | EmailJS has built-in rate limiting on free tier                    |

---

## 🎨 Customisation

### Update Your Personal Info

| File                                 | What to change                                  |
| ------------------------------------ | ----------------------------------------------- |
| `src/data/projects.js`               | Your real projects, GitHub links, demo URLs     |
| `src/data/skills.js`                 | Your real skill levels (adjust `pct` values)    |
| `src/data/education.js`              | Your real university, certifications, school    |
| `src/data/testimonials.js`           | Real reviews from teammates, lecturers, clients |
| `src/components/Navbar/Navbar.jsx`   | Change `[LK]` to your initials                  |
| `src/components/Footer/Footer.jsx`   | Your name and year                              |
| `src/components/Contact/Contact.jsx` | Your email, GitHub, LinkedIn, Telegram          |
| `src/api/emailTemplates.js`          | Update portfolio/social links in visitor email  |
| `public/assets/profile.jpg`          | Your real profile photo                         |
| `public/assets/resume.pdf`           | Your real resume                                |

### Replace Profile Photo

The hero section uses an SVG illustrated avatar by default. To use your real photo:

1. Add your photo to `public/assets/profile.jpg`
2. Open `src/components/Hero/ProfileAvatar.jsx`
3. Replace the entire `<svg>...</svg>` block with:

```jsx
<img
  src="/assets/avatar.jpg"
  alt="Your Name"
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  }}
/>
```

### Add / Remove Sections

In `src/App.jsx`:

```jsx
<main>
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Education />
  <Collaborate />
  <Testimonials /> {/* remove this line to hide testimonials */}
  <Contact />
</main>
```

---

## 🗂️ Git Workflow

```bash
# Start a new feature
git checkout -b feat/github-heatmap

# Work on it, then commit
git add .
git commit -m "feat: add GitHub contribution heatmap"

# Push and open PR
git push origin feat/github-heatmap
```

### Commit Convention

```
feat:      new feature or section
fix:       bug fix
style:     UI or CSS change only
refactor:  restructure without behavior change
data:      update projects / skills / education content
docs:      README or comment update
chore:     config, dependencies, tooling
```

---

## 🐛 Troubleshooting

| Problem                            | Solution                                                              |
| ---------------------------------- | --------------------------------------------------------------------- |
| Form shows error / nothing happens | Open browser DevTools → Console → read the error                      |
| Email not received                 | Check spam folder · Check EmailJS dashboard → Logs                    |
| `{{from_name}}` shows literally    | Variable name in `emailjs.js` doesn't match template — check spelling |
| Supabase insert fails              | Check anon key is correct · Re-run `supabase-setup.sql`               |
| Build fails on Vercel              | Check Vercel → Deployments → click failed deploy → read build logs    |
| `yarn not found` on `vercel dev`   | Add `"packageManager": "npm"` to `package.json`                       |
| Styles not working                 | Make sure `@tailwind` directives are in `globals.css`                 |

---

## 📋 Pre-Launch Checklist

```
Content
  ☐ Real name replaced everywhere (search: "Alex Reyes", "Linn")
  ☐ Real email updated (search: "alex.reyes@email.com")
  ☐ Real GitHub, LinkedIn, Telegram links updated
  ☐ Real university and education details updated
  ☐ Real projects with working GitHub/demo links
  ☐ Real skill percentage values
  ☐ Real testimonials from actual people
  ☐ Profile photo added to public/assets/profile.jpg
  ☐ Resume PDF added to public/assets/resume.pdf

Services
  ☐ Supabase project created + SQL table setup
  ☐ EmailJS Gmail service connected
  ☐ Both email templates created and tested
  ☐ All 6 environment variables set in Vercel

Testing
  ☐ Contact form sends owner notification email
  ☐ Contact form sends visitor auto-reply email
  ☐ Supabase table shows new row after submission
  ☐ All nav links scroll to correct sections
  ☐ Project filter buttons work
  ☐ Testimonial carousel arrows work
  ☐ CV download button works
  ☐ Mobile menu opens and closes
  ☐ Site looks good on mobile screen

Deploy
  ☐ Code pushed to GitHub
  ☐ Vercel project imported from GitHub repo
  ☐ Environment variables added to Vercel
  ☐ Production deploy successful
  ☐ Live URL tested end-to-end
```

---

## 👤 Author

**Linn — IT Student & Full-Stack Developer**

[![GitHub](https://img.shields.io/badge/GitHub-coffeeespresso343-181717?style=flat-square&logo=github)](https://github.com/coffeeespresso343)
[![Email](https://img.shields.io/badge/Email-linnkhant343%40gmail.com-EA4335?style=flat-square&logo=gmail)](mailto:linnkhant343@gmail.com)

---

<div align="center">

_Built with ❤️ and too much ☕ · React + Tailwind CSS + Supabase + EmailJS + Vercel_

</div>
