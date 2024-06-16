<style>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #6c757d;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #6c757d;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.left {
  left: 0;
}

.right {
  left: 50%;
}

.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

.right::after {
  left: -16px;
}

.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}
</style>

---
permalink: /
title: "Hello, I'm Susav."
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<head>
  <meta name="description" content="Susav is a PhD candidate at Texas A&M Univeristy. Susav is studying Computer Engineering and focuses his research on deep learning systems">

</head>

Computer Engineering | PhD candidate @ TAMU
-------------------

Working on democratizing deep learning and AI by building hardware efficient and scalable systems. 

I'm a third-year Computer Engineering Ph.D. candidate at Texas A&M University being advised by [Dr. Narasimha Annapareddy](https://experts.tamu.edu/expert/narasimha-annapareddy/). I'm interested in efficient Machine Learning (ML), Natural Language Processing (NLP), Parallel, Distributed Computing and building hardware efficient systems.


## Updates

* ESPN got accepted to ISMM 2024. 


## Timeline

<div class="timeline">
  <div class="container left">
    <div class="content">
      <h2>2024</h2>
      <p>Started Research Internship at NVIDIA.</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2023</h2>
      <p>ESPN got accepted to ISMM24.</p>
    </div>
  </div>
</div>