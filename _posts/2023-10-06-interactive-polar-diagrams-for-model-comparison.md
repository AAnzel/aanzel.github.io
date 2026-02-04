---
title: "Interactive polar diagrams for model comparison"
excerpt: polar-diagrams is an interactive library implementing Mutual Information and Taylor Diagrams to visualize multi-model performance across biology, medicine, climate, and ML domains. It reveals linear/nonlinear relationships, temporality, multimodality, and uncertainty via statistics, information theory, and extensible support for continuous/categorical data. First public implementation of interactive versions for rapid model comparison.
categories:
  - Data-Visualization
  - Machine-Learning
  - Bioinformatics
  - Model-Evaluation
  - Time-series
classes: wide
---

<br>

[![Polar Diagrams image]({{ site.url }}{{ site.baseurl }}/assets/images/Publication_images/polar_overview.webp)](https://doi.org/10.1016/j.cmpb.2023.107843){:target="_blank" alt="Aleksandar Anžel's (Aleksandar Anzel's) research image. Interactive polar diagrams for model comparison."}


**Anžel, A.**, Heider, D., & Hattab, G. (2023). *Interactive polar diagrams for model comparison*. Computer Methods and Programs in Biomedicine, 242, 107843. [https://doi.org/10.1016/j.cmpb.2023.107843](https://doi.org/10.1016/j.cmpb.2023.107843){:target="_blank"}.
{: style="font-size:0.7em;"}

---

Objective  
Evaluating the performance of multiple complex models, such as those found in biology, medicine, climatology, and machine learning, using conventional approaches is often challenging when using various evaluation metrics simultaneously. The traditional approach, which relies on presenting multi-model evaluation scores in the table, presents an obstacle when determining the similarities between the models and the order of performance.  
Methods  
By combining statistics, information theory, and data visualization, juxtaposed Taylor and Mutual Information Diagrams permit users to track and summarize the performance of one model or a collection of different models. To uncover linear and nonlinear relationships between models, users may visualize one or both charts.  
Results  
Our library presents the first publicly available implementation of the Mutual Information Diagram and its new interactive capabilities, as well as the first publicly available implementation of an interactive Taylor Diagram. Extensions have been implemented so that both diagrams can display temporality, multimodality, and multivariate data sets, and feature one scalar model property such as uncertainty. Our library, named polar-diagrams, supports both continuous and categorical attributes.  
Conclusion  
The library can be used to quickly and easily assess the performances of complex models, such as those found in machine learning, climate, or biomedical domains.
{: .notice}
