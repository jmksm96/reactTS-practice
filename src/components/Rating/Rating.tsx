import React from 'react';

type RatingPropsType = {
    value: number
}

const Rating = (props: RatingPropsType) => {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>

        </div>
    )
};

type StarType = {
    selected: boolean
}

const Star = (props: StarType) => {
    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }

};

export default Rating