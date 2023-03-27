import React, { useState, useEffect, useRef, useCallback } from "react"
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
import KvText from '../healthcareImages/KvText.svg'
import lineVertical from '../images/line-vertical.png'
import logoFooter from '../images/logoFooter.svg'
import ogpTob from '../healthcareImages/ogpTob.jpg'


gsap.registerPlugin(ScrollTrigger);

export const Index = () => {

//ページスキップ防止////////////////////////
  useEffect(() => {
    const referrer = document.referrer;
    if (referrer.indexOf('/confirmation') !== -1) {
      ;
    } else if (referrer.indexOf('translate') !== -1) {
      ;
    } else {
      window.location.href = "/confirmation";
    } 

    console.log(referrer);
  }, );
///////////////////////////////////////////

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

useEffect(() => {
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

let mm = gsap.matchMedia();
const setAnimation = () => {
  //header/////////////////////

  mm.add("(min-width: 901px)", () => {
  gsap.fromTo(
    '#hamberger',
    { filter: 'brightness(1)' }, //fromの設定
    {  //toの設定
      filter: 'brightness(0.7)',
      duration: 0.3,
      scrollTrigger: {
        trigger: '#merit',
        start: 'top 0%',
        end: 'bottom 0%',
        toggleActions: 'play reset play reset',
      },
    }
  )
  });

  gsap.fromTo(
    '#hamberger',
    { filter: 'brightness(1)' }, //fromの設定
    {  //toの設定
      filter: 'brightness(0.7)',
      duration: 0.3,
      scrollTrigger: {
        trigger: '#flow',
        start: 'top 0%',
        end: 'bottom 0%',
        toggleActions: 'play reset play reset',
      },
    }
  )

  //header/////////////////////

  //KV/////////////////////////
  gsap.fromTo(
    '#body',
    { visibility: "hidden" }, //fromの設定
    {  //toの設定
      visibility: "visible",
    }
  )

  gsap.fromTo(
    '#KvText',
    { y: 200 }, //fromの設定
    {  //toの設定
      y: 0,
      opacity: 1,
      duration: 0.5,
      delay: 0.5,
      scrollTrigger: {
        trigger: '#KvText',
        start: 'top 90%', //要素のトップが、画面の中央まできたら開始
      },
      stagger: {
        each: 0.2,
      }
    }
  )
  //KV/////////////////////////
 
  mm.add("(min-width: 901px)", () => {
  //PC版about/////////////////////////
    gsap.fromTo(
      '#aboutImage',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: 625,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '#aboutImage',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#lineMask',
      { height: 0 }, //fromの設定
      {  //toの設定
        height: 400,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: '#lineMask',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#aboutTitle',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutTitle',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#aboutCopy',
      { y: 200 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutCopy',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#aboutText',
      { y: 100, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutText',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#aboutFeatureTitle',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutFeatureTitle',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#aboutContents',
      { y: 100, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutContents',
          start: 'top 80%',
        },
        stagger: {
          each: 0.2,
        },
      }
    )
  //PC版about/////////////////////////
  //PC版merit/////////////////////////

    gsap.fromTo(
      '#meritTitle',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#meritTitle',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#meritContents',
      { y: 100, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#meritContents',
          start: 'top 80%',
        },
        stagger: {
          each: 0.2,
        },
      }
    )

    gsap.fromTo(
      '#voiceContents',
      { y: 100, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#voiceContents',
          start: 'top 80%',
        },
        stagger: {
          each: 0.2,
        },
      }
    )
    //PC版merit/////////////////////////
    //PC版spec/////////////////////////
    gsap.fromTo(
      '#specTitle',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#specTitle',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#specContents',
      { y: 100, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#specContents',
          start: 'top 80%',
        },
        stagger: {
          each: 0.2,
        },
      }
    )

    gsap.fromTo(
      '#specImageMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: 478,
        duration: 1.2,
        scrollTrigger: {
          trigger: '#specImageMask',
          start: 'top 80%',
        },
      }
    )
    //PC版spec/////////////////////////
    //PC版flow/////////////////////////
    gsap.fromTo(
      '#flowTitle',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#flowTitle',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#flowContents',
      { y: 100, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#flowContents',
          start: 'top 80%',
        },
        stagger: {
          each: 0.1,
        },
      }
    )
    //PC版flow/////////////////////////
  });

  mm.add("(max-width: 900px)", () => {
    //SP版about/////////////////////////
    gsap.fromTo(
      '#aboutImage',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: 625,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: '#aboutImage',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#lineMask',
      { height: 0 }, //fromの設定
      {  //toの設定
        height: 350,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: '#lineMask',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#aboutTitleSp',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutTitleSp',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#aboutCopySp',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutCopySp',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#aboutText',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutText',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#aboutFeatureTitle',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutFeatureTitle',
          start: 'top 80%',
        },
      }
    )

    ScrollTrigger.batch('#aboutContents', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          autoAlpha: 0
        },
        {
          y: 0,
          autoAlpha: 1,
          delay: 0.6,
          duration: 1.2,
          ease: 'power2.out'
        }
      ),
      once: true
    });
    //SP版about/////////////////////////
    //SP版merit/////////////////////////
    gsap.fromTo(
      '#meritTitle',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#meritTitle',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#meritImageMask',
      { height: 0 }, //fromの設定
      {  //toの設定
        height: 267,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: '#meritImageMask',
          start: 'top 80%',
        },
      }
    )

    ScrollTrigger.batch('#meritContents', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          autoAlpha: 0
        },
        {
          y: 0,
          autoAlpha: 1,
          delay: 0.6,
          duration: 0.5,
          ease: 'power2.out'
        }
      ),
      once: true
    });

    ScrollTrigger.batch('#voiceContents', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          autoAlpha: 0
        },
        {
          y: 0,
          autoAlpha: 1,
          delay: 0.6,
          duration: 0.5,
          ease: 'power2.out'
        }
      ),
      once: true
    });

    gsap.fromTo(
      '#specTitle',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#specTitle',
          start: 'top 80%',
        },
      }
    )

    ScrollTrigger.batch('#specContents', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          autoAlpha: 0
        },
        {
          y: 0,
          autoAlpha: 1,
          delay: 0.6,
          duration: 0.5,
          ease: 'power2.out'
        }
      ),
      once: true
    });
    //SP版merit/////////////////////////
    //SP版flow//////////////////////////
    gsap.fromTo(
      '#flowTitle',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#flowTitle',
          start: 'top 80%',
        },
      }
    )

    ScrollTrigger.batch('#flowContents', {
      onEnter: batch => gsap.fromTo(batch,
        {
          y: 50,
          autoAlpha: 0
        },
        {
          y: 0,
          autoAlpha: 1,
          delay: 0.6,
          duration: 0.5,
          ease: 'power2.out'
        }
      ),
      once: true
    });
  });

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
              <AnchorLink href="#hero">
                <img src={logoWhite} className={`healthcare-module--logoWhite--1a568 ${isShow ? "healthcare-module--logoWhite__active--6b468" : ""}`} alt="logo" />
                <img src={logoColor} className={`healthcare-module--logoColor--9cca1 ${isShow ? "healthcare-module--logoColor__active--0f49d" : ""}`} alt="logo" />
              </AnchorLink>
              
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
                    < Link to="/" onClick={scrollLockLift}>
                      <div className={style.menuSwitchButton} >
                          <p>一般ページはこちら</p>
                        <div className={style.playButton}></div>
                      </div>
                    </Link>
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
                    <AnchorLink href="#merit"
                      className={style.list}
                      onClick={() => {
                        setIsShow(!isShow);
                        scrollLockLift();
                      }}>
                      <hr /><p>導入メリット</p>
                    </AnchorLink>
                    <AnchorLink href="#spec"
                      className={style.list}
                      onClick={() => {
                        setIsShow(!isShow);
                        scrollLockLift();
                      }}>
                      <hr /><p>ご利用に必要な環境</p>
                    </AnchorLink>
                    <AnchorLink href="#flow"
                      className={style.list}
                      onClick={() => {
                        setIsShow(!isShow);
                        scrollLockLift();
                      }}>
                      <hr /><p>導入の流れ</p>
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

        <div id="hero" className={style.hero}>
          <div className={style.textContainer}>
            <div className={style.mask}>
              <img id="KvText" src={KvText} className={style.KvText} loading="lazy" alt="text" />
            </div>
            <div className={style.mask}>
              <img src={lineVertical} id="KvText" className={style.lineVertical} loading="lazy" alt="text" />
            </div>
            <div className={style.mask}>
              <h3 id="KvText">脳画像解析の独自アプローチで、<br />
                脳健康社会の実現に新しい価値を提供する。</h3>
            </div>
          </div>
          <StaticImage src="../images/scroll.png" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.scroll} alt="scroll" />
          
          <a href="https://www.erisa.co.jp/#contact" target="_blank" rel="noreferrer">
            <span className={style.document}>
              <span className={style.documentLine}>
                <p>資料請求は</p><p>こちら</p>
              </span>
            </span>
          </a>
        </div>

        <div id="about" className={style.about}>
          
          <div id="aboutImage" className={style.aboutImageMask}>
            <StaticImage src="../healthcareImages/about.png" placeholder=" none" formats={["AUTO", "WEBP", "AVIF"]} className={style.aboutImage} loading="lazy" alt="about" />
          </div>

          <div className={style.aboutCopyContainer}>
            <div id="lineMask" className={style.lineMask}>
              <hr />
            </div>

            <div className={style.aboutCopy}>
              <div className={style.mask}>
                <h1 id="aboutTitle">認知症リスク検査とは？</h1>
              </div>
              
              <div className={style.mask}>
                <h2 id="aboutCopy">MRI装置で</h2>
              </div>

              <div className={style.mask}>
                <h2 id="aboutCopy">撮像された脳画像を用いて、</h2>
              </div>

              <div className={style.mask}>
                <h2 id="aboutCopy">脳全体の状態から</h2>
              </div>

              <div className={style.mask}>
                <h2 id="aboutCopy">3年後の認知症リスクを予測する。</h2>
              </div>
            </div>

            <div className={style.aboutCopySp}>
              <h1 id="aboutTitleSp">認知症リスク検査とは？</h1>
              <h2 id="aboutCopySp">MRI装置で<br />撮像された脳画像を用いて、<br />脳全体の状態から<br />3年後の認知症リスクを<br />予測する。</h2>
            </div>

            <div className={style.aboutText}>
              <div className={style.mask}>
                <h3 id="aboutText">認知症リスク検査は、島根大学医学部、滋賀医科大学、株式会社ERISAで共同開発された、世界で唯一の脳画像解析技術で、脳の状態を検査し3年後の認知症リスクを予測します。<small>（1）</small>脳の一部だけではなく、脳全体を膨大なデータと比較することで、高い精度を実現。将来を見据えた認知症予防に取り組むきっかけを提供し、受診者様のライフスタイル見直しに貢献します。</h3>
              </div>
            </div>
          </div>
          
          <div id="aboutFeatureTitle" className={style.aboutFeatureTitle}>
            <h1>認知症リスク検査の特徴</h1>
          </div>

          <div className={style.aboutFeature}>

            <div id="aboutContents" className={style.aboutContents}>
              <StaticImage src="../healthcareImages/evaluation.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.aboutFeatureImage} />
              <h1>海馬や嗅内野を含む全脳を評価</h1>
              <h2>アルツハイマー型認知症では海馬に萎縮が見られないサブタイプの報告もあり、脳全体を解析対象とすることで、高感度に脳の状態を評価。</h2>
              <hr />
            </div>
            <div id="aboutContents" className={style.aboutContents}>
              <StaticImage src="../healthcareImages/predict.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.aboutFeatureImage} />
              <h1>将来の認知症リスクを予測</h1>
              <h2>ディープラーニングを用いた独自のAI解析技術で、将来の認知症リスクを予測。</h2>
              <hr />
            </div>
            <div id="aboutContents" className={style.aboutContents}>
              <StaticImage src="../healthcareImages/issue.png" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.aboutFeatureImage} />
              <h1>クラウドによる受診者様向けレポートの即時発行</h1>
              <h2>MRI装置で撮像した脳画像をクラウドにアップロードすることで、システムを通じて即時解析し、30分以内でレポートを返却。</h2>
              <hr />
            </div>

          </div>
          <p className={style.source}>(1) T.nakagawa, M.Ishida, et al.Prediction of conversion to Alzheimer’s disease using deep survival analysis of MRI images.Brain Communications.2020 May;27;2(1)</p>
        </div>

        <div id="merit" className={style.merit}>
          <StaticImage src="../healthcareImages/meritBack.png" placeholder=" none" formats={["AUTO", "WEBP", "AVIF"]} className={style.meritBack} loading="lazy" alt="meritBack" />
          <div id="meritImageMask" className={style.meritImageMask}>
            <StaticImage src="../healthcareImages/merit.png" placeholder=" none" formats={["AUTO", "WEBP", "AVIF"]} className={style.meritTitleImage} loading="lazy" alt="merit" />
          </div>
          <div id="meritTitle" className={style.meritTitle}>
            <h1>導入メリット</h1>
          </div>

          <div className={style.meritContents}>
            <div id="meritContents" className={style.contents}>
              <StaticImage src="../healthcareImages/prevention.jpg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.meritImage} />
              <h1>需要の高まる認知症予防</h1>
              <h2>日本における65歳以上の認知症患者数は約600万人。高齢者の6人に1人が発症する身近な問題であり、今後の検査・予防需要も高まることが予想されます。</h2>
              <hr />
            </div>
            <div id="meritContents" className={style.contents}>
              <StaticImage src="../healthcareImages/option.jpg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.meritImage} />
              <h1>検査オプションの充実</h1>
              <h2>従来の健康診断メニューなどの検査オプションとしてメニューが充実。多様なニーズへの対応で受検者の満足度向上が期待できます。</h2>
              <hr />
            </div>
            <div id="meritContents" className={style.contents}>
              <StaticImage src="../healthcareImages/repeat.jpg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.meritImage} />
              <h1>受検リピート率の向上</h1>
              <h2>将来、誰しもがなりえる認知症に関心を寄せてもらうことで、継続的な受検意欲の向上につながります。</h2>
              <hr />
            </div>
          </div>

          <div className={style.voice}>
            <div className={style.voiceTitle}>
              <h1>受検者の声</h1>
            </div>

            <hr />
            
            <div className={style.voiceContents}>
              <div id="voiceContents" className={style.contents}>
                <h2>認知症の今の状態が詳しくわかったので、安心して暮らしていけると思っています。</h2>
                <hr />
                <h3>80代・男性</h3>
              </div>

              <div id="voiceContents" className={style.contents}>
                <h2>認知機能低下予防のために生活習慣の見直しを決心できたので、また3年後に検査を受けたいです。</h2>
                <hr />
                <h3>70代・女性</h3>
              </div>

              <div id="voiceContents" className={style.contents}>
                <h2>特定健康診査やがん検診と同じように、今後も定期的に検査していくつもりです。</h2>
                <hr />
                <h3>70代・女性</h3>
              </div>
            </div>
          </div>

        </div>

        <div id="spec" className={style.spec}>
          <div id="specImageMask" className={style.specImageMask}>
            <StaticImage src="../healthcareImages/spec.png" placeholder=" none" formats={["AUTO", "WEBP", "AVIF"]} className={style.specImage} loading="lazy" alt="spec" />
          </div>
          
          <div id="specTitle" className={style.specTitle}>
            <h1>ご利用に必要な環境</h1>
          </div>

          <div className={style.specContents}>

            <div id="specContents" className={style.contents}>
              <div className={style.imageMask}>
                <StaticImage src="../healthcareImages/mriImage.jpg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.mriImage} />
              </div>
              <div className={style.text}>
                <h1>頭部MRI画像</h1>
                <hr />
                <h2><big>【撮像条件】</big><br />磁場強度1.5Tまたは<br />
                  3.0TのMRI<br />矢状断1mmスライスT1強調画像で撮像されたMR画像が必要です</h2>
              </div>
            </div>

            <div id="specContents" className={style.contents}>
              <div className={style.imageMask}>
                <StaticImage src="../healthcareImages/pcImage.jpg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.pcImage} />
              </div>
              <div className={style.text}>
                <h1>パソコン</h1>
                <hr />
                <h2>インターネット接続可能なWindows（OS）パソコンが必要です</h2>
              </div>
            </div>

          </div>
          

        </div>

        <div id="flow" className={style.flow}>
          <StaticImage src="../healthcareImages/meritBack.png" placeholder=" none" formats={["AUTO", "WEBP", "AVIF"]} className={style.meritBack} loading="lazy" alt="meritBack" />
          <div id="flowTitle" className={style.flowTitle}>
            <h1>導入の流れ</h1>
          </div>

          <div className={style.flowContents}>
            <div id="flowContents" className={style.contents}>
              <div className={style.flowNumber}>
                <h1>STEP</h1>
                <h2>1</h2>
              </div>

              <div className={style.contentImage}>
                <StaticImage src="../healthcareImages/step1.png" alt="step1" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.stepImage} />
              </div>
              <div className={style.contentText}>
                <h1>機器情報・セキュリティポリシーの確認</h1>
                <h2>MRI機器、撮像方法、<br />外部接続可否等</h2>
              </div>

            </div>

            <hr id="flowContents" />

            <div id="flowContents" className={style.contents}>
              <div className={style.flowNumber}>
                <h1>STEP</h1>
                <h2>2</h2>
              </div>

              <div className={style.contentImage}>
                <StaticImage src="../healthcareImages/step2.png" alt="step1" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.stepImage} />
              </div>
              <div className={style.contentText}>
                <h1>メールアドレスの提供</h1>
                <h2>サービス利用アカウント作成、<br />初期設定</h2>
              </div>

            </div>

            <hr id="flowContents" />

            <div id="flowContents" className={style.contents}>
              <div className={style.flowNumber}>
                <h1>STEP</h1>
                <h2>3</h2>
              </div>

              <div className={style.contentImage}>
                <StaticImage src="../healthcareImages/step3.png" alt="step1" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.stepImage} />
              </div>
              <div className={style.contentText}>
                <h1>サンプル解析</h1>
                <h2>施設内で撮像された画像で問題なく解析できることを確認</h2>
              </div>

            </div>

            <hr id="flowContents" />

            <div id="flowContents" className={style.contents}>
              <div className={style.flowNumber}>
                <h1>STEP</h1>
                <h2>4</h2>
              </div>

              <div className={style.contentImage}>
                <StaticImage src="../healthcareImages/step4.png" alt="step1" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.stepImage} />
              </div>
              <div className={style.contentText}>
                <h1>導入完了</h1>
              </div>

            </div>

          </div>

          <p>ご要望に応じて、施設内に掲載するポスターや施設ホームページに掲載するバナー作成も承ります。</p>

          <Link to="https://www.erisa.co.jp/" target="_blank" rel="noreferrer">
            <span className={style.switchButton}>
                <p>検査導入に関する資料請求・お問い合わせはこちら</p>
              <span className={style.playButton}></span>
            </span>
          </Link>
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
                  <hr /><AnchorLink href="#flow"><p>導入の流れ</p></AnchorLink>
                </div>
                <div className={style.list}>
                  <hr /><AnchorLink href="#merit"><p>導入メリット</p></AnchorLink>
                </div>
                <div className={style.list}>
                  <hr /><a href="https://www.erisa.co.jp/#contact" target="_blank" rel="noreferrer"><p>お問い合わせ</p></a>
                </div>
                <div className={style.list}>
                  <hr /><AnchorLink href="#spec"><p>ご利用に必要な環境</p></AnchorLink>
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