import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

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
    <div className={styles.content}>
      <Head>
        <title>Products</title>
      </Head>
      <h1>Products</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti
        hic fugiat quidem beatae suscipit nostrum saepe dolore deserunt
        cupiditate, inventore ut perferendis excepturi itaque amet dolor rerum
        sequi adipisci.
      </p>
      {products.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <a>
            <h2>{product.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Products;
