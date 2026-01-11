import { useEffect, useState } from "react";

const P = ({name , age , status})=>{
  const wm= <h1>welcome : {name}</h1>;
  const lm = <h1>kindly login</h1>;
  const [cond, setcond] = useState(status)
  const [count, setCount]=  useState(0);
  const [addarr,setarr] = useState(()=>{
      const storeddata = localStorage.getItem("itemm");
      return storeddata ? JSON.parse(storeddata) : ["avi"]
  });
  const [val,setval] = useState("");
  useEffect(() =>{
    localStorage.setItem("itemm", JSON.stringify(addarr))
  },[addarr])
  function handlesubmit(e){
    e.preventDefault();
      setarr([...addarr, val]); // Add new value to state
      setval("") // Clear input after submit
  }

  function handledel(index){
    const newarr= addarr.filter((_,i)=> i!==index)
    setarr(newarr)
  }
//   _ means we are ignoring the first parameter (the item itself), because we only need the index.
// i !== index means "keep everything except the item at this index."
// This creates a new array without the deleted item.
  console.log(addarr)
return (
  <>
  <h1>My name is : {name}</h1>
  <h2>My age is : {age}</h2>
  <button onClick={()=>setcond(!cond)}> {cond?"logout":"login"}</button>
  {cond?wm:lm}
  <h2>your body count is : {count}</h2>
  <button onClick={()=>{setCount(count+1)}}>addon</button>
  <form onSubmit={handlesubmit} action="">
    <input type="text" value = {val} onChange={(e)=>setval(e.target.value)} />
    <button type="submit">submit</button>
  </form>
  <p>enter your details: </p>
  <ul>
    {addarr.map(( value , index)=>{
      return <li key={index}>{value} <button onClick={()=>handledel(index)}>delete</button></li>
    })}
  </ul>

  </>
)
}

export default P;