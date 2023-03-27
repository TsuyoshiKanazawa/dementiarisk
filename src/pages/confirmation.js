import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from "react-helmet"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/healthcare.module.scss"

import logoWhite from '../images/logoWhite.svg'
import logoColor from '../images/logoColor.svg'
import logoFooter from '../images/logoFooter.svg'
import ogpTob from '../healthcareImages/ogpTob.jpg'

gsap.registerPlugin(ScrollTrigger);

export const Index = () => {

//ヘッダーが表示・非表示になる/////////////////
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

useLayoutEffect(() => {
  window.addEventListener('scroll', scrollEvent);

  return () => {
    window.removeEventListener('scroll', scrollEvent);
  };
}, [scrollEvent]);
///////////////////////////////////////////

  //翻訳プルダウンメニューの開閉////////////////
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  const location = useLocation();
  const URL = location["href"]
  const englishURL = "https://translate.google.com/translate?sl=ja&tl=en&u=" + URL;
  const chineseURL = "https://translate.google.com/translate?sl=ja&tl=zh&u=" + URL;

  ///////////////////////////////////////////

//ハンバーガーメニューの開閉/////////////////
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
    scrollLockLift();
  }
};

///////////////////////////////////////////


  //アニメーション専用/////////////////////////////////////////
  const div = useRef();

  useEffect(() => {
    setAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [div])


  const setAnimation = () => {
    //KV/////////////////////////
    gsap.fromTo(
      '#body',
      { visibility: "hidden" }, //fromの設定
      {  //toの設定
        visibility: "visible",
      }
    )

    //KV/////////////////////////
  }
//アニメーション専用/////////////////////////////////////////
  let script = null;
  useEffect(() => {
    // 同じscriptが量産されるのを防ぐため同じscriptタグがある場合は処理しない
    if (document.querySelector('#crazy_script') === null) {
      script = document.createElement('script');
      script.id = 'crazy_script';

      // innerHTMLでやりたい内容を書く
      script.innerHTML = `
              window.gtranslateSettings = {"default_language":"ja","detect_browser_language":true,"languages":["ja","en","zh-CN"],"wrapper_selector":".gtranslate_wrapper"}
          `;
    }
  })
  // reactのレンダリング後にscriptを埋め込みたいのでuseEffectで埋め込む
  useEffect(() => {
    if (script !== null) {
      document.body.appendChild(script);
    }
  })

  return (
    <Layout>
      <Helmet>
        <script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>
      </Helmet>
      <body id="body">
        <div class="gtranslate_wrapper"></div>
        <header className={style.headerWrapper}>
          <div className={isHeaderShown ? "healthcare-module--container--a37f8" : "healthcare-module--show--ad971"}>
            <div className={style.flexContainer}>
              < Link href="/">
                <img src={logoWhite} className={`healthcare-module--logoWhite--1a568 ${isShow ? "healthcare-module--logoWhite__active--6b468" : ""}`} alt="logo" />
                <img src={logoColor} className={`healthcare-module--logoColor--9cca1 ${isShow ? "healthcare-module--logoColor__active--0f49d" : ""}`} alt="logo" />
              </Link>
              
              <div className={style.headerRight}>
                <div ref={dropdownRef} className={style.translation}>
                  <span className={style.translationContainer}>
                    <button onClick={() => setIsOpen(!isOpen)} type="button" className={style.translationButton} id="options-menu" aria-haspopup="true" aria-expanded={isOpen}>
                      Language
                    </button>
                  </span>
                  {isOpen && (
                    <div className={style.translationMenu}>
                      <ul>
                        <li><a href={englishURL}>English</a></li>
                        <li><a href={chineseURL}>Chinese</a></li>
                      </ul>
                    </div>
                  )}
                </div>
                < Link to="/">
                  <span className={style.switchButton}>
                      <p>一般ページはこちら</p>
                    <span className={style.playButton}></span>
                  </span>
                </Link>

                <button
                  className={style.hmb}
                  id="hamberger"
                  onClick={() => {
                    setIsShow(!isShow);
                    scrollLock();
                  }}
                >
                  <StaticImage src="../images/hamberger.svg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.hamberger} />
                </button>
              </div>
              <div // eslint-disable-line jsx-a11y/no-static-element-interactions
                className={`healthcare-module--menuWrapper--9541d ${isShow ? "healthcare-module--menuWrapper__active--52cce" : ""}`}
                onClick={(e) => {
                  closeWithClickOutSideMethod(e, setIsShow);
                }}
                style={{ '-webkit-tap-highlight-color': 'rgba(0,0,0,0)' }}
              >
                <div className={style.menu}>
                  <div className={style.menuTop}>

                    <div className={style.menuSwitchButton} >
                      < Link to="/" onClick={scrollLockLift}>
                        <p>一般ページはこちら</p>
                      </Link>
                      <div className={style.playButton}></div>
                    </div>

                    <button
                      className={style.close}
                      onClick={() => {
                        setIsShow(!isShow);
                        scrollLockLift();
                      }}>
                    </button>
                  </div>

                  <div className={style.menuList}>
                    <AnchorLink href="#about"
                      className={style.list}
                      onClick={() => {
                        setIsShow(!isShow);
                        scrollLockLift();
                      }}>
                      <hr /><p>認知症リスク検査とは？</p>
                    </AnchorLink>
                    <AnchorLink href="#flow"
                      className={style.list}
                      onClick={() => {
                        setIsShow(!isShow);
                        scrollLockLift();
                      }}>
                      <hr /><p>導入メリット</p>
                    </AnchorLink>
                    <AnchorLink href="#question"
                      className={style.list}
                      onClick={() => {
                        setIsShow(!isShow);
                        scrollLockLift();
                      }}>
                      <hr /><p>ご利用に必要な環境</p>
                    </AnchorLink>
                    <AnchorLink href="#introduce"
                      className={style.list}
                      onClick={() => {
                        setIsShow(!isShow);
                        scrollLockLift();
                      }}>
                      <hr /><p>導入までの流れ</p>
                    </AnchorLink>
                    <a href="https://www.erisa.co.jp/#contact"
                      target="_blank"
                      rel="noreferrer"
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
                  <StaticImage src="../healthcareImages/menuBack.png" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.menuBack} alt="background" />
                </div>
              </div>
            </div>
          </div>

        </header>

        <div className={style.confirmation}>
          <h1>遷移先のページは医療関係者に対する情報提供を目的としているため、事前の確認をさせていただいております。</h1>
          <h2>あなたは医療関係者ですか？</h2>
          
          <div className={style.buttonContainer}>
            <Link to="/" className={style.noButton}>
              <p>いいえ、違います</p>
            </Link>

            <a href="/healthcare" className={style.yesButton}>
              <p>はい、医療関係者です</p>
            </a>

          </div>
        </div>

        <footer className={style.footer}>
          <div className={style.footerContainer}>
            <StaticImage src="../images/footerBack.png" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.footerBack} loading="lazy" alt="background" />

            <div className={style.logoFooter}>
              <img src={logoFooter} alt="logo" className={style.logo} loading="lazy" />
              <h1>あなたらしさを支える<br />
                「BRAIN」に
              </h1>
            </div>

            <div className={style.listFooter}>
              <div className={style.listStyle}>
                <div className={style.list}>
                  <hr /><AnchorLink href="#about"><p>認知症リスク検査とは？</p></AnchorLink>
                </div>
                <div className={style.list}>
                  <hr /><AnchorLink href="#introduce"><p>導入までの流れ</p></AnchorLink>
                </div>
                <div className={style.list}>
                  <hr /><AnchorLink href="#flow"><p>導入メリット</p></AnchorLink>
                </div>
                <div className={style.list}>
                  <hr /><a href="https://www.erisa.co.jp/#contact" target="_blank" rel="noreferrer"><p>お問い合わせ</p></a>
                </div>
                <div className={style.list}>
                  <hr /><AnchorLink href="#question"><p>ご利用に必要な環境</p></AnchorLink>
                </div>
                <div className={style.list}>
                  <hr /><a href="https://www.erisa.co.jp/" target="_blank" rel="noreferrer"><p>株式会社ERISA</p></a>
                </div>
              </div>
              <AnchorLink href="#hero" className={style.toTop}>
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
      <meta property="og:image" content={ogpTob} />
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