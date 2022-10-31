import React from "react";
import { useEffect, useState } from "react";





function Form (){
    const [loginForm, setLoginForm ] = useState("");
    const [require, setRequire ] = useState(false);

    const [lastForm, setLastForm ] = useState("");
    const [lastRequire, setLastRequire ] = useState(false);

    const [mailForm, setMailForm ] = useState("");
    const [mailRequire, setMailRequire ] = useState(false);



    useEffect(() => {console.log("");} , [])



    const onSubmitHandler = (e) => {
        e.preventDefault()
        if (loginForm === ''){
            setRequire(true)
        }
        if (lastForm === ''){
            setLastRequire(true)
        }
        if (mailForm === ''){
            setMailRequire(true)
        }
    }

    const inputHandler = (e) => {
       setLoginForm(e.target.value);
       
       if (e.target.value !== ""){
        setRequire(false);
       }
    
    }


    const passHandler = (e) => {
        setLastForm(e.target.value);
        
        if (e.target.value !== ""){
         setLastRequire(false);
        }
     }


     const mailHandler = (e) => {
        setMailForm(e.target.value);
        
        if (e.target.value !== ""){
         setMailRequire(false);
        }
     } 

    return(
        <div className="form1">
        <form onSubmit={onSubmitHandler}>
           
            <h1>Form</h1>
        
            <div>   
            <label className ="Labels">First Name</label>

              <input  value={loginForm} onChange={(e) =>{inputHandler(e)}} />
              { require && <span  className="require">Add Inputs</span>}
            
            </div>

            <div>
            <label  className ="Labels">Last Name</label>

              <input  value={lastForm} onChange={(e) =>{passHandler(e)}} />
              { lastRequire && <span className="require" >Add Inputs</span>}
            
            </div>

            <div>
            <label   className ="Labels">Email</label>
              
              <input value={mailForm} onChange={(e) =>{mailHandler(e)}} />
              { mailRequire && <span className="require">Add Inputs</span>}
            </div>

            <div>
            <button>Sign In</button>  
            </div>

        </form>
        </div>
    );
}

export default Form;