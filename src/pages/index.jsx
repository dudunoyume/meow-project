import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "components/Layout";
import styles from "@/styles/indexcss.module.scss";
import Link from "next/link";

// export async function getStaticProps(){
//   const response = await fetch("http://localhost:3000/api/hello");
//   const data = await response.json()

//   return {
//     props :{
//       data,
//     }
//   }
// }

export default function Home({ data }) {
  return (
    <Layout returnBack={true}>
      <div className={styles.maintitle}>
        <div className={styles.titletext}>
          <h2>
            協尋喵星人{" "}
            <a href="#maincontent">
              <i className="fas fa-angles-down"></i>
            </a>
          </h2>
        </div>
      </div>
      <div className={styles.background} id="maincontent">
        <h3>專案背景</h3>
        <p>
          因為FB貓社團常常看到有人在PO浪貓需要救援，但通常不知道怎麼描述
          先預設一些描述
          如果有資料庫並保留原始數據系統化再用篩選，可以比較靈活去做數據分析，
          提高浪貓救援成功機率。單靠有限的人力及物力資源，想要回答在外流浪的街貓數量有多少？浪貓面臨了哪些問題？是否有辦法解決？ 等問題，顯得相當困難。希望能透過資訊軟體工具結合公民科學調查方式，更加精確地回答這個問題，並同時讓在外流浪的街貓能免受各類疾病、意外事故或有心人士刻意侵擾所苦。
        </p>

        {/* { data.name } */}
      </div>

      <div className={styles.wrap11}>
        <div className={styles.container11}>
          <h1>我們的目標</h1>
          <div className={styles.txt11}>
            <p>
              幫助想幫忙的人更便捷的能通報給他人知道 對於浪貓的認知程度
              ex.看到受傷浪貓的處理方式、餵食品項
              瞭解人們對浪貓的關心度，那些族群會更關心
            </p>
          </div>
        </div>
      </div>

      <div className={styles.wrap_break}>
        {/* item 1 */}
        <div className={styles.item}>
          <div className={styles.icon}>
            <i className="fa fa-gavel"></i>
          </div>

          <div className={styles.txt}>
            <h2> 瞭解人們對浪貓的關心度</h2>
            <p>
            了解目標族群，他們的基本資料、生活型態、參與方式

參與社群與平時關心浪貓的方式

對於浪貓的關心度

幫助浪貓的頻率及意願
            </p>
            <Link href="" className={styles.button}>
              more
            </Link>
          </div>
        </div>

        {/* item 2 */}
        <div className={styles.item}>
          <div className={styles.icon}>
            <i className="fa fa-thumbs-up"></i>
          </div>

          <div className={styles.txt}>
            <h2> 幫助想幫忙的人更便捷的能通報給他人知道 </h2>
            <p>
            地圖進行浪貓群聚的地點分享

透過記錄了解在外流浪的貓貓面臨的問題（疾病、外傷）

利用拍照記錄，然後「輔助」系統針對過往系統內的資料去批配(AI)貓咪花色
            </p>
            <Link href="" className={styles.button}>
              more
            </Link>
          </div>
        </div>

        {/* item 3 */}
        <div className={styles.item}>
          <div className={styles.icon}>
            <i className="fa fa-bell"></i>
          </div>

          <div className={styles.txt}>
            <h2> 減少在外流浪的貓貓</h2>
            <p>
            串連其他協會進行浪貓的照護

讓問題具體化，提高才有被解決的機會

建立資料庫並有篩選機制，更有效的救援浪貓
            </p>
            <Link href="" className={styles.button}>
              more
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
