import React, { useState, useRef, useEffect } from 'react'
import { Box, Typography, Button , Card ,CardContent } from '@mui/material'
import ReplayIcon from '@mui/icons-material/Replay';
import reload from '../../img/reload.png';

import '../OTPArea/OtpStyle.css'




function OtpArea() {

  function sayHello() {
    alert('Hello!');
  }


  // const [disabled, setDisabled] = useState(false);

  // const onClick = () => {
  //   setDisabled(true);
  // };

  function start() {

    const semicircles = document.querySelectorAll('.semicircle');
    const timer = document.querySelector('.timer');

    //input
    const hr = 0;
    const min = 0;
    const sec =10;

    const hours = hr * 3600000;
    const minutes = min * 60000;
    const seconds = sec * 1000;
    const setTime = hours + minutes + seconds;
    const starTime = Date.now();
    const futureTime = starTime + setTime;

    const timerLoop = setInterval(countDownTimer);
    countDownTimer();

    function countDownTimer() {

      document.getElementById('reload').style.display="none";
      document.getElementById('countDown').style.display="flex";
      // const btn1 = document.getElementById('btn1').style.display = "none";
      //  document.getElementById('clock').style.display = "block";


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
      const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString(undefined, { minimumIntegerDigits: 2 });
      const mins = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });
      const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });

      // <Box>${hrs}</Box>
      // <Box class="colon">:</Box>

      // <Box>${mins}</Box>
    // <Box class="colon">:</Box>
      timer.innerHTML = `
    
    
    <Box>${secs}</Box>
    `;

      //5-sec-condition
      if (remainingTime <= 6000) {
        semicircles[0].style.backgroundColor = "red";
        semicircles[1].style.backgroundColor = "red";
        timer.style.color = "red";
      }

      //end
      if (remainingTime < 0) {
        clearInterval(timerLoop);
        // semicircles[0].style.display = "none";
        // semicircles[1].style.display = "none";
        // semicircles[2].style.display = "none";

        // <Box>00</Box>
    // <Box class="colon">:</Box>

        timer.innerHTML = `
    
    
    <Box>00</Box>
    `;
  //  alert(`TIME'S UP!`);
   

  document.getElementById('countDown').style.display="none";
  document.getElementById('reload').style.display="flex";
  //  document.getElementById('otp').style.display="none";
  //  document.getElementById('btn2').style.display = "block";
  //  document.getElementById('clock').style.display = "none";

        

        timer.style.color = "#088b8b"
        // semicircles.style.color = "#088b8b"
      }
    }
  }

  function random() {
    document.getElementById("number1").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number2").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number3").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number4").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number5").innerHTML = Math.floor(Math.random() * 10);
    document.getElementById("number6").innerHTML = Math.floor(Math.random() * 10);
  }






  return (
    
    <div>
    <div style={{display:"flex", justifyContent: "flex-end"}}>
      <div className='a' >
      <Box id='otp' class="text" sx={{ backgroundColor: "blue", width:"100%" }}>
            <Typography sx={{fontSize:"80px"}} id="number1"></Typography>
            <Typography sx={{fontSize:"80px"}} id="number2"></Typography>
            <Typography sx={{fontSize:"80px"}} id="number3"></Typography>
            <Typography sx={{fontSize:"80px"}} id="number4"></Typography>
            <Typography sx={{fontSize:"80px"}} id="number5"></Typography>
            <Typography sx={{fontSize:"80px"}} id="number6"></Typography>
          </Box>
      </div>
      <div className='b'>
        <div className='c'>
        {/* <Button  id='btn1' variant='contained' onClick={() => { start(); random(); }} ></Button> */}
        <img  src={reload} id='reload' className='reload' alt="fireSpot" onClick={() => { start(); random(); }}/>
        {/* <ReplayIcon className='replay' id='btn1' fontSize='large'  color="primary"  onClick={() => { start(); random(); }} /> */}
        {/* <ReplayIcon fontSize='large' /> */}
        </div>
        <div id='countDown' className='d'>
        {/* <Box  id='clock'  className=' center'> */}
        <Box sx={{ display: "flex", backgroundColor:"red"}} class="">
          <Box sx={{display:"flex"}} class="main-container center">
            {/* progress indicator */}
            <Box class="circle-container center">
            
              <Box class="semicircle"></Box>
              <Box class="semicircle"></Box>
              <Box class="semicircle"></Box>
              <Box class="outermost-circle"></Box>
            </Box>

            {/* timer  */}
            <Box  class="timer-container center">
              <Box class="timer center"></Box>
            </Box>
          </Box>
         
        </Box>
      {/* </Box> */}
        </div>
      </div>
    </div>

    {/* <Box className='' sx={{border:"1px solid grey",  height: "15vh", display: "flex", justifyContent: "center", alignItems: "center" }}> */}

    
     
      {/* <div className='b'> */}
      {/* <Box sx={{backgroundColor:'white', border:"1px solid grey" , margin:"15px 5px" , padding:"15px 5px"}}> */}
      {/* <Box sx={{display:"none"}} id='clock'  className=' center'>
        <Box sx={{ display: "flex", backgroundColor:"red"}} class="">
          <Box sx={{display:"flex"}} class="main-container center"> */}
            {/* progress indicator */}
            {/* <Box class="circle-container center">
            
              <Box class="semicircle"></Box>
              <Box class="semicircle"></Box>
              <Box class="semicircle"></Box>
              <Box class="outermost-circle"></Box>
            </Box> */}

            {/* timer  */}
            {/* <Box  class="timer-container center">
              <Box class="timer center"></Box>
            </Box>
          </Box>
         
        </Box>
      </Box>
      </div> */}

      {/* <Box  >
      <Box id='otp' className="text" sx={{ backgroundColor: "blue", width:"100%" }}>
            <Typography sx={{fontSize:"80px"}} id="number1"></Typography>
            <Typography sx={{fontSize:"80px"}} id="number2"></Typography>
            <Typography sx={{fontSize:"80px"}} id="number3"></Typography>
            <Typography sx={{fontSize:"80px"}} id="number4"></Typography>
            <Typography sx={{fontSize:"80px"}} id="number5"></Typography>
            <Typography sx={{fontSize:"80px"}} id="number6"></Typography>
          </Box>
        <Button  id='btn1' variant='contained' onClick={() => { start(); random(); }} >Generate OTP</Button>
        <Button  id='btn2' variant='contained'  onClick={() => { start(); random() }} >Regenerate OTP</Button>
      </Box>


      </Box> */}

    {/* </Box> */}
    </div>
  
  )
}

export default OtpArea