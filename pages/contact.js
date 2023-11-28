import Head from "next/head";
import homeStyles from "../styles/Home.module.css";

const Contact = () => {
  return (
    <div className={homeStyles.content}>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>Contact</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore
        ea inventore, possimus neque adipisci debitis, sequi earum, est
        voluptates non. Quas labore ea perspiciatis, expedita dignissimos sit
        obcaecati vitae.
      </p>
    </div>
  );
};

export default Contact;
