import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';


const MButton = (props) => {
    return (
      <Button
      href={props.link}
      varient="contained"
      size="small"
      style={{
        background: props.bck,
        color:props.color
      }}
      >
        <img 
        src={TicketIcon}
        className="iconImage"
        alt="icon_button"
        />
        {props.text}
      </Button>
        
       
    );
};

export default MButton;