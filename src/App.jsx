import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name); 
    console.log(email);
  }

  return (
    <div>
     <form onSubmit={submitHandler}>
     <h1>yo</h1>
      <input 
        onChange={(e) => setName(e.target.value)} 
        value={name} 
        type="text" 
        placeholder='name' 
      /> <br />
      <input  onChange={(e)=> setemail(e.target.value)}
      value={email}
        type="email" 
        placeholder='email' 
      /> <br />
      <input 
        type="submit" 
      /> <br />
     </form>
    </div>
  )
}

export default App;
