import { useContext } from "react";
import { StoreContext } from "../../../Store/StoreProvider";
import { sumTotal } from "../../../Helpers/Funtions";
import ItemModal from "../ItemModal/ItemModal";
import "./ModalShop.styles.css";
const ModalShop = ({ setShowModal }) => {
  const [store] = useContext(StoreContext);
  const totalPriceSHop = sumTotal(store, "totalPrice");
  return (
    <div className="modal-container card py-3 animate__animated animate__zoomIn animate__faster ">
      <h5 className="mb-2">tus productos:</h5>
      <ul className="scroll-products">
        {store.map((item) => (
          <ItemModal item={item} key={item.id} />
        ))}
      </ul>
      <div>
        <p className="mt-2">
          Total: <span className="price">${totalPriceSHop}</span>
        </p>
        <button className="btn" onClick={() => setShowModal(false)}>
          Cancelar
        </button>
        <button className="btn btn-success mx-2 ">Pagar</button>
      </div>
    </div>
  );
};

export default ModalShop;
