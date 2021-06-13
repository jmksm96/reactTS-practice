import React, {useState} from 'react';


type AccordionPropsType = {
    titleValue: string
}

type AccordionTitle = {
    titleValue: string
}


const Accordion = (props: AccordionPropsType) => {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const collapseHandler = () => {
        if(collapsed === true) {
            setCollapsed(false)
        } else {
            setCollapsed(true)
        }

    }

    return (
        <div>
            <button onClick={collapseHandler}>Toggle</button>
            <AccordionTitle titleValue={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
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