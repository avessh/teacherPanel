import React from 'react'
import { Box } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useParams } from "react-router-dom";

import studentData from '../../data/mokStudentData.json'



function StudentArea() {

  const { classname } = useParams()
  console.log('class', classname);

  return (
    <Box sx={{ backgroundColor: "whitesmoke", margin: "0px 5px", padding: "5px" }}>
      <h4 style={{margin:"20px 0px 10px 0px"}}>Students <span style={{fontSize:"16px"}}>({classname})</span></h4>
      <hr/>
      
      <Box sx={{ height: "56vh", overflow: 'scroll' }}>

        {
          studentData.map((home) => {
            return home.class === classname ? <Card sx={{ maxWidth: 400, display: "flex", justifyContent: "space-between", borderLeft: "1px solid grey", borderTop: "1px solid grey", margin: "10px  0px" }}>

              <Box sx={{ padding: "10px" }}>
                {home.studentName}
                <Typography color={"GrayText"}>Roll No: {home.rollNo}</Typography>
              </Box>
              <Box sx={{ padding: "10px 20px", backgroundColor: "rgb(190 50 50)",color:"white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{fontSize:"20px"}}>A</Typography>
                
              </Box>

            </Card>
              :
              <></>
          })
        }

<Card sx={{ maxWidth: 400, display: "flex", justifyContent: "space-between", borderLeft: "1px solid grey", borderTop: "1px solid grey", margin: "10px  0px" }}>

<Box sx={{ padding: "10px" }}>
  student name
  <Typography color={"GrayText"}>Roll No: 1234554321</Typography>
</Box>
<Box sx={{ padding: "10px 20px", backgroundColor: "#17594A",color:"white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Typography sx={{fontSize:"20px"}}>P</Typography>
  
</Box>

</Card>


<Card sx={{ maxWidth: 400, display: "flex", justifyContent: "space-between", borderLeft: "1px solid grey", borderTop: "1px solid grey", margin: "10px  0px" }}>

<Box sx={{ padding: "10px" }}>
  student name
  <Typography color={"GrayText"}>Roll No: 1234554321</Typography>
</Box>
<Box sx={{ padding: "10px 20px", backgroundColor: "#9DB2BF",color:"white", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Typography sx={{fontSize:"20px"}}>U</Typography>
  
</Box>

</Card>




      </Box>
    </Box>
  )
}

export default StudentArea
