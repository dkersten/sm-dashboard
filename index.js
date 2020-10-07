const body = document.querySelector ('body');
const themeCheckbox = document.querySelector ('input[type="checkbox"]');

themeCheckbox.addEventListener ('change', () => {
  if (themeCheckbox.checked) {
    console.log ('dark mode');
    body.classList.add ('dark');
    body.classList.remove ('light');
  } else {
    console.log ('light mode');
    body.classList.add ('light');
    body.classList.remove ('dark');
  }
});
