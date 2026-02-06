# Most Recommended Podcasts - Website Files

## Summary of Updates

All files have been updated according to your requirements:

### 1. ✅ Canonical URL Structure (without .html)
- **Old:** `person-tim-ferriss.html`, `topic-business.html`
- **New:** `/people/tim-ferriss/index.html`, `/topics/business/index.html`
- URLs will display as: `/people/tim-ferriss`, `/topics/business`, etc.

### 2. ✅ Cross-Linking Rules Applied
- All person names link to `/people/{person-slug}`
- All topic tags link to `/topics/{topic-slug}`
- All list references link to `/lists/{list-slug}`
- Navigation updated across all pages

### 3. ✅ Featured People Pages Created (9 new pages)
All with placeholder content matching Tim Ferriss format:
- Naval Ravikant
- Brené Brown
- Sam Harris
- Malcolm Gladwell
- Esther Perel
- Lex Fridman
- Andrew Huberman
- Simon Sinek
- Ryan Holiday

### 4. ✅ Featured Topic Pages Created (5 new pages)
All with placeholder content matching Business format:
- Science
- Technology
- Self-Improvement
- History
- Philosophy

### 5. ✅ Lists Page Updated
- Categories now match homepage: Major Publications, Social Media, Industry, Enthusiasts
- Each category has an ID for anchor linking
- Homepage Featured Lists now link to specific sections (e.g., `/lists#major-publications`)

## File Structure

```
/
├── index.html (Homepage)
├── people/
│   ├── index.html (People landing page)
│   ├── tim-ferriss/index.html
│   ├── naval-ravikant/index.html
│   ├── brene-brown/index.html
│   ├── sam-harris/index.html
│   ├── malcolm-gladwell/index.html
│   ├── esther-perel/index.html
│   ├── lex-fridman/index.html
│   ├── andrew-huberman/index.html
│   ├── simon-sinek/index.html
│   └── ryan-holiday/index.html
├── topics/
│   ├── index.html (Topics landing page)
│   ├── business/index.html
│   ├── science/index.html
│   ├── technology/index.html
│   ├── self-improvement/index.html
│   ├── history/index.html
│   └── philosophy/index.html
└── lists/
    ├── index.html (Lists landing page)
    └── nyt-best-business/index.html
```

## How to Upload to GitHub

1. Download all these files
2. Create/navigate to your GitHub repository
3. Upload the entire folder structure maintaining the directories
4. GitHub Pages will automatically serve the `index.html` files
5. Your URLs will work as: 
   - `yoursite.com/people/tim-ferriss`
   - `yoursite.com/topics/business`
   - `yoursite.com/lists/nyt-best-business`

## Navigation Structure

All pages include:
- Consistent header with logo and navigation
- Footer with links
- Proper cross-linking between People, Lists, and Topics
- Responsive design for mobile

## Next Steps

To continue building:
1. Add more people pages (follow existing format)
2. Add more topic pages (follow existing format)
3. Add more list pages (follow nyt-best-business format)
4. Replace placeholder content with real podcast data
5. Add actual podcast pages when ready

## Important Notes

- All links use root-relative paths (e.g., `/people/tim-ferriss`)
- Topic tags in person pages link to respective topic pages
- Lists page sections have IDs for anchor linking from homepage
- Podcast pages were intentionally skipped per your instructions
