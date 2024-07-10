import React,{useState} from 'react'




export default function TextForm(props) {
   const handleUpClick = ()=>
    {
        //  console.log("Uppercase was clicked" + text);
         let newtext = text.toUpperCase();
         setText(newtext);
    }
    const handleonchange = (event)=>
        {
            //  console.log("on change");
             setText(event.target.value)
        }
        


    const [text, setText] = useState('Enter text Here');
  return (
    <>
    <div className="container">
<h1>{props.heading}  </h1>
<div className="mb-3">
<textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleonchange}></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
</div>
<div className="container my-3">
  <h1>Your text summary</h1>
  <p>{text.split(" ").length} words  and {text.length} characters</p>
</div>
</>
  )
}
