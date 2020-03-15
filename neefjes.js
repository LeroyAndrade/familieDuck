// alle plaatjes van de duckfamilie in een array
const plaatjes  = document.querySelectorAll('.duck img');
const bolletjes = document.getElementById('bolletjes');

// hoogte gelijkmaken aan de eerste sectie
document.getElementsByClassName('info')[0].style.height = document.getElementsByClassName('duck')[0].clientHeight +'px';

for(let i=0; i<plaatjes.length; i++)
{
     //let box = document.getElementsByTagName('img')[i];
     //let boxSec = document.getElementsByTagName('section')[i];

    plaatjes[i].addEventListener('mouseenter', vulKopAan);
    plaatjes[i].addEventListener('mouseleave', resetKop);
    // hier kun je nog 2 events aan toevoegen: click en dblclick

    //1:
    plaatjes[i].addEventListener('click', one)
    //2:
    plaatjes[i].addEventListener('dblclick', oneboxSec);
}
//alert(this.data.clicks);

function one()
{
  let borde=document.getElementById('one');
  let text=document.getElementById('informatie');
  text.innerHTML=this.dataset.info;
  borde.style.borderColor=this.dataset.kleur;
}

function oneboxSec()
{

}


function vulKopAan()
{
    document.getElementById('duck').innerText = ": "+this.title;
    document.getElementById('kop').style.color = this.dataset.kleur;
}

function resetKop()
{
    document.getElementById('duck').innerText = "";
    document.getElementById('kop').style.color  = 'red';
}

/*
    Maak een functie, die aangeroepen wordt door een klik op de afbeelding.
    Deze moet om de geklikte afbeelding een rand maken met de kleur, die
    te vinden is in het data-kleur attribuut.
    Het element.dataset.eigenschap heb je van een element de waarde van 'data-eigenschap'
*/


/*xyz.addEventListener('click', function(){
  window.alert(this.dataset.info);
});
*/

let xyz = document.getElementsByTagName('img');
for(let i =0; i < xyz.length; i++){
  xyz[i].addEventListener('dblclick', Like);
//doc.getElementById(this.title).lastElementChild.innerHTML = this.dataset.clicks;
//console.log(this.dataset.clicks);
}

/*
    Bovendien moet de sectie info gevuld worden: zowel de kop h3#titel als de p#info.
    De inhoud staat in de het alt-attribuut als een ander data-attribuut van de afbeelding.

    */


/**
    Maak nog een functie die aangeroepen wordt door een dubbelklik.
    In de attributen van elke afbeelding staat een data-attribuut, data-clicks,
    die moet worden opgehoogd.
    Bovendien moet de inhoud van die data-clicks worden ingevoegd in de p.likes.
    Tot slot moet er een div met de class 'bolletje' en de achtergrondkleur uit
    data-kleur toegevoegd worden aan het element div#bolletjes
*/

function Like(){
  this.dataset.clicks++;

letdoc = this.section.innerHTML = this.dataset.clicks;

}





//
