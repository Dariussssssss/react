type Accordion = {
    title: string,
    collapsed: boolean,
}

type AccordionTitle = {
    title: string,
}

export const Accordion = ({title, collapsed}: Accordion) => {
    if (collapsed) {
        return (
            <div>
                <AccordionTitle title={title}/>
            </div>

        )
    } else {
        return (
            <div>
                <AccordionTitle title={title}/>
                <AccordionBody/>
            </div>

        )
    }
}

const AccordionTitle = ({title}: AccordionTitle) => {
    return (
        <h3>{title}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    )
}

