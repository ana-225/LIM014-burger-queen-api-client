
import '../style/main.scss'


function ProductItem(props) {
    return (
        <main className="productItem">
        <div>
          <input type="checkbox" id="simpleHamburger" className="checkbox-round"></input>
          <label for="simpleHamburger"> Hamburguesa Simple</label>
        </div>
        <article className="counterWrap">
          <img alt="imgPhoto" src= {props.productItemImg}></img>
          <div className="counter">
            <button> - </button> 0 <button> + </button> 
          </div>
        </article>
        <p> + $USD </p>
      </main>
    );
}
  
export default ProductItem;

