import React, {useState} from 'react';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncoltrolledRating from './components/Rating/UncotrolledRating';
import UncontrolledOnOff from './components/OnOff/UncontrolledOnOff';


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [on, setOn] = useState<boolean>(false)
    const onHandler = () => {
        setOn(true)

    }

    const offHandler = () => {
        setOn(false)
    }

    return (
        <div>
            {/*<AppTitle/>*/}
            <Accordion titleValue={'Menu'} onChange={() => setAccordionCollapsed(!accordionCollapsed)} collapsed = {accordionCollapsed}/>
            {/*<Accordion titleValue={'Users'}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<OnOff on={on} onHandler={onHandler} offHandler={offHandler}/>*/}
            <UncoltrolledRating/>
            <UncontrolledOnOff onChange={setOn}/>
        </div>
    );
}

export default App;


const AppTitle = () => {
    return (
        <>
            This is APP component
        </>
    )
}


