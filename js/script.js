// alert("Hello World!");
// Esercizio di oggi: Vue Email List
// nome repo: vue-email-list
// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

////////////////////////////////////
const app = new Vue ({
  el: '#app',
  data: {
    mail:'',
  },
  methods:{
  
  },
  created() {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((genMail) => {
      this.mail = genMail.data.response;
      console.log(genMail);
    }).cath((error) => {
      console.log(error);
    })
  }

})