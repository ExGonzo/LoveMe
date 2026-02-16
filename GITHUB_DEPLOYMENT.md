# 🚀 Deploy Love Questions to GitHub Pages

Complete guide to get your website live and share it with Sarah!

## 📋 Prerequisites

- GitHub account (free)
- All the project files ready
- About 5 minutes of your time

---

## ✅ Step 1: Create a GitHub Repository

1. Go to **[github.com/new](https://github.com/new)**
2. Fill in the repository details:
   - **Repository name**: `LoveMe` (or any name you want)
   - **Description**: "A special website just for Sarah 💕"
   - **Visibility**: Select **Public**
   - Leave other settings as default
3. Click **Create repository**

---

## 📤 Step 2: Upload Your Files

### Option A: Via GitHub Website (Easiest)

1. On your new repository, click **Add file** → **Upload files**
2. Drag and drop these folders/files:
   ```
   index.html
   game.html
   css/
   js/
   ```
3. Click **Commit changes** at the bottom
4. Done! ✅

### Option B: Via Git Command Line

```bash
# Navigate to your project folder
cd c:\AI_Projects\LoveMe

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Love Questions for Sarah 💕"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/LoveMe.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username!

---

## 🌐 Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Left sidebar → Click **Pages**
4. Under "Build and deployment":
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **main** and **/root** (the default folder)
5. Click **Save**
6. Wait 1-3 minutes for GitHub to deploy

---

## 🔗 Step 4: Share the Link with Sarah

GitHub will soon show you: 
```
Your site is live at: https://YOUR_USERNAME.github.io/LoveMe/
```

**Share this link with Sarah!** That's it! 🎉

---

## 📱 How Sarah Will Use It

1. **Open the link** on her phone or computer
2. **Test the Questions & Answers section** (Ask Him / Ask Her toggle)
3. **Play the game** by clicking 🎮 Game button
4. **Enjoy all the jokes about herself!** 😉

---

## 🎮 What She'll Find

### Main Features:
- **👨 Ask Him** / **👩 Ask Her** toggle to switch modes
- **Questions & Answers** system with ratings
- **🎮 Game** - 15 personalized, playful messages about her (mermaid, princess, naughty, teddy bear obsession, mad face, etc.)
- All data **stored locally** on her device (private & secure)

---

## ✏️ Making Changes After Upload

### If you want to update content:

1. Go to your repository on GitHub
2. Click on the file you want to edit
3. Click the ✏️ **Edit** button (pencil icon)
4. Make changes
5. Scroll down, click **Commit changes**
6. GitHub will redeploy automatically (1-2 minutes)

---

## 🆘 Troubleshooting

### "Site can't be reached"
- Wait 3-5 minutes for GitHub Pages to build
- Hard refresh: Press `Ctrl + Shift + Delete` to clear cache
- Try a different browser

### "404 Error"
- Make sure `index.html` is in the root folder (not in a subfolder)
- Check Settings → Pages again
- Wait another 2-3 minutes

### "Changes not showing"
- Clear browser cache
- Wait 2 minutes for rebuild
- Try opening in incognito/private mode

---

## 🎁 Pro Tips

### Personalize Further:
1. Go to `game.html`
2. Find the `messages` array
3. Edit the jokes/messages to be even more personal
4. Commit changes
5. Sarah will see them live in 1-2 minutes!

### Custom Domain (Optional):
- Buy a domain (Namecheap, Google Domains, etc.)
- In Settings → Pages → Custom domain
- Enter your domain and follow instructions
- Free HTTPS included!

### Share Easily:
- Create a QR code at [qr-server.com](https://qr-server.com)
- Use your GitHub Pages URL
- She can scan it instantly!

---

## 📞 Quick Reference

**Your GitHub Pages URL format:**
```
https://[your-github-username].github.io/[repository-name]/
```

**Example:**
```
https://john123.github.io/LoveMe/
```

---

## ✨ Next Steps

1. ✅ Create repository
2. ✅ Upload files
3. ✅ Enable Pages
4. ✅ Share link with Sarah
5. 🎉 Let her enjoy the website!

---

## 💕 Need Help?

- GitHub Pages Docs: [pages.github.com](https://pages.github.com)
- GitHub Help: [docs.github.com](https://docs.github.com)
- Having issues? Check the browser console (F12 → Console)

---

**You're all set! Go make Sarah smile with your special website! 💕**

Made with ❤️ | Free Forever | GitHub Hosted
