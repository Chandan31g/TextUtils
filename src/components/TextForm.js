import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  //setText("Please enter the text");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
  };
  const handleOnClick = (event) => {
    setText(event.target.value);
  };

  const handleCopyClick = (event) => {
    var text = document.getElementById("myBox");
    text.select();
    props.showAlert("Copy to click board","success");
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = (event) => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra space remove","success");
  };
  
  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnClick}
          style={{backgroundColor:props.mode==='light'? 'grey':'white'}}
          value={text}
          id="myBox"
          rows="8"
        ></textarea>
      
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        Convert to LowerCase
      </button>

      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
        Copy 
      </button>

      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
        Remove space
      </button>
      
      </div>
    </div>
    <div className="container my-2">
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
