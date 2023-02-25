import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [burgerState, setBurgerState] = useState(false);

  return (
    <div className={styles.navbar}>
      <div
        className={styles.burger_menu}
        onClick={() => setBurgerState(!burgerState)}
      >
        <Image
          src={burgerState ? "/Hamburger_icon.png" : "/Hamburger_icon_dark.png"}
          width="50"
          height="50"
          alt="menu"
        />
      </div>

      {burgerState && (
        <div className={styles.mobileMenu}>
          <Link href="/#">
            <div className={styles.linkMobile}>OUR PRODUCTS</div>
          </Link>
          <Link href="/#">
            <div className={styles.linkMobile}>ABOUT US</div>
          </Link>
          <Link href="/#">
            <div className={styles.linkMobile}>LIVE BETTER</div>
          </Link>
          <Link href="/#">
            <div className={styles.linkMobile}>CLAIMS & SUPPORT</div>
          </Link>
          <Link href="/#">
            <div className={styles.linkMobile}>MY ACCOUNT</div>
          </Link>
        </div>
      )}

      <Image
        src="/logo.png"
        width="50"
        height="50"
        alt="logo"
        className={styles.logo}
      />
      <Link href="/#">
        <div className={styles.link}>
          OUR
          <br />
          PRODUCTS
        </div>
      </Link>
      <Link href="/#">
        <div className={styles.link}>
          ABOUT
          <br />
          US
        </div>
      </Link>
      <Link href="/#">
        <div className={styles.link}>
          LIVE
          <br />
          BETTER
        </div>
      </Link>
      <Link href="/#">
        <div className={styles.link}>
          CLAIMS &<br />
          SUPPORT
        </div>
      </Link>
      <Link href="/#">
        <div className={styles.link}>
          MY
          <br />
          ACCOUNT
        </div>
      </Link>
      <div></div>
    </div>
  );
};
