import React from 'react';
import Dog from './Dog';
import DogForm from './DogForm';

export default function DogList(props) {
    let output = [];
    
    for (let d of props.dogs) {
        output.push(
            <Dog key={d.id} dog={d} deleteDog={props.deleteDog} />
        );
    }

    return (
        <div className="mt-3">
            <DogForm getDogs={props.getDogs} />
            {output}
        </div>
    );
}