import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.container}>
        <div className={styles.footerItem}>
          <ul>
            <li>
              <a href="#">DSDSD</a>
            </li>
            <li>
              <a href="#">授權服務</a>
            </li>
            <li>
              <a href="#">隱私權聲明與會員使用條款</a>
            </li>
            
            {/* <label htmlFor="drop">暴力課程</label>                   
                <input type="checkbox" name="drop" id="drop"/> */}
          </ul>
        </div>

        <div className={styles.footerItem}>
          <h4>聯絡我們</h4>
          <p>浪貓救援電話 : 09222222222</p>
          <p><a href="mailto:meowmeow@gmail.comn"> 服務信箱</a></p>
          <a href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          <a href="https://github.com/"><i className="fab fa-github-square"></i></a>
          <a href="https://www.facebook.com/"><i className="fab fa-line"></i></a>
        </div>
      </div>
      <div className={styles.copyright}>Copyright &copy; 2023 喵喵定位APP</div>
    </div>
  );
}
