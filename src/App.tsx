import React from 'react';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';


function App() {
    return (
        <div>
            {/*<AppTitle/>*/}
            {/*<Rating value = {2}/>*/}
            {/*<Accordion titleValue = {'Menu'} collapsed = {false}/>*/}
            {/*<Accordion titleValue = {'Users'} collapsed = {true}/>*/}
            <OnOff/>
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


