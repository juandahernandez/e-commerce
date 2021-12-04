import { useContext } from "react";
import { StoreContext } from "../../../Store/StoreProvider";
import { types } from "../../../Store/Types";
import "./ProductsItem.styles.css";

const ProductsItem = ({ item }) => {
  const [, dispatch] = useContext(StoreContext);
  return (
    <div className="target card p-2 center d-flex align-items-center  p-3 bg-white rounded animate__animated animate__fadeIn">
      {!item.is_available && (
        <img
          src="https://vivecurauma.cl/wp-content/themes/smcorredores/assets/images/no-disponible.png"
          alt="not_available"
          className="no_available"
        />
      )}
      <img src={item.img} alt={item.name} width="120px" />
      <h4>{item.brand}</h4>
      <h4>Tipo: {item.name}</h4>
      <p>{item.description}</p>
      <p>Tamaño: {item.size}</p>
      <p>
        Precio: <span className="price">${item.price}</span>
      </p>
      <button
        disabled={!item.is_available && true}
        className={
          !item.is_available ? "btn cursor-disabled" : "btn btn-sm btn-info"
        }
        onClick={() =>
          dispatch({
            type: types.add,
            payload: item,
          })
        }
      >
        <i className="fas fa-shopping-cart"> Agregar al carrito </i>
      </button>
    </div>
  );
};

export default ProductsItem;
