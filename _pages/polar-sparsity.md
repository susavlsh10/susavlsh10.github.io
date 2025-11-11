---
layout: research-paper
title: "Polar Sparsity"
permalink: /polar-sparsity/
---

<div class="modern-hero">
  <div class="hero-content">
    <h1 class="hero-title">Polar Sparsity: High Throughput Batched LLM Inferencing with Scalable Contextual Sparsity</h1>
    
    <div class="hero-authors">
      Susav Shrestha<sup>1</sup>, Brad Settlemyer<sup>2</sup>, Nikoli Dryden<sup>3</sup>, Narasimha Reddy<sup>1</sup>
      <div class="hero-affiliations">
        <sup>1</sup>Texas A&M University &nbsp;&nbsp;
        <sup>2</sup>NVIDIA &nbsp;&nbsp;
        <sup>3</sup>Lawrence Livermore National Laboratory
      </div>
    </div>
    
    <div class="hero-badge">
      NeurIPS 2025
    </div>
    
    <div class="hero-buttons">
      <a href="https://arxiv.org/abs/XXXX.XXXXX" class="hero-btn hero-btn-primary">
        📄 Paper
      </a>
      <a href="/files/Polar_Sparsity_NeurIPS_2025_CameraReady.pdf" class="hero-btn hero-btn-secondary">
        📥 PDF
      </a>
      <a href="https://github.com/susavlsh10/Polar-Sparsity" class="hero-btn hero-btn-secondary">
        💻 Code
      </a>
    </div>
  </div>
</div>

<section class="visual-section">
  <div class="section-title">The Polar Shift in LLM Inference</div>
  
  <div class="comparison-grid">
    <div class="comparison-box">
      <h3 class="box-title">Traditional Sparsity</h3>
      <div class="box-image">
        <img src="/images/polar-sparsity/placeholder.svg" alt="Traditional sparsity approach">
      </div>
      <p class="box-description">
        ❌ MLP sparsity degrades with larger batches<br>
        ❌ Benefits disappear at scale
      </p>
    </div>
    
    <div class="comparison-box highlight-box">
      <h3 class="box-title">Polar Sparsity</h3>
      <div class="box-image">
        <img src="/images/polar-sparsity/placeholder.svg" alt="Polar sparsity approach">
      </div>
      <p class="box-description">
        ✅ Batch-invariant attention head sparsity<br>
        ✅ 2.2× speedup at large batch sizes
      </p>
    </div>
  </div>
</section>

<section class="visual-section alt-bg">
  <div class="section-title">Key Insight: The Computational Bottleneck Shifts</div>
  
  <figure class="main-figure">
    <img src="/images/polar-sparsity/placeholder.svg" alt="Latency breakdown showing polar shift">
    <figcaption>
      As batch size increases, Attention layers dominate computation while MLP sparsity benefits diminish
    </figcaption>
  </figure>
</section>

<section class="visual-section">
  <div class="section-title">Performance Highlights</div>
  
  <div class="stats-row">
    <div class="stat-box">
      <div class="stat-number">2.2×</div>
      <div class="stat-label">End-to-End<br>Speedup</div>
    </div>
    <div class="stat-box">
      <div class="stat-number">5.5×</div>
      <div class="stat-label">Peak MLP<br>Acceleration</div>
    </div>
    <div class="stat-box">
      <div class="stat-number">2.8×</div>
      <div class="stat-label">Peak Attention<br>Speedup</div>
    </div>
    <div class="stat-box">
      <div class="stat-number">&lt;1%</div>
      <div class="stat-label">Accuracy<br>Loss</div>
    </div>
  </div>
  
  <figure class="main-figure">
    <img src="/images/polar-sparsity/placeholder.svg" alt="Throughput comparison">
    <figcaption>
      Decode throughput comparison across different batch sizes on OPT-66B
    </figcaption>
  </figure>
</section>

<section class="visual-section alt-bg">
  <div class="section-title">Hardware-Efficient Custom Kernels</div>
  
  <div class="kernel-grid">
    <div class="kernel-card">
      <h3>⚡ Selective GEMM</h3>
      <div class="kernel-image">
        <img src="/images/polar-sparsity/placeholder.svg" alt="Selective GEMM kernel">
      </div>
      <ul class="kernel-features">
        <li>Dynamic neuron selection</li>
        <li>Tile-based computation</li>
        <li>Up to 5.5× faster</li>
      </ul>
    </div>
    
    <div class="kernel-card">
      <h3>🎯 Selective FlashAttention</h3>
      <div class="kernel-image">
        <img src="/images/polar-sparsity/placeholder.svg" alt="Selective FlashAttention kernel">
      </div>
      <ul class="kernel-features">
        <li>Head & group sparsity</li>
        <li>I/O-efficient design</li>
        <li>Up to 2.8× faster</li>
      </ul>
    </div>
  </div>
</section>

<section class="visual-section">
  <div class="section-title">Evaluation Results</div>
  
  <div class="models-tested">
    <strong>Models:</strong> OPT (6.7B-66B) • LLaMA-2/3 (7B-13B) • Qwen (7B) • Mistral (7B)<br>
    <strong>Hardware:</strong> NVIDIA A100 GPUs • Batch sizes up to 512
  </div>
  
  <figure class="main-figure">
    <img src="/images/polar-sparsity/placeholder.svg" alt="Accuracy comparison">
    <figcaption>
      Accuracy comparison across different downstream tasks with near-baseline performance
    </figcaption>
  </figure>
  
  <figure class="main-figure">
    <img src="/images/polar-sparsity/placeholder.svg" alt="Sparsity patterns">
    <figcaption>
      MLP neuron sparsity vs. Attention head sparsity across different batch sizes
    </figcaption>
  </figure>
</section>

<section class="visual-section alt-bg">
  <div class="section-title">How It Works</div>
  
  <div class="workflow-timeline">
    <div class="workflow-step">
      <div class="step-number">1</div>
      <h4>Router Training</h4>
      <p>Train lightweight networks to predict sparsity patterns</p>
    </div>
    <div class="workflow-arrow">→</div>
    <div class="workflow-step">
      <div class="step-number">2</div>
      <h4>Kernel Integration</h4>
      <p>Integrate custom CUDA kernels into inference pipeline</p>
    </div>
    <div class="workflow-arrow">→</div>
    <div class="workflow-step">
      <div class="step-number">3</div>
      <h4>Runtime Inference</h4>
      <p>Achieve 2.2× speedup with minimal accuracy loss</p>
    </div>
  </div>
</section>

<section class="visual-section" id="resources">
  <div class="section-title">Resources</div>
  
  <div class="resources-grid">
    <a href="https://arxiv.org/abs/XXXX.XXXXX" class="resource-card">
      <div class="resource-icon">📄</div>
      <h3>arXiv Paper</h3>
      <p>Read the full paper</p>
    </a>
    
    <a href="https://github.com/susavlsh10/Polar-Sparsity" class="resource-card">
      <div class="resource-icon">💻</div>
      <h3>Code</h3>
      <p>GitHub repository</p>
    </a>
    
    <a href="/files/Polar_Sparsity_NeurIPS_2025_CameraReady.pdf" class="resource-card">
      <div class="resource-icon">📥</div>
      <h3>PDF</h3>
      <p>Download camera-ready</p>
    </a>
    
    <div class="resource-card disabled">
      <div class="resource-icon">🎬</div>
      <h3>Video</h3>
      <p>Coming soon</p>
    </div>
  </div>
</section>

<section class="visual-section alt-bg">
  <div class="section-title">Citation</div>
  
  <div class="citation-box">
    <pre>@inproceedings{shrestha2025polar,
  title={Polar Sparsity: High-Throughput Batched LLM Inference with Scalable Contextual Sparsity},
  author={Shrestha, Susav and Settlemyer, Brad and Dryden, Nikoli and Reddy, Narasimha},
  booktitle={Advances in Neural Information Processing Systems},
  year={2025}
}</pre>
  </div>
</section>