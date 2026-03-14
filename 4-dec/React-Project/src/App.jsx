import {Demo,Image1} from './Demo';
import Header from './Header';
import Footer from './Footer';

const handleClick=()=>{
    console.log("called")
}

const App = () => {
    const obj = { "name": "tushar", "age": "27" };
    return (
        <>
            <Header />
            <h1> App Component</h1>
            <Demo student={obj}>
                first line goes here <br />
                second line goes here
            </Demo>
        <input type="button" value="click here" onClick={handleClick}></input>
        <Image1 />
        <Footer />
        </>
    );
}

export default App;