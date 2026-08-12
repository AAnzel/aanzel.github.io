---
---

const siteOrigin = new URL({{ site.url | jsonify }}).origin;

document
  .querySelectorAll(".page__content a[href]")
  .forEach((link) => {
    const url = new URL(link.href, window.location.href);

    const isHttpLink = ["http:", "https:"].includes(url.protocol);
    const isInternal =
      url.origin === window.location.origin ||
      url.origin === siteOrigin;

    // Ignore internal, email, telephone, anchor, and other non-web links.
    if (!isHttpLink || isInternal) {
      return;
    }

    // Do not append an icon to image-only/image-based links.
    if (link.querySelector("img, picture, figure, svg")) {
      return;
    }

    // Avoid a duplicate icon if the script is loaded more than once.
    if (link.querySelector(".external-link-marker")) {
      return;
    }

    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const marker = document.createElement("span");
    marker.className = "external-link-marker";

    const icon = document.createElement("i");
    icon.className = "fas fa-external-link-alt";
    icon.setAttribute("aria-hidden", "true");

    const screenReaderText = document.createElement("span");
    screenReaderText.className = "sr-only";
    screenReaderText.textContent = " (opens in a new tab)";

    marker.append(icon, screenReaderText);
    link.append(" ", marker);
  });
