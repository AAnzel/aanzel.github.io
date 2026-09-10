---
title: "UbiQVision: Spatial Dempster-Shafer fusion of XAI attributions for reliable deep vision ensembles"
excerpt: UbiQVision is an explainable AI framework for reliable deep vision ensembles in medical imaging. It combines Dirichlet posterior sampling, SHAP attribution maps, and spatial Dempster-Shafer fusion to measure uncertainty in model explanations. Evaluated across pathology, ophthalmology, and radiology datasets, UbiQVision helps make complex deep-learning predictions more interpretable and trustworthy.
categories:
  - Machine-Learning
  - Bioinformatics
  - Explainable-AI
  - AI-Ethics
classes: wide
header:
  teaser: /assets/images/Publication_images/ubiqvision_overview.webp
---

<br>


[![UbiQTree image]({{ site.url }}{{ site.baseurl }}/assets/images/Publication_images/ubiqvision_overview.webp)](https://doi.org/10.1016/j.mlwa.2026.101000){:target="_blank" alt="Aleksandar Anžel's (Aleksandar Anzel's) research image. UbiQVision: Spatial Dempster-Shafer fusion of XAI attributions for reliable deep vision ensembles."}


{% assign label-html = "Dubey, A., **Anžel, A.**, İlgen, B., & Hattab, G. (2026a). *UbiQVision: Spatial Dempster-Shafer fusion of XAI attributions for reliable deep vision ensembles*. Machine Learning with Applications, 101000. [https://doi.org/10.1016/j.mlwa.2026.101000](https://doi.org/10.1016/j.mlwa.2026.101000){:target='_blank'}
{:.small-text}" | markdownify %}


{% capture dubey20263 %}
```bibtex
@article{DUBEY2026101000,
title = {UbiQVision: Spatial Dempster-Shafer fusion of XAI attributions for reliable deep vision ensembles},
journal = {Machine Learning with Applications},
pages = {101000},
year = {2026},
issn = {2666-8270},
doi = {https://doi.org/10.1016/j.mlwa.2026.101000},
url = {https://www.sciencedirect.com/science/article/pii/S2666827026001659},
author = {Akshat Dubey and Aleksandar Anžel and Bahar İlgen and Georges Hattab},
keywords = {Explainable artificial intelligence, XAI, Medical imaging, Computer vision, SHAP},
abstract = {Recent advances in deep learning have led to its widespread adoption across diverse domains, including medical imaging. This progress is driven by increasingly sophisticated model architectures, such as ResNets, Vision Transformers, and Hybrid Convolutional Neural Networks, that offer enhanced performance at the cost of greater complexity. This complexity often compromises model explainability and interpretability. SHAP has emerged as a prominent method for providing interpretable visualizations that aid domain experts in understanding model predictions. However, SHAP explanations can be unstable and unreliable in the presence of epistemic and aleatoric uncertainty. In this study, we address this challenge by using Dirichlet posterior sampling and Dempster-Shafer theory to quantify the uncertainty that arises from these unstable explanations in medical imaging applications. The framework uses a belief, plausible, and fusion map approach alongside statistical quantitative analysis to produce quantification of uncertainty in SHAP. Furthermore, we evaluated our framework on three medical imaging datasets with varying class distributions, image qualities, and modality types which introduces noise due to varying image resolutions and modality-specific aspect covering the examples from pathology, ophthalmology, and radiology, helping us to study the epistemic uncertainty. The project is available at https://github.com/dubeyakshat07/UbiQVision/}
}
```
{% endcapture %}

{% include accordion.html
id="2026-09-09-ubiqvision-spatial-dempster-shafer-fusion-of-xai-attributions-for-reliable-deep-vision-ensembles"
label=label-html
content=dubey20263
%}

---

Recent advances in deep learning have led to its widespread adoption across diverse domains, including medical imaging. This progress is driven by increasingly sophisticated model architectures, such as ResNets, Vision Transformers, and Hybrid Convolutional Neural Networks, that offer enhanced performance at the cost of greater complexity. This complexity often compromises model explainability and interpretability. SHAP has emerged as a prominent method for providing interpretable visualizations that aid domain experts in understanding model predictions. However, SHAP explanations can be unstable and unreliable in the presence of epistemic and aleatoric uncertainty. In this study, we address this challenge by using Dirichlet posterior sampling and Dempster-Shafer theory to quantify the uncertainty that arises from these unstable explanations in medical imaging applications. The framework uses a belief, plausible, and fusion map approach alongside statistical quantitative analysis to produce quantification of uncertainty in SHAP. Furthermore, we evaluated our framework on three medical imaging datasets with varying class distributions, image qualities, and modality types which introduces noise due to varying image resolutions and modality-specific aspect covering the examples from pathology, ophthalmology, and radiology, helping us to study the epistemic uncertainty. The project is available at [https://github.com/dubeyakshat07/UbiQVision/](https://github.com/dubeyakshat07/UbiQVision/).
