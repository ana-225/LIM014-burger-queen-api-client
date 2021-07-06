
import '../style/main.scss';
import clock from '../images/clock.svg';
import alertIcon from '../images/alertIcon.svg';
import { putOrders } from '../Services/orders'
import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';

function OrderToKitchenUnitary(props) {
    const  history = useHistory();
    const status = props.status;

    const statusChange = async (id) =>{
          await putOrders({ "status": 'delivering'}, id)
          history.go(0)
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
      }

    // useEffect(() =>  {
    //    window.location.reload();
    // }, [statusOrder])

    return (
        <section className="orderToKitchen">
            <header>
                <div className="tableNumber">{props.client}</div>
                <div>
                    <article className="timeWraper">
                        <p>Hora de Pedido</p>
                        <div className="alertWrap">
                            <img alt="alert" className="alertIcon" src={alertIcon}></img>
                            <button className="Time"><img alt="clock" src={clock} ></img> {props.dateEntry}</button>
                        </div>
                    </article>
                </div>
            </header>
            <div className="productsOrdered">
                {props.products}
            </div>
            <div className="bottomOrderSection">
                <button 
                onClick={() =>{
                 openModal()
                 // statusChange(props._id)
                }}
                className="deliver">{props.status}</button>
            </div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="Modal">
                <i className="far fa-window-close" onClick={() => closeModal()}></i>
                <h3> ¿Desea entregar la orden?</h3>
                <button 
                onClick={() =>{
                 statusChange(props._id)
                }}
                className="deliver">Entregar</button>
            </Modal>
        </section>
    );
}
  
export default OrderToKitchenUnitary;

