# Most Recommended Podcasts - 11ty Refactor

## What This Is

This is your website refactored to use 11ty (Eleventy) static site generator with JSON data files.

**Benefits:**
- All content in JSON files (easy to manage)
- Templates generate pages automatically
- Add new person = add 10 lines of JSON (not 400 lines of HTML)
- Same visual design, scalable architecture

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This installs 11ty and all required packages.

### 2. Build the Site

```bash
npm run build
```

This generates your static HTML files in the `_site` directory.

### 3. Preview Locally

```bash
npm run serve
```

Opens a local server at `http://localhost:8080` - you can see your site!

### 4. Deploy to GitHub

After building:

```bash
# Copy built files to root (for GitHub Pages)
cp -r _site/* .

# Commit and push
git add .
git commit -m "Deploy 11ty site"
git push
```

## File Structure

```
├── src/
│   ├── _data/           # All your content (JSON)
│   │   ├── people.json
│   │   ├── podcasts.json
│   │   └── topics.json
│   ├── _layouts/        # Page templates
│   │   └── base.html
│   ├── _includes/       # Reusable components
│   │   ├── header.html
│   │   └── footer.html
│   ├── css/
│   │   └── styles.css
│   ├── index.html       # Homepage
│   ├── people/
│   │   ├── index.html   # People listing
│   │   └── person.html  # Person page template
│   └── topics/
│       ├── index.html   # Topics listing
│       └── topic.html   # Topic page template
├── .eleventy.js         # 11ty configuration
└── package.json         # Dependencies & scripts
```

## How to Add Content

### Add a New Person

Edit `src/_data/people.json`:

```json
{
  "id": "joe-rogan",
  "name": "Joe Rogan",
  "initials": "JR",
  "category": "Podcaster",
  "bio": "Joe Rogan is...",
  "topics": ["business", "health-fitness"],
  "podcasts": ["huberman-lab", "making-sense"]
}
```

Run `npm run build` - new person page automatically created!

### Add a New Podcast

Edit `src/_data/podcasts.json`:

```json
{
  "id": "new-podcast",
  "name": "New Podcast Name",
  "emoji": "🎙️",
  "category": "Business • Tech",
  "description": "Description here...",
  "topics": ["business", "technology"]
}
```

### Add a New Topic

Edit `src/_data/topics.json`:

```json
{
  "id": "health",
  "name": "Health",
  "icon": "🏥",
  "description": "Health podcasts..."
}
```

## NPM Scripts

- `npm run build` - Build the site
- `npm run serve` - Build + run local server
- `npm start` - Same as serve

## What Changed

**Before:**
- 10 separate HTML files for people
- Manual updates everywhere
- Duplicate code

**After:**
- 1 JSON file with all people data
- 1 template generates all person pages
- Update once, changes everywhere

## Deployment

Your site builds to `_site/` directory.

For GitHub Pages, you'll need to either:

**Option A:** Copy _site contents to root
```bash
cp -r _site/* .
git add .
git commit -m "Deploy"
git push
```

**Option B:** Use GitHub Actions (recommended)
Create `.github/workflows/build.yml` - I can provide this if needed.

## Need Help?

- Run `npm run serve` to test locally
- Check `_site` directory to see generated HTML
- All data is in `src/_data/*.json`
- All templates are in `src/**/*.html`

