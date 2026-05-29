---
title: "Evaluating ensemble learning approaches for horizontal gene transfer detection"
excerpt: This study examines ensemble machine learning for genomic island detection, a key driver of antimicrobial resistance spread. Combining diverse data representations slightly improves classification recall but does not enhance localization, highlighting limits in current approaches and the need for new problem formulations.
categories:
  - Genomics
  - AMR
  - Machine-Learning
  - Bioinformatics
classes: wide
header:
  teaser: /assets/images/Publication_images/hgt_ensemble.webp
---

<br>


[![HGT ensemble image]({{ site.url }}{{ site.baseurl }}/assets/images/Publication_images/hgt_ensemble.webp)](https://doi.org/10.1038/s41598-026-53037-x){:target="_blank" alt="Aleksandar Anžel's (Aleksandar Anzel's) research image. Evaluating ensemble learning approaches for horizontal gene transfer detection."}


{% assign label-html = "Wijaya, A. J., **Anžel, A.**, & Hattab, G. (2026). *Evaluating ensemble learning approaches for horizontal gene transfer detection*. Scientific Reports, 16(1). [https://doi.org/10.1038/s41598-026-53037-x](https://doi.org/10.1038/s41598-026-53037-x){:target='_blank'}
{:.small-text}" | markdownify %}

{% capture wijaya20265 %}
```bibtex
@Article{Wijaya2026,
  author={Wijaya, Andre Jatmiko
  and An{\v{z}}el, Aleksandar
  and Hattab, Georges},
  title={Evaluating ensemble learning approaches for horizontal gene transfer detection},
  journal={Scientific Reports},
  year={2026},
  month={May},
  day={28},
  volume={16},
  number={1},
  pages={16582},
  abstract={Horizontal gene transfer (HGT) is widely recognized as a major driver of antimicrobial resistance (AMR) dissemination, with genomic islands (GIs) as one of the drivers facilitating the spread. Detecting GIs is essential for improving AMR surveillance. Numerous computational approaches have been developed for GIs detection, including recent advances in machine learning (ML). Several studies in other fields have shown that ML model performance depends on data representations. Combining multiple data representations in ensemble learning has been shown to improve performance in other genomics tasks. However, this approach has not yet been evaluated for GIs detection. To this end, we investigate the efficacy of integrating diverse data representations in ensemble learning for GIs detection, particularly for classification task. Then, we assess its applicability to localizing GIs, which are clusters of genes acquired through HGT, in a genomic sequence. We implemented a two-stage ensemble selection strategy to determine the optimal combination of data representations. Our ensemble selection strategy reveals that combining low-correlated data representations in an ensemble classifier yields a slightly higher Recall than individual representation for the classification task, but the improvement is not statistically significant. Nevertheless, the ensemble classifier could not localize GIs better, suggesting that the cross-task generalizability remains constrained. This finding presents an opportunity for future research to advance the field by redefining the problem formulation of GIs detection.},
  issn={2045-2322},
  doi={10.1038/s41598-026-53037-x},
  url={https://doi.org/10.1038/s41598-026-53037-x}
}
```
{% endcapture %}

{% include accordion.html
id="2026-05-28-evaluating-ensemble-learning-approaches-for-horizontal-gene-transfer-detection"
label=label-html
content=wijaya20265
%}

---

Horizontal gene transfer (HGT) is widely recognized as a major driver of antimicrobial resistance (AMR) dissemination, with genomic islands (GIs) as one of the drivers facilitating the spread. Detecting GIs is essential for improving AMR surveillance. Numerous computational approaches have been developed for GIs detection, including recent advances in machine learning (ML). Several studies in other fields have shown that ML model performance depends on data representations. Combining multiple data representations in ensemble learning has been shown to improve performance in other genomics tasks. However, this approach has not yet been evaluated for GIs detection. To this end, we investigate the efficacy of integrating diverse data representations in ensemble learning for GIs detection, particularly for classification task. Then, we assess its applicability to localizing GIs, which are clusters of genes acquired through HGT, in a genomic sequence. We implemented a two-stage ensemble selection strategy to determine the optimal combination of data representations. Our ensemble selection strategy reveals that combining low-correlated data representations in an ensemble classifier yields a slightly higher Recall than individual representation for the classification task, but the improvement is not statistically significant. Nevertheless, the ensemble classifier could not localize GIs better, suggesting that the cross-task generalizability remains constrained. This finding presents an opportunity for future research to advance the field by redefining the problem formulation of GIs detection.
