import React from 'react';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';


function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
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


