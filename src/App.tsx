import React from 'react';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';


function App() {
    return (
        <div>
            <AppTitle/>
            <Accordion titleValue={'Menu'}/>
            <Accordion titleValue={'Users'}/>
            <OnOff/>
            <Rating/>
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


