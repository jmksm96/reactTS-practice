import React, {useState} from 'react';


type PropsType = {
    // on: boolean
}


const OnOff = (props: PropsType) => {

    const [on, setOn] = useState<boolean>(false)


    const onHandler = () => {
        setOn(true)

    }

    const offHandler = () => {
        setOn(false)
    }


    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={onHandler}>On</div>
            <div style={offStyle} onClick={offHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;