import { Box, style } from '@mui/system';
import React from 'react'
import { FormattedMessage } from 'react-intl';



function Body() {
  return (
    <Box  sx = {{
      display:"flex",
      justifyContent:"center",
      fontSize:"25px",
      fontWeight:"bold",
      marginTop:"10px"
  }}>
      <FormattedMessage id="mesagge.title"/>
    </Box>
    
  )
}

export default Body