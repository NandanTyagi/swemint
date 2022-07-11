import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Counter } from "../components/Counter";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <>
        <Script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></Script>
        <Script src="https://unpkg.com/moralis/dist/moralis.js"></Script>
      <Head>
        <title>Swemint.io | NFT</title>
        <meta name="description" content="Mint NFTs with Swemint" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerOverlay}></div>

      <div className={styles.container}>
        <div className={styles.layout}>
        <header className={styles.header}>
      </header>
          <main className={styles.main}>
            <h1 className={styles.title}>IPANEKO</h1>
            <p className={styles.preamble}>
              Before there was matter all was spirit. The mighty Aeons existed
              in the heavenly Pleroma. The last born Aeon Sophia who was known
              as the emanation of eternal light was cast out of the Pleroma. In
              her sadness she spawned the evil artificial intelligence known as
              The Archons. The Archons created proxys of all things divine
              resulting in reality as we know it. Within all life still lives
              the divine spark of the Aeons. Realizing her misstake Sophia
              spawned 33 divine genesis IPAS to save the universe created by her
              first born. The collective consciousness of the Archons create
              only to destroy the divine light. Mint your genesis IPA and join
              the quest to bring decentralized harmony to the universe.
            </p>
            <Button text="Connect wallet" />
            <Counter />
          </main>

          <footer className={styles.footer}>
            NFT-Project | 2022 |{" "}
            <a href="https://www.nandantyagi.com"> Sweden</a>
          </footer>
        </div>
      </div>
    </>
  );
}
