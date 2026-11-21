---
title: "The Contribution of Taxonomic Diversity to Machine Learning Performance for the Detection of Genomic Islands"
excerpt: This study explores cross-species machine learning for genomic island detection, revealing how species diversity and genomic distance influence model generalizability and prediction accuracy. The findings highlight key considerations for improving genomic island detection and monitoring antimicrobial resistance and horizontal gene transfer.
categories:
  - Genomics
  - AMR
  - Machine-Learning
  - Bioinformatics
classes: wide
header:
  teaser: /assets/images/Publication_images/taxonomic_diversity_overview.webp
---

<br>


[![The Contribution of Taxonomic Diversity image]({{ site.url }}{{ site.baseurl }}/assets/images/Publication_images/taxonomic_diversity_overview.webp)](https://doi.org/10.1093/nargab/lqaf165){:target="_blank" alt="Aleksandar Anžel's (Aleksandar Anzel's) research image. The Contribution of Taxonomic Diversity to Machine Learning Performance for the Detection of Genomic Islands."}


{% assign label-html = "Wijaya, A. J., Titizova, L., Musch, V., **Anžel, A.**, Richard, H., & Hattab, G. (12 2025). *The Contribution of Taxonomic Diversity to Machine Learning Performance for the Detection of Genomic Islands*. NAR Genomics and Bioinformatics, 7(4), lqaf165. [https://doi.org/10.1093/nargab/lqaf165](https://doi.org/10.1093/nargab/lqaf165){:target='_blank'}
{:.small-text}" | markdownify %}

{% capture wijaya202611 %}
```bibtex
@article{10.1093/nargab/lqaf165,
    author = {Wijaya, Andre Jatmiko and Anžel, Aleksandar and Richard, Hugues and Hattab, Georges},
    title = {The Contribution of Taxonomic Diversity to Machine Learning Performance for the Detection of Genomic Islands},
    journal = {NAR Genomics and Bioinformatics},
    volume = {7},
    number = {4},
    pages = {lqaf165},
    year = {2025},
    month = {12},
    abstract = {Genomic islands (GIs) are among the major vehicles for horizontal gene transfer (HGT), facilitating the rapid dissemination of antimicrobial resistance and virulence factors. 
Accurate GI detection is crucial for tracking pathogen evolution and controlling outbreaks. 
HGT is an inherently multi-species process.
While other genomic tasks have used cross-species machine learning models to analyze understudied species, there are no cross-species models for GI detection.
To address this issue, we examined how dataset composition impacts the generalizability of cross-species models for GI detection. 
Our results demonstrate that species richness in the training dataset and genomic distance between the test species and training species are important for cross-species generalization.
A negative relationship between model performance and genomic distance, as measured by Jensen-Shannon Divergence (JSD) and Mash distance, is reflected by the decrease in Precision.
This study provides insight into future developments in machine learning approaches for GI detection and emphasizes the importance of quantifying cross-species generalization when reporting model performance.},
    issn = {2631-9268},
    doi = {10.1093/nargab/lqaf165},
    url = {https://doi.org/10.1093/nargab/lqaf165},
    eprint = {https://academic.oup.com/nargab/article-pdf/7/4/lqaf165/65830478/lqaf165.pdf},
}
```
{% endcapture %}

{% include accordion.html
id="2027-02-22-the-contribution-of-taxonomic-diversity-to-machine-learning-performance-for-the-detection-of-genomic-islands"
label=label-html
content=wijaya202611
%}

---

Genomic islands (GIs) are among the major vehicles for horizontal gene transfer (HGT), facilitating the rapid dissemination of antimicrobial resistance and virulence factors. 
Accurate GI detection is crucial for tracking pathogen evolution and controlling outbreaks. HGT is an inherently multi-species process.
While other genomic tasks have used cross-species machine learning models to analyze understudied species, there are no cross-species models for GI detection.
To address this issue, we examined how dataset composition impacts the generalizability of cross-species models for GI detection. 
Our results demonstrate that species richness in the training dataset and genomic distance between the test species and training species are important for cross-species generalization.
A negative relationship between model performance and genomic distance, as measured by Jensen-Shannon Divergence (JSD) and Mash distance, is reflected by the decrease in Precision.
This study provides insight into future developments in machine learning approaches for GI detection and emphasizes the importance of quantifying cross-species generalization when reporting model performance.
