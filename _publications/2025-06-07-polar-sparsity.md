---
title: "Polar Sparsity: High Throughput Batched LLM Inferencing with Scalable Contextual Sparsity"
collection: publications
permalink: /publication/polar-sparsity
excerpt: ''
date: May 2025
description: "This page consists of the paper titled Polar Sparsity. Polar Sparsity introduces a new method for structured sparsity in deep learning models using polar coordinate transformations."
#venue: 'To Appear'
paperurl: 'https://arxiv.org/abs/2505.14884'
#citation: 'Your Name, You. (2025). &quot;Polar Sparsity.&quot; <i>To Appear</i>. 1(1).'
---
Accelerating large language model (LLM) inference is critical for real-world deployments requiring high throughput and low latency. Contextual sparsity, where each token dynamically activates only a small subset of the model parameters, shows promise but does not scale to large batch sizes due to union of active neurons quickly approaching dense computation. We introduce Polar Sparsity, highlighting a key shift in sparsity importance from MLP to Attention layers as we scale batch size and sequence length. While MLP layers become more compute-efficient under batching, their sparsity vanishes. In contrast, attention becomes increasingly more expensive at scale, while their head sparsity remains stable and batch-invariant. We develop hardware-efficient, sparsity-aware GPU kernels for selective MLP and Attention computations, delivering up to \(2.2\times\) end-to-end speedups for models like OPT, LLaMA-2 \& 3, across various batch sizes and sequence lengths without compromising accuracy. To our knowledge, this is the first work to demonstrate that contextual sparsity can scale effectively to large batch sizes, delivering substantial inference acceleration with minimal changes, making Polar Sparsity practical for large-scale, high-throughput LLM deployment systems. Our code is available at: this https URL.


Recommended citation:  
@misc{shrestha2025polarsparsityhighthroughput,
      title={Polar Sparsity: High Throughput Batched LLM Inferencing with Scalable Contextual Sparsity}, 
      author={Susav Shrestha and Brad Settlemyer and Nikoli Dryden and Narasimha Reddy},
      year={2025},
      eprint={2505.14884},
      archivePrefix={arXiv},
      primaryClass={cs.LG},
      url={https://arxiv.org/abs/2505.14884}, 
}
