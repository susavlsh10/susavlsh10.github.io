---
layout: research-paper
title: "Polar Sparsity"
permalink: /polar-sparsity/
---

<div class="research-hero">
  <div class="container">
    <h1 class="research-title">Polar Sparsity</h1>
    <p class="research-subtitle">High-Throughput Batched LLM Inference with Scalable Contextual Sparsity</p>
    
    <div class="research-authors">
      <span class="author">Susav Shrestha</span>
      <span class="author">Brad Settlemyer</span>
      <span class="author">Nikoli Dryden</span>
      <span class="author">Narasimha Reddy</span>
      <span class="affiliation">Texas A&M University, Meta AI</span>
    </div>
    
    <div class="research-meta">
      <div class="meta-item">
        <i class="fas fa-calendar"></i>
        <span>NeurIPS 2025</span>
      </div>
      <div class="meta-item">
        <i class="fas fa-microchip"></i>
        <span>GPU Acceleration</span>
      </div>
      <div class="meta-item">
        <i class="fas fa-bolt"></i>
        <span>Up to 2.2× Speedup</span>
      </div>
    </div>
    
    <div class="research-actions">
      <a href="https://arxiv.org/abs/XXXX.XXXXX" class="btn">
        <i class="fas fa-file-pdf"></i> Paper (arXiv)
      </a>
      <a href="https://github.com/susavlsh10/Polar-Sparsity" class="btn">
        <i class="fab fa-github"></i> Code
      </a>
      <a href="/files/Polar_Sparsity_NeurIPS_2025_CameraReady.pdf" class="btn btn--secondary">
        <i class="fas fa-download"></i> PDF
      </a>
      <a href="#resources" class="btn btn--secondary">
        <i class="fas fa-link"></i> Resources
      </a>
    </div>
  </div>
</div>

<section class="research-section">
  <h2>Abstract</h2>
  <p>
    Modern Large Language Models (LLMs) deliver remarkable capabilities but demand significant computational resources, especially in production environments requiring high throughput and low latency. While contextual sparsity—activating only a subset of model parameters per input—shows promise for acceleration, conventional approaches struggle to scale with large batch sizes as the union of active neurons approaches dense computation.
  </p>
  <p>
    <strong>Polar Sparsity</strong> introduces a paradigm shift by recognizing that as batch sizes and sequence lengths increase, the computational bottleneck shifts from MLP layers to Attention layers. We leverage this "polar shift" phenomenon: while MLP sparsity degrades with larger batches, attention head sparsity remains stable and batch-invariant, providing a reliable optimization target for high-throughput inference.
  </p>
</section>

<section class="research-section">
  <h2>Key Insights</h2>
  <div class="feature-grid">
    <div class="feature-card">
      <h3>🎯 The Polar Shift</h3>
      <p>
        As batch sizes grow, computational costs shift from MLP layers to Attention layers. This fundamental observation enables a new approach to scalable sparsity.
      </p>
    </div>
    <div class="feature-card">
      <h3>🔄 Batch-Invariant Sparsity</h3>
      <p>
        Attention head sparsity remains consistent across batch sizes, unlike MLP neuron sparsity which degrades rapidly with larger batches.
      </p>
    </div>
    <div class="feature-card">
      <h3>⚡ Hardware-Efficient Kernels</h3>
      <p>
        Custom GPU kernels for both MLP (Selective GEMM) and Attention (Selective FlashAttention) operations deliver significant speedups.
      </p>
    </div>
  </div>
</section>

<section class="research-section">
  <h2>Performance Highlights</h2>
  <div class="metrics-grid">
    <div class="metric-card">
      <span class="metric-value">2.2×</span>
      <span class="metric-label">End-to-End Speedup</span>
    </div>
    <div class="metric-card">
      <span class="metric-value">5.5×</span>
      <span class="metric-label">Peak MLP Acceleration</span>
    </div>
    <div class="metric-card">
      <span class="metric-value">2.8×</span>
      <span class="metric-label">Peak Attention Speedup</span>
    </div>
    <div class="metric-card">
      <span class="metric-value">&lt;1%</span>
      <span class="metric-label">Accuracy Loss</span>
    </div>
  </div>
  <p>
    Evaluated on NVIDIA A100 GPUs across OPT, LLaMA-2, LLaMA-3, Qwen, and Mistral models with batch sizes up to 512. Polar Sparsity delivers competitive or superior performance compared to state-of-the-art activation sparsity methods while maintaining near-baseline accuracy.
  </p>
</section>

<section class="research-section">
  <h2>Technical Innovations</h2>
  
  <h3>1. Selective GEMM Kernel</h3>
  <p>
    A custom CUDA kernel optimized for sparse MLP computations that dynamically selects and computes only active neurons. Key features include:
  </p>
  <ul>
    <li>Tile-based computation with efficient memory access patterns</li>
    <li>Dynamic neuron selection based on router predictions</li>
    <li>Up to <strong>5.5× speedup</strong> over dense GEMM operations</li>
    <li>Minimal accuracy degradation through learned sparsity patterns</li>
  </ul>
  
  <h3>2. Selective FlashAttention Kernel</h3>
  <p>
    An I/O-efficient attention kernel supporting head and group sparsity:
  </p>
  <ul>
    <li>Extends FlashAttention with selective head activation</li>
    <li>Maintains memory efficiency with tiled computation</li>
    <li>Batch-invariant sparsity patterns for consistent performance</li>
    <li>Up to <strong>2.8× speedup</strong> in attention computations</li>
  </ul>
  
  <h3>3. Lightweight Router Networks</h3>
  <p>
    Small neural networks predict which neurons and attention heads to activate:
  </p>
  <ul>
    <li>Trained offline with negligible overhead</li>
    <li>Input-adaptive sparsity patterns</li>
    <li>Minimal inference cost compared to main model</li>
  </ul>
</section>

<section class="research-section">
  <h2>Methodology</h2>
  <div class="research-timeline">
    <div class="timeline-item">
      <h4>Step 1: Router Training</h4>
      <p>
        Train lightweight router networks to predict optimal sparsity patterns for neurons and attention heads. This is a one-time offline process that learns task-specific activation patterns.
      </p>
    </div>
    <div class="timeline-item">
      <h4>Step 2: Kernel Integration</h4>
      <p>
        Integrate custom Selective GEMM and Selective FlashAttention kernels into the LLM inference pipeline, replacing standard dense operations.
      </p>
    </div>
    <div class="timeline-item">
      <h4>Step 3: Runtime Inference</h4>
      <p>
        At inference time, routers predict sparsity patterns for each input, and custom kernels execute only the necessary computations, achieving significant speedups.
      </p>
    </div>
    <div class="timeline-item">
      <h4>Step 4: Production Deployment</h4>
      <p>
        Deploy to high-throughput serving environments with minimal integration overhead. Compatible with existing LLM serving frameworks.
      </p>
    </div>
  </div>
</section>

<section class="research-section">
  <h2>Results & Visualizations</h2>
  
  <div class="research-callout">
    <h3>📊 Figures Coming Soon</h3>
    <p>
      High-resolution figures from the paper will be added here, including:
    </p>
    <ul>
      <li><strong>Figure 1a:</strong> Transformer decode latency breakdown showing the polar shift</li>
      <li><strong>Figure 6b:</strong> Decode throughput comparison across batch sizes</li>
      <li><strong>Sparsity patterns:</strong> Visualization of MLP vs. Attention sparsity</li>
      <li><strong>Accuracy benchmarks:</strong> Performance across different downstream tasks</li>
    </ul>
  </div>
  
  <div class="figure-grid">
    <figure class="research-figure">
      <img src="/images/polar-sparsity/placeholder.svg" alt="Transformer decode latency breakdown">
      <figcaption>
        <strong>Figure 1a:</strong> Transformer decode latency breakdown on A100 GPUs showing how attention layers dominate as batch size increases.
      </figcaption>
    </figure>
    
    <figure class="research-figure">
      <img src="/images/polar-sparsity/placeholder.svg" alt="OPT 66b throughput comparison">
      <figcaption>
        <strong>Figure 6b:</strong> Decode throughput for OPT-66B comparing Dense, Deja Vu, and Polar Sparsity across different batch sizes.
      </figcaption>
    </figure>
  </div>
</section>

<section class="research-section">
  <h2>Experimental Setup</h2>
  <div class="feature-grid">
    <div class="feature-card">
      <h3>Models Evaluated</h3>
      <p>OPT (6.7B, 13B, 30B, 66B), LLaMA-2 (7B, 13B), LLaMA-3 (8B), Qwen (7B), Mistral (7B)</p>
    </div>
    <div class="feature-card">
      <h3>Hardware</h3>
      <p>NVIDIA A100 40GB/80GB GPUs with CUDA 12.1, optimized for production deployment scenarios</p>
    </div>
    <div class="feature-card">
      <h3>Benchmarks</h3>
      <p>Evaluated on CNN/DailyMail, C4, WikiText, and various reasoning tasks with greedy decoding</p>
    </div>
  </div>
</section>

<section class="research-section">
  <h2>Future Directions</h2>
  <p>
    Polar Sparsity opens several exciting avenues for future research and development:
  </p>
  
  <div class="feature-grid">
    <div class="feature-card">
      <h3>🔮 Dynamic Sparsity</h3>
      <p>
        Exploring fully dynamic, input-adaptive sparsity patterns that adjust in real-time based on computational budgets and latency requirements.
      </p>
    </div>
    <div class="feature-card">
      <h3>🎯 Token-Level Sparsity</h3>
      <p>
        Combining attention head sparsity with token-level sparsity for potentially multiplicative performance gains.
      </p>
    </div>
    <div class="feature-card">
      <h3>🎓 Fine-Tuning</h3>
      <p>
        Recovering the minor accuracy drop through targeted fine-tuning, paving the way for truly lossless sparse inference.
      </p>
    </div>
    <div class="feature-card">
      <h3>🚀 Extended Decoding</h3>
      <p>
        Extending support to beam search, speculative decoding, and other advanced generation strategies.
      </p>
    </div>
    <div class="feature-card">
      <h3>💻 Multi-GPU Scaling</h3>
      <p>
        Optimizing Polar Sparsity for distributed inference across multiple GPUs and nodes.
      </p>
    </div>
    <div class="feature-card">
      <h3>🏗️ Framework Integration</h3>
      <p>
        Deep integration with popular serving frameworks like vLLM, TensorRT-LLM, and Hugging Face TGI.
      </p>
    </div>
  </div>
</section>

<section class="research-section" id="resources">
  <div class="research-resources">
    <h2>Resources</h2>
    <ul>
      <li>
        <a href="https://arxiv.org/abs/XXXX.XXXXX">
          <i class="fas fa-file-pdf"></i> <strong>arXiv Paper:</strong> Polar Sparsity: High-Throughput Batched LLM Inference with Scalable Contextual Sparsity
        </a>
      </li>
      <li>
        <a href="https://github.com/susavlsh10/Polar-Sparsity">
          <i class="fab fa-github"></i> <strong>GitHub Repository:</strong> Source code, custom CUDA kernels, and reproducibility scripts
        </a>
      </li>
      <li>
        <a href="/files/Polar_Sparsity_NeurIPS_2025_CameraReady.pdf">
          <i class="fas fa-download"></i> <strong>Camera-Ready PDF:</strong> NeurIPS 2025 proceedings version
        </a>
      </li>
      <li>
        <i class="fas fa-presentation"></i> <strong>Presentation Slides:</strong> Coming Soon
      </li>
      <li>
        <i class="fas fa-video"></i> <strong>Video Demo:</strong> Coming Soon
      </li>
      <li>
        <i class="fas fa-comments"></i> <strong>Discussion:</strong> Join the conversation on GitHub Discussions
      </li>
    </ul>
  </div>
</section>

<section class="research-section">
  <h2>Citation</h2>
  <div class="research-callout">
    <p>If you find Polar Sparsity useful in your research, please cite our paper:</p>
    <pre style="background: #2d3748; color: #e2e8f0; padding: 1.5rem; border-radius: 8px; overflow-x: auto;">
@inproceedings{shrestha2025polar,
  title={Polar Sparsity: High-Throughput Batched LLM Inference with Scalable Contextual Sparsity},
  author={Shrestha, Susav and Settlemyer, Brad and Dryden, Nikoli and Reddy, Narasimha},
  booktitle={Advances in Neural Information Processing Systems},
  year={2025}
}</pre>
  </div>
</section>

<section class="research-section">
  <h2>Contact</h2>
  <p>
    For questions, collaborations, or discussions about Polar Sparsity, please reach out:
  </p>
  <ul>
    <li><strong>Email:</strong> susav [at] tamu.edu</li>
    <li><strong>GitHub Issues:</strong> <a href="https://github.com/susavlsh10/Polar-Sparsity/issues">Report bugs or request features</a></li>
    <li><strong>Twitter:</strong> Follow updates and discussions</li>
  </ul>
</section>