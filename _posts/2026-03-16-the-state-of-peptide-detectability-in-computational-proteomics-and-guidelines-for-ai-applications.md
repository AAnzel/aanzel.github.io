---
title: "The State of Peptide Detectability in Computational Proteomics and Guidelines for AI Applications"
excerpt: "This review analyzes AI methods for peptide detectability prediction in proteomics, highlighting gaps in reproducibility and transparency. It proposes guidelines for robust evaluation and outlines future directions integrating structural biology, data-independent acquisition, and explainable AI."
categories:
  - Machine-Learning
  - Bioinformatics
classes: wide
header:
  teaser: /assets/images/Publication_images/peptide_detectability.webp
---

<br>


[![Peptide detectability]({{ site.url }}{{ site.baseurl }}/assets/images/Publication_images/peptide_detectability.webp)](https://doi.org/10.34133/csbj.0037){:target="_blank" alt="Aleksandar Anžel's (Aleksandar Anzel's) research image. The State of Peptide Detectability in Computational Proteomics and Guidelines for AI Applications."}


{% assign label-html = "Schilling, V., **Anžel, A.**, Doellinger, J., Lasch, P., Heider, D., & Hattab, G. (2026). *The state of peptide detectability in computational proteomics and guidelines for AI applications*. Computational and Structural Biotechnology Journal, (csbj.0037). [https://doi.org/10.34133/csbj.0037](https://doi.org/10.34133/csbj.0037){:target='_blank'}
{:.small-text}" | markdownify %}

{% capture schilling2026 %}
```bibtex
@article{
doi:10.34133/csbj.0037,
author = {Vincent Schilling  and Aleksandar Anžel  and Joerg Doellinger  and Peter Lasch  and Dominik Heider  and Georges Hattab },
title = {The State of Peptide Detectability in Computational Proteomics and Guidelines for AI Applications},
journal = {Computational and Structural Biotechnology Journal},
volume = {0},
number = {ja},
pages = {},
year = {},
doi = {10.34133/csbj.0037},
URL = {https://spj.science.org/doi/abs/10.34133/csbj.0037},
eprint = {https://spj.science.org/doi/pdf/10.34133/csbj.0037}}
```
{% endcapture %}

{% include accordion.html
id="2026-03-16-the-state-of-peptide-detectability-in-computational-proteomics-and-guidelines-for-ai-applications"
label=label-html
content=schilling2026
%}


---

Artificial intelligence (AI) techniques have transformed proteomics and computational biology over the past decade, particularly in mass spectrometry tasks such as fragment spectra prediction, retention time prediction, and peptide detectability prediction.
However, as the volume of proteomics data grows, the need for robust, reproducible, and comparable AI applications has become increasingly urgent. 
Here, we present a comprehensive scoping review of AI techniques for peptide detectability, an essential and rapidly evolving problem in computational proteomics.
By analyzing more than 25 peer-reviewed methods published between 2006 and 2025, we identify a persistent discrepancy between increasing algorithmic sophistication and consistent adherence to established machine learning standards.
Current studies frequently exhibit heterogeneity in dataset construction, limited transparency in model design and evaluation, and restricted reproducibility.
To address these challenges, we propose actionable guidelines focused on transparent technical reporting, rigorous dataset separation, comprehensive performance evaluation, and reproducibility.
Encouragingly, recent tools demonstrate that such standards can be met in practice.
Furthermore, we outline a future research agenda that emphasizes the integration of structural biology frameworks, the transition toward data-independent acquisition datasets, and the development of explainable AI to ensure models are both biologically interpretable and transferable across evolving instrument platforms.
While centered on peptide detectability, these principles offer valuable insights and can inform future work across a wide range of computational proteomics applications.
