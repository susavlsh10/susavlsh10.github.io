---
title: "Polar Sparsity: High-Throughput Batched LLM Inferencing"
excerpt: "Accelerating large language model (LLM) inference with scalable contextual sparsity, achieving up to 2.2x speedups."
permalink: /polar-sparsity/
tags:
  - LLM
  - Inference
  - Sparsity
  - High-Performance Computing
  - GPU
---

<div class="polar-hero">
  <h1>Polar Sparsity</h1>
  <p class="polar-subtitle">High-Throughput Batched LLM Inferencing with Scalable Contextual Sparsity</p>
  <a href="#resources" class="btn btn--primary">Resources</a>
  <a href="https://github.com/susavlsh10/Polar-Sparsity" class="btn">GitHub Repository</a>
</div>

<div class="polar-section">
  <h2>The Challenge of Large-Batch LLM Inference</h2>
  <p>Modern Large Language Models (LLMs) are incredibly powerful, but their immense size makes them computationally expensive to run, especially in real-world scenarios that demand high throughput and low latency. While methods like contextual sparsity—where only a subset of the model's parameters are activated for each input—show promise, they often struggle to scale effectively with large batch sizes. This is because as more inputs are processed together, the union of active neurons quickly approaches a dense computation, erasing the benefits of sparsity.</p>
</div>

<div class="polar-section">
  <h2>Introducing Polar Sparsity</h2>
  <p>Polar Sparsity introduces a fundamental shift in how we approach sparsity in LLMs. We've identified that as batch sizes and sequence lengths increase, the computational bottleneck shifts from the MLP (Multi-Layer Perceptron) layers to the Attention layers. While MLP sparsity diminishes with larger batches, Attention head sparsity remains stable and batch-invariant. This "polar shift" is the key to unlocking scalable, high-throughput inference.</p>

  <div class="card-deck">
    <div class="card">
      <h3>MLP Layers</h3>
      <p>In smaller batches, MLP layers are the primary bottleneck. However, their sparsity degrades as the batch size grows, limiting the effectiveness of traditional sparsity techniques.</p>
    </div>
    <div class="card">
      <h3>Attention Layers</h3>
      <p>With larger batches, Attention layers become the dominant cost. Polar Sparsity leverages the fact that attention head sparsity is consistent across batch sizes, providing a reliable target for optimization.</p>
    </div>
  </div>
</div>

<div class="polar-section">
  <h2>Key Innovations</h2>
  <p>To harness the power of Polar Sparsity, we've developed two novel, hardware-efficient GPU kernels:</p>
  <ul>
    <li><strong>Selective GEMM Kernel:</strong> A custom kernel for MLP computations that achieves up to a \(5.5\times\) speedup by dynamically selecting active neurons.</li>
    <li><strong>Selective FlashAttention Kernel:</strong> An I/O-efficient kernel for attention computations that supports head/group sparsity, delivering up to a \(2.8\times\) speedup.</li>
  </ul>
</div>

<div class="polar-section">
  <h2>Performance and Accuracy</h2>
  <div class="metric-tiles">
    <div class="tile">
      <p class="metric">\(2.2\times\)</p>
      <p class="label">End-to-End Speedup</p>
    </div>
    <div class="tile">
      <p class="metric">&lt;1%</p>
      <p class="label">Accuracy Loss</p>
    </div>
    <div class="tile">
      <p class="metric">512</p>
      <p class="label">Max Batch Size Tested</p>
    </div>
  </div>
  <p>We evaluated Polar Sparsity across a range of models, including OPT, LLaMA-2 & 3, Qwen, and Mistral, on various downstream tasks. Our approach delivers up to a \(2.2\times\) improvement in batched decoding throughput with negligible accuracy loss (typically within 1% of the dense baseline). These results were achieved on NVIDIA A100 GPUs and are competitive with or surpass state-of-the-art activation sparsity methods.</p>
</div>

<div class="polar-section">
  <h2>Visualizing the Impact</h2>
  <div class="figure-grid">
    <div class="figure">
      <img src="/images/polar-sparsity/placeholder.png" alt="Placeholder for Transformer Decode Latency Breakdown">
      <p class="caption"><strong>Figure 1a from PDF:</strong> Transformer decode latency breakdown on A100 GPUs. This figure should be replaced with the bar chart from the paper showing how attention layers dominate latency as batch size increases.</p>
    </div>
    <div class="figure">
      <img src="/images/polar-sparsity/placeholder.png" alt="Placeholder for OPT 66b Throughput">
      <p class="caption"><strong>Figure 6b from PDF:</strong> Decode throughput for OPT 66b. This should be replaced with the bar chart comparing the throughput of Dense, Deja Vu, and Polar Sparsity across different batch sizes.</p>
    </div>
  </div>
</div>

<div class="polar-section">
  <h2>Deployment and Future Directions</h2>
  <p>Polar Sparsity is designed for practical, large-scale deployment. The system can be integrated into existing LLM serving frameworks with minimal changes. Our current implementation focuses on greedy decoding, but we see exciting opportunities to extend this work to other decoding strategies like beam search and speculative decoding.</p>

  <div class="timeline">
    <div class="timeline-item">
      <h4>Step 1: Router Training</h4>
      <p>Lightweight routers are trained to predict which neurons and attention heads to activate for a given input. This is a one-time, offline process.</p>
    </div>
    <div class="timeline-item">
      <h4>Step 2: Kernel Integration</h4>
      <p>Our custom Selective GEMM and Selective FlashAttention kernels are integrated into the LLM's inference engine.</p>
    </div>
    <div class="timeline-item">
      <h4>Step 3: High-Throughput Serving</h4>
      <p>The system is now ready for high-throughput, batched inference, with dynamic sparsity applied at runtime.</p>
    </div>
  </div>

  <p>Future work will explore dynamic, input-adaptive sparsity, as well as combining head sparsity with token sparsity for potentially multiplicative gains. We also aim to recover the minor accuracy drop through targeted fine-tuning, paving the way for lossless sparse inference.</p>
</div>

<div id="resources" class="polar-section">
  <h2>Resources</h2>
  <ul>
    <li><a href="[Link to arXiv paper]"><strong>arXiv Paper:</strong> [Title of Paper]</a></li>
    <li><a href="https://github.com/susavlsh10/Polar-Sparsity"><strong>GitHub Repository:</strong> Polar Sparsity</a></li>
    <li><strong>Slides:</strong> [Coming Soon]</li>
    <li><strong>Demo:</strong> [Coming Soon]</li>
  </ul>
</div>

<div class="polar-section">
  <h2>Suggestions for the Team</h2>
  <h3>Additional Sections to Consider:</h3>
  <ul>
    <li><strong>FAQ:</strong> A section to answer common questions about Polar Sparsity, such as its applicability to different model architectures or its performance on specific hardware.</li>
    <li><strong>Extended Benchmarks:</strong> A dedicated page with more detailed benchmark results, including different sequence lengths, hardware configurations, and a wider range of models.</li>
    <li><strong>Testimonials:</strong> If/when available, quotes from users or researchers who have implemented or benefited from Polar Sparsity.</li>
  </ul>
  <h3>Missing Assets:</h3>
  <ul>
    <li><strong>High-resolution images for all figures from the PDF.</strong> The placeholder images should be replaced with the actual figures.</li>
    <li><strong>Link to the arXiv paper.</strong> The current link is a placeholder and should be updated.</li>
    <li><strong>A concise, non-technical "elevator pitch" for the hero section.</strong> The current text is good, but a more marketing-friendly version could also be beneficial.</li>
  </ul>
</div>