# Culinair Kompas — Receptenapp

Welkom bij **Culinair Kompas**, een moderne receptenapp gebouwd met React, Chakra UI en Vite.  
Ontdek recepten, filter op naam, bekijk details, markeer favorieten, en leer meer over ons team.

---

## Functionaliteiten

- Zoekfunctie: filter recepten op naam
- Detailpagina's met receptinformatie en afbeelding
- Responsive design met hamburger-menu voor mobiel
- Werkend contactformulier (met Formspree)
- Over ons pagina met achtergrondafbeelding
- Mooie lay-out met Chakra UI componenten

---

## Projectstructuur

```
my-first-app/
├── public/
│   └── images/           # Afbeeldingen voor recepten, logo, achtergronden
├── src/
│   ├── components/       # Header, RecipeDetail, etc.
│   ├── pages/            # HomePage, RecipeListPage, ContactPage, AboutPage, FavoritesPage
│   ├── data.js           # Recepten in JSON-formaat
│   └── App.jsx           # Hoofdcomponent met routing en state
```

---

## 🛠️ Installatie

1. Clone dit project:

```bash
git clone https://github.com/jouw-gebruikersnaam/culinair-kompas.git
cd culinair-kompas
```

2. Installeer dependencies:

```bash
npm install
```

3. Start de ontwikkelserver:

```bash
npm run dev
```

App draait op [http://localhost:5173](http://localhost:5173)

---

## Formspree instellen (optioneel)

Voor het werkende contactformulier:

1. Maak een account aan op [formspree.io](https://formspree.io)
2. Vervang de URL in `ContactPage.jsx` met jouw eigen endpoint:
   ```js
   fetch("https://formspree.io/f/xxxxx", ...)
   ```

---


---

##  Gemaakt met liefde door Frank Starren

Culinair Kompas — een passieproject voor iedereen die houdt van goed eten en mooie code.