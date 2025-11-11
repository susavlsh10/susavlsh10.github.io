# Polar Sparsity Research Page - Documentation

## Overview

The Polar Sparsity page has been redesigned as a modern, professional research paper landing page without the sidebar, providing a clean, focused presentation of the research.

## Structure

### Layout
- **File**: `_layouts/research-paper.html`
- **Purpose**: Full-width layout without sidebar, specifically designed for research paper pages
- **Usage**: Add `layout: research-paper` to the front matter of any research page

### Styling
- **File**: `_sass/_custom.scss`
- **Classes**: All research paper styles are prefixed with `research-*`
- **Features**:
  - Gradient hero section
  - Responsive grid layouts
  - Modern card designs
  - Smooth animations and hover effects

## Page Sections

### 1. Hero Section (`.research-hero`)
- Full-width gradient background
- Paper title and subtitle
- Author list with affiliations
- Meta information (conference, tags)
- Call-to-action buttons (Paper, Code, PDF, Resources)

### 2. Abstract Section (`.research-section`)
- Clean, readable typography
- Highlights key contributions
- Professional spacing and layout

### 3. Key Insights (`.feature-grid`)
- 3-column responsive grid
- Icon-based cards
- Hover effects

### 4. Performance Metrics (`.metrics-grid`)
- Gradient metric cards
- Large, bold numbers
- Eye-catching presentation

### 5. Technical Innovations
- Structured list with headings
- Clear hierarchy
- Detailed explanations

### 6. Methodology Timeline (`.research-timeline`)
- Visual timeline with connecting line
- Step-by-step process
- Clear progression indicators

### 7. Results & Visualizations (`.figure-grid`)
- Responsive image grid
- Placeholder system for future images
- Professional captions

### 8. Future Directions (`.feature-grid`)
- Grid of research directions
- Icon-based organization
- Easy to scan

### 9. Resources Section (`.research-resources`)
- Boxed, prominent placement
- Icon-based links
- Clear download options

### 10. Citation & Contact
- Formatted BibTeX
- Contact information
- Professional presentation

## Customization Guide

### Colors
The color scheme uses a purple gradient theme. To change:

```scss
// In _sass/_custom.scss, update these values:
.research-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); // Change these hex values
}

.metric-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); // Match hero or use different colors
}
```

### Typography
Font sizes are responsive and use rem units:
- Hero title: 3rem (mobile: 2rem)
- Section headings: 2.2rem (mobile: 1.8rem)
- Body text: 1.1rem
- Metadata: 1rem

### Adding New Sections
To add a new section, use this template:

```html
<section class="research-section">
  <h2>Your Section Title</h2>
  <p>Your content here...</p>
  
  <!-- Optional: Add a feature grid -->
  <div class="feature-grid">
    <div class="feature-card">
      <h3>Feature Title</h3>
      <p>Feature description</p>
    </div>
  </div>
</section>
```

### Image Placeholders
Current placeholders are in `/images/polar-sparsity/placeholder.svg`

To replace with actual figures:
1. Add high-res images to `/images/polar-sparsity/`
2. Update image src in `_pages/polar-sparsity.md`
3. Keep alt text descriptive for accessibility

## Responsive Design

The layout is fully responsive with breakpoints:
- Desktop: > 768px (multi-column grids)
- Mobile: ≤ 768px (single column, adjusted typography)

All grids automatically stack on mobile using CSS Grid's `auto-fit` and `minmax()`.

## Icon Usage

The page uses Font Awesome icons (already available in the site):
- `fas fa-*` for solid icons
- `fab fa-*` for brand icons (GitHub, etc.)

Example:
```html
<i class="fas fa-file-pdf"></i> <!-- PDF icon -->
<i class="fab fa-github"></i> <!-- GitHub icon -->
```

## Next Steps

1. **Update arXiv link**: Replace placeholder in hero section
2. **Add actual figures**: Replace SVG placeholders with paper figures
3. **Add presentation slides**: When available, link in Resources section
4. **Add video demo**: When available, embed or link in page
5. **Fine-tune colors**: Adjust gradient to match branding preferences

## Creating Similar Pages

To create another research paper page:

1. Create new markdown file in `_pages/`
2. Add front matter:
   ```yaml
   ---
   layout: research-paper
   title: "Your Paper Title"
   permalink: /your-paper-url/
   ---
   ```
3. Copy and modify the structure from `polar-sparsity.md`
4. Customize colors/styling as needed

## Benefits of This Design

✅ **No sidebar** - Full focus on research content  
✅ **Modern, clean design** - Professional appearance  
✅ **Mobile-responsive** - Works on all devices  
✅ **Easy to maintain** - Clear structure and documentation  
✅ **Reusable** - Can be used for other research papers  
✅ **SEO-friendly** - Proper semantic HTML and meta tags  
✅ **Accessible** - ARIA labels and semantic structure  

## Troubleshooting

### Styles not applying?
- Clear Jekyll cache: `bundle exec jekyll clean`
- Rebuild: `bundle exec jekyll serve`

### Layout broken?
- Check that `layout: research-paper` is in front matter
- Verify SCSS is being compiled properly

### Images not showing?
- Ensure images are in `/images/polar-sparsity/` directory
- Check image paths start with `/images/` (absolute path)
- Verify file extensions match (.svg, .png, etc.)
