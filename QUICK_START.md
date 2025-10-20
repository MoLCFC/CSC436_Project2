# Quick Start Guide

## 🚀 Running Locally (Development)

The development server is currently running. Open your browser and go to:

```
http://localhost:5173/
```

**Important:** Use `localhost`, NOT the GitHub Pages URL!

### To start the dev server (if not running):
```bash
npm run dev
```

---

## 🌐 Deploy to GitHub Pages

### First Time Setup:

1. **Push to GitHub:**
```bash
git remote add origin https://github.com/molcfc/CSC436_Project2.git
git branch -M main
git push -u origin main
```

2. **Deploy:**
```bash
npm run deploy
```

3. **Enable GitHub Pages:**
   - Go to your repo on GitHub
   - Settings → Pages
   - Source: Select `gh-pages` branch
   - Click Save

4. **Access your live site:**
```
https://molcfc.github.io/CSC436_Project2/
```

---

## 📋 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Check for linting errors
npm run lint
```

---

## 🐛 Troubleshooting

### Issue: 404 errors on GitHub Pages
**Solution:** Make sure you've run `npm run deploy` and enabled the `gh-pages` branch in repo settings.

### Issue: Local server not loading
**Solution:** 
1. Stop the server (Ctrl + C)
2. Run `npm run dev` again
3. Access `http://localhost:5173/`

### Issue: Changes not showing
**Solution:** Hard refresh your browser (Ctrl + Shift + R)

---

## ✅ For Project Submission

You need TWO URLs:

1. **GitHub Repository:**
   - `https://github.com/molcfc/CSC436_Project2`

2. **Live Deployment:**
   - After running `npm run deploy`
   - `https://molcfc.github.io/CSC436_Project2/`

---

## 📦 What's Been Configured

- ✅ Vite configured with correct base path for GitHub Pages
- ✅ `gh-pages` package installed for easy deployment
- ✅ Deploy script added to package.json
- ✅ Professional UI with glassmorphism effects
- ✅ Fully functional task manager with all React fundamentals
- ✅ Git repository initialized with meaningful commits
- ✅ Netlify configuration (alternative deployment)

Choose either **Netlify** (easier) or **GitHub Pages** (free) for deployment!

