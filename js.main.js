// Simple scroll animation placeholder
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href") === "#") {
      e.preventDefault();
      alert("This section will be linked soon.");
    }
  });
});
