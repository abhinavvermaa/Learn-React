function Timee(){
  let time = new Date();
  return <div>This is the current time : {time.toLocaleDateString()} - {""}
  {time.toLocaleTimeString()}</div>
}
export default Timee;