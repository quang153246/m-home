import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'
import avatar from "../../assets/avatar.jpg"
import { boxShadow1 } from '../../theme/common'
const BrokerCard = () => {
  return (
    <Card sx = {{display: "flex", flexDirection: "column", alignItems: "center", ...boxShadow1, mt:3, pt: 2}}>
        <CardMedia
          component="img"
          height="150px"
          image={avatar}
          alt="card image"
          sx={{width: "150px", borderRadius: "50%"}}
        />
         <CardContent>
          <Typography gutterBottom variant="h6" component="div" textAlign={"center"}>
            Trần Hữu Trung
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={"center"}>
            +84 356 6373
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={"center"}>
            thtrung@gmail.com
          </Typography>
        </CardContent>
    </Card>
  )
}

export default BrokerCard