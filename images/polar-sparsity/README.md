# Polar Sparsity Images

This directory contains images and figures for the Polar Sparsity research page.

## Current Placeholders

The following placeholder images need to be replaced with actual figures from the paper:

1. **placeholder.svg** - Generic placeholder for all figures

## Figures to Add

From the NeurIPS 2025 paper, extract and add the following figures:

1. **Figure 1a** - Transformer decode latency breakdown
   - Shows how attention layers dominate as batch size increases
   - Bar chart comparing MLP vs Attention latency across batch sizes

2. **Figure 6b** - OPT-66B Decode Throughput
   - Comparison of Dense, Deja Vu, and Polar Sparsity
   - Bar chart across different batch sizes

3. **Additional figures to consider:**
   - Sparsity pattern visualizations
   - Accuracy vs speedup tradeoff graphs
   - Kernel performance breakdowns
   - Model architecture diagrams

## Image Format Guidelines

- Use **PNG** or **SVG** format for best quality
- Recommended resolution: At least 1200px wide for main figures
- Optimize images for web (compress without losing quality)
- Use descriptive filenames (e.g., `latency-breakdown-batch-size.png`)

## How to Replace Placeholders

1. Export figures from the paper (high resolution)
2. Save them in this directory with descriptive names
3. Update the image src in `/Users/susavshrestha/kernels/susavlsh10.github.io/_pages/polar-sparsity.md`
4. Update alt text and captions as needed
