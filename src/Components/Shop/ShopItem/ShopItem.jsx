import { types } from "../../../Store/Types";
import "./ShopItem.styles.css";

const ShopItem = ({ item, dispatch }) => {
  return (
    <li className="shop-cart card p-2 center d-flex align-items-center my-2  p-3 bg-white rounded  animate__animated animate__fadeIn">
      <img src={item.img} alt={item.name} width="120px" />
      <p>{item.description}</p>

      <p>
        Precio: <span className="price">${item.totalPrice}</span>
      </p>

      <p>Cantidad: x {item.quantity} </p>
      <div>
        <button
          className="btn btn-danger btn-sm"
          onClick={() =>
            dispatch({
              type: types.delete,
              payload: item.id,
            })
          }
        >
          Borrar del carrito
        </button>
        <div className="d-flex mt-2 justify-content-center">
          <button
            className="btn btn-light mr-1"
            onClick={() =>
              dispatch({
                type: types.sum,
                payload: item,
              })
            }
          >
            +
          </button>
          {item.quantity > 1 && (
            <button
              className="btn btn-light"
              onClick={() => {
                dispatch({
                  type: types.subtraction,
                  payload: item,
                });
              }}
            >
              -
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default ShopItem;
