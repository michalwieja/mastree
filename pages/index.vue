<template>
  <div class="container" :style="{height: screenHeight}">
    <div v-for="(image) in images" class="slide" :class="{active : image.id === active}" :key="image.id" @click="()=>handleClick(image.id)" :style="{backgroundImage: `url(${image.link})`, backgroundSize:'cover'}">
      <h3>{{image.title}}</h3>
      <div class="description">
        <p>{{image.desc}}</p>
      </div>
    </div>

  </div>
</template>

<script>
const images = [
  {
    id:1,
    link:"https://images.unsplash.com/photo-1611021061285-16c871740efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    title:'Stolarstwo',
    desc:'Przemysł i rzemiosło polegające na wytwarzaniu przedmiotów z drewna. Wytwarzanie przedmiotów nie obejmuje prac ciesielskich'
  },
  {
    id:2,
    link:"https://images.unsplash.com/photo-1544164560-adac3045edb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2022&q=80",
    title:"Laser CNC",
    desc:'Computerized Numerical Control, CNC (pol. komputerowe sterowanie urządzeń numerycznych) – układ sterowania numerycznego, wyposażony w mikrokomputer, który można dowolnie interaktywnie zaprogramować. Termin ten zwykle używany jest w odniesieniu do obróbki materiałów za pomocą komputerowo sterowanych urządzeń takich jak frezarki, tokarki, elektrodrążarki. Obróbka CNC pozwala na szybkie, precyzyjne i wysoce powtarzalne wykonanie złożonych kształtów.'},
  {
    id:3,
    link:"https://images.unsplash.com/photo-1611021061218-761c355ed331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title:"jakis tekst",
    desc: "Typowy proces skomputeryzowanego wytwarzania przedmiotu składa się z faz projektowania wspomaganego komputerowo (CAD), przetwarzania projektu na plan sterowania maszyn (CAM) i właściwego wykonania (CNC)."
  },
  {id:4,
    link:"https://images.unsplash.com/photo-1553051021-9f94520a6cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title:"Przykładowy tekst",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, dolores?"
  }
  ]
export default {
  name: 'IndexPage',
  data(){
    return{
      images,
      active: null,
      screenHeight: '400vh'

    }
  },
  mounted() {
      this.screenHeight = window.innerHeight + 'px'
  },
  methods:{
    handleClick(id){
      if(this.active === id) {
        this.active = null
      }else{
        this.active = id
      }
    }
  }
}
</script>


<style>
* {
  box-sizing:border-box;
  margin:0;
  padding:0;
  font-family: sans-serif;

}

.container {
  background:black;
  transition: 1s;
  display:flex;
  gap:0.3rem;
}

.slide{
  flex:1;
  transition:250ms ease;
  position:relative;
  padding:30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 5vh;
}
.slide.active {
  flex:15;
}

.slide::before {
  content:"";
  position:absolute;
  inset: 0;
  background:black;
  opacity:0.7;
  z-index:1;
  transition:inherit;
}

.slide:hover {
  cursor:pointer;
}

.slide:hover::before {
  opacity:0;
}

.slide h3 {
  z-index: 1;
  writing-mode: vertical-rl;
  color: white;
  line-height:1.2;
  position:relative;
  transition:350ms ease;
  letter-spacing:.5rem;

}

.slide.active h3 {
  writing-mode: horizontal-tb;
}

.slide.active::before {
  opacity:0;
}

.slide .description{
  width: 50%;
  display: none;
  color: white;
  transition: 350ms;
}


.slide.active .description{
  display: block;
  position: relative;
  background-color: #000000aa;
  padding:2vh;
  border-radius: 1vh;
}



@media screen and (max-width:1024px) {
  .container {
    flex-direction:column;
  }
  .slide{
    align-items: center;
  }
  .slide .description{
    width: 100%;
  }


  .slide h3 {
    writing-mode: horizontal-tb;
  }
}
</style>
