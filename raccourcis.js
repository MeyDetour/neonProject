
// CREE TOUS LES TX-COLOR ET BG-COLOR BORDER-COLOR
const colors = [
    'falseColor',
    'prof',
    'dash',
    'grincheux',
    'goodColor',
    'violet1',
    'joyeux',
    'simplet',
    'timide',
    'dormeur',
    'atchoum'
];


const root = document.documentElement;
colors.forEach(colorName => {
    addStyleRule(`.tx-${colorName}`, `color: var(--${colorName});`);
    addStyleRule( `.bg-${colorName}`, `background-color: var(--${colorName});`);
    addStyleRule(`.brd-${colorName}`, `border: 3px solid var(--${colorName});`);
});

function addStyleRule(selector, rule) {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule(`${selector} { ${rule} }`);

}

// CREE TOUS LES TX-COLOR ET BG-COLOR BORDER-COLOR
const percentages = [...Array(101).keys()];


percentages.forEach(percentageValue => {
    addStyleRule(`.h-${percentageValue}`, `height: ${percentageValue}%;`);
    addStyleRule(`.top-${percentageValue}`, `top: ${percentageValue}%;`);
    addStyleRule(`.left-${percentageValue}`, `left: ${percentageValue}%;`);
    addStyleRule(`.btm-${percentageValue}`, `bottom: ${percentageValue}%;`);
    addStyleRule(`.right-${percentageValue}`, `right: ${percentageValue}%;`);
    addStyleRule(`.br-${percentageValue}`, `border-radius: ${percentageValue}px;`);
    addStyleRule(`.w-${percentageValue}`, `width: ${percentageValue}%;`);
});

// Fonction pour ajouter une règle de style dynamiquement
