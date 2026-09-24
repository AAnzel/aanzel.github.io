---
title: "Network-based characterization of latent co-testing patterns in antimicrobial susceptibility testing"
excerpt: This study reveals shadow antibiograms—pathogen- and setting-specific antibiotic testing patterns that shape which antimicrobial resistance data enter surveillance systems. Analyzing about 13 million bacterial isolates from Germany's national AMR surveillance system (2019–2023), the research maps co-testing networks across six WHO BPPL-aligned cohorts and identifies Jaccard similarity as the most interpretable and stable approach. The findings support diagnostic stewardship and bias-aware AMR surveillance.
categories:
  - Machine-Learning
  - Bioinformatics
  - Data-Visualization
  - User-Interfaces
  - Time-series
classes: wide
header:
  teaser: /assets/images/Publication_images/shadow_overview.webp
---

<br>


[![Shadow Antibiogram image]({{ site.url }}{{ site.baseurl }}/assets/images/Publication_images/shadow_overview.webp)](https://doi.org/10.1016/j.isci.2026.117421){:target="_blank" alt="Aleksandar Anžel's (Aleksandar Anzel's) research image. Network-based characterization of latent co-testing patterns in antimicrobial susceptibility testing."}


{% assign label-html = "Awotoro, E., **Anžel, A.**, Anyabolu, C., Willrich, N., & Hattab, G. (2026). *Network-based characterization of latent co-testing patterns in antimicrobial susceptibility testing*. iScience, 29(10). [https://doi.org/10.1016/j.isci.2026.117421](https://doi.org/10.1016/j.isci.2026.117421){:target='_blank'}
{:.small-text}" | markdownify %}


{% capture awotoro202610 %}
```bibtex
@Article{Awotoro2026,
author={Awotoro, Ebenezer
and An{\v{z}}el, Aleksandar
and Anyabolu, Chisom
and Willrich, Niklas
and Hattab, Georges},
title={Network-based characterization of latent co-testing patterns in antimicrobial susceptibility testing},
journal={iScience},
year={2026},
month={Oct},
day={16},
publisher={Elsevier},
volume={29},
number={10},
abstract={Antimicrobial resistance (AMR) surveillance depends on antimicrobial susceptibility testing, yet antibiotic panels vary by pathogen cohort, specimen, year, ward, and care setting. We term these empirically reconstructed testing architectures shadow antibiograms: structures that shape which susceptibility results enter surveillance datasets and which resistance relationships can be observed. We analyzed approximately 13 million bacterial isolates from Germany?s National Antibiotic Resistance Surveillance system (2019?2023) across six WHO BPPL-aligned operational cohorts. Co-testing networks were constructed using Jaccard, Dice, cosine, and phi-coefficient similarity, evaluated with Fisher?s exact tests and Benjamini-Hochberg correction, and partitioned with multi-resolution Louvain community detection. Networks contained three to four dominant co-testing communities; false discovery rate (FDR) retention ranged from 89 to 100{\%} across cohorts and specimen types. Jaccard provided the best balance of coherence, stability, antimicrobial-class alignment, interpretability, and edge retention. This work provides one of the first national-scale empirical characterizations of shadow antibiogram structure, supporting diagnostic stewardship and bias-aware AMR surveillance interpretation.},
issn={2589-0042},
doi={10.1016/j.isci.2026.117421},
url={https://doi.org/10.1016/j.isci.2026.117421}
}
```
{% endcapture %}

{% include accordion.html
id="2026-09-22-network-based-characterization-of-latent-co-testing-patterns-in-antimicrobial-susceptibility-testing"
label=label-html
content=awotoro202610
%}

---

Antimicrobial resistance (AMR) surveillance depends on antimicrobial susceptibility testing, yet antibiotic panels vary by pathogen cohort, specimen, year, ward, and care setting. We term these empirically reconstructed testing architectures shadow antibiograms: structures that shape which susceptibility results enter surveillance datasets and which resistance relationships can be observed. We analyzed approximately 13 million bacterial isolates from Germany's National Antibiotic Resistance Surveillance system (2019–2023) across six WHO BPPL-aligned operational cohorts. Co-testing networks were constructed using Jaccard, Dice, cosine, and phi-coefficient similarity, evaluated with Fisher's exact tests and Benjamini-Hochberg correction, and partitioned with multi-resolution Louvain community detection. Networks contained three to four dominant co-testing communities; false discovery rate (FDR) retention ranged from 89 to 100% across cohorts and specimen types. Jaccard provided the best balance of coherence, stability, antimicrobial-class alignment, interpretability, and edge retention. This work provides one of the first national-scale empirical characterizations of shadow antibiogram structure, supporting diagnostic stewardship and bias-aware AMR surveillance interpretation.
