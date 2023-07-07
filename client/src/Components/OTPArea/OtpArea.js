import React, { useState, useRef , useEffect } from 'react'
import {Box , Typography, Button} from '@mui/material'

import '../OTPArea/OtpStyle.css'




function OtpArea() {

    function sayHello() {
        alert('Hello!');
      }

      
      const [disabled, setDisabled] = useState(false);

      const onClick = () => {
        setDisabled(true);
      };

function start(){

    const semicircles = document.querySelectorAll('.semicircle');
    const timer = document.querySelector('.timer');
    
    //input
    const hr = 0;
    const min = 0;
    const sec = 10;
    
    const hours = hr * 3600000;
    const minutes = min * 60000;
    const seconds = sec * 1000;
    const setTime = hours + minutes + seconds;
    const starTime = Date.now();
    const futureTime = starTime + setTime; 
    
const timerLoop = setInterval(countDownTimer);
countDownTimer();

function countDownTimer() {

  const btn1 = document.getElementById('btn1').style.display = "none";
  

  const currentTime = Date.now();
  const remainingTime = futureTime - currentTime;
  const angle = (remainingTime / setTime) * 360;

  //progress indicator
  if (angle > 180) {
    semicircles[2].style.display = "none";
    semicircles[0].style.transform = "rotate(180deg)";
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  } else {
    semicircles[2].style.display = "block";
    semicircles[0].style.transform = `rotate(${angle}deg)`;
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  }

  //timer
  const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString(undefined,{minimumIntegerDigits: 2});
  const mins = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString(undefined,{minimumIntegerDigits: 2});
  const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString(undefined,{minimumIntegerDigits: 2});

  // <div>${hrs}</div>
  // <div class="colon">:</div>
  timer.innerHTML = `
    
    <div>${mins}</div>
    <div class="colon">:</div>
    <div>${secs}</div>
    `;

   //5-sec-condition
   if(remainingTime <= 6000) {
    semicircles[0].style.backgroundColor = "red";
    semicircles[1].style.backgroundColor = "red";
    timer.style.color = "red";
   }

  //end
  if (remainingTime < 0) {
    clearInterval(timerLoop);
    semicircles[0].style.display = "none";
    semicircles[1].style.display = "none";
    semicircles[2].style.display = "none";

    timer.innerHTML = `
    
    <div>00</div>
    <div class="colon">:</div>
    <div>00</div>
    `;

    const btn2 = document.getElementById('btn2').style.display = "block";

    timer.style.color = "lightgray"
  }
}
}

function random(){
    document.getElementById("number1").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number2").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number3").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number4").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number5").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number6").innerHTML = Math.floor(Math.random() * 10);
}






  return (

    <div className='box center'>
    
    {/* <Box sx={{backgroundColor:'white', border:"1px solid grey" , margin:"15px 5px" , padding:"15px 5px"}}> */}
       <div className=' center'>
       <div class="container">
      <div class="main-container center">
        {/* progress indicator */}
        <div class="circle-container center">
          <div class="semicircle"></div>
          <div class="semicircle"></div>
          <div class="semicircle"></div>
          <div class="outermost-circle"></div>
        </div>

         {/* timer  */}
        <div class="timer-container center">
          <div class="timer center"></div>
        </div>
      </div>
      <div class="text">
        <p id="number1"></p>
          <p id="number2"></p>
          <p id="number3"></p>
          <p id="number4"></p>
          <p id="number5"></p>
          <p id="number6"></p>
      </div>
    </div>
       </div>
            <button  className='btn' id='btn1' onClick={() => { start(); random();}} >Generate OTP</button>
            <button  className='btn' id='btn2' disabled={disabled} onClick={() => { start(); random(); onClick()}} >Regenerate OTP</button>
            
    {/* </Box> */}
    </div>
  )
}

export default OtpArea
