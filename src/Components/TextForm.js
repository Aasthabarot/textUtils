import React,{useState} from 'react'




export default function TextForm(props) {
   const handleUpClick = ()=>
    {
        //  console.log("Uppercase was clicked" + text);
         let newtext = text.toUpperCase();
         setText(newtext);
         props.showAlert('Converted to Uppercase', 'success');
    }
    const handleLoClick = ()=>
      {
          //  console.log("Uppercase was clicked" + text);
           let newtext = text.toLowerCase();
           setText(newtext);
           props.showAlert("Converted to lowercase","success");
           
      }

      const handleClearClick = ()=>
        {
             let newtext = ('');
             setText(newtext);
             props.showAlert("Text has been cleared", "success");
           
        }
    const handleonchange = (event)=>
        {
            //  console.log("on change");
             setText(event.target.value)

        }
      
        const handleCopy = ()=>
          {
               let text = document.getElementById("myBox");
               text.select();
               navigator.clipboard.writeText(text.value);
               props.showAlert("Text copied to Clipboard !!","success");
           
         
          }

          const handleExtraSpaces = () => {
            let newtext = text.split(/\s+/);
            setText(newtext.join(" ").trim());
            props.showAlert("Removed Extra Spaces From Text","success");
           
            
        }
        


    const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white' :'black' }}>
<h1>{props.heading}  </h1>
<div className="mb-3">
<textarea className="form-control" id="myBox" rows="8" style={{backgroundColor:props.mode==='light'? 'white' :'#22363f', color:props.mode==='dark'? 'white' :'black' }} value={text} onChange={handleonchange}></textarea>
</div>
<button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-3' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button className='btn btn-primary mx-3' onClick={handleCopy}>Copy Text</button>
<button className='btn btn-primary mx-3' onClick={handleClearClick}>Clear Text</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'? 'white' :'black'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length-1} words  and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"enter something to preview here :)"}</p>
</div>
</>
  )
}
