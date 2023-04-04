import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success")
    }


    const handleLoClick=()=>{
        console.log("LowerCase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success")
    }

    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const[text,setText]=useState('Enter text here');
  
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 style={{backgroundColor:props.mode==='dark'?'#042743':'white'}}>{props.heading}</h1>
        <div className="mb-3">
         
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>LowerCase</button>
        </div>

        <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 >Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>

        </>
    )
}
