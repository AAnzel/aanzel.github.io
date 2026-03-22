---
title: "Genomic data representations for horizontal gene transfer detection"
excerpt: RCKmer (k=7) + SVM representation achieves state-of-the-art HGT detection (F1=0.959, MCC=0.908) across 44 genomic encodings and 4 datasets, outperforming traditional assembly/comparative genomics for complex AMR gene transfers in multidrug-resistant superbugs. Multi-species training enhances generalization for genomic surveillance.
categories:
  - Genomics
  - AMR
  - Machine-Learning
  - Bioinformatics
classes: wide
header:
  teaser: /assets/images/Publication_images/hgt_representations.webp
---

<br>


[![HGT representations image]({{ site.url }}{{ site.baseurl }}/assets/images/Publication_images/hgt_representations.webp)](https://doi.org/10.1093/nargab/lqaf165){:target="_blank" alt="Aleksandar Anžel's (Aleksandar Anzel's) research image. Genomic data representations for horizontal gene transfer detection."}


{% assign label-html = "Wijaya, A. J., **Anžel, A.**, Richard, H., & Hattab, G. (12 2025). *Genomic data representations for horizontal gene transfer detection*. NAR Genomics and Bioinformatics, 7(4), lqaf165. [https://doi.org/10.1093/nargab/lqaf165](https://doi.org/10.1093/nargab/lqaf165){:target='_blank'}
{:.small-text}" | markdownify %}

{% capture wijaya20252 %}
```bibtex
@article{10.1093/nargab/lqaf165,
    author = {Wijaya, Andre Jatmiko and Anžel, Aleksandar and Richard, Hugues and Hattab, Georges},
    title = {Genomic data representations for horizontal gene transfer detection},
    journal = {NAR Genomics and Bioinformatics},
    volume = {7},
    number = {4},
    pages = {lqaf165},
    year = {2025},
    month = {12},
    abstract = {Horizontal gene transfer (HGT) accelerates the spread of antimicrobial resistance (AMR) via mobile genetic elements allowing pathogens to acquire resistance genes across species. This process drives the evolution of multidrug-resistant “superbugs” in clinical settings. Detection of HGT is critical to mitigating AMR, but traditional methods based on sequence assembly or comparative genomics lack resolution for complex transfer events. While machine learning (ML) promises improved detection, several studies in other domains have demonstrated that data representations will strongly influence its performance. There is, however, no clear recommendation on the best data representation for HGT detection. Here, we evaluated 44 genomic data representations using five ML models across four data sets. We demonstrate that ML performance is highly dependent on the genomic data representation. The RCKmer-based representation (k = 7) paired with a support vector machine is found to be optimal (F1: 0.959; MCC: 0.908), outperforming other approaches. Moreover, models trained on multi-species data sets are shown to generalize better. Our findings suggest that genomic surveillance benefits from task-specific genome data representations. This work provides state-of-the-art, fine-tuned models for identifying and annotating genomic islands that will enable proper detection of transfer of AMR-related genes between species.},
    issn = {2631-9268},
    doi = {10.1093/nargab/lqaf165},
    url = {https://doi.org/10.1093/nargab/lqaf165},
    eprint = {https://academic.oup.com/nargab/article-pdf/7/4/lqaf165/65830478/lqaf165.pdf},
}
```
{% endcapture %}

{% include accordion.html
id="2025-12-10-genomic-data-representations-for-horizontal-gene-transfer-detection"
label=label-html
content=wijaya20252
%}

---

Horizontal gene transfer (HGT) accelerates the spread of antimicrobial resistance (AMR) via mobile genetic elements allowing pathogens to acquire resistance genes across species. This process drives the evolution of multidrug-resistant “superbugs” in clinical settings. Detection of HGT is critical to mitigating AMR, but traditional methods based on sequence assembly or comparative genomics lack resolution for complex transfer events. While machine learning (ML) promises improved detection, several studies in other domains have demonstrated that data representations will strongly influence its performance. There is, however, no clear recommendation on the best data representation for HGT detection. Here, we evaluated 44 genomic data representations using five ML models across four data sets. We demonstrate that ML performance is highly dependent on the genomic data representation. The RCKmer-based representation (k = 7) paired with a support vector machine is found to be optimal (F1: 0.959; MCC: 0.908), outperforming other approaches. Moreover, models trained on multi-species data sets are shown to generalize better. Our findings suggest that genomic surveillance benefits from task-specific genome data representations. This work provides state-of-the-art, fine-tuned models for identifying and annotating genomic islands that will enable proper detection of transfer of AMR-related genes between species.
