import React from 'react';


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

type AccordionTitle = {
    titleValue: string
}


const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle titleValue={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
};

const AccordionTitle = (props: AccordionTitle) => {
    return (
        <>
            <h3>{props.titleValue}</h3>
        </>
    )
}
const AccordionBody = () => {
    return (
        <>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    )
}


export default Accordion