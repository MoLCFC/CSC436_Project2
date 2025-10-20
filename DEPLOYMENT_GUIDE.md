# Deployment Guide - Task Manager App

## Prerequisites

Before deploying, ensure you have:
- ✅ Node.js and npm installed
- ✅ Git installed and repository initialized
- ✅ GitHub account (for repository hosting)
- ✅ Netlify account (free tier is sufficient)

## Step 1: Build the Project Locally

Test that the production build works:

```bash
npm run build
```

This creates a `dist` folder with optimized production files. Verify there are no build errors.

## Step 2: Push to GitHub

### Create a New Repository on GitHub:

1. Go to [GitHub](https://github.com)
2. Click the "+" icon → "New repository"
3. Name it: `csc436-project2-task-manager` (or your preferred name)
4. Do NOT initialize with README (we already have one)
5. Click "Create repository"

### Push Your Local Repository:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/csc436-project2-task-manager.git

# Push your code
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Netlify

### Option A: Netlify CLI (Recommended)

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team
- Site name: `your-name-task-manager`
- Build command: `npm run build`
- Publish directory: `dist`

4. Deploy:
```bash
netlify deploy --prod
```

### Option B: Netlify Web Interface

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select your repository: `csc436-project2-task-manager`
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: (leave empty)
6. Click "Deploy site"

Your site will be live in 1-2 minutes!

### Option C: Drag and Drop (Quick Method)

1. Build locally: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder onto the page
4. Wait for deployment to complete

**Note**: This method doesn't connect to Git, so you won't get automatic deployments.

## Step 4: Get Your Live URL

After deployment, Netlify assigns a URL like:
```
https://random-name-123456.netlify.app
```

### Customize Your URL (Optional):

1. Go to Site settings → Domain management
2. Click "Options" → "Edit site name"
3. Change to something like: `yourname-task-manager`
4. New URL: `https://yourname-task-manager.netlify.app`

## Step 5: Submit Your Project

For your CSC 436 submission on Brightspace, provide:

1. **Live URL**: Your Netlify deployment URL
   - Example: `https://yourname-task-manager.netlify.app`

2. **GitHub Repository URL**: Your public GitHub repo
   - Example: `https://github.com/yourusername/csc436-project2-task-manager`

## Troubleshooting

### Build Fails on Netlify

**Issue**: Build command fails with npm errors

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# Try building again
npm run build
```

### Site Shows Blank Page

**Issue**: Deployed site shows blank page or 404

**Solution**: Check that:
- Build directory is set to `dist` (not `build`)
- The `netlify.toml` file includes redirect rules (already included in this project)
- Browser console for errors (check if API URLs need updating)

### Node Version Warnings

**Issue**: Netlify shows Node.js version warnings

**Solution**: Add to `netlify.toml`:
```toml
[build.environment]
  NODE_VERSION = "20.13.1"
```

### Changes Not Showing

**Issue**: Pushed changes but site hasn't updated

**Solution**:
1. Check Netlify dashboard → Deploys
2. Verify the latest commit is deployed
3. Clear browser cache (Ctrl+Shift+R)
4. Trigger manual deploy if needed

## Automatic Deployments

With GitHub integration, Netlify automatically deploys when you:
```bash
git add .
git commit -m "Update feature"
git push
```

Watch the deployment progress in Netlify dashboard.

## Custom Domain (Optional)

To use your own domain:

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

## Performance Optimization

Your Netlify site automatically includes:
- ✅ Global CDN distribution
- ✅ HTTPS/SSL certificate
- ✅ Automatic asset optimization
- ✅ Gzip compression
- ✅ HTTP/2 support

## Monitoring Your Site

### Netlify Analytics (Optional - Paid):
- Visitor statistics
- Page views
- Performance metrics

### Free Alternatives:
- Google Analytics
- Cloudflare Analytics
- Plausible Analytics

## Environment Variables (If Needed)

If your app needs API keys or environment variables:

1. Go to Site settings → Build & deploy → Environment
2. Click "Edit variables"
3. Add your variables (e.g., `VITE_API_KEY`)
4. Trigger redeploy

**Note**: This project doesn't require environment variables.

## Rollback Instructions

If a deployment breaks your site:

1. Go to Deploys tab
2. Find a working previous deployment
3. Click the three dots → "Publish deploy"
4. Your site reverts to that version

## Next Steps After Deployment

1. ✅ Test all functionality on the live site
2. ✅ Test on mobile devices
3. ✅ Check browser console for errors
4. ✅ Verify all links work
5. ✅ Share the link with classmates
6. ✅ Submit URLs to Brightspace

## Support Resources

- [Netlify Documentation](https://docs.netlify.com)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment Docs](https://react.dev/learn/start-a-new-react-project#deploying-to-production)

## Submission Checklist

Before submitting, ensure:

- [ ] Live site is accessible and functional
- [ ] GitHub repository is public
- [ ] README.md is complete and professional
- [ ] All features work on live deployment
- [ ] No console errors on live site
- [ ] Responsive on mobile devices
- [ ] Repository has meaningful commit history

## Example Submission Format

```
BRIGHTSPACE SUBMISSION:

Live URL: https://yourname-task-manager.netlify.app
GitHub Repository: https://github.com/yourusername/csc436-project2-task-manager

Project: Task Manager - React Fundamentals
Description: A component-based task management application demonstrating 
React fundamentals including useState, props, and event handling.

Technologies: React, Vite, CSS3
Deployment: Netlify with automatic GitHub integration
```

---

**Good luck with your deployment! 🚀**

