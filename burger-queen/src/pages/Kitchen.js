import { useEffect, useState } from 'react';
import OrderToKitchenUnitary from '../components/OrderToKitchenUnitary';
import { getOrders } from '../Services/orders';
// import logo from '../images/burger-queen-logo.png';

function Kitchen() {

  const [orders, setOrders] = useState([]);


    useEffect(()=> {
      
      const getData = () =>{
        getOrders()
        .then((res)=> {
          setOrders(res.data);
        })
        .catch((err)=>{console.log(err)})
      }
      getData()
      
    },)
  
    return (
      <div className="tableOrder">
        <OrderToKitchenUnitary orders={orders}/>
      </div>
    );
  }
  
export default Kitchen;

