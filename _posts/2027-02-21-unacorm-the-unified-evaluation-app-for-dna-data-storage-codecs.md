---
title: "UNACORM: The Unified Evaluation App for DNA Data Storage Codecs"
excerpt: "How can DNA data storage codecs be compared effectively? This study introduces an open-source benchmarking platform that evaluates encoding performance, computational efficiency, error correction, and cost, enabling standardized comparisons and better-informed decisions for future DNA-based archival storage."
categories:
  - Data-Visualization
  - Bioinformatics
  - Storage-Technologies
  - User-Interfaces
classes: wide
header:
  teaser: /assets/images/Publication_images/unacorm.webp
---

<br>


[![UNACORM Graphical Abstract]({{ site.url }}{{ site.baseurl }}/assets/images/Publication_images/unacorm.webp)](https://doi.org/10.1016/j.tig.2026.04.001){:target="_blank" alt="Aleksandar Anžel's (Aleksandar Anzel's) research image. UNACORM: The Unified Evaluation App for DNA Data Storage Codecs."}


{% assign label-html = "**Anžel, A.**, Anyabolu, C., Wimbes, L., Staus, L., Heldian, I. T., Sonnabend, D., … Hattab, G. (2026). *UNACORM: The Unified Evaluation App for DNA Data Storage Codecs*. Trends in Genetics. [https://doi.org/10.1016/j.tig.2026.04.001](https://doi.org/10.1016/j.tig.2026.04.001){:target='_blank'}
{:.small-text}" | markdownify %}


{% capture aleks202606 %}
```bibtex
@misc{anžel2026unifiedevaluationappdna,
      title={The Unified Evaluation App for DNA Data Storage Codecs}, 
      author={Aleksandar Anžel and Chisom Anyabolu and Leon Wimbes and Luca Staus and Ihsan Tri Heldian and David Sonnabend and Khawla Elhadri and Samuel Becker and Felix Klein and Raffael Schoen and Michael Schwarz and Marius Welzel and Bernd Freisleben and Dominik Heider and Georges Hattab},
      year={2026},
      eprint={2608.09673},
      archivePrefix={arXiv},
      primaryClass={cs.ET},
      url={https://arxiv.org/abs/2608.09673}, 
}
```
{% endcapture %}

{% include accordion.html
id="2027-02-21-unacorm-the-unified-evaluation-app-for-dna-data-storage-codecs"
label=label-html
content=aleks202606
%}


---

Deoxyribonucleic acid (DNA) data storage is a paradigm with great potential for ultra-dense and durable information preservation. However, the rapid proliferation of coding schemes, or codecs, each with their own design constraints and reporting practices, has led to a fragmented landscape that lacks a standardized comparative assessment.
We developed an open-source, modular benchmarking platform that systematically integrates and evaluates state-of-the-art DNA storage codecs. Our approach uses a curated, diverse set of baseline data and applies multidimensional assessment criteria that are aligned with the consensus standard of the DNA Data Storage Alliance. These criteria include encoding/decoding throughput, computational efficiency, error correction performance, and cost efficiency.
The developed platform integrates standardized wrapper functions, allows for the integration of new methods, and automates reproducible evaluations with comprehensive visual and tabular reporting. Benchmarking both contemporary and classical codecs using their default parameters and multiple metrics demonstrates that no single algorithm is optimal across all evaluated dimensions.
Our work establishes a rigorously standardized, open-source evaluation framework that enables reproducible benchmarking, supports evidence-based codec selection, and provides the necessary foundation for translating DNA data storage from experimental research into deployable archival systems.
