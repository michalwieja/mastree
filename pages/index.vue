<template>
  <div class="container">
    <div v-for="(image) in images" class="slide" :class="{active : image.id === active}" :key="image" @click="()=>handleClick(image.id)">
      <img :src="image.link"/>
      <h3>{{image.title}}</h3>
    </div>
  </div>
</template>

<script>
const images = [{id:1, link:"https://images.unsplash.com/photo-1611021061285-16c871740efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80", title:'Stolarstwo'},
  {id:2,link:"https://images.unsplash.com/photo-1544164560-adac3045edb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2022&q=80",title:"Laser CNC"},
  {id:3,link:"https://images.unsplash.com/photo-1611021061218-761c355ed331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",title:"jakis tekst"}, {id:4,link:"https://images.unsplash.com/photo-1553051021-9f94520a6cad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",title:"Przykładowy tekst"}]
export default {
  name: 'IndexPage',
  data(){
    return{
      images,
      active: null
    }
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
}

.container {
  background:black;
  height:100vh;
  display:flex;
  gap:0.3rem;
}

.slide{
  flex:1;
  transition:250ms ease;
  position:relative;
}
.slide.active {
  flex:15;
}

.slide img {
  height:100%;
  width: 100%;
  object-fit: cover;
  position:relative;
  display: block;

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
  position:absolute;
  bottom:30px;
  left:50%;
  transform:translateX(-50%);
  transition:350ms ease;
  font-size:3rem;
  font-family:sans-serif;
  letter-spacing:.5rem;
}

.slide.active h3 {
  opacity:0;
  visibility:hidden;
}



.slide.active::before {
  opacity:0;
}

@media screen and (max-width:1024px) {
  .container {
    flex-direction:column;
  }

  .slide h3 {
    writing-mode: horizontal-tb;
    top:50%;
    bottom:unset;
    transform:translate(-50%, -50%);
  }
}
</style>
