import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/`)
        //handle success
        .then(response => {
            console.log('rickandmorty episode api', response.data);

            setEpisodes(response.data.results);

        });

    }, []);
    console.log(episodes);

    return (
        <div className="episode-list">
            
            {episodes.map(episode => (
                <EpisodeCard key={episode.id} info={episode}/>
            ))}
        </div>
    )
}