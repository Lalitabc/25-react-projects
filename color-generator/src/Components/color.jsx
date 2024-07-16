import { useState } from "react";
import './style.css'
const Color = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#1B366F');

    function hexHandle(){
        let letters = "0123456789ABCDEF";
        let color = '#';

        for(let i=0; i<6; i++){
            color +=letters[Math.floor(Math.random()*16)];
        }

        console.log(color);
        setColor(color)


    }
    function rgbHandle(){

        let color="rgb("
        color +=Math.round(Math.random()*255);
        color +=',';
        color +=Math.round(Math.random()*255);
        color +=',';
        color +=Math.round(Math.random()*255);
        color +=')'
        setColor(color);
        console.log(color)

    }
    function typeColor(typeColor){
        setTypeOfColor(typeColor)
    }

    function randomHandle(){
        
        if(typeOfColor =='hex'){
            hexHandle();
        }

        if(typeOfColor=='rgb'){
            rgbHandle();
        }

    }


    return <>
        <div className="wrapper">
            <div className="buttons">
                <button className="hex" onClick={() => typeColor('hex')}>HEX Color</button>
                <button className="rgb" onClick={() => typeColor('rgb')}>RGB Color</button>
                <button className="random" onClick={randomHandle}>Generate Color</button>
            </div>
            <div className="displayColor" style={{backgroundColor:`${color}`}}>
                <h1>{typeOfColor} Color</h1>
                <h1>{color}</h1>

            </div>
        </div>
    </>
}

export default Color;