import React, { useEffect, useState } from 'react';
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
        //handle success
        .then(response => {
            console.log('rickandmarty location api', response.data);

            setLocations(response.data.results);

        });
    }, []);
    console.log(locations);

    return (
        <div className="location-list">
            
            {locations.map(location => (
                <LocationCard key={location.name} info={location}/>
            ))}
        </div>
    )
}