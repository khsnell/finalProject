import React from 'react';

export default function DogReview(props) {
    return (
        <div className="text-center">
            <p className="mb-3 mt-3">
                Welcome to DoggieDates! This is the site where you can create, update 
                and delete dogs from/to our extensive dog database. You can then have 
                a date with one of our well trained dogs for as long as 2 days for a 
                nominal fee. Our dogs have been doing the dating thing since they were 
                pups, so they have experienced a wide range of people and personality 
                types. DoggieDates will provide food, but you are responsible for 
                walking the dog! 
            </p>
            <img id="homeImage" src="https://dogsplayingforlife.com/wp-content/uploads/2020/08/Kodi-hugging-PJ.jpg" />
        </div>
    );
}