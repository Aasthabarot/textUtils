import React, { useState } from 'react'

export default function About(props) {

    // const [mystyle, setMyStyle] = useState(  {
    //     color:"white",
    //     backgroundColor:"black"
    //  })

    let mystyle = {
                  
          color:props.mode==="dark"?"white":"#22363f",
          backgroundColor:props.mode==="dark"?"#22363f":"white",
    }
    
   
     
  return (
    
      <>
    <div className='Container' style={mystyle}>
        <div className="my-3 mx-3"><h1>About Us</h1></div>
    <div className="accordion" id="accordionExample">
<div className="accordion-item" style={mystyle}>
<h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    <strong>Analyze Your Text</strong>
    </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={mystyle}>
   This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
</div>
</div>
<div className="accordion-item" style={mystyle}>
<h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
   <strong>Free To Use</strong>
    </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={mystyle}>
  This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
</div>
</div>
<div className="accordion-item" style={mystyle}>
<h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
  <strong> Browser Compatible</strong>
    </button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={mystyle}>
    This is the third item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
</div>
</div>
 </div> 
 {/*
<button type="button" onClick={toggleStyle} className="btn btn-primary my-3 mx-3">{btntext}</button> */}

</div>
    </>

)
}
