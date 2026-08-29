import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <p>Hello World</p>
            <header className="App-header">
                Hello World UD CISC275 with React Hooks and TypeScript
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <div className="Rectangles" style={{ backgroundColor: "red" }}>
                <h1>Armored core 6 is a pretty good game</h1>

                <p>Edward Rodriguez</p>
                <img
                    className="big-image"
                    src="https://4kwallpapers.com/images/wallpapers/armored-core-6-2560x1440-12763.png"
                    alt="This is an armored core 6 poster"
                />
                <ul>
                    <li>Armored core is made by the company called Fromsoft</li>
                    <li>
                        Fromsoft is the same company that made the dark sould
                        franchise
                    </li>
                    <li>
                        armored core 6 is very quickly accion pased and pretty
                        enjoyable
                    </li>
                </ul>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;
