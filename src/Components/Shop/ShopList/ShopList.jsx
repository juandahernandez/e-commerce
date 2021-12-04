import { useContext, useState } from "react";
import { sumTotal } from "../../../Helpers/Funtions";
import { StoreContext } from "../../../Store/StoreProvider";
import { types } from "../../../Store/Types";
import ModalShop from "../ModalShop/ModalShop";
import ShopItem from "../ShopItem/ShopItem";
import "./ShopList.styles.css";

const ShopList = () => {
  const [store, dispatch] = useContext(StoreContext);
  const [showModal, setShowModal] = useState(false);
  const total = sumTotal(store, "totalPrice");

  return (
    <div className="container">
      {store.length <= 0 ? (
        <h5 className="mt-5">No tienes productos agregados al carrito...!</h5>
      ) : (
        <>
          <ul className="shop-container">
            {store.map((item) => (
              <ShopItem item={item} dispatch={dispatch} key={item.id} />
            ))}
          </ul>
          <p className="mt-4">
            total a pagar:
            <span className="price"> $ {total}</span>
          </p>
          <button
            className="btn btn-outline-danger mr-1"
            onClick={() => {
              dispatch({
                type: types.clear,
              });
            }}
          >
            Vaciar carrito
          </button>
          <button
            className="btn btn-success"
            onClick={() => setShowModal(true)}
          >
            Confirmar
          </button>
        </>
      )}
      {showModal && (
        <div className="mask">
          <div className="d-flex flex-column align-items-center">
            <ModalShop setShowModal={setShowModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopList;
