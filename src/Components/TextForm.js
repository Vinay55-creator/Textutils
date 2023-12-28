import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("uppercase is clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handlelwClick = ()=>{
        // console.log("lowercase is clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }

    const handlemailClick = ()=>{
      let newText = '';
      setText(newText);
      props.showAlert("Text is Clear", "success");
  }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState(`Enter text here`);
    // text = "new text" //wrong way to change the state
    // setText = "new text" // correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.Mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.Mode === 'dark'?'gray':'white', color: props.Mode === 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="10"></textarea>
          </div>
          <div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handlelwClick}>Conver to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handlemailClick}>Clear</button>
          </div>
    </div>
    <div className="container my-3" style={{color: props.Mode === 'dark'?'white':'black'}}>
      <h1>Your text summery</h1>
      <p>{text.split(" ").length} Words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to about textBox to preview here"}</p>
    </div>
    </>
  )
}
