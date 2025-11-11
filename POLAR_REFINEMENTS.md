# Polar Sparsity Page - Refinements Update

## Changes Made (Latest Update)

### 1. Author Names - Clickable Blue Links

#### Before
```
Susav Shrestha¹, Brad Settlemyer², Nikoli Dryden³, Narasimha Reddy¹
```
Plain text in gray

#### After
```html
<a href="https://susavlsh10.github.io/" class="author-link">Susav Shrestha</a>¹, 
<a href="#" class="author-link">Brad Settlemyer</a>², 
<a href="#" class="author-link">Nikoli Dryden</a>³, 
<a href="https://people.engr.tamu.edu/reddy/" class="author-link">Narasimha Reddy</a>¹
```

**Styling:**
- Color: `#2563eb` (blue)
- Font weight: 500 (medium)
- Hover: Darker blue `#1d4ed8` with underline
- Smooth transition effect

**Links Added:**
- ✅ Susav Shrestha → Your personal website
- ✅ Narasimha Reddy → Faculty page
- ⚠️ Brad Settlemyer → Placeholder (add actual link)
- ⚠️ Nikoli Dryden → Placeholder (add actual link)

---

### 2. Buttons - Black Background Style

#### Before
```
[📄 arXiv]  - Blue background (#2563eb)
[📥 PDF]    - Light gray background (#f3f4f6)
[💻 Code]   - Light gray background (#f3f4f6)
```

#### After
```
[📄 Paper]  - Black background (#1a1a1a)
[📥 PDF]    - Black background (#1a1a1a)
[💻 Code]   - Black background (#1a1a1a)
```

**New Button Style:**
- Background: `#1a1a1a` (dark black)
- Text: White
- Border: `#2a2a2a` (slightly lighter)
- Padding: `0.7rem 1.75rem` (matching reference image)
- Font weight: 600 (semi-bold)
- Gap between icon and text: `0.6rem`

**Hover Effect:**
- Background: `#2a2a2a` (lighter black)
- Lift: 2px up
- Shadow: Dark shadow for depth

**Button Labels:**
- "arXiv" → "Paper"
- "PDF" → "PDF"
- "Code" → "Code"

---

### 3. Figures - Smaller & Consistent Sizing

#### Before
- Variable sizes
- Min-height: 300px
- No max-width constraint
- Full container width

#### After
- **Consistent sizing across all figures**
- Max-width: `750px` (centered)
- Min-height: `250px`
- Max-height: `400px`
- Object-fit: `contain` (preserves aspect ratio)
- Padding: `1.5rem` (reduced from 2rem)

**Kernel Speedup Grid (2-column layout):**
- Max-width: `900px` (for the grid container)
- Each figure: Min-height `220px`, Max-height `350px`
- Grid columns: Minimum 350px width
- Centered on page

**Benefits:**
- ✅ More compact, professional appearance
- ✅ Consistent visual rhythm
- ✅ Better use of vertical space
- ✅ Figures don't overwhelm text
- ✅ Easier to scan the page

---

## Visual Comparison

### Hero Section

#### Before
```
┌─────────────────────────────────────────┐
│  Susav Shrestha¹, Brad Settlemyer²...  │ (gray text)
│  ¹Texas A&M University  ²NVIDIA         │
│                                          │
│  [🔵 arXiv] [⚪ PDF] [⚪ Code]           │
│   blue     gray    gray                 │
└─────────────────────────────────────────┘
```

#### After
```
┌─────────────────────────────────────────┐
│  Susav¹, Brad², Nikoli³, Narasimha¹   │ (blue links)
│  ¹Texas A&M University  ²NVIDIA         │
│                                          │
│  [⬛ Paper] [⬛ PDF] [⬛ Code]           │
│   black    black   black                │
└─────────────────────────────────────────┘
```

### Figures

#### Before
```
┌───────────────────────────────────────────┐
│                                           │
│                                           │
│          LARGE FIGURE                     │
│          (full width)                     │
│                                           │
│                                           │
└───────────────────────────────────────────┘
```

#### After
```
    ┌─────────────────────────────┐
    │                             │
    │    MEDIUM FIGURE            │
    │    (max 750px)              │
    │                             │
    └─────────────────────────────┘
         (centered on page)
```

---

## CSS Changes Summary

### 1. Author Links
```scss
.author-link {
  color: #2563eb;           // Blue
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  
  &:hover {
    color: #1d4ed8;         // Darker blue
    text-decoration: underline;
  }
}
```

### 2. Hero Buttons
```scss
.hero-btn {
  background: #1a1a1a;      // Dark black
  color: white;
  border: 1px solid #2a2a2a;
  padding: 0.7rem 1.75rem;
  font-weight: 600;
  gap: 0.6rem;
  
  &:hover {
    background: #2a2a2a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}
```

### 3. Figure Sizing
```scss
.content-figure {
  max-width: 750px;
  margin: 2rem auto;        // Centered
  padding: 1.5rem;
  
  img {
    min-height: 250px;
    max-height: 400px;
    object-fit: contain;    // Preserve aspect ratio
  }
}
```

---

## Action Items

### Update Author Links
Replace the placeholder links in `polar-sparsity.md`:

```html
<!-- Current placeholders: -->
<a href="#" class="author-link">Brad Settlemyer</a>
<a href="#" class="author-link">Nikoli Dryden</a>

<!-- Update to actual URLs when available -->
```

Possible link sources:
- Brad Settlemyer: NVIDIA profile or LinkedIn
- Nikoli Dryden: LLNL profile or personal website

---

## Files Modified

1. **`_pages/polar-sparsity.md`**
   - Added author links with `author-link` class
   - Changed button classes from `hero-btn-primary/secondary` to just `hero-btn`
   - Changed "arXiv" label to "Paper"

2. **`_sass/_custom.scss`**
   - Added `.author-link` styles (blue, hover effects)
   - Updated `.hero-btn` to black background (removed primary/secondary variants)
   - Updated `.content-figure` with max-width and height constraints
   - Updated `.kernel-speedup-grid` with smaller max dimensions

---

## Responsive Behavior

### Desktop (>768px)
- Author names: Inline with commas
- Buttons: Row layout
- Figures: Max 750px width, centered
- Kernel grid: 2 columns

### Mobile (<768px)
- Author names: May wrap to multiple lines
- Buttons: Stack vertically if needed
- Figures: Full width (respecting padding)
- Kernel grid: Single column

---

## Browser Compatibility

All changes use standard CSS:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

No JavaScript required!

---

## Preview

The page now has:
- ✨ Professional clickable author names in blue
- ✨ Uniform black buttons matching the reference design
- ✨ Consistently sized, well-proportioned figures
- ✨ Better visual balance and readability
- ✨ Clean, modern academic aesthetic

---

**Status**: ✅ Refinements Complete  
**Next**: Update placeholder author links with actual URLs  
**Last Updated**: November 11, 2025
