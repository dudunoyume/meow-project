import styles from "./Nav.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Fanciblock() {
  return (
    <div className={styles.container}>
      <Link href="#" className={styles.logo}>
        <Image
          src="/pawprint.png"
          width={60}
          height={60}
          alt="Meow"
          quality={75}
        />

        貓貓大踏查
        
      </Link>

      {/* <label className={styles.dropdownController} htmlFor="rwdCheck" ><i className="fas fa-arrow-down-short-wide" href="#"></i> </label> */}
      <input id ="rwdCheck" type="checkbox" name="rwdCheck" className={styles.rwdCheck}/>
      


      <nav className={styles.mainNav}>
        <div className={styles.subNav}>
          <Link href="#"> 計畫介紹 </Link>
          <Link href="#"> 喵星人世界 </Link>
          <Link href="#"> 水世界 </Link>
          <Link href="#"> 時間軸 </Link>

        </div>


      <form className={styles.headerSearch}>
        <input type="search" name="" id="" />
        <button>    
          <i className="fab fa-sistrix"></i>
        </button>
      </form>
      
    </nav>






    </div>
  );
}
