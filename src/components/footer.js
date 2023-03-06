import * as React from "react" 
import { Link } from "gatsby" 
import { StaticImage } from "gatsby-plugin-image"
import * as style from "../styles/index.module.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll';

import footerBack from '../images/footerBack.svg'
import logoFooter from '../images/logoFooter.svg'

const Footer = () => {
    return (
        <footer>
            <div className={style.footerContainer}>
                <img src={footerBack} className={style.footerBack} />

                <div className={style.logoFooter}>
                    <img src={logoFooter} className={style.logo} />
                    <h1>あなたらしさを支える<br />
                        「BRAIN」に
                    </h1>
                </div>

                <div className={style.listFooter}>
                    <ul>
                        <div className={style.list}>
                            <hr /><AnchorLink href="#about"><li>認知症リスク検査とは？</li></AnchorLink>
                        </div>
                        <div className={style.list}>
                            <hr /><AnchorLink href="#introduce"><li>導入医療機関</li></AnchorLink>
                        </div>
                        <div className={style.list}>
                            <hr /><AnchorLink href="#flow"><li>検査の流れ</li></AnchorLink>
                        </div>
                        <div className={style.list}>
                            <hr /><a href="https://www.erisa.co.jp/#contact" target="_blank" rel="noopener"><li>お問い合わせ</li></a>
                        </div>
                        <div className={style.list}>
                            <hr /><AnchorLink href="#question"><li>よくあるご質問</li></AnchorLink>
                        </div>
                        <div className={style.list}>
                            <hr /><a href="https://www.erisa.co.jp/"><li>株式会社ERISA</li></a>
                        </div>
                    </ul>
                    <AnchorLink href="#hero" className={style.toTop}>
                        < StaticImage src="../images/toTop.png" alt=" logo" quality={90} placeholder=" blurred" formats={[" AUTO", "WEBP", "AVIF"]} className={style.toTopImg} />
                    </AnchorLink>
                </div>
            </div>

            <div className={style.copyright}>
                <hr />
                <p>©2023 ERISA Co.</p>
            </div>

        </footer>
    )
}

export default Footer
