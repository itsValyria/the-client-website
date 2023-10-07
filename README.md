# De Buurtcampus
<!-- Geef je project een titel en schrijf in één zin wat het is -->
De Buurtcampus is een platform voor buurtinitiatieven in Amsterdam West.

### User Story
```Als buurtbewoner van Amsterdam West wil ik een overzicht van alle buurtinitiatieven kunnen bekijken, zodat ik een indruk kan krijgen van wat er allemaal te doen is in de wijk.```

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
TO DO:
- Poster Visual
- Screenshot van pagina

Benieuwd geworden? Check de link! <br>
itsvalyria.github.io/the-client-website/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
TO DO:
- CSS Media queries + screenshot

In dit project heb ik gebruik gemaakt van HTML, CSS en JavaScript.

### HTML
Met de HTML heb ik alle content van de pagina opgezet. Hierbij moet je denken aan de header, navigation, main content en de footer. Het belangrijkste element in de HTML zijn de advertentie listings. Hieronder zal ik een klein stukje code laten zien van één zo'n listing!

Deze listing is gewrapped in een ```<a>``` tag, zodat het hele geheel clickable is. In de ```<a>``` tag vind je een image, de ```<article>``` met de titel en beschrijving, en een ```<li>``` met de tijd, dag en plaats.

```html
                     <li class="advertisement__container">
                        <a class="advertisement__link" href="404.html">
                          <img class="advertisement__image" src="assets/alzheimercafe.jpg" alt="Foto van het Alzheimercafé.">

                          <section class="advertisement">

                            <article class="advertisement__left">
                              <h3>Alzheimer Café Amsterdam West</h3>
                              <p class="advertisement__description">Elke vierde woensdag van de maand opent het Alzheimer Café Amsterdam West haar deuren en kunnen mensen met dementie, hun partners, familie, vrienden en hulpverleners terecht voor informatie en uitwisseling.</p>
                            </article>

                            <ul class="advertisement__right">

                              <li class="advertisement__info">
                                <img src="assets/calendar.svg" alt="Kalender icoontje.">
                                <p>13-10-2023</p>
                              </li>

                              <li class="advertisement__info">
                                <img src="assets/location.svg" alt="Locatie pin icoontje.">
                                <p>Café Belacampo</p>
                              </li>

                              <li class="advertisement__info">
                                <img src="assets/time.svg" alt="Klok icoontje.">
                                <p>18:00 - 22:00</p>
                              </li>

                            </ul>

                          </section>
                        </a>
                      </li>
```

### CSS
Met de CSS heb ik de styling van de website gedaan, eigenlijk alles wat met het uiterlijk van de website te maken heeft. Het meest belangrijke wat ik in CSS heb toegevoegd, is de responsiveness van deze site. Hieronder zal ik per media query kort de code uitleggen inclusief een foto van het eindrestultaat.

### JavaScript
Met de JavaScript heb ik een functie geschreven die alleen op de mobile en tablet versie werkt. Deze function klapt bij het klikken van een ```button``` de ```<form>``` waar de filters in zitten uit. Ook verandert de ```<button>``` van icoontje zodat er een terug icoontje staat.

```js
   function showfilter() {
     const form = document.querySelector('form')
     form.classList.toggle('show-filter')
   
     const toggle = document.querySelector('.form__button')
       for (const svg of toggle.children) {
         svg.classList.toggle('show')
       }
   }
```

<section display: flex; justify-content: center; align-items: center;>
 <img width="300" alt="image" src="https://github.com/itsValyria/the-client-website/assets/76444716/13efa180-8fab-4c9f-85ab-cf0ccb06f95c">
 <img width="300" alt="image" src="https://github.com/itsValyria/the-client-website/assets/76444716/be29454d-ea81-4402-95bc-bb1cd9d29994">
 <img width="300" alt="image" src="https://github.com/itsValyria/the-client-website/assets/76444716/d92eb69e-7781-4059-af1b-7e5caf5c413a">
</section>

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
