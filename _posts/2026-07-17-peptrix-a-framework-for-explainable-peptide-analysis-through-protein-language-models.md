---
title: "PepTriX: A Framework for Explainable Peptide Analysis through Protein Language Models"
excerpt: PepTriX is an open-source framework for peptide classification that combines 1D sequence embeddings with 3D structural features using graph attention networks, contrastive learning, and cross-modal co-attention. Designed for tasks like toxicity prediction and HIV inhibition, it improves generalization, reduces reliance on costly protein language model fine-tuning, and delivers biologically interpretable insights into peptide function.
categories:
  - Large-Language-Models
  - Machine-Learning
  - Bioinformatics
  - Molecular-Modeling
  - Peptide-Classification
classes: wide
header:
  teaser: /assets/images/Publication_images/peptrix_one.webp
---

<br>


[![Peptrix Heatmap image]({{ site.url }}{{ site.baseurl }}/assets/images/Publication_images/peptrix_one.webp)](https://doi.org/10.1016/j.nexres.2026.102151){:target="_blank" alt="Aleksandar Anžel's (Aleksandar Anzel's) research image. PepTriX: A Framework for Explainable Peptide Analysis through Protein Language Models."}

{% assign label-html = "Schilling, V., Dubey, A., **Anžel, A.**, & Hattab, G. (2026). *PepTriX: A Framework for Explainable Peptide Analysis through Protein Language Models*. Next Research, 12, 102151. [https://doi.org/10.1016/j.nexres.2026.102151](https://doi.org/10.1016/j.nexres.2026.102151){:target='_blank'}
{:.small-text}" | markdownify %}


{% capture schilling20262 %}
```bibtex
@article{SCHILLING2026102151,
title = {PepTriX: A framework for explainable peptide analysis through protein language models},
journal = {Next Research},
volume = {12},
pages = {102151},
year = {2026},
issn = {3050-4759},
doi = {https://doi.org/10.1016/j.nexres.2026.102151},
url = {https://www.sciencedirect.com/science/article/pii/S305047592600847X},
author = {Vincent Schilling and Akshat Dubey and Aleksandar Anžel and Georges Hattab},
keywords = {Protein language models, Explainable AI, XAI, Peptide analysis, Proteomics, Contrastive learning},
abstract = {Peptide classification tasks, such as predicting toxicity and HIV inhibition, are fundamental to bioinformatics and drug discovery. Traditional approaches, relying on handcrafted 1D sequence encodings limit generalizability. While protein language models (PLMs) demonstrate strong predictive performance, they are computationally costly to fine-tune and their complex representations hinder domain interpretability. Existing frameworks often lack generalization, restricting our ability to connect predictions to biological properties. To address this, we present PepTriX, a framework integrating 1D sequence embeddings and 3D structural features via a graph attention network enhanced with contrastive training and cross-modal co-attention. PepTriX automatically adapts to diverse datasets, producing task-specific vectors while retaining biological plausibility. Evaluations show that PepTriX performs remarkably well across multiple classification tasks, providing interpretable insights into the biophysical motifs driving predictions. Thus, PepTriX bridges the gap between performance-driven PLMs and domain-level understanding in peptide research. The framework is an open-source framework which is available at: https://github.com/dubeyakshat07/PepTriX/.}
}
```
{% endcapture %}

{% include accordion.html
id="2026-07-17-peptrix-a-framework-for-explainable-peptide-analysis-through-protein-language-models"
label=label-html
content=schilling20262
%}

---

Peptide classification tasks, such as predicting toxicity and HIV inhibition, are fundamental to bioinformatics and drug discovery. Traditional approaches relying on handcrafted 1D sequence encodings limit generalizability. While protein language models (PLMs) demonstrate strong predictive performance, they are computationally costly to fine-tune and their complex representations hinder domain interpretability. Existing frameworks often lack generalization, restricting our ability to connect predictions to biological properties. To address this, we present PepTriX, a framework integrating 1D sequence embeddings and 3D structural features via a graph attention network enhanced with contrastive training and cross-modal co-attention. PepTriX automatically adapts to diverse datasets, producing task-specific vectors while retaining biological plausibility. Evaluations show that PepTriX performs remarkably well across multiple classification tasks, providing interpretable insights into the biophysical motifs driving predictions. Thus, PepTriX bridges the gap between performance-driven PLMs and domain-level understanding in peptide research. The framework is an open-source framework which is available at: [https://github.com/dubeyakshat07/PepTriX/](https://github.com/dubeyakshat07/PepTriX/){:target='_blank'}
