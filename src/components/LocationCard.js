import React from 'react';
import { CardTwo, Planet, Type } from "./StyledWidgets";

export default function LocationCard ({info}) {
  // image={image}

  return (
    // <span>todo: location</span>
    <div className="location-card">
      <CardTwo>
        <Planet>
          {info.name}
        </Planet>
        <Type>
          {info.type} - {info.dimension}
        </Type>

        {/* /* Couldn't figure out on how to show the number of residents */
        /* <Residents>
          {info.residents}
        </Residents> */}
      </CardTwo>
    </div>


  )
}