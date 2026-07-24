import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Stopwatch = () => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        let timer;
        if (time) {
            timer = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        return (
            clearInterval(timer)
        )
    })
    return (
        <>
            <h1>Stopwatch</h1>
            <h2>{time} sec</h2>
            <button onClick={() => setTime(true)}>Start</button>
            <button onClick={() => setTime(false)}>Stop</button>
            <button onClick={() => { setTime(false); setTime(0); }}>Reset
            </button>
            <Link to="/">
                <button>Home</button>
            </Link>
        </>
    )
}



export default Stopwatch;
