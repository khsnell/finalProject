import React from 'react';
import { useState } from 'react';
import DogReview from './DogReview';
import DogReviewForm from './DogReviewForm';

export default function DogReviews(props) {
    const [reviews, setReviews] = useState([]);
    const [dog, setDog] = useState({});
    
    const displayReviews = (e) => {
        let id = e.target.value;
        let output = [];

        for (let i = 0; i < props.dogs.length; i++) {
            if (props.dogs[i].id == id) {
                for (let j = 0; j < props.dogs[i].reviews.length; j++) {
                    output.push(<DogReview key={j + "review"} review={props.dogs[i].reviews[j]} />);
                }

                setDog(props.dogs[i]);
            }
        }

        setReviews(output);
    }

    const displayReviewsById = (id) => {
        let output = [];

        for (let i = 0; i < props.dogs.length; i++) {
            if (props.dogs[i].id == id) {
                for (let j = 0; j < props.dogs[i].reviews.length; j++) {
                    output.push(<DogReview key={j + "review"} review={props.dogs[i].reviews[j]} />);
                }

                setDog(props.dogs[i]);
            }
        }

        setReviews(output);
    }
    
    
    let output = [];

    for (let d of props.dogs) {
        output.push(<option key={"r" + d.id} value={d.id}>{d.name}</option>);
    }
    
    return (
        <>
        <div className="clear mb-5 mt-2">
            <select name="pets" id="pet-select" onChange={displayReviews}>
                <option value="">--Please choose a dog--</option>
                {output}
            </select>
            <DogReviewForm dog={dog} displayReviewsById={displayReviewsById} />
        </div>
        {reviews}
        </>
    );
}