const body = document.querySelector ('body');
const themeCheckbox = document.querySelector ('input[type="checkbox"]');
const overview = document.querySelector ('section.overview');
const info = document.querySelector ('section.info');
const overall = document.querySelector ('section.sm-overall');

themeCheckbox.addEventListener ('change', () => {
  if (themeCheckbox.checked) {
    console.log ('dark mode');
    body.classList.add ('dark');
    body.classList.remove ('light');
    overview.classList.add ('dark');
    overview.classList.remove ('light');
    info.classList.add ('dark');
    info.classList.remove ('light');
    overall.classList.add ('dark');
    overall.classList.remove ('light');
  } else {
    console.log ('light mode');
    body.classList.add ('light');
    body.classList.remove ('dark');
    overview.classList.add ('light');
    overview.classList.remove ('dark');
    info.classList.add ('light');
    info.classList.remove ('dark');
    overall.classList.add ('light');
    overall.classList.remove ('dark');
  }
});
