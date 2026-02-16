# 💕 Love Questions - Ask & Rate

A cute and interactive website for couples to ask questions and rate each other's answers. Built with vanilla HTML, CSS, and JavaScript - perfect for GitHub Pages hosting!

## ✨ Features

- 💬 Ask questions and provide answers
- ⭐ Rate answers with a 5-star rating system
- 🎨 Beautiful, cute, and responsive design
- 💾 All data saved locally (localStorage)
- 📊 Statistics dashboard showing total questions, average rating, and best rating
- 🔄 Filter questions (All, Rated, Unrated)
- ✏️ Edit existing questions and answers
- 🗑️ Delete questions
- 📱 Fully mobile-responsive

## 🚀 Quick Start (GitHub Pages)

### Option 1: Fork & Deploy Immediately

1. **Fork this repository** to your GitHub account
2. Go to repository **Settings** → **Pages**
3. Select **main** branch as source
4. Your site will be live at: `https://yourusername.github.io/LoveMe/`

### Option 2: Clone & Deploy

```bash
# Clone the repository
git clone https://github.com/yourusername/LoveMe.git
cd LoveMe

# Push to your GitHub repository
git remote set-url origin https://github.com/yourusername/LoveMe.git
git push -u origin main
```

Then enable GitHub Pages in repository settings.

### Option 3: Manual Upload

1. Create a new repository on GitHub named `LoveMe`
2. Upload all files to the repository
3. Enable GitHub Pages in Settings
4. Your site will be live immediately!

## 📂 Project Structure

```
LoveMe/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling and animations
├── js/
│   └── app.js         # All JavaScript functionality
├── _config.yml        # GitHub Pages configuration
└── README.md          # This file
```

## 🎯 How to Use

1. **Ask a Question**: Type your question in the input field
2. **Write Your Answer**: Provide a thoughtful answer
3. **Submit**: Click the submit button
4. **Rate the Answer**: Click the stars to rate from 1-5
5. **Edit or Delete**: Use the action buttons to manage entries
6. **View Stats**: See your statistics update in real-time

## 💡 Data & Privacy

- All data is stored **locally on your device** using browser's localStorage
- **No data is sent to any server** - it's completely private
- Data persists across browser sessions
- Clearing browser data will delete all stored information

## 🎨 Customization

### Change Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #ff6b9d;      /* Main pink */
    --secondary-color: #ffc8dd;    /* Light pink */
    --accent-color: #c44569;       /* Dark pink */
    --light-bg: #fff5f9;           /* Background */
    --card-bg: #ffffff;            /* Card background */
    /* ... more colors ... */
}
```

### Change Text & Emojis

Simply edit `index.html` to change:
- Title and headings
- Placeholder text
- Emoji characters
- Button labels

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚙️ Requirements

- **No backend needed!**
- **No database required!**
- **No installation needed!**
- Just browser and GitHub Pages

## 🤝 Contributing

Feel free to customize and make it your own! Here are some ideas:

- Add categories for different types of questions
- Create a dark mode toggle
- Add sound effects
- Customize colors and emojis
- Add animations
- Create a backup/export feature

## 💌 Tips for Use

- Use this to strengthen your relationship
- Ask meaningful questions
- Be honest in your answers
- Take time to read each other's responses
- Update and reflect on past conversations

## 🐛 Troubleshooting

### Site not loading?
- Wait 2-3 minutes for GitHub Pages to build
- Check repository Settings → Pages
- Ensure `index.html` is in the main branch root
- Try a different browser

### Data not saving?
- Check if localStorage is enabled in browser settings
- Browser's private/incognito mode doesn't save data
- Check browser console (F12) for errors

### Want to rename the site?
- Go to Settings → General
- Change repository name
- Update GitHub Pages URL accordingly

## 📄 License

Free to use and customize for personal use!

---

Made with ❤️ for love and connection
