import FoodItems from "./components/Fooditems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  
  let foodItems = ["Sabzi" , "Green vegetable" , "Roti" , "Salad" , "Milk", "Ghee"];
  
  
  return ( 
    <>
    <h1 className="food-heading">Healthy Food</h1>
    <ErrorMessage items = {foodItems}></ErrorMessage>
    <FoodItems items = {foodItems}></FoodItems>
  </>
  )
}

export default App
