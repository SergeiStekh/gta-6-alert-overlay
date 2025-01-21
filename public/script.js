// Default configuration
const defaultConfig = {
  text: "Hello",
  textColor: "#ffffff",
  animationStyle: "fade-in",
};

// Apply configuration
function applyConfig(config) {
  const textElement = document.getElementById("widget-text");

  // Update text content
  textElement.textContent = config.text;

  // Update text color
  document.documentElement.style.setProperty("--text-color", config.textColor);

  // Update animation style
  document.documentElement.style.setProperty("--animation-style", config.animationStyle);
}

// Load configuration from URL parameters
function getConfigFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return {
    text: params.get("text") || defaultConfig.text,
    textColor: params.get("textColor") || defaultConfig.textColor,
    animationStyle: params.get("animationStyle") || defaultConfig.animationStyle,
  };
}

// Apply the configuration
const userConfig = getConfigFromUrl();
applyConfig(userConfig);