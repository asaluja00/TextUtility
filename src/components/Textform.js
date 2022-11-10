import React, { useState } from 'react'

export default function Textform(props) {
    const handleclick = () => {
        setText(text.toUpperCase())
    }
    const changetext = (event) => {
        setText(event.target.value)

    }
    const handlelower = () => {
        setText(text.toLowerCase())
    }
    const handleclear = () => {
        setText("");
    }
    const [text, setText] = useState("Enter Text Here");// isko dimag m baitha lo
    return (
        <>
         
              <div className='Container1 ' style ={{backgroundColor :props.mode==='dark'?'grey':'white'}}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className=" form-control" value={text} onChange={changetext}  style ={{backgroundColor :props.mode==='dark'?'grey':'white'}}id="my box" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleclick}> Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handlelower}> Convert To Lowerclass</button>
                <button className="btn btn-primary" onClick={handleclear}> Clear</button>
            </div>
            
            <div className="container "  style ={{backgroundColor :props.mode==='dark'?'grey':'white'}}>
                <h1> Your Text Summary</h1>
                <p>Contains {text.split(" ").length125 / 30} Words and {text.length} Characters</p>
                <p> Average Time to read paragraph will be {0.008 * text.length} Minutes</p>
            </div>
        </>
    )
}
 // Props are things we pass to components
 // React 