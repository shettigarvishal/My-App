import React, { useState } from "react";

export default function (props) {
    const handleUpClick=()=>{
        //console.log("uppercase was clicked"+text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Uppercase was Clicked","secondary")
    }
    const handleLoClick=()=>{
        //console.log("lowercase was clicked"+text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Lowercase was Clicked","primary")
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText)
        props.showAlert("Clear was Clicked","dark")
    }
    const handleSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleCopy=()=>{
         var text=document.getElementById("myBox");
         text.select();
         navigator.clipboard.writeText(text.value); 
    }
    const handleOnChange=(event)=>{
        console.log("onchange");
        setText(event.target.value);
        
    }
    const wordcount=(text)=>{
      return text.split(/\s+/).filter((text)=>text.length!==0).length
    }
  const [text, setText] = useState("Enter the text "); 
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}} >
      <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-secondary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-success mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-danger mx-1 my-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-dark mx-1 my-1" onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>
        Your Text Summary
    </h1>
    <p>{wordcount(text)} words and {text.length} charecter</p>
    <p>{0.008*wordcount(text)}</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter the above textbox to preview here..!'}</p>
    </div>
    </>
  );
}
