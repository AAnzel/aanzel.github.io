---
title: "Determining protein N-glycosylation with machine learning methods"
excerpt: Protein function often depends on post-translational modifications such as N-linked glycosylation, a key process linked to many diseases. Experimental detection is costly, and current tools mainly predict glycosylation sites in mammalian proteins. This work introduces machine learning models that predict the presence of N-glycosylation across organisms while addressing imbalanced datasets.
categories:
  - Bioinformatics
  - Machine-Learning
classes: wide
header:
  teaser: /assets/images/Publication_images/master_thesis_overview.webp
---

<br>

[![Master thesis image]({{ site.url }}{{ site.baseurl }}/assets/images/Publication_images/master_thesis_overview.webp)](http://elibrary.matf.bg.ac.rs/handle/123456789/5013?show=full){:target="_blank" alt="Aleksandar Anžel's (Aleksandar Anzel's) research image. Determining protein N-glycosylation with machine learning methods."}


{% assign label-html = "**Anžel, A.** (2020). *Determining protein N-glycosylation with machine learning methods*. Faculty of Mathematics, University of Belgrade. [http://elibrary.matf.bg.ac.rs/handle/123456789/5013?show=full](http://elibrary.matf.bg.ac.rs/handle/123456789/5013?show=full){:target='_blank'}.
{:.small-text}" | markdownify %}

{% capture anzel2020 %}
```bibtex
@mastersthesis{anzel2020,
  author  = {An{\v{z}}el, Aleksandar},
  title   = {Determining protein N-glycosylation with machine learning methods},
  school  = {Faculty of Mathematics, University of Belgrade},
  year    = {2020},
  type    = {Master's thesis},
  address = {Studentski trg 16, 11158 Belgrade},
  month   = {2},
  note    = {Available at \url{http://elibrary.matf.bg.ac.rs/bitstream/handle/123456789/5013/AnzelAleksandar.pdf?sequence=1}},
}
```
{% endcapture %}

{% include accordion.html
id="2020-02-12-determining-protein-n-glycosylation-with-machine-learning-methods"
label=label-html
content=anzel2020
%}

---

Most protein functions are dependent on post-translational modifications (PTMs). One of the most common PTMs in eukaryotes is N-linked glycosylation, which represents the process of attaching an oligosaccharide, sometimes also referred to as glycan, to a protein molecule. Changes in N-linked glycosylation have been associated with various diseases in different organisms. Determining whether a protein will be N-glycosylated or not is the first step of finding an accurate position of an attachment. Wet lab experiments for determining protein N-glycosylation and finding the attachment position are expensive and time-consuming. Several computational tools were created for automatically determining the exact position of N-glycosylation, but there are none that predict the existence of the process. Furthermore, most existing tools are based on human or mammalian proteomes, and very few are using protein data sets of other organisms. It is known that N-glycosylation has distinctive characteristics between different organisms, therefore organism-specific tools are much in need. For this thesis, different machine learning classifiers were developed for determining protein N-glycosylation. Also, different techniques were used to overcome unbalanced data problems that are existent in used data sets.

This work was submitted in partial fulfillment of the requirements for the degree of _Master of Mathematics_.
{: .small-text .notice--info}
