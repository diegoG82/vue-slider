// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

// INIZIALIZZO VUE
const { createApp } = Vue;

createApp({
  data() {
    return {
      indexImg: 0,

      slides: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morales",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
    };
  },

  //   METHODS AND EVENT HANDLING
  methods: {
    // METODO PER FAR SCORRERE L'IMMAGINE AVANTI

    imgNext() {
      if (this.indexImg < this.slides.length - 1) {
        this.indexImg++;
      } else {
        this.indexImg = 0;
      }
      console.log(this.imgNext);
    },
    // METODO PER FAR SCORRERE L'IMMAGINE INDIETRO

    imgPrev() {
      if (this.indexImg > 0) {
        this.indexImg--;
      } else {
        this.indexImg = this.slides.length - 1;
      }
      console.log(this.imgPrev);
    },

    // GESTIONE THUMBS
    
  },
}).mount("#app");
