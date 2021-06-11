import React from 'react';

const Rating = () => {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );
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