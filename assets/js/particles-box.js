(async () => {
  const targetId = "tsparticles-box";
  const target = document.getElementById(targetId);

  if (!target) {
    console.error("No #tsparticles-box element found");
    return;
  }

  if (!window.tsParticles) {
    console.error("tsParticles is missing");
    return;
  }

  if (typeof window.loadFull === "function") {
    try {
      await loadFull(tsParticles);
    } catch (error) {
      console.warn("loadFull failed, continuing with available bundle:", error);
    }
  }

  const options = {
    fullScreen: {
      enable: false,
    },
    background: {
      color: "transparent",
    },
    fpsLimit: 20,
    detectRetina: true,
    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          area: 500,
        },
      },
      color: {
        value: "#7a7a7a",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.7,
      },
      size: {
        value: {
          min: 2,
          max: 4,
        },
      },
      move: {
        enable: true,
        speed: 0.35,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      links: {
        enable: true,
        distance: 140,
        color: "#9a9a9a",
        opacity: 0.35,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.06,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
        },
        onClick: {
          enable: false,
        },
        resize: {
          enable: true,
        },
      },
    },
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 30,
              density: {
                enable: false,
              },
            },
            size: {
              value: {
                min: 1.5,
                max: 3,
              },
            },
            links: {
              distance: 95,
              opacity: 0.28,
              triangles: {
                opacity: 0.035,
              },
            },
            move: {
              speed: 0.22,
            },
          },
        },
      },
    ],
  };

  try {
    await tsParticles.load({
      id: targetId,
      options,
    });

    console.log("tsParticles loaded successfully");
  } catch (error) {
    console.error("tsParticles failed to load:", error);
  }
})();
