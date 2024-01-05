import React , {useState} from "react";
const App =()=>{
   let text="Hello Guys !!"
   const [tcolor, setTcolor]=useState(text);
   
// this function is used for changing text
  const textChange =()=>{

   text ="Welcome in React World 💯!"
     setTcolor(text)
  }

  const [bg,setBg]=useState("#8e44ad")
   const [name,setName]=useState("Click me 😄") 

// this function is used for changing backgroundColor and button text

   const bgBack=()=>{
    setBg("black");
    setName("ouch!! 😧")
  }


  return (
    <>
    <div style={ { backgroundColor:bg}}>
      <h1>{tcolor}</h1>
      <button onDoubleClick={bgBack}  onMouseLeave={textChange}>{name}     </button>
    </div>
    </>
  )
}

export default App;
