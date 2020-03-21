<template>
  <div class="traf">
    <div class="timer"><div style="width:140px;height:140px;background:grey;margin-left: 3%;margin-top: 3%;border-radius: 55%;"><p style="color:white;font-size: 60px;margin: 0;padding-top: 25%;">{{sec}}</p></div></div>
    <div class="skelet">
      <div :class="{on: proccolor == '1'}" class="red"></div>
      <div :class="{on: proccolor == '2'}" class="yellow"></div>
      <div :class="{on: proccolor == '3'}" class="green"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Light'
}
</script>


<style scoped>
  .skelet{
    margin-left: 50%;
    margin-top: 2%;
    transform: translateX(-50%);
    width: 300px;
    height: 500px;
    background: black;
    padding-top:2%;
  }
  .red{
    width: 150px;
    height: 150px;
    background: rgba(255,0,0);
    border-radius: 50%;
    margin-left: 25%;
    opacity: 0.3;

  }
  .yellow{
     width: 150px;
    height: 150px;
    background: rgba(255, 255,0);
    border-radius: 50%;
    margin-top: 5%;
    margin-left: 25%;
    opacity: 0.3;

  }
  .green{
    width: 150px;
    height: 150px;
    background: rgba(0, 255, 0);
    margin-left: 25%;
    border-radius: 50%;
    margin-top: 5%;
    opacity: 0.3;
  }
  .on{
    opacity: 1;
  }
  .timer{
    position: absolute;
    left: 57.9%;
    top: 72.1%;
    width: 150px;
    height: 150px;
    background: black;
  }
  .traf{
    position: relative;
  }
  .blink{
    animation: bl .5s infinite;
  }
  @keyframes bl {
    0%{
      opacity: 1;
    }
    50%{
      opacity:0.5;
    }
    100%{
      opacity: 1;
    }
  }
</style>

<script>
export default {
  props:{
    startColor:String
  },
  data:()=>({
    proccolor: '',
    curcolor: '',
    sec: 0
  }),
  mounted(){
      if(this.startColor == '1'){
      this.proccolor = this.startColor;
      this.curcolor = this.startColor;
    } else if(this.startColor == '2'){
      this.proccolor = this.startColor;
      this.curcolor = this.startColor;
    } else if(this.startColor == '3'){
      this.proccolor = this.startColor;
      this.curcolor = this.startColor;
    }
    var blinktarget;
 


    switch (this.proccolor){
      case '1':
        if(this.curcolor == localStorage.prevcolor){
          if(localStorage.sec !=0 && localStorage.sec > 0 ){
            this.sec = localStorage.sec;
          } else {
             this.sec = 10;
             localStorage.sec = this.sec;
          }
        } else {
          localStorage.prevcolor = this.curcolor;
          this.sec = 10;
          localStorage.sec = this.sec;
        }
        var interval = setInterval(()=>{
          this.sec--;
          localStorage.sec = this.sec;
          if(this.sec < 3){
            blinktarget = document.querySelector('.red');
            blinktarget.classList.add('blink');
          }
          if(this.sec == 0){
            localStorage.prevcolor = '1';
            localStorage.pcfy = '1';
            blinktarget.classList.remove('blink');
            clearInterval(interval);
            this.$router.push('yellow');          
          }
        },1000);
        break;
      case '2':
        if(this.curcolor == localStorage.prevcolor){
          if(localStorage.sec !=0 && localStorage.sec > 0 ){
            this.sec = localStorage.sec;
          } else {
             this.sec = 3;
             localStorage.sec = this.sec;
          }
        } else {
          localStorage.prevcolor = this.curcolor;
          this.sec = 3;
          localStorage.sec = this.sec;
        }
        var interval = setInterval(()=>{
          this.sec--;
          localStorage.sec = this.sec;
          if(this.sec < 3){
            blinktarget = document.querySelector('.yellow');
            blinktarget.classList.add('blink');
          }
          if(this.sec == 0){
            localStorage.prevcolor = '2';
            blinktarget.classList.remove('blink');
            if(localStorage.pcfy == '1'){
              clearInterval(interval);
              this.$router.push('green');
            } else{
              clearInterval(interval);
              this.$router.push('red');
            }
          }
        },1000);
        break;
      case '3':
       if(this.curcolor == localStorage.prevcolor){
          if(localStorage.sec !=0 && localStorage.sec > 0 ){
            this.sec = localStorage.sec;
          } else {
             this.sec = 15;
             localStorage.sec = this.sec;
          }
        } else {
          localStorage.prevcolor = this.curcolor;
          this.sec = 15;
          localStorage.sec = this.sec;
        }
        var interval = setInterval(()=>{
          this.sec--;
          localStorage.sec = this.sec;
          if(this.sec <3){
            blinktarget = document.querySelector('.green');
            blinktarget.classList.add('blink');
          }
          if(this.sec == 0){
            localStorage.prevcolor = '3';
            localStorage.pcfy = '3';
            blinktarget.classList.remove('blink');
            clearInterval(interval);
            this.$router.push('yellow');          
          }
        },1000);
        break;
    }
   

    
   
  },
}
</script>