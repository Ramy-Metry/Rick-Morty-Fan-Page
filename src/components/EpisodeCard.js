import React from "react";
import { CardThree, Name, AirDate } from "./StyledWidgets";

export default function EpisodeCard({info}) {


    return (
        <div className="episode-card">
            <div>
               <CardThree>
                   <Name>
                       {info.name}
                   </Name>

                   <AirDate>
                       Air Date: {info.air_date}
                        <br></br>
                       Episode: {info.episode}

                   </AirDate>


               </CardThree>
            </div>
        </div>
    )
}