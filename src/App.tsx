import React, {useState} from 'react';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncoltrolledRating from './components/Rating/UncotrolledRating';


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)

    return (
        <div>
            {/*<AppTitle/>*/}
            <Accordion titleValue={'Menu'} accordionCollapsed={accordionCollapsed} onClick = {setAccordionCollapsed}/>
            {/*<Accordion titleValue={'Users'}/>*/}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<OnOff/>*/}
            <UncoltrolledRating/>
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


