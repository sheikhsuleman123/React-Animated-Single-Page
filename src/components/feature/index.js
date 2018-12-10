import React from 'react';
import Carrousel from './carrousel';
import TimeCount from './TimeCount';


const Featured = () =>{
    return (
        <div style={{position:'relative'}}>
        <Carrousel />
          <div className="artist_name">
            <div className="wrapper">
                Ariana Grande
            </div>

        </div>
    <TimeCount />

        </div>
    )
}

export default Featured;