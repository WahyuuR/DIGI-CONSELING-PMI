document.addEventListener("DOMContentLoaded", function () {
  function loadComponent(componentId, file) {
    fetch(file)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(componentId).innerHTML = data;
      })
      .catch((error) => console.error("Error:", error));
  }
  loadComponent("nav", "/publik/component/navbar.html");
  loadComponent("footer-placeholder", "/publik/component/footer.html");
  loadComponent("sidebar-placeholder", "/publik/component/sidebar.html");
});
