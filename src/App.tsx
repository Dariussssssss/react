import './App.css'
import {Rating} from "./components/Rating.tsx";
import {Accordion} from "./components/Accordion.tsx";
import {AppTitle} from "./components/AppTitle.tsx";

function App() {

    return (
        <>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </>
    )
}

export default App
