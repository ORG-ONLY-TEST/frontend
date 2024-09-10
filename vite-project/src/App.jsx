import { useState } from "react";

// import './App.css'

function App() {
    const [score, setScore] = useState(0);
    return (
        <>
            <h1>Rock Paper Scissors</h1>
            <p>Fun and Play</p>
            <p>Score: {score}</p>
            <div>
                <div>
                    <img src="https://placekitten.com/200/300" alt="" />
                </div>
                <div>
                    <img src="https://placekitten.com/200/300" alt="" />
                </div>
            </div>
        </>
    );
}

export default App;
