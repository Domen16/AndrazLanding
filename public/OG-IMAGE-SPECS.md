# Open Graph Image Specifications

## Recommended OG Image for Social Sharing

Create an image named `og-image.png` with the following specifications:

### Dimensions
- **Size**: 1200x630 pixels (Facebook/LinkedIn standard)
- **Format**: PNG or JPG
- **File size**: Under 8MB (ideally under 1MB)

### Design Elements
1. **Background**: Dark charcoal (#1C1B19) with subtle gradient
2. **Logo**: ROK STRATEGIST logo prominently displayed
3. **Text**: 
   - Main headline: "ROK STRATEGIST"
   - Subheadline: "Master Rise of Kingdoms Strategy"
   - Tagline: "AI-Powered Insights • Weekly Analysis • All Tiers"
4. **Colors**: Use ember-gold (#F5B23A) for accents
5. **Visual**: Include king-commander.png or hero elements

### Alternative Sizes (Optional)
- **Twitter**: 1200x600 pixels (use same design, slightly cropped)
- **Instagram**: 1080x1080 pixels (square format)

### Current Setup
The metadata is currently using:
- Primary: `/logo.png` (1200x1200)
- Secondary: `/hero5.png` (1920x1080)

### To Update
Once you create `og-image.png`, update `app/layout.tsx`:
```typescript
images: [
  {
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'ROK STRATEGIST - Master Rise of Kingdoms',
    type: 'image/png',
  }
]
```

### Testing
Test your OG image at:
- https://www.opengraph.xyz/
- https://cards-dev.twitter.com/validator
- https://developers.facebook.com/tools/debug/
