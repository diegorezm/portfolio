const THEME_STORAGE_KEY = 'theme';
const themes = ['spring', 'summer', 'autumn', 'winter'];
const desktopThemeButton = document.getElementById('desktop-theme-button');
const mobileThemeButton = document.getElementById('mobile-theme-button');
const navLogo = document.getElementById('nav-logo')
const footerLogo = document.getElementById('footer-logo')
const link = document.querySelector("link[rel~='icon']");
const themeIcons = {
  'spring': `<svg xmlns="http://www.w3.org/2000/svg" class='theme-icon' viewBox="0 0 24 24"><g fill="none" stroke="#2b3031" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5a4.5 4.5 0 1 1-4.5 4.5m0-9V9m-4.5 3H9m7.5 0H15m-3 4.5V15M8 8l1.88 1.88m4.24 0L16 8m-8 8l1.88-1.88m4.24 0L16 16"/></g></svg>`,
  'summer': `<svg xmlns="http://www.w3.org/2000/svg" class='theme-icon' viewBox="0 0 24 24"><path fill="none" stroke="#2b3031" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v2m-7.07.93l1.41 1.41M20 12h2m-2.93-7.07l-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6"/></svg>`,
  'autumn': `<svg xmlns="http://www.w3.org/2000/svg" class='theme-icon' viewBox="0 0 24 24"><path fill="none" stroke="#2b3031" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5a4 4 0 0 0 6.187-2.353a3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8A3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373a3.5 3.5 0 0 0-5.116 3.69a4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1C3.926 19.743 3.014 20.732 2 22m0 0L17 7"/></svg>`,
  'winter': `<svg xmlns="http://www.w3.org/2000/svg" class='theme-icon' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-snowflake"><path d="m10 20-1.25-2.5L6 18"/><path d="M10 4 8.75 6.5 6 6"/><path d="m14 20 1.25-2.5L18 18"/><path d="m14 4 1.25 2.5L18 6"/><path d="m17 21-3-6h-4"/><path d="m17 3-3 6 1.5 3"/><path d="M2 12h6.5L10 9"/><path d="m20 10-1.5 2 1.5 2"/><path d="M22 12h-6.5L14 15"/><path d="m4 10 1.5 2L4 14"/><path d="m7 21 3-6-1.5-3"/><path d="m7 3 3 6h4"/></svg>`
}

const setup = () => {
  const theme = localStorage.getItem(THEME_STORAGE_KEY)
  if (theme === null) {
    localStorage.setItem(THEME_STORAGE_KEY, themes[0])
    return themes[0]
  }
  return theme
}

let currentTheme = setup()

const changeFavicons = (theme) => {
  const faviconSrc = `images/favicon-${theme}.ico`;
  link.href = faviconSrc
  navLogo.src = faviconSrc
  footerLogo.src = faviconSrc
}

const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  changeFavicons(theme)
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  desktopThemeButton.innerHTML = themeIcons[theme]
  mobileThemeButton.innerHTML = theme
};

const nextTheme = (current) => {
  const idx = themes.indexOf(current);
  return themes[(idx + 1) % themes.length];
};

desktopThemeButton.addEventListener('click', () => {
  currentTheme = nextTheme(currentTheme);
  setTheme(currentTheme);
});

mobileThemeButton.addEventListener('click', () => {
  currentTheme = nextTheme(currentTheme);
  setTheme(currentTheme);
});

setTheme(currentTheme);

