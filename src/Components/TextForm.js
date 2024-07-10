import React,{useState} from 'react'




export default function TextForm(props) {
   const handleUpClick = ()=>
    {
        //  console.log("Uppercase was clicked" + text);
         let newtext = text.toUpperCase();
         setText(newtext);
    }
    const handleLoClick = ()=>
      {
          //  console.log("Uppercase was clicked" + text);
           let newtext = text.toLowerCase();
           setText(newtext);
      }
    const handleonchange = (event)=>
        {
            //  console.log("on change");
             setText(event.target.value)
        }
        


    const [text, setText] = useState("");
  return (
    <>
    <div className="container">
<h1>{props.heading}  </h1>
<div className="mb-3">
<textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleonchange}></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to Lowercase</button>
</div>
<div className="container my-3">
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words  and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h3>Preview</h3>
  <p>{text}</p>
</div>
</>
  )
}
