import React from 'react'
import {Box} from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function StudentArea() {
  return (
    <Box sx={{ backgroundColor:"whitesmoke", margin:"0px 5px"  , padding:"5px"}}>
      <h2>Students</h2>
      <Box sx={{height:"60vh" , overflow:'scroll'}}>
      <Card sx={{ maxWidth: 400 , display:"flex" , justifyContent:"space-between" ,borderLeft:"1px solid grey", borderTop:"1px solid grey" , margin:"10px  0px"}}>
      
      <Box sx={{padding:"10px"}}>
        Student Name
        <Typography color={"GrayText"}>Roll Number</Typography>
      </Box>
      <Box sx={{padding:"10px 20px" , backgroundColor:"lightcoral" , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
        A
      </Box>
      
    </Card>
    <Card sx={{ maxWidth: 400 , display:"flex" , justifyContent:"space-between" , borderTop:"1px solid grey" , margin:"10px  0px"}}>
      
      <Box sx={{padding:"10px"}}>
        Student Name
        <Typography color={"GrayText"}>Roll Number</Typography>
      </Box>
      <Box sx={{padding:"10px 20px" , backgroundColor:"lightcoral" , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
        A
      </Box>
      
    </Card>
    <Card sx={{ maxWidth: 400 , display:"flex" , justifyContent:"space-between" , borderTop:"1px solid grey" , margin:"10px  0px"}}>
      
      <Box sx={{padding:"10px"}}>
        Student Name
        <Typography color={"GrayText"}>Roll Number</Typography>
      </Box>
      <Box sx={{padding:"10px 20px" , backgroundColor:"lightcoral" , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
        A
      </Box>
      
    </Card>
    <Card sx={{ maxWidth: 400 , display:"flex" , justifyContent:"space-between" , borderTop:"1px solid grey" , margin:"10px  0px"}}>
      
      <Box sx={{padding:"10px"}}>
        Student Name
        <Typography color={"GrayText"}>Roll Number</Typography>
      </Box>
      <Box sx={{padding:"10px 20px" , backgroundColor:"lightcoral" , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
        A
      </Box>
      
    </Card>

    <Card sx={{ maxWidth: 400 , display:"flex" , justifyContent:"space-between" , borderTop:"1px solid grey" , margin:"10px  0px"}}>
      
      <Box sx={{padding:"10px"}}>
        Student Name
        <Typography color={"GrayText"}>Roll Number</Typography>
      </Box>
      <Box sx={{padding:"10px 20px" , backgroundColor:"lightgreen" , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
        P
      </Box>
      
    </Card>
    <Card sx={{ maxWidth: 400 , display:"flex" , justifyContent:"space-between" , borderTop:"1px solid grey" , margin:"10px  0px"}}>
      
      <Box sx={{padding:"10px"}}>
        Student Name
        <Typography color={"GrayText"}>Roll Number</Typography>
      </Box>
      <Box sx={{padding:"10px 20px" , backgroundColor:"lightgreen" , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
        P
      </Box>
      
    </Card>
    <Card sx={{ maxWidth: 400 , display:"flex" , justifyContent:"space-between" , borderTop:"1px solid grey" , margin:"10px  0px"}}>
      
      <Box sx={{padding:"10px"}}>
        Student Name
        <Typography color={"GrayText"}>Roll Number</Typography>
      </Box>
      <Box sx={{padding:"10px 20px" , backgroundColor:"lightgreen" , display:'flex' , justifyContent:'center' , alignItems:'center'}}>
        P
      </Box>
      
    </Card>
      </Box>
    </Box>
  )
}

export default StudentArea
