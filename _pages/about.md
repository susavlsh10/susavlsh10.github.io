---
permalink: /
title: "Hello, I'm Susav."
excerpt: "About me"
author_profile: true
# toc: true
# toc_sticky: true
redirect_from:
  - /about/
  - /about.html
---

<head>
  <meta name="description" content="Susav is a PhD candidate at Texas A&M University. His research focuses on building efficient and scalable machine learning systems with an emphasis on inference optimization.">
</head>

<!-- {% include toc %} -->

## Introduction
<!-- Computer Engineering | PhD candidate @ TAMU -->

<!-- I specialize in building efficient and scalable machine learning systems for real-world deployment. My research focuses on accelerating large-scale inference through hardware-aware design, sparsity, and parallelism. I am advised by [Dr. Narasimha Annapareddy](https://experts.tamu.edu/expert/narasimha-annapareddy/). -->

I specialize in building **efficient and scalable machine learning systems** for real-world deployment. My work bridges the gap between algorithm design and system-level efficiency, with a focus on **accelerating large-scale inference** through **hardware-aware design**, **sparsity**, and **parallelism**.

I am a PhD candidate in Computer Engineering at **Texas A&M University**, advised by [Dr. Narasimha Annapareddy](https://experts.tamu.edu/expert/narasimha-annapareddy/). 

---
### Research Interests

- **Efficient and Sparse LLM Inference**  
  Designing sparse attention and MLP modules that retain accuracy while significantly reducing compute and memory usage during inference.

- **Custom GPU Kernels for Deep Learning Systems**  
  Building hardware-aware CUDA and Triton kernels to accelerate key components of transformer inference such as attention and matrix multiplication.

- **Hybrid Parallelism for Large-Scale Inference**  
  Exploring the synergy of tensor, pipeline, and expert parallelism to scale LLM inference efficiently across multi-GPU and multi-node clusters.

- **Memory and Communication Optimization**  
  Reducing memory footprint and interconnect bottlenecks through activation sparsity, selective computation, and communication-aware scheduling.

- **Systems-ML Co-design**  
  Bridging algorithmic innovations with system-level implementations to enable high-throughput, latency-critical machine learning deployments.

  
## Selected Publications

- **Polar Sparsity: High Throughput Batched LLM Inferencing with Scalable Contextual Sparsity**  
  *Susav Shrestha, Brad Settlemyer, Nikoli Dryden, Narasimha Reddy*  
  [arXiv:2505.14884](https://arxiv.org/abs/2505.14884)  
  We introduce Polar Sparsity, demonstrating that contextual sparsity in transformers is scalable to large batch sizes. Our selective FlashAttention kernels achieve up to **2.2×** decoding speedups with negligible loss in accuracy.

- **ESPN: Memory-Efficient Multi-vector Information Retrieval**  
  *Susav Shrestha, Narasimha Reddy, Zongwang Li*  
  In *Proceedings of ISMM 2024* ([ACM DL](https://doi.org/10.1145/3652024.3665515))  
  We propose **ESPN**, a storage-pipelined architecture for multi-vector retrieval that reduces memory usage by up to **16×** and improves SSD-based re-ranking throughput by up to **6.4×**.  
  [Code](https://github.com/susavlsh10/ESPN-v1)

For the full list of my papers, visit the [publications page](/publications/).

## Experience
A summary of my experience can be found on my [CV](/cv/).

## Patents
Patents that I have filed are listed on the [patents page](/patents/).

## Updates
- 🔬 Started a **Research Internship at NVIDIA** for Summer 2025 in Santa Clara  
- 📄 Released new paper on [Polar Sparsity](https://arxiv.org/abs/2505.14884) with up to **2.2× decoding speedup** in LLM inference  
