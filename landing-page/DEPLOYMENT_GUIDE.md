# GuardGig Landing Page - Deployment Guide

Complete step-by-step guide to deploy your React landing page to production.

## Prerequisites

- GitHub account (for source control and deployment)
- Node.js 16+ installed
- Basic familiarity with command line

## Table of Contents

1. [Local Setup](#local-setup)
2. [Vercel Deployment](#vercel-deployment-recommended)
3. [Railway Deployment](#railway-deployment)
4. [Netlify Deployment](#netlify-deployment)
5. [AWS Amplify Deployment](#aws-amplify-deployment)
6. [Custom Domain Setup](#custom-domain-setup)
7. [Troubleshooting](#troubleshooting)

---

## Local Setup

### Step 1: Clone/Initialize the Project

```bash
# Navigate to project directory
cd c:\D_DRIVE\learningStuffs\TeamUpsurge\landing-page

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: GuardGig landing page"
```

### Step 2: Install Dependencies

```bash
# Install npm packages
npm install

# Verify installation
npm list
```

### Step 3: Run Locally

```bash
# Start development server
npm run dev

# Output will show:
# ➜  Local:   http://localhost:3000/
# ➜  press h to show help
```

Visit `http://localhost:3000` in your browser. You should see the landing page with all sections.

### Step 4: Build for Production

```bash
# Create optimized build
npm run build

# Output directory: dist/
# You'll see:
# ✓ 1234 modules transformed.
# dist/index.html                   0.45 kB
# dist/assets/index-xxxxx.js       120.15 kB
# dist/assets/index-xxxxx.css       15.34 kB
```

### Step 5: Test Production Build Locally

```bash
# Preview production build
npm run preview

# Visit: http://localhost:4173/
# Verify all animations and features work
```

---

## Vercel Deployment (Recommended)

Best for: **React apps, free tier, automatic updates**

### Requirements
- GitHub account
- Vercel account (free)

### Step 1: Push to GitHub

```bash
# Create GitHub repository
# (Go to github.com → New Repository → guardigig-landing)

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/guardigig-landing.git

# Rename branch to main
git branch -M main

# Push code
git push -u origin main
```

### Step 2: Connect to Vercel

**Option A: Via Web Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Import"
6. Vercel auto-detects Vite configuration
7. Click "Deploy"

**Option B: Via CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# ? Set up and deploy "C:\D_DRIVE\learningStuffs\TeamUpsurge\landing-page"? [Y/n] Y
# ? Which scope do you want to deploy to? Your Scope
# ? Link to existing project? [Y/n] n
# ? What's your project's name? guardigig-landing
# ? In which directory is your code located? ./
# ? Want to modify these settings? [y/N] n
# ✓ Deployed to vercel.com (in 45s)
```

### Step 3: Verify Deployment

After deployment, you'll get a URL like: `https://guardigig-landing.vercel.app`

```bash
# Your app is live! 🎉

# Future deployments are automatic:
# Just push to GitHub → Vercel auto-deploys
```

### Add Custom Domain (Optional)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., guardigig.com)
3. Update DNS records (provided by Vercel)
4. Wait 24-48 hours for propagation

---

## Railway Deployment

Best for: **Simple setup, also free tier**

### Step 1: Push to GitHub (if not done)

```bash
git push -u origin main
```

### Step 2: Connect to Railway

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Select your repository
6. Click "Deploy"

### Step 3: Configure (if needed)

Railway often auto-detects Vite:

```bash
# If you need to set build command manually:
# In Railway Dashboard → Environment → Variables:
# NIXPACKS_BUILD_CMD = npm run build
# NIXPACKS_INSTALL_CMD = npm install
```

### Step 4: Access Your Site

- Railway provides URL automatically
- View in "Deployments" tab
- Example: `https://guardigig-landing-production.up.railway.app`

---

## Netlify Deployment

Best for: **Best UI/UX, easy rollbacks**

### Step 1: Push to GitHub

```bash
git push -u origin main
```

### Step 2: Connect to Netlify

**Via Web Dashboard**

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select GitHub provider
5. Select your repository
6. Build settings auto-filled:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy site"

**Via Netlify CLI**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
# Select: dist folder
```

### Step 3: Custom Domain

1. Go to Netlify Dashboard → Domain settings
2. Add your custom domain
3. Update DNS records in your domain registrar

---

## AWS Amplify Deployment

Best for: **Enterprise, scalable infrastructure**

### Step 1: Connect to GitHub

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Choose GitHub
4. Authorize AWS to access GitHub
5. Select your repository and branch

### Step 2: Configure Build Settings

3. Amplify shows suggested settings:
   ```
   Build image: Amazon Linux 2
   Build commands: npm ci && npm run build
   Publish artifacts: dist
   ```

4. Click "Save and deploy"

### Step 3: Monitor Deployment

- Watch the build logs in real-time
- Once successful, get a CloudFront URL
- Example: `d1234567890.cloudfront.net`

---

## GitHub Pages Deployment

Best for: **GitHub users, free, simple**

### Step 1: Update Vite Config

Edit `vite.config.js`:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/guardigig-landing/', // Add your repo name
})
```

### Step 2: Build and Deploy

```bash
# Build
npm run build

# Deploy to gh-pages branch
npm install gh-pages --save-dev

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

npm run deploy
```

### Step 3: Enable Pages

1. Go to GitHub repo → Settings → Pages
2. Select "Deploy from a branch"
3. Branch: `gh-pages`, Folder: `/ (root)`
4. Save

Your site: `https://YOUR_USERNAME.github.io/guardigig-landing/`

---

## Custom Domain Setup

### DNS Configuration

For any deployment platform:

1. **Buy Domain** (Namecheap, GoDaddy, etc.)
2. **Get Platform DNS Records** (from Vercel/Railway/Netlify)
3. **Update DNS Settings**:
   - Remove old nameservers
   - Add platform nameservers
   - Or add CNAME/A records pointing to platform

4. **Wait 24-48 hours** for DNS propagation

5. **Test**: `ping guardigig.com` or check with nslookup

### SSL Certificate

- **Vercel**: Automatic (no action needed)
- **Netlify**: Automatic via Let's Encrypt
- **Railway**: Automatic
- **AWS Amplify**: Automatic via AWS Certificate Manager

---

## Monitoring & Maintenance

### Analytics

Add Google Analytics:

1. Update `index.html` GA ID: `G-XXXXXXXXXX`
2. Replace with your actual Google Analytics ID
3. View metrics at [analytics.google.com](https://analytics.google.com)

### Performance Monitoring

```bash
# Check with Lighthouse
# In Chrome DevTools → Lighthouse → Analyze page load

# Expected Scores:
# Performance: 95+
# Accessibility: 95+
# Best Practices: 95+
# SEO: 95+
```

### Update Deployment

```bash
# Make changes locally
code .

# Test locally
npm run dev

# Build
npm run build

# Commit and push
git add .
git commit -m "Update landing page"
git push origin main

# For Vercel/Railway/Netlify:
# ✅ Auto-deploys on push!

# Check deployment status on platform dashboard
```

---

## Troubleshooting

### Issue: Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Issue: Animations Not Working

```bash
# Check Framer Motion is installed
npm list framer-motion

# Reinstall if needed
npm install framer-motion
```

### Issue: Styles Not Applied

```bash
# Rebuild Tailwind CSS
npm run build

# Check PostCSS config
cat postcss.config.js
```

### Issue: Page Looks Different on Deployed Site

1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)
3. Wait 5 minutes for CDN cache to clear
4. Check deployment logs for errors

### Issue: Custom Domain Not Working

```bash
# Check DNS propagation
nslookup guardigig.com

# Should show platform IP/CNAME
# If not, wait and retry
# Max 48 hours for global propagation
```

---

## Performance Optimization checklist

- ✅ Minified bundle (Vite does this)
- ✅ Image optimization (use WebP format)
- ✅ CSS tree-shaking (Tailwind does this)
- ✅ Code splitting (Vite does this)
- ✅ Gzip compression (platforms handle this)
- ✅ CDN distribution (all platforms use CDN)

---

## Next Steps

1. **Deploy to Vercel** (recommended first deployment)
2. **Test on production URL**
3. **Share with team/stakeholders**
4. **Add custom domain**
5. **Monitor analytics**
6. **Plan backend integration** (Phase 2)

---

## Quick Reference

| Platform | Free Tier | Setup Time | Auto-Deploy | SSL |
|----------|-----------|-----------|------------|-----|
| **Vercel** | 100GB/mo | 5 min | ✅ | ✅ |
| **Railway** | 100 hours/mo | 5 min | ✅ | ✅ |
| **Netlify** | 300 min/mo | 5 min | ✅ | ✅ |
| **Amplify** | $0.15/hr | 10 min | ✅ | ✅ |
| **GitHub Pages** | Unlimited | 10 min | ✅ | ✅ |

---

## Need Help?

- **Documentation**: [Vite Docs](https://vitejs.dev) | [React Docs](https://react.dev)
- **Deployment**: Check platform documentation
- **Bugs**: Check browser console (F12 → Console tab)
- **Performance**: Use Lighthouse in Chrome DevTools

---

**Happy Deploying!** 🚀
