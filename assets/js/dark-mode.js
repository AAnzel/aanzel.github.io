(function () {
  const lightLink = document.getElementById("theme-light");
  const darkLink = document.getElementById("theme-dark");

  if (!lightLink || !darkLink) return;

  function updateToggleState(mode) {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;

    const icon = btn.querySelector("i");
    if (!icon) return;

    // mode: 'light', 'dark', or null (auto)
    btn.dataset.themeState = mode || "auto";

    // Decide what to show visually
    let effectiveMode = mode;
    if (!effectiveMode) {
      // Auto mode: base icon on current OS preference
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      effectiveMode = prefersDark ? "dark" : "light";
    }

    if (effectiveMode === "dark") {
      // Dark theme active → show moon
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      btn.setAttribute("aria-label", "Use light theme");
    } else {
      // Light theme active → show sun
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      // If we’re in override light, suggest going back to auto; adjust wording if you prefer
      btn.setAttribute(
        "aria-label",
        mode === "light" ? "Use system theme" : "Use dark theme",
      );
    }
  }

  function setTheme(mode, persist) {
    // mode: 'light', 'dark', or null for "auto / OS-controlled"
    if (mode === "dark") {
      // Always apply dark overrides
      darkLink.media = "all";
      lightLink.media = "all";
    } else if (mode === "light") {
      // Force light: disable dark CSS
      darkLink.media = "not all";
      lightLink.media = "all";
    } else {
      // Auto: back to OS-based media query
      darkLink.media = "(prefers-color-scheme: dark)";
      lightLink.media = "all";
    }

    if (persist) {
      if (mode) {
        sessionStorage.setItem("theme", mode);
      } else {
        sessionStorage.removeItem("theme");
      }
    }

    updateToggleState(mode);
  }

  function themeOnLoad() {
    const stored = sessionStorage.getItem("theme");

    if (stored === "light" || stored === "dark") {
      setTheme(stored, false);
    } else {
      // No override: leave media as-is, only update button to match OS
      setTheme(null, false);

      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      updateToggleState(prefersDark ? "dark" : "light");

      // React to OS changes only when in auto mode
      if (window.matchMedia) {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        mq.addEventListener("change", (e) => {
          if (!sessionStorage.getItem("theme")) {
            updateToggleState(e.matches ? "dark" : "light");
          }
        });
      }
    }
  }

  function toggleTheme() {
    const stored = sessionStorage.getItem("theme");

    if (!stored) {
      // Currently auto -> override with opposite of OS
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "light" : "dark", true);
    } else if (stored === "dark") {
      // dark override -> light override
      setTheme("light", true);
    } else {
      // light override -> back to auto / OS
      setTheme(null, true);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    themeOnLoad();
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.addEventListener("click", toggleTheme);
    }
  });
})();
