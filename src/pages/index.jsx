import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "components/Layout";
import styles from "@/styles/indexcss.module.scss";

export default function Home() {
  return (
    <Layout returnBack={true}>
      <div className={styles.maincontent}>
        <h2>協尋喵星人</h2>
        <h3>專案背景</h3>
        <div>
        因為FB貓社團常常看到有人在PO浪貓需要救援，但通常不知道怎麼描述 先預設一些描述
如果有資料庫並保留原始數據系統化再用篩選，可以比較靈活去做數據分析，
提高浪貓救援成功機率 <br />
單靠有限的人力及物力資源，想要回答在外流浪的街貓數量有多少？浪貓面臨了哪些問題？是否有辦法解決？ 等問題，顯得相當困難。希望能透過資訊軟體工具結合公民科學調查方式，更加精確地回答這個問題，並同時讓在外流浪的街貓能免受各類疾病、意外事故或有心人士刻意侵擾所苦。
        </div>
      </div>
    </Layout>
  );
}
