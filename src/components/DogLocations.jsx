import React from 'react';
import { useState } from 'react';
import DogLocation from './DogLocation';
import DogLocationForm from './DogLocationForm';

export default function DogLocations(props) {
    const [locations, setLocations] = useState([]);
    const [dog, setDog] = useState({});
    
    const displayLocations = (e) => {
        let id = e.target.value;
        let output = [];

        for (let i = 0; i < props.dogs.length; i++) {
            if (props.dogs[i].id == id) {
                for (let j = 0; j < props.dogs[i].locations.length; j++) {
                    output.push(<DogLocation key={"dl" + j} location={props.dogs[i].locations[j]} />);
                }

                setDog(props.dogs[i]);
            }
        }

        setLocations(output);
    }

    const displayLocationsById = (id) => {
        let output = [];

        for (let i = 0; i < props.dogs.length; i++) {
            if (props.dogs[i].id == id) {
                for (let j = 0; j < props.dogs[i].locations.length; j++) {
                    output.push(<DogLocation key={"dl" + j} location={props.dogs[i].locations[j]} />);
                }

                setDog(props.dogs[i]);
            }
        }

        setLocations(output);
    }
    
    
    let output = [];

    for (let d of props.dogs) {
        output.push(<option key={d.id + "o"} value={d.id}>{d.name}</option>);
    }
    
    return (
        <>
        <div className="clear mb-5 mt-2">
            <select name="pets" id="pet-select" onChange={displayLocations}>
                <option value="">--Please choose a dog--</option>
                {output}
            </select>
            <DogLocationForm dog={dog} displayLocationsById={displayLocationsById} />
        </div>
        {locations}
        </>
    );
}