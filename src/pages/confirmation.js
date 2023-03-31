import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react"
import { Link } from "gatsby"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from "react-helmet"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/confirmation.module.scss"

import logoColor from '../images/logoColor.svg'
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
      <body id="body">
        <div class="gtranslate_wrapper"></div>
        <header className={style.headerWrapper}>
          <div className={isHeaderShown ? "confirmation-module--container--dfff7" : "confirmation-module--show--0f343"}>
            <div className={style.flexContainer}>
              < Link href="/">
                <img src={logoColor} className={style.logoColor} alt="logo" />
              </Link>
              
              <div className={style.headerRight}>
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
                className={`confirmation-module--menuWrapper--afd8a ${isShow ? "confirmation-module--menuWrapper__active--dddf0" : ""}`}
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
          <StaticImage src="../healthcareImages/confirmationBack.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.confirmationBack} />
          <h1>遷移先のページは医療関係者に対する情報提供を目的としているため、事前の確認をさせていただいております。</h1>
          <h1 className={style.spText}>遷移先のページは医療関係者に対する<br />情報提供を目的としているため、<br />事前の確認をさせていただいております。</h1>
          <h2>あなたは医療関係者ですか？</h2>
          
          <div className={style.buttonContainer}>
            <div className={style.no}>
              <Link to="/" className={style.noButton}>
                <span className={style.playButton}></span><p>いいえ、違います</p>
              </Link>
              <p>一般の方向けページに遷移します</p>
            </div>
            
            <div className={style.yes}>
              <a href="/healthcare" className={style.yesButton}>
                <p>はい、医療関係者です</p><span className={style.playButton}></span>
              </a>
              <p>医療関係者の方向けページに遷移します</p>
            </div>
            <div className={style.spNo}>
              <Link to="/" className={style.noButton}>
                <span className={style.playButton}></span><p>いいえ、違います</p>
              </Link>
              <p>一般の方向けページに遷移します</p>
            </div>
          </div>
          
          <div className={style.copyright}>
            <hr /><p>©2023 ERISA Co.</p>
          </div>
        </div>

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
      <script src="https://cdn.gtranslate.net/widgets/latest/float.js" defer></script>
    </>
  )
}