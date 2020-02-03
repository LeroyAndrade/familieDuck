// alle plaatjes van de duckfamilie in een array

const plaatjes  = document.querySelectorAll('.duck img');
const bolletjes = document.getElementById('bolletjes');

// hoogte gelijkmaken aan de eerste sectie
document.getElementsByClassName('info')[0].style.height = document.getElementsByClassName('duck')[0].clientHeight +'px';

for(let i=0; i<plaatjes.length; i++) {
  let box = document.getElementsByTagName('img')[i];

    plaatjes[i].addEventListener('mouseenter', vulKopAan);
    plaatjes[i].addEventListener('mouseleave', resetKop);
    // hier kun je nog 2 events aan toevoegen: click en dblclick
    box.addEventListener('click', function(){
//1:
  let border=document.getElementById('one');

      let text=document.getElementById('informatie');

      text.innerHTML=this.dataset.info;
      border.style.borderColor=this.dataset.kleur;
      document.getElementById('textBox').innerHTML += "geslaagd";
        });
//2:
}
//alert(this.data.clicks);



function vulKopAan() {
    document.getElementById('duck').innerText = ": "+this.title;
    document.getElementById('kop').style.color = this.dataset.kleur;
}

function resetKop() {
    document.getElementById('duck').innerText = "";
    document.getElementById('kop').style.color  = 'red';
}



/*
    Maak een functie, die aangeroepen wordt door een klik op de afbeelding.
    Deze moet om de geklikte afbeelding een rand maken met de kleur, die
    te vinden is in het data-kleur attribuut.
    Het element.dataset.eigenschap heb je van een element de waarde van 'data-eigenschap'
*/


let xyz = document.querySelectorAll('img');

/*xyz.addEventListener('click', function(){
  window.alert(this.dataset.info);
});
*/

for(let i =0; i < xyz.length; i++)
{
  xyz[i].addEventListener('click', function(){
    console.log(this.dataset.clicks);
    this.dataset.clicks++;
  });
}
/*
    Bovendien moet de sectie info gevuld worden: zowel de kop h3#titel als de p#info.
    De inhoud staat in de het alt-attribuut als een ander data-attribuut van de afbeelding.

    */


/**
    Maak noeg een functie die aangeroepen wordt door een dubbelklik.
    In de attributen van elke afbeelding staat een data-attribuut, data-clicks,
    die moet worden opgehoogd.
    Bovendien moet de inhoud van die data-clicks worden ingevoegd in de p.likes.
    Tot slot moet er een div met de class 'bolletje' en de achtergrondkleur uit
    data-kleur toegevoegd worden aan het element div#bolletjes
*/
