import {  TurnedInNot } from "@mui/icons-material";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography,Grid, ListItemText } from "@mui/material";

export const SideBar = ({drawerWidth}) => {
  return (
    <Box
    component= 'nav'
    sx={{width:{sm:drawerWidth},flexShrink:{sm:0}}}>
     <Drawer
    //  temporary
     variant='permanent'
     open
     sx={{
        display: {xs:'block'},
        '& .MuiDrawer-paper':{boxSizing:'border-box', width: drawerWidth }
     }}

     >
        <Toolbar>
           <Typography variant='h6' noWrap component='div'>
            Maria Cabriles 
            </Typography> 
        </Toolbar>

        <List>
            {/* contenido de la barra lateral */}
            {
                ['Enero','Febrero', 'Marzo,' ,'Abril'].map(text=>(

                  <ListItem key={text}  disiablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                          <TurnedInNot/>
                        </ListItemIcon>
                        <Grid container>
                            <ListItemText primary={text}/>
                            <ListItemText  secondary={'Exercitation cillum irure elit consetetur ipsum duis quis nisi tempor dolor'}/>

                        </Grid>

                    </ListItemButton>
                  
                  </ListItem>
                
                    ))
            }

        </List>

     </Drawer>
    </Box>
  )
}
