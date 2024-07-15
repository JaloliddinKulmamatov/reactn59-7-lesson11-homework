import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Product.module.scss"

const baseURL =
  import.meta.env.VITE_BASE_URL || "https://headphones-server.onrender.com";

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProductById() {
      const response = await fetch(`${baseURL}/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    }

    fetchProductById();
  }, [productId]);

  return (
    <div>
      {product && (
        <div className={styles.div}>
          <span className={styles.imgcard}>
            <img className={styles.img} src={product.image_url} alt="abc" />
          </span>
          <span>
            <h2>{product.name}</h2>
            <h3>{product.ratings_stars}</h3>
            <p>{product.description}</p>
            {product.color_options.map((color, index) => (
              <li key={index}>
                <div style={{ backgroundColor: color }}></div>
              </li>
            ))}
          </span>
        </div>
      )}
    </div>
  );

};

export default Product