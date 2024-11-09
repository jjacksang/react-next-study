import { useState } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
    const [count, setCount] = useState(0);

    const onClickButton = (value) => {
        setCount(count + value);
    };

    return (
        <div className="App">
            <h2>Simple Counter</h2>
            <section>
                <Viewer count={count} />
            </section>
            <section>
                <Controller onClickButton={onClickButton} />
            </section>
        </div>
    );
}

export default App;
