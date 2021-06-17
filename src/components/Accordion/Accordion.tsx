import React from 'react';


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}



const Accordion = (props: AccordionPropsType) => {

    return (
        <div>
            <AccordionTitle titleValue={props.titleValue} setCollapsed={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitle = {
    titleValue: string
    setCollapsed: () => void
}

const AccordionTitle = (props: AccordionTitle) => {
    return (
        <>
            <h3 onClick={() => props.setCollapsed()}>{props.titleValue}</h3>
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