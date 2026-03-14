import { useState } from "react";
import './style.css';

const App = () => {
    const [arr, setFunc] = useState([{ fullName: "Tushar", age: 27 },
    { fullName: "Tejal", age: 31 },
    { fullName: "Ankita", age: 28 }]
    );

    return (
        <>
            <h1>Demonstration of the Use state with array</h1>
            <div >
                {arr.map((row, id) =>
                    <p key={id} className="box">key : {row.fullName}<br />
                        Value : {row.age}</p>
                )}
            </div>
        </>
    );
}

const App2 = () => {
    const [fn, fnState] = useState("");
    const [sn, snState] = useState("");
    const [res, resState] = useState("");

    const handleFirstNumber = (e) => {
        console.log(e.target.value);
        fnState(e.target.value)
    }
    const handleSecondNumber = (e) => {
        snState(e.target.value)
    }
    const doAddition = (e) => {
        const fNum = Number(fn);
        const sNum = Number(sn);
        resState(fNum + sNum);

    }
    return (
        <>
            <h1>Additoin calculator</h1>
            <p>
                First Number  : <input type="text" value={fn} onChange={handleFirstNumber}></input><br />
                Second Number : <input type="text" value={sn} onChange={handleSecondNumber}></input><br />
                Result        : <input type="text" value={res} readOnly></input>   <br />
                <button onClick={doAddition}>Add Please</button>
            </p>
        </>
    );
}

const App3 = () => {
    const [data, numState] = useState({ fn: "", sn: "", res: "" });
    const [res, resState] = useState("");

    const handleNumber = (e) => {

        if (e.target.name === "one") {
            numState({ ...data, fn: e.target.value });
        }

        if (e.target.name === "two") {
            numState({ ...data, sn: e.target.value });
        }
    };


    const doAddition = (e) => {
        const fNum = Number(data.fn);
        const sNum = Number(data.sn);
        resState(fNum + sNum);
    }

    return (
        <>
            <h1>Additoin calculator</h1>
            <p>
                First Number  : <input type="text" name="one" value={data.fn} onChange={handleNumber}></input><br />
                Second Number : <input type="text" name="two" value={data.sn} onChange={handleNumber}></input><br />
                Result        : <input type="text" value={res} readOnly></input>   <br />
                <button onClick={doAddition}>Add Please</button>
            </p>
        </>
    );
}

const App4 = () => {
    const [data, numState] = useState({ fn: "", sn: "", res: "" });
    const [res, resState] = useState("");

    const handleNumber = (e) => {
        numState({ ...data, [ e.target.name]: e.target.value });
    };


    const doAddition = (e) => {
        const fNum = Number(data.fn);
        const sNum = Number(data.sn);
        resState(fNum + sNum);
    }

    return (
        <>
            <h1>Addition calculator final</h1>
            <p>
                First Number  : <input type="text" name="fn" value={data.fn} onChange={handleNumber}></input><br />
                Second Number : <input type="text" name="sn" value={data.sn} onChange={handleNumber}></input><br />
                Result        : <input type="text" value={res} readOnly></input>   <br />
                <button onClick={doAddition}>Add Please</button>
            </p>
        </>
    );
}
export default App4;