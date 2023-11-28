// To generate pages and routes based on ids of products

import Head from "next/head";
import stylesHome from "../../styles/Home.module.css";
import stylesProduct from "../../styles/Product.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  return {
    props: { product: data },
  };
};

const Product = ({ product }) => {
  return (
    <div className={stylesHome.content}>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div>
        <div className={stylesProduct.productDisplay}>
          <div>
            <img
              src={product.image}
              alt={product.title}
              className={stylesProduct.productImg}
            />
          </div>
          <div className={stylesProduct.productSell}>
            <h4>{product.title}</h4>
            <h4>US$ {product.price}</h4>
            <div className={stylesProduct.buttons}>
            <button className={stylesProduct.button}>
              Add to Favorite
            </button>
            <button className={stylesProduct.button}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <p className={stylesProduct.desc}>{product.description}</p>
    </div>
  );
};

export default Product;
