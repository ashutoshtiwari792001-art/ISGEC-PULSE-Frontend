# ISGEC PULSE - Frontend

This is the frontend for the ISGEC PULSE application, built using **React + Vite + Material UI + Recharts**.  
It connects to the backend deployed on Render.

---

## 🚀 Development Setup

### 1. Install Dependencies
```
npm install
```

### 2. Start Development Server
```
npm run dev
```

The app will run at:
```
http://localhost:5173
```

---

## 🏗️ Build for Production (Netlify)

**Build Command**
```
npm run build
```

**Publish Directory**
```
dist
```

---

## 🔧 Environment Variable (Netlify)

Add this in:

**Netlify → Site Settings → Build & Deploy → Environment → Add Variable**

```
VITE_API_BASE_URL=https://isgec-pulse-backend.onrender.com
```

⚠️ Required for connecting frontend → backend.

---

## 📁 Project Structure

```
frontend/
│
├── index.html
├── package.json
├── vite.config.js
├── .env.template
│
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── config.js
│   │
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   └── Chart.jsx
│   │
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Projects.jsx
│   │   ├── Billing.jsx
│   │   ├── Analytics.jsx
│   │   └── Profile.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── assets/
│       └── logo.png
│
└── README.md
```

---

## 🎯 Deployment Steps (Full)

### 1. Push entire frontend folder to GitHub repo  
(Upload real folders & files — **not a ZIP**)

### 2. Netlify → “Add new site” → “Import from Git”

### 3. Choose your frontend repository

### 4. Set build values:
```
Build command: npm run build
Publish directory: dist
```

### 5. Add Environment Variable:
```
VITE_API_BASE_URL=https://isgec-pulse-backend.onrender.com
```

### 6. Deploy — your website goes LIVE 🎉

---

## ✔ After Deployment

If login/billing/projects give **Network/CORS errors**:

- Check Netlify has the correct `VITE_API_BASE_URL`
- Check Render has:
```
FRONTEND_ORIGIN=https://<your-netlify-site>.netlify.app
```

---

## 💬 Help

If you want, I can also create:
- A ready-to-download **frontend.zip**
- OR help deploy your frontend live  
- OR validate your GitHub repo folder structure

Just ask.
