

// s3
let second=0;
let minute=0;
let hour=0;
let interval;
let resetButton=document.getElementById('reset')
resetButton.addEventListener('click',()=>{
    location.reload();
})



// s2
let startStopWatch=()=>{
   
    interval=setInterval(()=>{
         second++;
         
        if(second==60){
            second=0;
           
            minute++;
        }
        if(minute==60){
            minute=0;
           
            hour++;
        }
        let sec=document.getElementById('sec')
        if(second<10){
            sec.innerText=`0${second}`
        }
       else{
        sec.innerText=second;
       }
       let min=document.getElementById('min')
       if(minute<1){
        min.innerText="00"
       }
       else if(minute<10){
        min.innerText=`0${minute}`;
       }
       else{
        min.innerText=minute;
       }
       let hr=document.getElementById('hr')
       if(hour<1){
        hr.innerText="00"
       }
       if(hour<10){
        hr.innerText=`0${hour}`
       }
      else{
        hr.innerText=hour;
      }
       
    },1000)
  
}
// s4
let stopStopWatch=()=>{
   clearInterval(interval);
}

// s1
let playButton=document.getElementById("pausePlay")
let buttonIcon="play"
playButton.addEventListener('click',()=>{
    if(buttonIcon=="play"){
        playButton.innerHTML='<i class="fa-solid fa-pause fa-2x"></i>'
        buttonIcon="pause"
        startStopWatch();
    }
    else{
        playButton.innerHTML='<i class="fa-solid fa-play fa-2x"></i>'
        buttonIcon="play"
        stopStopWatch();
    }
    
})