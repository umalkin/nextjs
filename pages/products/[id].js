// To generate pages and routes based on ids of products

import Head from 'next/head'

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
    const id = context.params.id

    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
  
    return {
      props: { product: data },
    };
  };

const Product = ({product}) => {
  return (
    <div>
      <Head>
        <title>{product.title}</title>
      </Head>
      <h2>Product</h2>
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <h5>US$ {product.price}</h5>
      <p>{product.description}</p>
    </div>
  );
};

export default Product