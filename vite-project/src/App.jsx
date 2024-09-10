import { useState } from "react";

// import './App.css'

function App() {
    const [score, setScore] = useState(0);
    function playBtn() {
        setScore(score + 1);
    }
    return (
        <>
            <h1>Rock Paper Scissors</h1>
            <p>Fun and Play</p>
            <p>Score: {score}</p>
            <button onClick={playBtn}>Play</button>
        </>
    );
}

export default App;
