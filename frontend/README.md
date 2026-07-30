# 🚀 Linn Portfolio — Full-Stack Portfolio Website

A professional portfolio website built with **React + Tailwind CSS** (frontend) and **Spring Boot + MySQL** (backend), featuring a live contact form that sends emails directly to the owner's inbox.

---

## 📁 Project Structure

```
linn-portfolio-website/
├── frontend/                          ← React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── api/                       ← API call layer (contactApi.js)
│   │   ├── components/                ← All UI sections as components
│   │   │   ├── Navbar/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Skills/
│   │   │   ├── Projects/
│   │   │   ├── Education/
│   │   │   ├── Collaborate/
│   │   │   ├── Contact/
│   │   │   ├── Footer/
│   │   │   ├── Toast/
│   │   │   └── UI/
│   │   ├── data/                      ← Content data files (projects, skills, education)
│   │   ├── hooks/                     ← Custom React hooks
│   │   └── styles/                    ← Global CSS + Tailwind directives
│   ├── .env                           ← VITE_API_BASE_URL (not committed)
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── backend/                           ← Spring Boot + MySQL
│   └── portfolio/
│       ├── src/main/java/com/linn/portfolio/
│       │   ├── config/                ← CORS, Security, Exception Handler
│       │   ├── controller/            ← REST endpoints
│       │   ├── dto/                   ← Request/Response shapes
│       │   ├── model/                 ← JPA entities
│       │   ├── repository/            ← Spring Data JPA
│       │   ├── service/               ← Business logic + email sending
│       │   └── PortfolioApplication.java
│       ├── src/main/resources/
│       │   ├── application.properties          ← Non-secret config
│       │   └── application-local.properties    ← Secrets (not committed)
│       ├── setup.sql
│       └── pom.xml
│
└── README.md
```

---

## 🛠️ Tech Stack

| Layer     | Technology                                     |
| --------- | ---------------------------------------------- |
| Frontend  | React 18, Vite, Tailwind CSS, Framer Motion    |
| Backend   | Spring Boot 3, Spring Security, Spring Mail    |
| Database  | MySQL 8                                        |
| Auth/Mail | Gmail SMTP with App Password                   |
| Deploy    | Vercel (frontend) · Railway / Render (backend) |

---

## ⚡ Quick Start

### Prerequisites

- Node.js 18+
- Java 17+
- Maven 3.8+
- MySQL 8+

---

### 1 — Database Setup

```bash
mysql -u root -p < backend/portfolio/setup.sql
```

This creates the `portfolio_db` database and `contact_messages` table.

---

### 2 — Backend Configuration

Create `backend/portfolio/src/main/resources/application-local.properties`:

```properties
# Database
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

# Gmail SMTP (use App Password, not your real Gmail password)
spring.mail.username=your.email@gmail.com
spring.mail.password=xxxx xxxx xxxx xxxx

# Portfolio owner — where contact emails get sent TO
portfolio.owner.email=your.email@gmail.com
portfolio.owner.name=Linn
```

> **How to get a Gmail App Password:**
>
> 1. Go to [myaccount.google.com](https://myaccount.google.com) → Security
> 2. Enable 2-Step Verification
> 3. Search "App passwords" → Generate one for Mail
> 4. Paste the 16-character code above

---

### 3 — Run the Backend

```bash
cd backend/portfolio
mvn spring-boot:run
# Runs on http://localhost:8080
```

Test it:

```bash
curl http://localhost:8080/api/contact/health
# → { "success": true, "message": "Portfolio API is running 🚀" }
```

---

### 4 — Frontend Configuration

Create `frontend/.env`:

```bash
VITE_API_BASE_URL=http://localhost:8080
```

---

### 5 — Run the Frontend

```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 API Endpoints

| Method  | Endpoint                 | Description              |
| ------- | ------------------------ | ------------------------ |
| `POST`  | `/api/contact/send`      | Submit contact form      |
| `GET`   | `/api/contact/messages`  | Get all messages (admin) |
| `GET`   | `/api/contact/collab`    | Get collab requests      |
| `PATCH` | `/api/contact/{id}/read` | Mark message as read     |
| `GET`   | `/api/contact/health`    | Health check             |

### Contact Form Request Body

```json
{
  "senderName": "John Doe",
  "senderEmail": "john@example.com",
  "subject": "collab",
  "message": "Hey, I have a project idea...",
  "wantCollab": true
}
```

### Response

```json
{
  "success": true,
  "message": "Message sent successfully!",
  "data": { "messageId": 1, "status": "SENT" }
}
```

---

## 🔒 Security Features

| Feature               | Details                                       |
| --------------------- | --------------------------------------------- |
| Rate Limiting         | 5 messages per IP per hour                    |
| Input Validation      | `@Valid` on all DTO fields (backend)          |
| CORS                  | Restricted to configured origins              |
| Security Headers      | X-Frame-Options, X-Content-Type-Options, etc. |
| Environment Variables | No secrets in source code                     |
| Stack Trace Hiding    | Generic error messages returned to client     |
| Dedicated DB User     | Least-privilege MySQL user (recommended)      |

---

## ✨ Frontend Features

- Custom animated cursor
- Terminal typewriter animation
- Animated skill progress bars
- Project filter by category
- Scroll-triggered fade-in animations
- Active nav link highlight on scroll
- Contact form with client + server validation
- Fallback to `mailto:` if backend is offline
- Share portfolio (copy link / X / LinkedIn)
- `Ctrl + K` shortcut to jump to contact form
- Fully responsive (mobile, tablet, desktop)

---

## 🚀 Deployment

### Frontend → Vercel

```bash
cd frontend
npm run build
# Upload dist/ to Vercel, or connect GitHub repo
```

Set environment variable in Vercel dashboard:

```
VITE_API_BASE_URL = https://your-backend-url.railway.app
```

### Backend → Railway / Render

```bash
cd backend/portfolio
mvn clean package
# Upload the JAR or connect GitHub repo
```

Set environment variables in the platform dashboard:

```
spring.datasource.username = your_db_user
spring.datasource.password = your_db_password
spring.mail.username       = your.email@gmail.com
spring.mail.password       = your_app_password
portfolio.owner.email      = your.email@gmail.com
portfolio.owner.name       = Linn
```

Update CORS in `application.properties` for production:

```properties
portfolio.cors.allowed-origins=https://your-portfolio.vercel.app
```

---

## 🗂️ Git Workflow

```bash
# Clone the repo
git clone https://github.com/yourusername/linn-portfolio.git
cd linn-portfolio

# Create a feature branch
git checkout -b feat/your-feature-name

# Stage and commit
git add .
git commit -m "feat: add your feature description"

# Push and open PR
git push origin feat/your-feature-name
```

### Commit Message Convention

```
feat:     new feature
fix:      bug fix
style:    UI/CSS changes only
refactor: code restructure, no behavior change
docs:     README or comment updates
chore:    config, dependencies, tooling
```

---

## 👤 Author

**Linn (Coffee Espresso)**

- GitHub: [@coffeeespresso343](https://github.com/coffeeespresso343)
- Email: coffeeespresso304@gmail.com

---

_Built with Heart and too much Coffee_
