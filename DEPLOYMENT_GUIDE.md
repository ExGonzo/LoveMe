# 🚀 GitHub Pages Deployment Guide

Follow this step-by-step guide to get your Love Questions website live on the internet for FREE using GitHub Pages!

## Pre-requisites

- GitHub account (free)
- Git installed on your computer (or use GitHub Desktop)
- This project folder ready

## Method 1: Using GitHub Website (Easiest - No Command Line!)

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon in the top right → **New repository**
3. **Repository name**: `LoveMe` (or any name you want)
4. **Description**: "A cute website to ask questions and rate answers 💕"
5. Choose **Public** (required for free GitHub Pages)
6. Check ✓ **Add a README.md** (optional, we have one)
7. Click **Create repository**

### Step 2: Upload Project Files

1. Click **Add file** → **Upload files**
2. Drag and drop all files from your project:
   - `index.html`
   - `css/` folder (with style.css)
   - `js/` folder (with app.js)
   - `_config.yml`
   - `README.md`
   - `.gitignore`
3. Click **Commit changes**

### Step 3: Enable GitHub Pages

1. Go to **Settings** (top navigation)
2. Click **Pages** (left sidebar)
3. Under "Build and deployment":
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **main** and **/ (root)**
4. Click **Save**

### Step 4: Wait & Launch

1. GitHub will display: "Your site is live at `https://yourusername.github.io/LoveMe/`"
2. This usually takes 1-3 minutes
3. Click the link and enjoy! 🎉

---

## Method 2: Using Git Command Line

### Step 1: Open Terminal/Command Prompt

On Windows:
- Press `Win + R`, type `cmd`, press Enter
- Or use Git Bash / Windows Terminal

### Step 2: Navigate to Your Project

```bash
cd path/to/LoveMe
```

### Step 3: Initialize Git

```bash
git init
git add .
git commit -m "Initial commit - Love Questions website"
```

### Step 4: Create Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Name it `LoveMe`
3. Choose **Public**
4. Don't initialize with README (we have one)
5. Click **Create repository**
6. Copy the URL (looks like `https://github.com/yourusername/LoveMe.git`)

### Step 5: Push to GitHub

```bash
git remote add origin https://github.com/yourusername/LoveMe.git
git branch -M main
git push -u origin main
```

### Step 6: Enable GitHub Pages

1. Go to Repository Settings → Pages
2. Set Branch to **main** and **/ (root)**
3. Wait 1-3 minutes
4. Your site will be live! 🎉

---

## Method 3: Using GitHub Desktop (GUI)

### Step 1: Install & Open GitHub Desktop

Download from [desktop.github.com](https://desktop.github.com)

### Step 2: Create New Repository

1. Click **File** → **New Repository**
2. **Name**: `LoveMe`
3. **Local Path**: Choose where to save
4. Click **Create Repository**

### Step 3: Add Your Files

1. Copy all project files to the folder created
2. GitHub Desktop will detect changes
3. Click **Publish repository**
4. Choose **Public**
5. Click **Publish Repository**

### Step 4: Enable GitHub Pages

1. Go to Repository Settings → Pages
2. Set Branch to **main** and **/ (root)**
3. Save and wait!

---

## Customizing Your URL

### Option A: Keep Current URL
- Your site: `https://yourusername.github.io/LoveMe/`

### Option B: Use a Custom Domain
1. Buy a domain (Namecheap, Google Domains, etc.)
2. Go to Repository Settings → Pages → Custom domain
3. Enter your domain (e.g., `lovequestions.com`)
4. Follow DNS setup instructions
5. Check ✓ **Enforce HTTPS**

### Option C: Rename Repository to "loveme" (Lower Case)
Your URL becomes: `https://yourusername.github.io/loveme/`

---

## 🛠️ Troubleshooting

### "Site can't be reached"
- Wait 3-5 minutes for GitHub Pages to deploy
- Refresh and try again
- Check Settings → Pages to confirm it's enabled

### "404 Not Found"
- Make sure `index.html` is in the root folder
- Check that you have the right repository permissions
- Try clearing browser cache (Ctrl+Shift+Delete)

### "Changes not showing"
- Go to Settings → Pages and re-confirm the branch
- Wait 2-3 minutes for rebuild
- Clear browser cache
- Try a different browser

### Data/Questions not saving
- This is normal - make sure browser allows localStorage
- Not using private/incognito mode
- Check browser console for JavaScript errors (F12)

---

## 📝 Important Notes

✅ **Free** - No cost, no credit card needed
✅ **Unlimited bandwidth** - Share with anyone
✅ **HTTPS included** - Secure connection
✅ **No ads** - Clean experience
❌ **No backend** - All data stored locally in browser
❌ **Can't have databases** - Use localStorage only

---

## 🔄 Updating Your Website

### Via GitHub Website:
1. Go to each file
2. Click **✏️ (Edit)**
3. Make changes
4. Click **Commit changes**

### Via Git Command Line:
```bash
git add .
git commit -m "Updated content"
git push
```

### Via GitHub Desktop:
1. Make changes in your text editor
2. Changes appear in GitHub Desktop
3. Write a summary and commit
4. Click **Push**

---

## 📱 Share Your Website

Once deployed, you can:

1. **Share the link**: Send `https://yourusername.github.io/LoveMe/` to your girlfriend
2. **Use on mobile**: Works perfectly on phones/tablets
3. **Create a QR code**: Use qr-server.com to generate one
4. **Pin to home screen**: "Add to Home Screen" for app-like experience

---

## 💡 Pro Tips

- **Backup your data**: Periodically export/screenshot questions
- **Use meaningful questions**: This strengthens your connection
- **Regular check-ins**: Review old answers together
- **Customize colors**: Edit `css/style.css` to personalize
- **Add your own emojis**: Change them in `index.html`

---

## 🆘 Need Help?

- GitHub Pages Docs: [pages.github.com](https://pages.github.com)
- GitHub Help: [docs.github.com](https://docs.github.com)
- This README: Check back in the main folder

---

## 🎉 You Did It!

Your website is now live and ready to use! Enjoy creating special moments together! ❤️

---

**Made with ❤️** - Perfect for couples who want to connect and understand each other better.
