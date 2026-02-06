---
title: "A parametric approach for molecular encodings using multilevel atomic neighborhoods applied to peptide classification"
excerpt: We propose cmangoes, a parametric, carbon-chain-based encoding method for organic molecules that generates binary/numerical arrays (exportable as images) from multilevel atomic neighborhoods. Domain- and task-agnostic, it excels in similarity search, virtual screening, and peptide classification across 29 biomedical datasets with 1421+ ML models.
categories:
  - Molecular-Modeling
  - Machine-Learning
  - Bioinformatics
  - Peptide-Classification
classes: wide
---

<br>


[![Parametric Approach image]({{ site.url }}{{ site.baseurl }}/assets/images/Publication_images/parametric_results.webp)](https://doi.org/10.1093/nargab/lqac103){:target="_blank" alt="Aleksandar Anžel's (Aleksandar Anzel's) research image. A parametric approach for molecular encodings using multilevel atomic neighborhoods applied to peptide classification."}


Hattab, G., **Anžel, A.**, Spänig, S., Neumann, N., & Heider, D. (01 2023). *A parametric approach for molecular encodings using multilevel atomic neighborhoods applied to peptide classification*. NAR Genomics and Bioinformatics, 5(1). [https://doi.org/10.1093/nargab/lqac103](https://doi.org/10.1093/nargab/lqac103){:target="_blank"}.
{:.small-text}

---

Exploring new ways to represent and discover organic molecules is critical to the development of new therapies. Fingerprinting algorithms are used to encode or machine-read organic molecules. Molecular encodings facilitate the computation of distance and similarity measurements to support tasks such as similarity search or virtual screening. Motivated by the ubiquity of carbon and the emerging structured patterns, we propose a parametric approach for molecular encodings using carbon-based multilevel atomic neighborhoods. It implements a walk along the carbon chain of a molecule to compute different representations of the neighborhoods in the form of a binary or numerical array that can later be exported into an image. Applied to the task of binary peptide classification, the evaluation was performed by using forty-nine encodings of twenty-nine data sets from various biomedical fields, resulting in well over 1421 machine learning models. By design, the parametric approach is domain- and task-agnostic and scopes all organic molecules including unnatural and exotic amino acids as well as cyclic peptides. Applied to peptide classification, our results point to a number of promising applications and extensions. The parametric approach was developed as a Python package (cmangoes), the source code and documentation of which can be found at [https://github.com/ghattab/cmangoes](https://github.com/ghattab/cmangoes){:target="_blank"} and [https://doi.org/10.5281/zenodo.7483771](https://doi.org/10.5281/zenodo.7483771){:target="_blank"}.
{:.notice}
