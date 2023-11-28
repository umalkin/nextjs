import Head from "next/head";
import Link from "next/link";
import homeStyles from "../styles/Home.module.css";
import productStyles from "../styles/Products.module.css";

// For fetching external data
export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: { products: data },
  };
};

const Products = ({ products }) => {
  return (
    <div className={homeStyles.content}>
      <Head>
        <title>Products</title>
      </Head>
      <h1>Products</h1>
      <div className={productStyles.products}>
        {products.map((product) => (
          <div className={productStyles.product} key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>
                <div>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={productStyles.productImg}
                  />

                  <h5 className={productStyles.productTitle}>{product.title}</h5>
                </div>
              </a>
            </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
