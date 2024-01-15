---
title: "ESPN: Memory Efficient Multi-Vector Information Retrieval"
collection: publications
permalink: /publication/ESPN
excerpt: 'This paper is about ESPN. Embedding from Storage Pipeline Network for Multi-Vector Information Retrieval.'
date: 2009-10-01
venue: 'Journal 1'
paperurl: 'http://academicpages.github.io/files/paper1.pdf'
citation: 'Your Name, You. (2009). &quot;Paper Title Number 1.&quot; <i>Journal 1</i>. 1(1).'
hide: true
---
Recent advances in large language models have demonstrated remarkable effectiveness in information retrieval (IR) tasks. While many neural IR systems encode queries and documents into single-vector representations, multi-vector models elevate the retrieval quality by producing multi-vector representations and facilitating similarity searches at the granularity of individual tokens. However, these models significantly amplify memory and storage requirements for retrieval indices by an order of magnitude. This escalation in index size renders the scalability of multi-vector IR models progressively challenging due to their substantial memory demands. We introduce Embedding from Storage Pipelined Network (ESPN) where we offload the entire re-ranking embedding tables to SSDs and reduce the memory requirements by 5-16x. We design a software prefetcher with hit rates exceeding 90%, improving SSD based retrieval up to 6.4x, and demonstrate that we can maintain near memory levels of query latency even for large query batch sizes.

[Download paper here](https://arxiv.org/abs/2312.05417)

Recommended citation:  
@misc{shrestha2023espn,
      title={ESPN: Memory-Efficient Multi-Vector Information Retrieval}, 
      author={Susav Shrestha and Narasimha Reddy and Zongwang Li},
      year={2023},
      eprint={2312.05417},
      archivePrefix={arXiv},
      primaryClass={cs.IR}
}