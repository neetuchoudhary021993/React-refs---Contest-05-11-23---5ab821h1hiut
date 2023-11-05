// import React,{useState,useEffect,useRef} from 'react'
// import '../styles/App.css';
// const App = () => {

// //code here 
//   const emailRef = useRef();
//    const passwordRef = useRef();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   function handleSubmit(e) {
//     e.preventDefault();
//     if(email.trim() === ''){
//       emailRef.current.focus();
    
//     }
//       else if(password.trim() === ''){
//       passwordRef.current.focus();
     
//     }
//     else {
//       setEmail('')
//       setPassword('')
//     }
//   }
//   return (
//     <div id="main">
//       Email
//       <input id="inputEmail" type="text" value={email} ref={emailRef} onChange={()=> setEmail(emailRef.current.value)}/><br/>
//       Password
//       <input id="inputPassword" type="text" value={password} ref={passwordRef} onChange={()=> setPassword(passwordRef.current.value)}/><br/>
//       <button id="submitButton" onClick={handleSubmit}>Submit</button><br/>
//       <p id="emailText">Your Email : {email}</p>
//       <p id ="passwordText">Your Password : {password}</p>
      
//     </div>
//   )
// }


// export default App;



import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {

//code here 
  const emailRef = useRef();
   const passwordRef = useRef();
  const [state1, setState1] = useState();
  const [ state2, setState2] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
 
    if(!state1){
      emailRef.current.focus();
    
    }
      else if(!state2){
      passwordRef.current.focus();
     
    }
    else {
      
      setEmail(state1)
      setPassword(state2)
      setState1('')
      setState2('')
    }
  }
  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={state1} ref={emailRef} onChange={(e)=> setState1(e.target.value)}/><br/>
      Password
      <input id="inputPassword" type="text" value={state2} ref={passwordRef} onChange={(e)=> setState2(e.target.value)}/><br/>
      <button id="submitButton" onClick={handleSubmit}>Submit</button><br/>
      <p id="emailText">Your Email : {email}</p>
      <p id ="passwordText">Your Password : {password}</p>
      
    </div>
  )
}


export default App;

