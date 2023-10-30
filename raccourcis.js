const timide = "#444654";
const goodColor = "green";
const falseColor = "red";
const prof = "#3f2f59";
const joyeux = "#7f05ff";
const simplet = "#401d64";
const atchoum = "#b7b7b7";
const grincheux = "white";
// CREE TOUS LES TX-COLOR ET BG-COLOR BORDER-COLOR
const colors = [
    'dormeur',
    'timide',
    'goodColor',
    'falseColor',
    'dash',
    'joyeux',
    'simplet',
    'prof',
    'atchoum',
    'grincheux'
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
function addStyleRule(selector, rule) {
    const styleElement = document.createElement('style');
    document.head.appendChild(styleElement);
    styleElement.sheet.insertRule(`${selector} { ${rule} }`);
}
