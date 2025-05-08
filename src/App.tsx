import './App.css'
import {Rating} from "./components/Rating.tsx";
import {Accordion} from "./components/Accordion.tsx";
import {PageTitle} from "./components/PageTitle.tsx";

function App() {

    return (
        <>
            <PageTitle title={'App Title'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Menu'} collapsed={false}/>
        </>
    )
}

export default App
