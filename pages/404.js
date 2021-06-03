import Head from "next/head";
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import styles from "../styles/Home.module.css";

const About = () => {
    const linkStyle = {'color' : 'darkblue', 'text-decoration': 'underline'}
    const router = useRouter()

    useEffect(() => { // Will redirect to homepage after 3 secs.
      setTimeout(() => {
        router.push('/')
      }, 3000)
    }, [])

  return (
    <div className={styles.content}>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <h1>Page Not Found</h1>
      <p>
       You will be redirected to homepage.
      </p>
    </div>
  );
};

export default About;