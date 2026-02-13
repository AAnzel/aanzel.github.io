---
title: "Kernel-based Learning for Safe Control of Discrete-Time Unknown Systems under Incomplete Observations"
excerpt: Kernel ridge regression enables safe tracking control for high-order dynamical systems with unknown dynamics and partial state observations. Our observer-integrated approach, backed by Lyapunov stability guarantees and deterministic error bounds, achieves precise trajectory tracking in safety-critical scenarios, validated through numerical simulations.
categories:
  - Machine-Learning
  - Control-Systems
classes: wide
header:
  teaser: /assets/images/Publication_images/Kernel_based.webp
---

<br>


[![Kernel-based Learning image]({{ site.url }}{{ site.baseurl }}/assets/images/Publication_images/Kernel_based.webp)](https://doi.org/10.23919/CCC63176.2024.10662288){:target="_blank" alt="Aleksandar Anžel's (Aleksandar Anzel's) research image. Kernel-based Learning for Safe Control of Discrete-Time Unknown Systems under Incomplete Observations."}


Yang, Z., Dai, X., Yang, W., İlgen, B., **Anžel, A.**, & Hattab, G. (2024). *Kernel-based Learning for Safe Control of Discrete-Time Unknown Systems under Incomplete Observations*. 43rd Chinese Control Conference (CCC), Kunming, China, 2024, pp. 6627-6632. [https://doi.org/10.23919/CCC63176.2024.10662288](https://doi.org/10.23919/CCC63176.2024.10662288){:target="_blank"}.
{:.small-text}

---

Safe control for dynamical systems is critical, yet the presence of unknown dynamics poses significant challenges. In this paper, we present a learning-based control approach for tracking control of a class of high-order systems, operating under the constraint of partially observable states. The uncertainties inherent within the systems are modeled by kernel ridge regression, leveraging the proposed strategic data acquisition approach with limited state measurements. To achieve accurate trajectory tracking, a state observer that seamlessly integrates with the control law is devised. The analysis of the guaranteed control performance is conducted using Lyapunov theory due to the deterministic prediction error bound of kernel ridge regression, ensuring the adaptability of the approach in safety-critical scenarios. To demonstrate the effectiveness of our proposed approach, numerical simulations are performed, underscoring its contributions to the advancement of control strategies.
{:.notice}
