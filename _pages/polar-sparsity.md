---
layout: research-paper
title: "Polar Sparsity"
permalink: /polar-sparsity/
---

<div class="modern-hero">
  <div class="hero-content">
    <h1 class="hero-title">Polar Sparsity: High Throughput Batched LLM Inferencing with Scalable Contextual Sparsity</h1>
    
    <div class="hero-authors">
      <a href="https://susavlsh10.github.io/" class="author-link">Susav Shrestha</a><sup>1</sup>, 
      <a href="#" class="author-link">Brad Settlemyer</a><sup>2</sup>, 
      <a href="https://ndryden.com/pages/Me" class="author-link">Nikoli Dryden</a><sup>3</sup>, 
      <a href="https://engineering.tamu.edu/electrical/profiles/reddy-narasimha.html" class="author-link">Narasimha Reddy</a><sup>1</sup>
      <div class="hero-affiliations">
        <sup>1</sup>Texas A&M University &nbsp;&nbsp;
        <sup>2</sup>NVIDIA &nbsp;&nbsp;
        <sup>3</sup>Lawrence Livermore National Laboratory
      </div>
    </div>
    
    <div class="hero-conference">
      <strong style="font-size: 1.1em;">39th Conference on Neural Information Processing Systems (NeurIPS 2025)</strong>
    </div>
    
    <div class="hero-buttons">
      <a href="https://arxiv.org/abs/2505.14884" class="hero-btn">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 9H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Paper
      </a>
      <a href="/files/Polar_Sparsity_NeurIPS_2025_CameraReady.pdf" class="hero-btn">
        <svg class="btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        PDF
      </a>
      <a href="https://github.com/susavlsh10/Polar-Sparsity" class="hero-btn">
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
      Accelerating large language model (LLM) inference is critical for real-world deployments requiring high throughput and low latency. Contextual sparsity, where each token dynamically activates only a small subset of the model parameters, shows promise but does not scale to large batch sizes due to union of active neurons quickly approaching dense computation. We introduce Polar Sparsity, highlighting a key shift in sparsity importance from MLP to Attention layers as we scale batch size and sequence length. While MLP layers become more compute-efficient under batching, their sparsity vanishes. In contrast, attention becomes increasingly more expensive at scale, while their head sparsity remains stable and batch-invariant. We develop Selective Head Attention with hardware-efficient, sparsity-aware GPU kernels, delivering up to 2.2x end-to-end speedups for models like OPT, LLaMA-2 & 3, Qwen, Mistral across various batch sizes and sequence lengths without compromising accuracy. To our knowledge, this is the first work to demonstrate that contextual sparsity can scale effectively to large batch sizes, delivering substantial inference acceleration with minimal changes, making Polar Sparsity practical for large-scale, high-throughput LLM deployment systems.
    </p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <h2>Polar Sparsity</h2>
    <p class="section-intro">
      Polar Sparsity refers to the shift in sparsity importance from MLP layers to Attention layers as batch size and sequence length increase.
      Current state-of-the-art sparsity methods primarily focus on model parameter sparsity, where only a subset of model parameters is activated to reduce computation and memory IO. We define head sparsity as the phenomenon where, for a given token, only a subset of attention heads contribute significantly to the output while the remaining heads have negligible effect.
      
      
      In large-batch inference, the cost of accessing model parameters is largely amortized, since the entire batch utilizes the same model weights. In contrast, each batch has a unique key-value (KV) cache, making attention layers memory I/O expensive. 
      While contextual sparsity in model parameters diminishes as batch sizes increase, attention head sparsity remains stable and batch invariant. 
      We introduce Selective Head Attention, which activates only the most critical heads for each request, preserving overall sparsity and improving compute and memory efficiency. 

      <div class="kernel-speedup-grid">
        <figure class="content-figure">
          <img src="/images/polar-sparsity/a100_opt66b_decode.png" alt="Decode latency breakdown across batch sizes">
          <figcaption>
            <strong>Figure 1:</strong> Transformer decode latency breakdown on A100 GPUs. Attention layers increasingly dominate total latency as batch size grows.
          </figcaption>
        </figure>
        <figure class="content-figure">
          <img src="/images/polar-sparsity/SelectAttention.png" alt="Selective head attention mechanism">
          <figcaption>
            <strong>Figure 2:</strong> Selective Head Attention only activates the most critical heads for each request and accelerates high throughput inference.
          </figcaption>
        </figure>
      </div>

    </p>

    <div class="subsection">
      <h3>Accuracy vs. Attention Density</h3>
      <p>
        We analyze the trade-off between attention head density (percentage of active heads) and model accuracy. Our results show that maintaining high accuracy requires only a fraction of attention heads, especially at larger batch sizes.
      </p>
      <figure class="content-figure content-figure-large">
        <img src="/images/polar-sparsity/accuracy_density.png" alt="Accuracy vs attention density trade-off">
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
          <img src="/images/polar-sparsity/gpus_dense_and_sparse_mlp_graph.png" alt="Selective GEMM speedup">
          <figcaption>
            <strong>Figure 4:</strong> Selective GEMM achieves up to 5.5× speedup over dense GEMM for MLP layers.
          </figcaption>
        </figure>
        <figure class="content-figure">
          <img src="/images/polar-sparsity/gpus_dense_and_sparse_attn_graph.png" alt="Selective FlashAttention speedup">
          <figcaption>
            <strong>Figure 5:</strong> Selective FlashAttention delivers up to 2.8× speedup for attention computation.
          </figcaption>
        </figure>
      </div>
    </div>

    <div class="subsection">
      <h3>Zero-Shot Benchmark Results</h3>
      <div class="table-container">
        <table class="results-table">
          <thead>
            <tr>
              <th>Model</th>
              <th>COPA</th>
              <th>OBQA</th>
              <th>PIQA</th>
              <th>RTE</th>
              <th>WG</th>
              <th>HS</th>
              <th>MMLU</th>
              <th>ARC-E</th>
              <th>ARC-C</th>
              <th>Average</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OPT 66B</td>
              <td>0.85</td>
              <td>0.304</td>
              <td>0.787</td>
              <td>0.603</td>
              <td>0.690</td>
              <td>0.557</td>
              <td>0.263</td>
              <td>0.711</td>
              <td>0.369</td>
              <td>0.570</td>
            </tr>
            <tr>
              <td>OPT 66B + PS-0.3</td>
              <td>0.83</td>
              <td>0.296</td>
              <td>0.769</td>
              <td>0.592</td>
              <td>0.677</td>
              <td>0.546</td>
              <td>0.264</td>
              <td>0.693</td>
              <td>0.361</td>
              <td>0.560</td>
            </tr>
            <tr class="row-separator">
              <td>LLaMA 2 7B</td>
              <td>0.87</td>
              <td>0.314</td>
              <td>0.781</td>
              <td>0.628</td>
              <td>0.690</td>
              <td>0.572</td>
              <td>0.418</td>
              <td>0.763</td>
              <td>0.433</td>
              <td>0.608</td>
            </tr>
            <tr>
              <td>LLaMA 2 7B + PS-0.5</td>
              <td>0.89</td>
              <td>0.312</td>
              <td>0.779</td>
              <td>0.552</td>
              <td>0.687</td>
              <td>0.568</td>
              <td>0.356</td>
              <td>0.762</td>
              <td>0.439</td>
              <td>0.594</td>
            </tr>
            <tr class="row-separator">
              <td>LLaMA 3.1 70B</td>
              <td>0.92</td>
              <td>0.370</td>
              <td>0.831</td>
              <td>0.697</td>
              <td>0.799</td>
              <td>0.665</td>
              <td>0.753</td>
              <td>0.872</td>
              <td>0.606</td>
              <td>0.724</td>
            </tr>
            <tr>
              <td>LLaMA 3.1 70B + PS-0.625</td>
              <td>0.91</td>
              <td>0.340</td>
              <td>0.823</td>
              <td>0.729</td>
              <td>0.793</td>
              <td>0.650</td>
              <td>0.732</td>
              <td>0.853</td>
              <td>0.590</td>
              <td>0.712</td>
            </tr>
            <tr class="row-separator">
              <td>Mistral 7B</td>
              <td>0.92</td>
              <td>0.332</td>
              <td>0.803</td>
              <td>0.686</td>
              <td>0.738</td>
              <td>0.609</td>
              <td>0.591</td>
              <td>0.796</td>
              <td>0.489</td>
              <td>0.663</td>
            </tr>
            <tr>
              <td>Mistral 7B + PS-0.5</td>
              <td>0.92</td>
              <td>0.340</td>
              <td>0.801</td>
              <td>0.671</td>
              <td>0.736</td>
              <td>0.608</td>
              <td>0.562</td>
              <td>0.793</td>
              <td>0.483</td>
              <td>0.657</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="table-note">
        <strong>Table 1:</strong> LLM zero-shot evaluation at critical thresholds. Polar Sparsity (PS) is competitive with the dense baseline with average accuracy within 1%.
      </p>
    </div>

    <div class="subsection">
      <h3>End-to-End Throughput</h3>
      <p>
        We measure decode throughput (tokens/second) across different batch sizes, comparing Polar Sparsity against dense baselines and state-of-the-art activation sparsity methods.
      </p>
      <div class="kernel-speedup-grid">
        <figure class="content-figure">
          <img src="/images/polar-sparsity/opt-66b_throughput.png" alt="Throughput comparison for OPT-66B">
          <figcaption>
            <strong>Figure 6:</strong> Decode throughput for OPT-66B across batch sizes. Polar Sparsity maintains consistent speedups even at large batch sizes where traditional sparsity methods degrade.
          </figcaption>
        </figure>
        <figure class="content-figure">
          <img src="/images/polar-sparsity/Llama-2-7b-hf_ws_1_seq_len_3968_attn_topk_0.5.png" alt="Throughput comparison for LLaMA-2 7B">
          <figcaption>
            <strong>Figure 7:</strong> Decode throughput for LLaMA-2 7B showing performance scaling with attention sparsity.
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <h2>Conclusion</h2>
    <p class="conclusion-text">
      Our work highlights the scalability and effectiveness of contextual sparsity for accelerating batched LLM inference. We introduce Polar Sparsity, a key insight showing that as batch size and sequence length grow, the importance of sparsity transitions from MLP layers, where union activation increases, to Attention layers, where head-level sparsity remains stable and batch-invariant.To exploit this property, we develop Selective Head Attention with sparsity-aware GPU kernels that execute computations only for activated heads and neurons. Together, these optimizations deliver consistent speedups across a wide range of models, batch sizes, and sequence lengths with minimal impact on accuracy. 
      Our results are competitive with state-of-the-art approaches and delivers up to 2.2x end-to-end speedups in large-scale settings, affirming the practical viability of Polar Sparsity for efficient and scalable LLM serving. This method is a step towards realizing scalable, high-performance, batched LLM inference that meets the growing demands of modern applications.

    </p>
  </div>
</section>

<section class="citation-section">
  <div class="container">
    <h2>Citation</h2>
    <div class="citation-box">
      <pre>@misc{shrestha2025polarsparsityhighthroughput,
      title={Polar Sparsity: High Throughput Batched LLM Inferencing with Scalable Contextual Sparsity}, 
      author={Susav Shrestha and Brad Settlemyer and Nikoli Dryden and Narasimha Reddy},
      year={2025},
      eprint={2505.14884},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2505.14884}, 
}
</pre>
    </div>
  </div>
</section>