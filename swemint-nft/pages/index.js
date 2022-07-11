import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containerOverlay}></div>
      <Head>
        <title>Swemint.io | NFT</title>
        <meta name="description" content="Mint NFTs with Swemint" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layout}>
        <header className={styles.header}>
          <h1 className={styles.title}>SweMint.io</h1>
        </header>
        <main className={styles.main}>Main</main>

        <footer className={styles.footer}>Footer</footer>
      </div>
    </div>
  );
}
