---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

<head>
  <meta name="description" content="Curriculum Vitae of Susav Shrestha - Senior AI and HPC Engineer at NVIDIA specializing in efficient machine learning systems and inference optimization.">
</head>

<div class="cv-modern-page">

  <!-- Education Section -->
  <section class="cv-section">
    <div class="cv-section-header">
      <h2 class="cv-section-title">
        <span class="section-icon"></span>
        Education
      </h2>
      <a href="/files/susav_resume.pdf" class="btn-resume-small">
        <span>💾</span>
      </a>
    </div>
    
    <div class="cv-card">
      <div class="cv-card-header">
        <div class="cv-institution">
          <h3>Texas A&M University</h3>
          <span class="cv-location">College Station, TX</span>
        </div>
        <span class="cv-date">Aug 2021 – Feb 2026</span>
      </div>
      <div class="cv-card-body">
        <p class="cv-degree"><strong>Doctor of Philosophy in Computer Engineering</strong></p>
        <p class="cv-thesis"><em>Thesis:</em> Efficient LLM Inference: Sparsity, Parallelism, and Hardware-Aware System Design</p>
        <p class="cv-advisor"><em>Advisor:</em> Dr. Narasimha Annapareddy Reddy</p>
      </div>
    </div>

    <div class="cv-card">
      <div class="cv-card-header">
        <div class="cv-institution">
          <h3>University of Texas Arlington</h3>
          <span class="cv-location">Arlington, TX</span>
        </div>
        <span class="cv-date">Aug 2017 - May 2021</span>
      </div>
      <div class="cv-card-body">
        <p class="cv-degree"><strong>Bachelor of Science in Electrical Engineering with Honors</strong></p>
        <p class="cv-minor">Minor in Computer Science</p>
        <p class="cv-thesis"><em>Honors Thesis:</em> A novel remote sensing system for in-situ measurement of subsurface soil properties</p>
        <!-- <div class="cv-achievements">
          <span class="achievement-badge">Dean's List 2018-21</span>
          <span class="achievement-badge">Innovation Day Award 2021</span>
        </div> -->
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section class="cv-section">
    <h2 class="cv-section-title">
      <span class="section-icon"></span>
      Professional Experience
    </h2>

    <div class="cv-card highlight">
      <div class="cv-card-header">
        <div class="cv-institution">
          <h3>NVIDIA</h3>
          <span class="cv-role">Senior AI and HPC Engineer</span>
        </div>
        <span class="cv-date">Feb 2026 – Present</span>
      </div>
      <div class="cv-card-body">
        <!-- <p class="cv-location-detail">Santa Clara, CA</p> -->
        <ul class="cv-highlights">
          <li>Working on MoE inference efficiency at scale, optimizing throughput and latency for agentic workloads.</li>
        </ul>
      </div>
    </div>

    <div class="cv-card highlight">
      <div class="cv-card-header">
        <div class="cv-institution">
          <h3>NVIDIA</h3>
          <span class="cv-role">Research Intern</span>
        </div>
        <span class="cv-date">May 2025 – Aug 2025</span>
      </div>
      <div class="cv-card-body">
        <p class="cv-location-detail">Santa Clara, CA</p>
        <ul class="cv-highlights">
          <li>Designed novel model parallelism architecture for distributed multi-node multi-GPU LLM inference</li>
          <li>Developed and integrated parallelism architecture in vLLM</li>
        </ul>
      </div>
    </div>

    <div class="cv-card highlight">
      <div class="cv-card-header">
        <div class="cv-institution">
          <h3>NVIDIA</h3>
          <span class="cv-role">Research Intern</span>
        </div>
        <span class="cv-date">May 2024 – Aug 2024</span>
      </div>
      <div class="cv-card-body">
        <p class="cv-location-detail">Austin, TX</p>
        <ul class="cv-highlights">
          <li>Led research to accelerate LLM inference via activation and contextual sparsity</li>
          <li>Built sparsely activated OPT and LLaMA models by training activation routers for MLP and Attention layers</li>
          <li>Developed custom sparse GPU kernels achieving <strong>1.5–3× speedup</strong> in MLP layers and up to <strong>2.5×</strong> in Attention</li>
          <li>Delivered end-to-end decoding speedups up to <strong>2.2×</strong> across diverse batch sizes and sequence lengths</li>
        </ul>
      </div>
    </div>

    <div class="cv-card">
      <div class="cv-card-header">
        <div class="cv-institution">
          <h3>Samsung Semiconductor Inc.</h3>
          <span class="cv-role">Research Intern</span>
        </div>
        <span class="cv-date">May 2022 – Aug 2022</span>
      </div>
      <div class="cv-card-body">
        <p class="cv-location-detail">San Jose, CA</p>
        <ul class="cv-highlights">
          <li>Reduced CPU workload by <strong>4×</strong> and accelerated neural inference by <strong>64%</strong> through data pipeline and model execution optimization</li>
          <li>Filed <strong>2 patent applications</strong> for efficient neural information retrieval</li>
        </ul>
      </div>
    </div>

    <div class="cv-card">
      <div class="cv-card-header">
        <div class="cv-institution">
          <h3>Texas A&M University</h3>
          <span class="cv-role">Graduate Research Assistant</span>
        </div>
        <span class="cv-date">Aug 2021 – Feb 2026</span>
      </div>
      <div class="cv-card-body">
        <p class="cv-location-detail">College Station, TX</p>
        <ul class="cv-highlights">
          <li>Led a project that resulted in a <strong>23% speedup</strong> in embedding processing for large-scale information retrieval</li>
          <li>Developed scalable multi-vector retrieval systems for large language models</li>
          <li>Published research at top-tier venues including NeurIPS and ISMM</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Patents Section -->
  <section class="cv-section">
    <h2 class="cv-section-title">
      <span class="section-icon"></span>
      Patents
    </h2>
    
    <div class="cv-card compact">
      <div class="cv-card-body">
        <p class="cv-patent-title"><strong>System and Method for Embeddings Retrieval</strong></p>
        <p class="cv-patent-info">US Patent Application <em>US20240330193A1</em> • Samsung Electronics Co., Ltd.</p>
        <a href="https://patents.google.com/patent/US20240330193A1/en" class="cv-link">View Patent →</a>
      </div>
    </div>

    <div class="cv-card compact">
      <div class="cv-card-body">
        <p class="cv-patent-title"><strong>System and Method for Processing Embeddings</strong></p>
        <p class="cv-patent-info">US Patent Application <em>US20240330290A1</em> • Samsung Electronics Co., Ltd.</p>
        <a href="https://patents.google.com/patent/US20240330290A1/en" class="cv-link">View Patent →</a>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="cv-section">
    <h2 class="cv-section-title">
      <span class="section-icon"></span>
      Technical Skills
    </h2>
    
    <div class="skills-grid">
      <div class="skill-category">
        <h4 class="skill-category-title">Systems & Performance</h4>
        <div class="skill-tags">
          <span class="skill-tag">CUDA</span>
          <span class="skill-tag">C/C++</span>
          <span class="skill-tag">Parallel Computing</span>
          <span class="skill-tag">GPU Optimization</span>
          <span class="skill-tag">OpenMP</span>
          <span class="skill-tag">MPI</span>
        </div>
      </div>

      <div class="skill-category">
        <h4 class="skill-category-title">Machine Learning</h4>
        <div class="skill-tags">
          <span class="skill-tag">PyTorch</span>
          <span class="skill-tag">Deep Learning</span>
          <span class="skill-tag">LLM Inference</span>
          <span class="skill-tag">Model Optimization</span>
          <span class="skill-tag">Scikit-learn</span>
        </div>
      </div>

      <div class="skill-category">
        <h4 class="skill-category-title">Development & Tools</h4>
        <div class="skill-tags">
          <span class="skill-tag">Python</span>
          <span class="skill-tag">Linux</span>
          <span class="skill-tag">Git</span>
          <span class="skill-tag">Docker</span>
          <span class="skill-tag">AWS</span>
          <span class="skill-tag">Azure</span>
        </div>
      </div>

      <div class="skill-category">
        <h4 class="skill-category-title">Specialized</h4>
        <div class="skill-tags">
          <span class="skill-tag">Information Retrieval</span>
          <span class="skill-tag">Distributed Systems</span>
          <span class="skill-tag">HPC</span>
          <span class="skill-tag">Sparsity</span>
          <span class="skill-tag">Memory Systems</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Honors Section -->
  <section class="cv-section">
    <h2 class="cv-section-title">
      <span class="section-icon"></span>
      Honors & Awards
    </h2>
    
    <div class="honors-grid">
      <div class="honor-item">
        <div class="honor-content">
          <strong>Innovation Day Award</strong>
          <span class="honor-year">2021</span>
        </div>
      </div>
      <div class="honor-item">
        <div class="honor-content">
          <strong>Dean's List</strong>
          <span class="honor-year">2018–2021</span>
        </div>
      </div>
      <div class="honor-item">
        <div class="honor-content">
          <strong>Academic Excellence Award</strong>
          <span class="honor-year">2016</span>
        </div>
      </div>
      <div class="honor-item">
        <div class="honor-content">
          <strong>Cambridge Learners Award</strong>
          <span class="honor-year">2015</span>
        </div>
      </div>
    </div>
  </section>

</div>
