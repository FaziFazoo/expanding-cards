const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeAxtiveClasses();
  panel.classList.add("active");
});
});


const removeAxtiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
