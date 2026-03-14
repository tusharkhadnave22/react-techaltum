import { Children } from "react";
import "./Demo.css"
import myImage from './image.png';
const Demo = (props) => {
        console.log(props);

    return (
    <div className="box">
        <h2>Demo Component</h2>

        name: {props.student.name}<br />
        age: {props.student.age}<br />
        {props.children}
    </div>
    );
}

const Image1=()=>{
   return( <>
        <h2>Image</h2>
    <img src={'/src/image.png'} />
    </>
   );

}
export { Demo,Image1};