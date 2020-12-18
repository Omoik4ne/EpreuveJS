import './styles.scss';
import { vaccins } from './src/data';
// import images from './static/images/*.*';

console.log(vaccins);

// Add title in app
const app = document.getElementById('app');
app.innerHTML = '<h1>Covid Killer</h1>';

// Add header
const monHeader = document.createElement('header');
app.appendChild(monHeader);

// Add Button Sort Header
const sortBtn = document.createElement('button');
const s = document.createTextNode('Sort !');
sortBtn.appendChild(s);
monHeader.appendChild(sortBtn);

// Add Button Hide Header
const hideBtn = document.createElement('button');
const h = document.createTextNode('Hide !');
hideBtn.appendChild(h);
monHeader.appendChild(hideBtn);

// Main
const pagePrincipale = document.createElement('main');
app.appendChild(pagePrincipale);

for (let i = 0; i < vaccins.length; i++) {
  let vaccTotal = '';
  let vaccEnter = "<div class = 'card' style = 'width: 16rem;></div><div class='card-body>";
  vaccEnter += `<h2 class = 'nom_vaccin'>${vaccins[i].Nom}</h2>`;
  vaccEnter += '<img src ="static/sputnik-v.jpg">';
  // app.innerHTML +=`img src=${}`
  vaccEnter += `<div>Inventeur(s) : ${vaccins[i].Inventeurs}</div>`;
  vaccEnter += `<div>Lieu de production : ${vaccins[i].Lieux_de_production}</div>`;
  vaccEnter += `<div>Technologie : ${vaccins[i].Technologie}</div>`;
  vaccEnter += '<div>Quantité souhaitée : <input type="number" id="quantite" name="quantite"> <button type="reserve">Réserver</button></div>';
  vaccEnter += `<div>Prix Unitaire : ${vaccins[i].Prix_unitaire}</div>`;
  vaccTotal += vaccEnter;
  app.innerHTML += vaccTotal;
}

// Add footer
const monFooter = document.createElement('footer');
app.appendChild(monFooter);

// Add Button order Footer
const orderBtn = document.createElement('button');
const o = document.createTextNode('Order !');
orderBtn.appendChild(o);
monFooter.appendChild(orderBtn);
