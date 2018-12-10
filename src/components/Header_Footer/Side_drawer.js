 import React from 'react';
import { scroller } from 'react-scroll';

 import Drawer from '@material-ui/core/Drawer';
 import List from '@material-ui/core/List';
 import ListItem from '@material-ui/core/ListItem';



 const SideDrawer = (props) =>{

  const scrollto = (element) => {
    scroller.scrollTo(element,{
      duration:1500,
      delay:100,
      smooth:true,
      offset: -150
    });
    props.onClose(false)
  }



     return(
         <Drawer
         anchor='right'
         open={props.open}
         onClose={()=> props.onClose(false)}
         >
            <List component="nav">
            <ListItem button onClick={()=> scrollto('featured')}>
               Event Starts In 
            </ListItem>
            <ListItem button onClick={()=> scrollto('venuenfo')}>
               Venue Info 
            </ListItem>
            <ListItem button onClick={()=> scrollto('highlights')}>
              Highlights
            </ListItem>
            <ListItem button onClick={()=>scrollto('pricing')}>
              Pricing
            </ListItem>
            <ListItem button onClick={()=> scrollto('location')}>
              Location 
            </ListItem>
            </List>




         </Drawer>
     );
 };
 export default SideDrawer;