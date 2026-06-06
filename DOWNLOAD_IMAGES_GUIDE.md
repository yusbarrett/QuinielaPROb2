# Stock Images Download Guide for Quiniela WC 2026

This guide helps you download and organize stock images for soccer/World Cup themes across the app.

## Directory Structure
```
client/public/images/
├── backgrounds/
│   ├── soccer-field.jpg         (Main global background)
│   ├── stadium.jpg               (Secondary background)
│   └── grass-pattern.jpg         (Texture overlay)
└── heroes/
    ├── home-hero.jpg             (Home page hero section)
    ├── world-cup-hero.jpg        (World Cup page hero)
    ├── daily-schedule-hero.jpg   (Daily Schedule hero)
    ├── predictions-hero.jpg      (Predictions page hero)
    ├── fair-play-hero.jpg        (Fair Play page hero)
    └── settings-hero.jpg         (Settings page hero)
```

## Recommended Images to Download

### Global Background Images
1. **soccer-field.jpg** (1920x1080+)
   - Search: "Soccer field top view" OR "Football pitch aerial"
   - Recommended sites: Unsplash, Pexels, Pixabay
   - Suggested URLs:
     - https://unsplash.com/photos/soccer-field
     - https://unsplash.com/photos/green-grass-field
   - File size: Keep under 500KB (compress if needed)

2. **stadium.jpg** (1920x1080+)
   - Search: "Stadium night lights" OR "Football stadium empty"
   - Creates depth with layered backgrounds

### Hero Section Images (Each page)
1. **home-hero.jpg** - World Cup logo or trophy on field
   - Search: "FIFA World Cup trophy" OR "Trophy soccer"
   
2. **world-cup-hero.jpg** - Stadium with crowd
   - Search: "Stadium crowd football" OR "World Cup stadium"
   
3. **daily-schedule-hero.jpg** - Calendar/schedule themed
   - Search: "Soccer match schedule" OR "Stadium preparation"
   
4. **predictions-hero.jpg** - Players in action
   - Search: "Soccer player scoring" OR "Football action"
   
5. **fair-play-hero.jpg** - Players fair play moment
   - Search: "Fair play football" OR "Soccer handshake"
   
6. **settings-hero.jpg** - Soccer equipment/gear
   - Search: "Soccer equipment" OR "Football gear"

## How to Download from Unsplash (Free & Commercial Use)

1. Visit https://unsplash.com
2. Search for the image type (e.g., "soccer field")
3. Click on the image
4. Download the full resolution
5. Rename to match the filenames above
6. Place in the appropriate `client/public/images/` subdirectory
7. Compress if file size > 500KB (use ImageOptim, TinyPNG, or similar)

## Other Free Stock Image Sites
- **Pexels**: https://www.pexels.com (search "soccer" or "football")
- **Pixabay**: https://pixabay.com (search "football world cup")
- **Unsplash**: https://unsplash.com (search "soccer" or "football stadium")

## Image Optimization Tips
- Target dimensions: 1920x1080 or higher
- File format: JPG (for photos) or WebP (for better compression)
- Max file size: 300-500KB each (compress if larger)
- Tools: ImageOptim (Mac), FileOptimizer (Windows), or online tools like TinyPNG

## After Downloading Images

1. Place downloaded images in their respective directories
2. The app CSS will automatically reference these local images
3. Images will be loaded from `/images/backgrounds/` and `/images/heroes/`
4. No code changes needed - just drop files in place!

## Notes
- Images support dark/light theme automatically via CSS overlays
- All images use lazy loading for better performance
- Backgrounds are fixed and blur with backdrop filters for a premium look
- Hero images are optimized for mobile (responsive sizing)
