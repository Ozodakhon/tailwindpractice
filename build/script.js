const dropdownMenu = document.getElementById('dropdown-menu');
const hamburgerButton = document.getElementById('hamburger-button');

hamburgerButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
});
function hideDropdownMenu() {
    document.getElementById("dropdown-menu").classList.add("hidden");
  }
