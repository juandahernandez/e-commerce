import ProductsItem from "../ProductsItem/ProductsItem";
import products from "../../../products.json";
import "./ProductsList.styles.css";
const ProductsList = () => {
  return (
    <div className=" container">
      <ul className="row item-container">
        {products.map((item) => (
          <li key={item.id} className="products-item my-2 d-flex">
            <ProductsItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
