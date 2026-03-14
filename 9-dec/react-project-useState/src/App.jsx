import { useState } from "react";


const App=()=>{
    
    const [count,func] =useState(0);
    const [fruit,func1] =useState("Apple");
    const [obj,func2] = useState({name:"Tushar", age:27});
            console.log(count);
    const handleCount=()=>{
        func(count+1);
        func1("Banana")
        func2({...obj,age:26})
    }

    return(
        <>
        <h1>App Component</h1>
        <p>count : {count} <br />
           fruit : {fruit} <br />
            obj   : {obj.name} {obj.age}
        </p>
        <button onClick={handleCount}>click me</button>

        </>
    );
}
export default App;