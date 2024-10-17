import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [name, setName] = useState("")
  const [msg, setMsg] = useState("");
  const [sect, setSect] = useState("");
  const [allMsg, setAllMsg] = useState([]);
  
  useEffect(()=>{
    const savedMsg = JSON.parse(localStorage.getItem("allMsg"));
    setAllMsg(savedMsg);
  },[])
  
  useEffect(()=>{
    localStorage.setItem("allMsg", JSON.stringify(allMsg));
  },[allMsg])
  
  
  
  const handleName = () => {
    setName(event.target.value);
    
  }
  
  const handleMsg = () => {
   
      setMsg(event.target.value);
    
  }
  
  const handleSect = () => {
   
      setSect(event.target.value);
    
  }
  
  const addMsg = () => {
    if(name && msg && sect){
    setAllMsg([...allMsg, {name: name, message: msg,
      section: sect
    }]);
    setName("");
    setMsg("");
    setSect("");
    }
  }
  
  return (
    <div style = {{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    gap:"10px"
    }}>
    <h1>#myProject hahaahaha</h1>
    <input type = "text" placeholder = "To: " value = {name} onChange = {handleName}/>
    <textarea rows = "5" type = "text" placeholder = "Leave a note here..." value = {msg} onChange = {handleMsg}
    style = {{
    width:"38%",
    }}>
    in
    </textarea>
    <input type = "text" placeholder = "Receiver's Section: " value = {sect} onChange = {handleSect}/>
    <button style = {{
    padding:"20px",
    borderRadius:"10px",
    border: "none",
    marginTop:"30px"
    }} onClick = {addMsg}> Add your note </button>
    <div style = {{
    textAlign:"center"
    }}>{
      allMsg.map((note, i) => {
      return <div key = {i} style = {{
      border:"1px black solid",
      margin:"20px",
      padding:"15px",
      textAlign:"left",
      fontFamily:"times"
      }}>
        <h2>{`To: ${note.name}`}</h2>
        <p>{note.message}</p>
        <h3>{`Section: ${note.section}`}</h3>
        </div>
      })
    }
    </div>
    </div>
    )
}



ReactDOM.render(
  <App/>,
  document.getElementById('react-app')
);
