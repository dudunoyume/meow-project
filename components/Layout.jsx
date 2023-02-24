import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./Layout.module.scss";
import Nav from "./Nav"
import Footer from "./Footer";

import React from 'react'

export default function Layout({ children, returnBack }){
  return (
    <>
        <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="author" content="DUDU" />
        <title>Moew</title>
      </Head>
      <Nav></Nav>
      <main>{children}</main>
      {returnBack && <Link className={styles.home} href="/">回到首頁</Link>}
      <Footer></Footer>

    </>
  )
}

 