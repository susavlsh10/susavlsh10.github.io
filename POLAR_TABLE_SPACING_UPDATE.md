# Polar Sparsity Page - Table & Spacing Updates

**Date**: November 11, 2025

## Summary
Refined the Polar Sparsity research page with improved spacing and real benchmark data from the paper.

---

## Changes Made

### 1. **Reduced Section Spacing** ✅
Decreased padding to create a more compact, professional layout:

**CSS Changes (`_sass/_custom.scss`)**:
- `.abstract-section`: `padding: 4rem 0` → `2.5rem 0`
- `.content-section`: `padding: 4rem 0` → `2.5rem 0`
- `.content-section .section-intro`: `margin-bottom: 3rem` → `2rem`
- `.content-section .subsection`: `margin-top: 3rem` → `2rem`
- `.citation-section`: `padding: 4rem 0` → `2.5rem 0`

**Result**: More compact page with better visual flow, less white space between sections.

---

### 2. **Updated Benchmark Table with Real Data** ✅

**Replaced**:
- Simple 4-row table with made-up data
- 5 columns: Model, Benchmark, Dense Accuracy, Polar Sparsity, Speedup

**With**:
- Comprehensive 12-row table with real paper data
- 10 columns: Model, COPA, OBQA, PIQA, RTE, WG, HS, MMLU, ARC-E, ARC-C, Average
- All models from the NeurIPS 2025 paper:
  - OPT 6.7B / 66B
  - LLaMA 2 7B / 13B
  - LLaMA 3.1 70B
  - Mistral 7B
- Each model shows both Dense baseline and Polar Sparsity results

**Data Source**: Table from the paper showing zero-shot evaluation at critical thresholds.

---

### 3. **Enhanced Table Styling** ✅

**Visual Improvements**:
- **Smaller font**: `0.95rem` → `0.85rem` to fit 10 columns
- **Centered values**: All numeric columns now center-aligned for better readability
- **Row separators**: Added `.row-separator` class with `border-top: 2px solid #cbd5e0`
  - Visually groups each model pair (Dense + Polar Sparsity)
- **Compact padding**: `1rem` → `0.75rem 0.5rem` for better density
- **Header improvements**: Smaller headers (`0.8rem`) with centered alignment

**Responsive Design**:
- Table container has `overflow-x: auto` for horizontal scrolling on mobile
- Maintains readability across all screen sizes

---

## Table Structure

### Column Abbreviations
- **COPA** = Choice of Plausible Alternatives
- **OBQA** = OpenBookQA
- **PIQA** = Physical IQA
- **RTE** = Recognizing Textual Entailment
- **WG** = Winogrande
- **HS** = HellaSwag
- **MMLU** = Massive Multitask Language Understanding
- **ARC-E** = AI2 Reasoning Challenge Easy
- **ARC-C** = AI2 Reasoning Challenge Challenge

### Key Findings Displayed
- ✅ Polar Sparsity maintains accuracy within 1% of baseline
- ✅ Consistent performance across multiple benchmarks
- ✅ Works for models from 6.7B to 70B parameters
- ✅ Different sparsity thresholds (0.3, 0.5, 0.625) shown

---

## Files Modified

### 1. `_pages/polar-sparsity.md`
```diff
- Old table: 4 rows, 5 columns, sample data
+ New table: 12 rows, 10 columns, real benchmark data
+ Row separator classes for visual grouping
+ Expanded caption with benchmark explanations
```

### 2. `_sass/_custom.scss`
```diff
- Abstract section: padding 4rem → 2.5rem
- Content section: padding 4rem → 2.5rem, subsection margin 3rem → 2rem
- Citation section: padding 4rem → 2.5rem
- Table styling: font 0.95rem → 0.85rem, centered alignment, row separators
- Table padding: 1rem → 0.75rem 0.5rem
- Table headers: smaller font (0.8rem), centered
```

---

## Visual Impact

### Before
- ❌ Large white space between sections
- ❌ Fake benchmark data in simple table
- ❌ Only 4 models shown with limited metrics

### After
- ✅ Compact, professional spacing
- ✅ Real zero-shot evaluation data from paper
- ✅ Comprehensive comparison across 6 model sizes
- ✅ 9 different benchmarks + average
- ✅ Visual row grouping with separators
- ✅ Better readability with centered numeric values

---

## Testing Checklist

- [ ] Build site locally: `bundle exec jekyll serve`
- [ ] Check page at `/polar-sparsity/`
- [ ] Verify table displays correctly on desktop
- [ ] Test horizontal scroll on mobile/tablet
- [ ] Confirm row separators show between model pairs
- [ ] Check spacing looks balanced between sections
- [ ] Validate all benchmark values match paper

---

## Next Steps (Optional)

1. **Add visualization**: Consider adding a bar chart comparing Dense vs PS averages
2. **Highlight best results**: Bold the highest scores in each column
3. **Add tooltips**: Hover tooltips explaining each benchmark acronym
4. **Mobile optimization**: Stack table differently on very small screens

---

## Notes

- Table is now more data-dense but maintains readability through:
  - Proper spacing and alignment
  - Visual grouping with row separators
  - Hover effects for row highlighting
  - Responsive scrolling for small screens

- Spacing changes make the page feel more "paper-like" and professional
- All changes maintain the modern, clean aesthetic established in previous updates
