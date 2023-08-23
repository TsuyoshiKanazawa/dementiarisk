import React, { useState, useEffect, useCallback, useLayoutEffect } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import * as style from "../../styles/healthcare-contact.module.scss"


import logoColor from '../../images/logoColor.svg'
import logoFooter from '../../images/logoFooter.svg'

gsap.registerPlugin(ScrollTrigger);

export const Index = () => {

    useLayoutEffect(() => {
        window.gtranslateSettings = {
            "default_language": "ja",
            "detect_browser_language": false,
            "languages": ["ja", "en", "zh-CN"],
            "wrapper_selector": ".gtranslate_wrapper"
        }
    });

    //ヘッダーが表示・非表示になる////////////////
    const [isHeaderShown, setIsHeaderShown] = useState(true);
    const [lastPosition, setLastPosition] = useState(0);
    const headerHeight = 100;
    const scrollEvent = React.useCallback(() => {
        const offset = window.pageYOffset;

        if (offset > headerHeight) {
            setIsHeaderShown(false);

        } else {
            setIsHeaderShown(true);
        }
        if (offset < lastPosition) {
            setIsHeaderShown(true);
        }

        setLastPosition(offset);
    }, [lastPosition]);

    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);

        return () => {
            window.removeEventListener('scroll', scrollEvent);
        };
    }, [scrollEvent]);
    ///////////////////////////////////////////

    //ハンバーガーメニューの開閉////////////////
    const handle = useCallback((e) => {
        e.preventDefault();
    }, []);

    const scrollLock = () => {//ハンバーガーメニューを空けた時はスクロール禁止
        document.addEventListener('touchmove', handle, { passive: false });
        document.addEventListener('mousewheel', handle, { passive: false });
    }

    const scrollLockLift = () => {//ハンバーガーメニューを閉じたらスクロール禁止解除
        document.removeEventListener('touchmove', handle,);
        document.removeEventListener('mousewheel', handle,);
    }

    const [isShow, setIsShow] = useState(false);
    const closeWithClickOutSideMethod = (e, setter) => {
        if (e.target === e.currentTarget) {//メニュー外側をクリックしたら
            setter(false);//メニューを閉じる
            document.body.style.overflow = "auto";
            scrollLockLift();
        }
    };
    ///////////////////////////////////////////


    //ハンバーガーメニューの開閉////////////////


    return (
        <Layout>
            <Helmet>
                <script src="https://cdn.gtranslate.net/widgets/latest/float.js"></script>
            </Helmet>
            <body id="body" className={style.body}>
                <div class="gtranslate_wrapper"></div>

                <header className={style.headerWrapper}>
                    <div className={isHeaderShown ? "healthcare-contact-module--container--6ae6c" : "healthcare-contact-module--show--82542"}>
                        <div className={style.flexContainer}>
                            <a href="/healthcare">
                                <img src={logoColor} className={style.logoColor} alt="logo" />
                            </a>

                            <div className={style.headerRight}>
                                <a href="/confirmation">
                                    <span className={style.switchButton}>
                                        <p>医療関係者の方はこちら</p>
                                        <span className={style.playButton}></span>
                                    </span>
                                </a>

                                <button
                                    className={style.hmb}
                                    id="hamberger"
                                    onClick={() => {
                                        setIsShow(!isShow);
                                        scrollLock();
                                    }}
                                >
                                    <StaticImage src="../../images/hamberger.svg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.hamberger} />
                                </button>
                            </div>
                            <div // eslint-disable-line jsx-a11y/no-static-element-interactions
                                className={`healthcare-contact-module--menuWrapper--03851 ${isShow ? "healthcare-contact-module--menuWrapper__active--256b3" : ""}`}
                                onClick={(e) => {
                                    closeWithClickOutSideMethod(e, setIsShow);
                                }}
                                style={{ '-webkit-tap-highlight-color': 'rgba(0,0,0,0)' }}
                            >
                                <div id="menu" className={style.menu}>
                                    <div className={style.menuTop}>
                                        <a href="/confirmation" onClick={scrollLockLift}>
                                            <span className={style.menuSwitchButton} >
                                                <p>医療関係者の方はこちら</p>
                                                <span className={style.playButton}></span>
                                            </span>
                                        </a>
                                        <button
                                            className={style.close}
                                            onClick={() => {
                                                setIsShow(!isShow);
                                                scrollLockLift();
                                            }}>
                                        </button>
                                    </div>

                                    <div className={style.menuList}>
                                        <a href="/#about"
                                            className={style.list}
                                            onClick={() => {
                                                setIsShow(!isShow);
                                                scrollLockLift();
                                            }}>
                                            <hr /><p>SupportBrainとは？</p>
                                        </a>
                                        <a href="/#flow"
                                            className={style.list}
                                            onClick={() => {
                                                setIsShow(!isShow);
                                                scrollLockLift();
                                            }}>
                                            <hr /><p>検査の流れ</p>
                                        </a>
                                        <a href="/#question"
                                            offset='120'
                                            className={style.list}
                                            onClick={() => {
                                                setIsShow(!isShow);
                                                scrollLockLift();
                                            }}>
                                            <hr /><p>よくあるご質問</p>
                                        </a>
                                        <a href="/#introduce"
                                            offset='30'
                                            className={style.list}
                                            onClick={() => {
                                                setIsShow(!isShow);
                                                scrollLockLift();
                                            }}>
                                            <hr /><p>導入医療機関</p>
                                        </a>
                                        <a href="/healthcare/contact"
                                            className={style.list}
                                            onClick={() => {
                                                setIsShow(!isShow);
                                                scrollLockLift();
                                            }}>
                                            <hr /><p>お問い合わせ</p>
                                        </a>
                                        <a href="https://www.erisa.co.jp/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className={style.list}
                                            onClick={() => {
                                                setIsShow(!isShow);
                                                scrollLockLift();
                                            }}>
                                            <hr /><p>株式会社ERISA</p>
                                        </a>
                                    </div>
                                    <div className={style.copyright}>
                                        <hr />
                                        <p>©2023 ERISA Co.</p>
                                    </div>
                                    <StaticImage src="../images/menuBack.png" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.menuBack} alt="background" />
                                </div>
                            </div>
                        </div>
                    </div>

                </header>

                <div className={style.contactCompletion}>
                    <StaticImage src="../../healthcareImages/healthcare-contactCompletionBack.png" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.contactCompletionBack} loading="lazy" alt="background" />
                    <StaticImage src="../../healthcareImages/healthcare-contactCompletionBackSP.png" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.contactCompletionBackSP} loading="lazy" alt="background" />

                    <h1>お問い合わせが<br />完了いたしました。</h1>
                    <h2>メールアドレスに<br />確認用メールをお送りしますのでご確認ください。</h2>

                    <a href="/healthcare">
                        <p>TOPに戻る</p>
                        <span className={style.playButton}></span>
                    </a>
                </div>

                <footer className={style.footer}>
                    <div className={style.footerContainer}>
                        <StaticImage src="../../images/footerBack.png" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.footerBack} loading="lazy" alt="background" />

                        <div className={style.logoFooter}>
                            <img src={logoFooter} alt="logo" className={style.logo} loading="lazy" />
                            <h1>あなたらしさを支える<br />
                                「BRAIN」に
                            </h1>
                        </div>

                        <div className={style.listFooter}>
                            <div className={style.listStyle}>
                                <div className={style.list}>
                                    <hr /><a href="/#about"><p>SupportBrainとは？</p></a>
                                </div>
                                <div className={style.list}>
                                    <hr /><a href="/#introduce"><p>導入医療機関</p></a>
                                </div>
                                <div className={style.list}>
                                    <hr /><a href="/#flow"><p>検査の流れ</p></a>
                                </div>
                                <div className={style.list}>
                                    <hr /><a href="/healthcare/contact"><p>お問い合わせ</p></a>
                                </div>
                                <div className={style.list}>
                                    <hr /><a href="/#question"><p>よくあるご質問</p></a>
                                </div>
                                <div className={style.list}>
                                    <hr /><a href="https://www.erisa.co.jp/" target="_blank" rel="noreferrer"><p>株式会社ERISA</p></a>
                                </div>
                            </div>
                            <AnchorLink href="#body" className={style.toTop}>
                                < StaticImage src="../images/toTop.png" alt="logo" quality={90} placeholder=" blurred" formats={[" AUTO", "WEBP", "AVIF"]} />
                            </AnchorLink>
                        </div>
                    </div>

                    <div className={style.copyright}>
                        <hr />
                        <p>©2023 ERISA Co.</p>
                    </div>

                </footer>

            </body>
        </Layout>
    )
}

export default Index


export const Head = () => {
    return (
        <>
            <title>認知症リスク検査 - 株式会社ERISA</title>
            <meta name="description" content="認知症リスクを把握する脳ドックのオプション - MR画像から脳全体をAIが分析し3年後のリスクを予測" />
            <meta property="og:image" content="https://images.microcms-assets.io/assets/20e7fcb56b7f4766b94c18bb1cbe54f1/217d54d379294300b846f2271f7e93e9/ogpTob.jpg" />
            <meta property="og:title;" content="認知症リスク検査 - 株式会社ERISA" />
            <meta property="og:site-name;" content="認知症リスク検査 - 株式会社ERISA" />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="ja_JP" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="認知症リスク検査 - 株式会社ERISA" />
            <meta name="twitter:description" content="認知症リスクを把握する脳ドックのオプション - MR画像から脳全体をAIが分析し3年後のリスクを予測" />
        </>
    )
}