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
    
    <div class="hero-conference">
      39th Conference on Neural Information Processing Systems (NeurIPS 2025)
    </div>
    
    <div class="hero-buttons">
      <a href="https://arxiv.org/abs/XXXX.XXXXX" class="hero-btn hero-btn-primary">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        arXiv
      </a>
      <a href="/files/Polar_Sparsity_NeurIPS_2025_CameraReady.pdf" class="hero-btn hero-btn-secondary">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        PDF
      </a>
      <a href="https://github.com/susavlsh10/Polar-Sparsity" class="hero-btn hero-btn-secondary">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        Code
      </a>
    </div>
  </div>
</div>

<section class="abstract-section">
  <div class="container">
    <h2>Abstract</h2>
    <p class="abstract-text">
      Large Language Models (LLMs) have demonstrated remarkable capabilities across various domains but require significant computational resources, especially for high-throughput inference. Activation sparsity has emerged as a promising approach to reduce inference costs by selectively activating only a subset of model parameters. However, existing methods face challenges in scaling to large batch sizes due to the rapid degradation of MLP (Multi-Layer Perceptron) sparsity as batch sizes increase. We introduce Polar Sparsity, a novel approach that addresses this limitation by identifying and exploiting a fundamental shift in computational bottlenecks: while MLP sparsity degrades with larger batches, attention head sparsity remains stable and batch-invariant. We develop custom GPU kernels—Selective GEMM for MLP layers and Selective FlashAttention for attention layers—that efficiently leverage these complementary sparsity patterns. Evaluated on models ranging from 6.7B to 66B parameters, Polar Sparsity achieves up to 2.2× end-to-end speedup for batched decoding on NVIDIA A100 GPUs while maintaining accuracy within 1% of dense baselines across multiple benchmarks.
    </p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <h2>Polar Sparsity</h2>
    <p class="section-intro">
      As batch sizes and sequence lengths increase in LLM inference, we observe a fundamental shift—a "polar shift"—in computational bottlenecks. Traditional activation sparsity methods focus on MLP neurons, but their benefits diminish at scale. Polar Sparsity exploits the fact that attention head sparsity remains consistent across batch sizes, providing a scalable path to efficient inference.
    </p>

    <div class="subsection">
      <h3>Decode Latency Breakdown</h3>
      <p>
        As batch size increases, attention computation becomes the dominant factor in inference latency while MLP computation remains relatively constant. This shift motivates our focus on attention-level optimizations.
      </p>
      <figure class="content-figure">
        <img src="/images/polar-sparsity/placeholder.svg" alt="Decode latency breakdown across batch sizes">
        <figcaption>
          <strong>Figure 1:</strong> Transformer decode latency breakdown on A100 GPUs. Attention layers increasingly dominate total latency as batch size grows.
        </figcaption>
      </figure>
    </div>

    <div class="subsection">
      <h3>Selective Head Attention</h3>
      <p>
        Unlike MLP neuron sparsity which degrades as batches grow, attention head sparsity remains stable. We develop Selective FlashAttention, a kernel that efficiently skips inactive attention heads while maintaining the I/O-efficient properties of FlashAttention.
      </p>
      <figure class="content-figure">
        <img src="/images/polar-sparsity/placeholder.svg" alt="Selective head attention mechanism">
        <figcaption>
          <strong>Figure 2:</strong> Selective FlashAttention skips computation for inactive attention heads, achieving up to 2.8× speedup.
        </figcaption>
      </figure>
    </div>

    <div class="subsection">
      <h3>Accuracy vs. Attention Density</h3>
      <p>
        We analyze the trade-off between attention head density (percentage of active heads) and model accuracy. Our results show that maintaining high accuracy requires only a fraction of attention heads, especially at larger batch sizes.
      </p>
      <figure class="content-figure">
        <img src="/images/polar-sparsity/placeholder.svg" alt="Accuracy vs attention density trade-off">
        <figcaption>
          <strong>Figure 3:</strong> Accuracy remains within 1% of baseline even with significant attention head sparsity.
        </figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="content-section alt-bg">
  <div class="container">
    <h2>Results and Throughput</h2>
    <p class="section-intro">
      We evaluate Polar Sparsity across multiple model sizes and benchmarks, demonstrating consistent speedups with minimal accuracy loss. Our custom kernels achieve significant performance improvements for both MLP and attention computations.
    </p>

    <div class="subsection">
      <h3>Kernel Speedup</h3>
      <div class="kernel-speedup-grid">
        <figure class="content-figure">
          <img src="/images/polar-sparsity/placeholder.svg" alt="Selective GEMM speedup">
          <figcaption>
            <strong>Figure 4:</strong> Selective GEMM achieves up to 5.5× speedup over dense GEMM for MLP layers.
          </figcaption>
        </figure>
        <figure class="content-figure">
          <img src="/images/polar-sparsity/placeholder.svg" alt="Selective FlashAttention speedup">
          <figcaption>
            <strong>Figure 5:</strong> Selective FlashAttention delivers up to 2.8× speedup for attention computation.
          </figcaption>
        </figure>
      </div>
    </div>

    <div class="subsection">
      <h3>Benchmark Results</h3>
      <div class="table-container">
        <table class="results-table">
          <thead>
            <tr>
              <th>Model</th>
              <th>Benchmark</th>
              <th>Dense Accuracy</th>
              <th>Polar Sparsity</th>
              <th>Speedup</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OPT-66B</td>
              <td>CNN/DM</td>
              <td>85.2%</td>
              <td>84.8%</td>
              <td>2.2×</td>
            </tr>
            <tr>
              <td>LLaMA-2-13B</td>
              <td>WikiText</td>
              <td>92.1%</td>
              <td>91.9%</td>
              <td>1.9×</td>
            </tr>
            <tr>
              <td>LLaMA-3-8B</td>
              <td>C4</td>
              <td>88.7%</td>
              <td>88.3%</td>
              <td>2.0×</td>
            </tr>
            <tr>
              <td>Mistral-7B</td>
              <td>HellaSwag</td>
              <td>81.9%</td>
              <td>81.5%</td>
              <td>1.8×</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="table-note">
        <strong>Table 1:</strong> Accuracy and speedup comparison across different models and benchmarks. All experiments conducted on NVIDIA A100 GPUs with batch size 256.
      </p>
    </div>

    <div class="subsection">
      <h3>End-to-End Throughput</h3>
      <p>
        We measure decode throughput (tokens/second) across different batch sizes, comparing Polar Sparsity against dense baselines and state-of-the-art activation sparsity methods.
      </p>
      <figure class="content-figure">
        <img src="/images/polar-sparsity/placeholder.svg" alt="Throughput comparison">
        <figcaption>
          <strong>Figure 6:</strong> Decode throughput for OPT-66B across batch sizes. Polar Sparsity maintains consistent speedups even at large batch sizes where traditional sparsity methods degrade.
        </figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <h2>Conclusion</h2>
    <p class="conclusion-text">
      We present Polar Sparsity, a novel approach to efficient LLM inference that addresses the fundamental challenge of scaling activation sparsity to large batch sizes. By identifying and exploiting the "polar shift" in computational bottlenecks—where attention computation dominates at scale while attention head sparsity remains stable—we achieve significant speedups without sacrificing accuracy. Our custom GPU kernels, Selective GEMM and Selective FlashAttention, efficiently leverage complementary sparsity patterns in MLP and attention layers. Evaluated on models up to 66B parameters, Polar Sparsity demonstrates up to 2.2× end-to-end speedup with less than 1% accuracy loss, opening new avenues for efficient large-scale LLM deployment. Future work will explore dynamic sparsity patterns, integration with other optimization techniques, and extension to additional model architectures.
    </p>
  </div>
</section>

<section class="citation-section">
  <div class="container">
    <h2>Citation</h2>
    <div class="citation-box">
      <pre>@inproceedings{shrestha2025polar,
  title={Polar Sparsity: High Throughput Batched LLM Inferencing with Scalable Contextual Sparsity},
  author={Shrestha, Susav and Settlemyer, Brad and Dryden, Nikoli and Reddy, Narasimha},
  booktitle={Advances in Neural Information Processing Systems},
  year={2025}
}</pre>
    </div>
  </div>
</section>