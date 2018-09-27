import React from "react";
import Travel from "./Travel";
// src/Quotes.js
const dataQuotes = [
  {
    destination:"Bonifacio",
    country:"France",
    distance:"1 480kms",
    photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bonifacio_vieille_ville_marine.jpg/1200px-Bonifacio_vieille_ville_marine.jpg",
  },
  {
    destination:"République Dominicaine",
    country:"Grandes Antilles",
    distance:"7 229kms",
    photo:"https://back-carrefour.orchestra-platform.com/admin/TS/fckUserFiles/Image/B2C/header_hp/1920x550_destination_republique_dominicaine_punta_cana_plage.jpg",

  },
  {
    destination:"Canada",
    country:"Canada",
    distance:"6 486 kms",
    photo:"https://www.canada.ca/content/canadasite/en/immigration-refugees-citizenship/services/visit-canada/_jcr_content/par/adaptiveimage/image.img.jpg/1511270829049.jpg",

  },
  {
    destination:"Sydney",
    country:"Australie",
    distance:"14 976 kms",
    photo:"https://lh3.googleusercontent.com/proxy/NxBVrrJcUiTK4LHNqFhOrhvL9wSLmt8B8KoaXGvsPij0Yy13itpvBA4hkUzIcT4bgB4N2DWEQiRmBtpt3QjUZQMWZBQJm9pIol9WKxRnrVS2bKgPFnVDPa5bt0dw9ep_0rwijmHA1ARQocLWXNrMGMyQVzs=w785-h360-k-no",

  },
  {
    destination:"Nouvelle Zélande",
    country:"NOuvelle Zélande",
    distance:"18 751kms",
    photo:"https://img.ev.mu/images/attractions/8048/600x400/753761.jpg"

  },



];

const Travels = () => (
  <div>
    {dataQuotes.map(travel => (
      <Travel distance={travel.distance} photo={travel.photo} country={travel.country} destination={travel.destination}/>
    ))}
  </div>
);

export default Travels;

