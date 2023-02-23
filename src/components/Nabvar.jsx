import  React,{useState ,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton, Menu, MenuItem  } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { Language } from '@mui/icons-material';






function Nabvar({onLocal}) {




const localeFunction = () =>{
    if (targetLanguage  == "Español"){
      onLocal("es")
    }else if (targetLanguage == "Portuges") {
      onLocal("pt")
    }else if (targetLanguage == "Ingles"){
      onLocal("en")
    }
      
      
     

    }

    const languagesArray = ["Español","Portuges","Ingles"]

    const [showLanguages, setShowLanguages] = useState(false);

    const [targetLanguage, settargetLanguage] = useState("");

   

    const hadleOpenList = () => setShowLanguages(true)

    const handleCloseList = () => setShowLanguages(false)


    useEffect(() => {
        localeFunction()
     }, [targetLanguage,onLocal])
    

   
    
  return (

    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar variant="dense">
      
      <IconButton
            aria-controls={showLanguages?"basic-menu" :undefined}//que es esto
            aria-haspopup="true"
            aria-expanded={showLanguages?"true":undefined}
            styles={{position:"absolute",top:16 ,right:16}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onClick={()=>{
                
                hadleOpenList()
                }}
          >
            
            
            
        <Language fontSize='large'/>

          
        </IconButton >
        <Menu
          id='basic-menu'
          sx={{top:50}}
          open={showLanguages}
          anchorOrigin={{vertical:"top",horizontal:"left"}}
          onClose={handleCloseList}
        >
          {languagesArray.map((avaliableLanguages,index)=>
          <MenuItem
              value={avaliableLanguages}
              key={index}
              onClick={(e)=>{
              settargetLanguage(e.target.innerText)
              handleCloseList()
              }}
              
              >
                {avaliableLanguages}
              </MenuItem>
          )}


        </Menu>
        <Typography variant="h6" color="inherit" component="div">
        <FormattedMessage id="mesagge.language"/>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default Nabvar;
