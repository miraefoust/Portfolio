const colors = ["#c1b001", "#a8140e", "#4315aa", "#359d09", "#8f4762"];

window.addEventListener("mousedown", (e) => {
  const color = colors.shift();
  document.documentElement.style.setProperty("--highlight-color", color);
  colors.push(color);
});
