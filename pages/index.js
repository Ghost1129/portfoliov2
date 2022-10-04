import Head from 'next/head'
import Layout from "../components/Layout";
import React, {useEffect,useState} from "react";
import Logo from "../components/Intro";
import Intro from "../components/Intro";
import Cursor from "../components/Cursor";


export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [cursorEnabled, setCursorEnabled] = useState();

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 5000);
    }, []);

  return (
    <div className={""}>
      <Head>
          <title>Devansh Lodhi</title>
          <meta name="description" content="Portfolio by Devansh Lodhi" />
      </Head>

      <main className={""}>
          <Cursor/>
          {/*{isLoaded ?  <Layout/>: <Intro/>}*/}
          <Layout/>
      </main>

    </div>
  )
}
