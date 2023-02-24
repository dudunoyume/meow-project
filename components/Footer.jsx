import React from 'react'
import styles from './Footer.module.scss'
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.mainFooter}>
   <div className={styles.container}>
    {/* 下降標籤 */}
    <input type="checkbox" name="drop" id="drop" className={styles.triangle}/>
        <div className={styles.footerItem}>
            
            <h4>
                暴力課程
                {/* <label htmlFor="drop">暴力課程</label>                   
                <input type="checkbox" name="drop" id="drop"/> */}
            </h4>
            
            <nav>
                <ul>
                    <li><Link href="#"> <i className="fas fa-angle-right"></i> 課程目標</Link></li>
                    <li><Link href="#"> <i className="fas fa-angle-right"></i> 辦學理念</Link></li>
                    <li><Link href="#"> <i className="fas fa-angle-right"></i> 課程宗旨</Link></li>
                </ul>
            </nav>
        </div>
        <div className={styles.footerItem}>
            <h4>
                課程列表
            </h4>
            <nav>
                <ul>
                    <li><Link href="#"> <i className="fas fa-angle-right"></i> 暴力網頁入門班</Link></li>
                    <li><Link href="#"> <i className="fas fa-angle-right"></i> RWD網頁深入理解</Link></li>
                    <li><Link href="#"> <i className="fas fa-angle-right"></i> CSS3互動動畫設計</Link></li>
                    <li><Link href="#"> <i className="fas fa-angle-right"></i> Bootstrap框架實務</Link></li>
                </ul>
            </nav>
        </div>
        <div className={styles.footerItem}>
            <h4>
                服務項目

            </h4>
            <nav>
                <ul>
                    <li><Link href="#"> <i className="fas fa-angle-right"></i> 網站建置顧問</Link></li>
                    <li><Link href="#"> <i className="fas fa-angle-right"></i> 網站設計建置</Link></li>
                    <li><Link href="#"><i className="fas fa-angle-right"></i> 網站規劃</Link></li>
                    <li><Link href="#"> <i className="fas fa-angle-right"></i> 企業教育訓練</Link></li>
                </ul>
            </nav>
        </div>
        <div className={styles.footerSubs}>
            <h4>
            訂閱電子報                    
            </h4>
            <form>
                <input type="text" name="" />
                <input type="submit" value={"訂閱"}/>
            </form>

        </div>
        
    </div>
    <div className={styles.copyright}>
    Copyright &copy; 2023 RRRRRR
    </div>
</div>
  )
}
