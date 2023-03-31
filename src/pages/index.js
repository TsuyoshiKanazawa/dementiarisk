import React, { useState, useEffect, useRef, useCallback } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Search from "../components/search"
import { Helmet } from "react-helmet"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/index.module.scss"

import logoWhite from '../images/logoWhite.svg'
import logoColor from '../images/logoColor.svg'
import KvText from '../images/Kvtext.svg'
import KvTextSpUp from '../images/KvTextSpUp.svg'
import KvTextSpDown from '../images/KvTextSpDown.svg'
import about from '../images/about.png'
import lineVertical from '../images/line-vertical.png'
import featureImage from '../images/feature.png'
import voiceImage from '../images/voiceImage.png'
import voiceImageSp from '../images/voiceImageSp.png'
import flowImage from '../images/flow.png'
import questionImage from '../images/question.png'
import number1 from '../images/01.png'
import number2 from '../images/02.png'
import number3 from '../images/03.png'
import pointLine from '../images/pointLine.png'
import logoFooter from '../images/logoFooter.svg'
import ogpToc from '../images/ogpToc.jpg'

gsap.registerPlugin(ScrollTrigger);

export const Index = () => {

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

  //アニメーション専用/////////////////////////////////////////
  const div = useRef();

  useEffect(() => {
    setAnimation()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [div])

  let mm = gsap.matchMedia();

  const setAnimation = () => {
    //header/////////////////////
    gsap.fromTo(
      '#hamberger',
      { filter: 'brightness(1)' }, //fromの設定
      {  //toの設定
        filter: 'brightness(0.7)',
        duration: 0.3,
        scrollTrigger: {
          trigger: '#about',
          start: 'top 0%',
          end: 'bottom 0%',
          toggleActions: 'play reset play reset',
        },
      }
    )
    gsap.fromTo(
      '#hamberger',
      { filter: 'brightness(1)' }, //fromの設定
      {  //toの設定
        filter: 'brightness(0.7)',
        duration: 0.3,
        scrollTrigger: {
          trigger: '#questionContainer1',
          start: 'top 0%',
          end: 'bottom 0%',
          toggleActions: 'play reset play reset',
        },
      }
    )
    gsap.fromTo(
      '#hamberger',
      { filter: 'brightness(1)' }, //fromの設定
      {  //toの設定
        filter: 'brightness(0.7)',
        duration: 0.3,
        scrollTrigger: {
          trigger: '#introduce',
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

    //about//////////////////////

    gsap.fromTo(
      '#aboutTitle',
      { y: 100 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutTitle',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#aboutImage',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1.5,
        scrollTrigger: {
          trigger: '#aboutImage',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#copy',
      { y: 200 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: '#aboutCopy',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#line1',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1.5,
        scrollTrigger: {
          trigger: '#line1',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#aboutText0',
      { y: 80, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutTriger0',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#aboutText1',
      { y: 80, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutTriger1',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#RMark',
      { y: 100, opacity: 1 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutTriger1',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#referenceImage',
      { y: 160 }, //fromの設定
      {  //toの設定
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#aboutTriger1',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )
    //about//////////////////////

    //feature////////////////////
    gsap.fromTo(
      '#featureTitle',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#featureTitle',
          start: 'top 90%', //要素のトップが、画面の中央まできたら開始
        },
        stagger: {
          each: 0.2,
        }
      }
    )

    gsap.fromTo(
      '#featureAnime',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1.7,
        scrollTrigger: {
          trigger: '#featureAnime',
          start: 'top 70%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    mm.add("(min-width: 501px)", () => {
      gsap.fromTo(
        '#mriImageAnime',
        { width: 0 }, //fromの設定
        {  //toの設定
          width: "100%",
          duration: 1,
          scrollTrigger: {
            trigger: '#mri',
            start: 'top 40%', //要素のトップが、画面の中央まできたら開始
          },
        }
      )
    });

    mm.add("(max-width: 500px)", () => {
      gsap.fromTo(
        '#mriImageAnime',
        { width: 0 }, //fromの設定
        {  //toの設定
          width: "100%",
          duration: 0.5,
          scrollTrigger: {
            trigger: '#mri',
            start: 'top 40%', //要素のトップが、画面の中央まできたら開始
          },
        }
      )
    });

    gsap.fromTo(
      '#mriTextMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "480px",
        duration: 0.5,
        scrollTrigger: {
          trigger: '#mri',
          start: 'top 40%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    gsap.fromTo(
      '#mri',
      { opacity: 1 }, //fromの設定
      {  //toの設定
        opacity: 0,
        scrollTrigger: {
          trigger: '#mri',
          start: 'bottom 50%',
          end: 'bottom 0%',
          scrub: 1.5,
        },
      }
    )

    mm.add("(min-width: 501px)", () => {
      gsap.fromTo(
        '#examinationImageAnime',
        { width: 0 }, //fromの設定
        {  //toの設定
          width: "1040px",
          duration: 0.5,
          scrollTrigger: {
            trigger: '#examination',
            start: 'top 40%', //要素のトップが、画面の中央まできたら開始
          },
        }
      )
    });

    mm.add("(max-width: 500px)", () => {
      gsap.fromTo(
        '#examinationImageAnime',
        { width: 0 }, //fromの設定
        {  //toの設定
          width: "100%",
          duration: 0.5,
          scrollTrigger: {
            trigger: '#examination',
            start: 'top 40%', //要素のトップが、画面の中央まできたら開始
          },
        }
      )
    });

    gsap.fromTo(
      '#examination',
      { opacity: 1 }, //fromの設定
      {  //toの設定
        opacity: 0,
        scrollTrigger: {
          trigger: '#examination',
          start: 'bottom 50%',
          end: 'bottom 0%',
          scrub: 1.5,
        },
      }
    )

    gsap.fromTo(
      '#examinationTextMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "480px",
        duration: 0.5,
        scrollTrigger: {
          trigger: '#examination',
          start: 'top 40%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    mm.add("(min-width: 501px)", () => {
      gsap.fromTo(
        '#preventionImageAnime',
        { width: 0 }, //fromの設定
        {  //toの設定
          width: "100%",
          duration: 1,
          scrollTrigger: {
            trigger: '#prevention',
            start: 'top 40%', //要素のトップが、画面の中央まできたら開始
          },
        }
      )
    });

    mm.add("(max-width: 500px)", () => {
      gsap.fromTo(
        '#preventionImageAnime',
        { width: 0 }, //fromの設定
        {  //toの設定
          width: "100%",
          duration: 0.5,
          scrollTrigger: {
            trigger: '#prevention',
            start: 'top 40%', //要素のトップが、画面の中央まできたら開始
          },
        }
      )
    });

    gsap.fromTo(
      '#prevention',
      { opacity: 1 }, //fromの設定
      {  //toの設定
        opacity: 0,
        scrollTrigger: {
          trigger: '#prevention',
          start: 'bottom 50%',
          end: 'bottom 0%',
          scrub: 1.5,
        },
      }
    )

    gsap.fromTo(
      '#preventionTextMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "480px",
        duration: 0.5,
        scrollTrigger: {
          trigger: '#prevention',
          start: 'top 40%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    //feature////////////////////

    //voice//////////////////////

    gsap.fromTo(
      '#voiceMask',
      { opacity: 1 }, //fromの設定
      {  //toの設定
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
          trigger: '#voiceMask',
          start: 'top 80%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    mm.add("(min-width: 501px)", () => {
      gsap.fromTo(
        '#voiceText',
        { y: 100, opacity: 0 }, //fromの設定
        {  //toの設定
          y: 0,
          opacity: 1,
          duration: 0.4,
          delay: 0.3,
          scrollTrigger: {
            trigger: '#voiceMask',
            start: 'top 80%',
          },
          stagger: {
            each: 0.2,
          }
        }
      )

      gsap.fromTo(
        '#voiceImageMask',
        { width: 0 }, //fromの設定
        {  //toの設定
          width: 1426,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: '#voiceImageMask',
            start: 'top 80%',
          },
        }
      )
    });

    mm.add("(max-width: 500px)", () => {
      // ここに500px以下のときのコードを書きます
      ScrollTrigger.batch('#voiceText', {
        onEnter: batch => gsap.fromTo(batch,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            start: 'top 60%',
          }
        ),
        once: true
      });
      gsap.fromTo(
        '#voiceImageMask',
        { width: 0 }, //fromの設定
        {  //toの設定
          width: "100%",
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: '#voiceImageMask',
            start: 'top 80%',
          },
        }
      )

      gsap.fromTo(
        '#voiceTitleSp',
        { y: 50, opacity: 0 }, //fromの設定
        {  //toの設定
          y: 0,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#voiceTitleSp',
            start: 'top 80%',
          },
        }
      )

    });


    //voice//////////////////////

    //flow///////////////////////

    mm.add("(min-width: 501px)", () => {
      gsap.fromTo(
        '#flowTitle',
        { y: 230, opacity: 0 }, //fromの設定
        {  //toの設定
          y: 180,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#flowTitle',
            start: 'top 90%', //要素のトップが、画面の中央まできたら開始
          },
          stagger: {
            each: 0.2,
          }
        }
      )
    });

    mm.add("(max-width: 500px)", () => {
      gsap.fromTo(
        '#flowTitle',
        { y: 200, opacity: 0 }, //fromの設定
        {  //toの設定
          y: 150,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#flowTitle',
            start: 'top 90%', //要素のトップが、画面の中央まできたら開始
          },
          stagger: {
            each: 0.2,
          }
        }
      )
    });

    gsap.fromTo(
      '#flowImageMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 2,
        scrollTrigger: {
          trigger: '#flowImageMask',
          start: 'top 60%', //要素のトップが、画面の中央まできたら開始
        },
      }
    )

    mm.add("(min-width: 501px)", () => {
      gsap.fromTo(
        '#circle',
        { scale: 0 }, //fromの設定
        {  //toの設定
          scale: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#circle',
            start: 'top 70%',
          },
          stagger: {
            each: 0.2,
          },
        }
      )
    });

    mm.add("(max-width: 500px)", () => {
      // ここに500px以下のときのコードを書きます
      ScrollTrigger.batch('#circle', {
        onEnter: batch => gsap.fromTo(batch,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            start: 'top 60%',
          }

        ),
        once: true
      });
    });
    //flow///////////////////////

    //question///////////////////

    gsap.fromTo(
      '#questionTitle',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#questionTitle',
          start: 'top 90%', //要素のトップが、画面の中央まできたら開始
        },
        stagger: {
          each: 0.2,
        }
      }
    )

    gsap.fromTo(
      '#questionImageMask',
      { width: 0 }, //fromの設定
      {  //toの設定
        width: "100%",
        duration: 1.5,
        scrollTrigger: {
          trigger: '#questionImageMask',
          start: 'top 70%',
        },
      }
    )

    gsap.fromTo(
      '#questionText0',
      { opacity: 0, y: 70 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#questionText0',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#questionText1',
      { opacity: 0, y: 70 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#questionText1',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#questionText2',
      { opacity: 0, y: 70 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#questionText2',
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      '#questionText3',
      { opacity: 0, y: 70 }, //fromの設定
      {  //toの設定
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#questionText3',
          start: 'top 80%',
        },
      }
    )

    //question///////////////////

    //introduce///////////////////

    gsap.fromTo(
      '#introduceTitle',
      { y: 50, opacity: 0 }, //fromの設定
      {  //toの設定
        y: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: '#introduceTitle',
          start: 'top 90%',
        },
      }
    )

    ScrollTrigger.batch('#hospital', {
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

    //introduce///////////////////
  }
  //アニメーション専用/////////////////////////////////////////


  // scriptを埋め込む処理👇
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
      <body id="body" className={style.body}>
        <div class="gtranslate_wrapper"></div>

        <header className={style.headerWrapper}>
          <div className={isHeaderShown ? "index-module--container--defd5" : "index-module--show--051e9"}>
            <div className={style.flexContainer}>
              <AnchorLink href="#hero">
                <img src={logoWhite} className={`index-module--logoWhite--2bd0c ${isShow ? "index-module--logoWhite__active--7787c" : ""}`} alt="logo" />
                <img src={logoColor} className={`index-module--logoColor--f67bf ${isShow ? "index-module--logoColor__active--bad48" : ""}`} alt="logo" />
              </AnchorLink>

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
                  <StaticImage src="../images/hamberger.svg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.hamberger} />
                </button>
              </div>
              <div // eslint-disable-line jsx-a11y/no-static-element-interactions
                className={`index-module--menuWrapper--8e435 ${isShow ? "index-module--menuWrapper__active--16a38" : ""}`}
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
                      <hr /><p>検査の流れ</p>
                    </AnchorLink>
                    <AnchorLink href="#question"
                      offset='120'
                      className={style.list}
                      onClick={() => {
                        setIsShow(!isShow);
                        scrollLockLift();
                      }}>
                      <hr /><p>よくあるご質問</p>
                    </AnchorLink>
                    <AnchorLink href="#introduce"
                      offset='30'
                      className={style.list}
                      onClick={() => {
                        setIsShow(!isShow);
                        scrollLockLift();
                      }}>
                      <hr /><p>導入医療機関</p>
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
                  <StaticImage src="../images/menuBack.png" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.menuBack} alt="background" />
                </div>
              </div>
            </div>
          </div>

        </header>

        <div id="hero" className={style.hero} >
          <StaticImage src="../images/uneune.png" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.uneune} loading="lazy" alt="background" />
          <StaticImage src="../images/uneuneSp.png" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.uneuneSp} loading="lazy" alt="background" />
          <div className={style.textContainer}>
            <div className={style.mask}>
              <img id="KvText" src={KvText} className={style.KvText} loading="lazy" alt="text" />
              <img id="KvText" src={KvTextSpUp} className={style.KvTextSp1} loading="lazy" alt="text" />
            </div>
            <div className={style.mask}>
              <img src={lineVertical} id="KvText" className={style.lineVertical} loading="lazy" alt="text" />
            </div>
            <div className={style.mask}>
              <img id="KvText" src={KvTextSpDown} className={style.KvTextSp0} loading="lazy" alt="text" />
            </div>
            <div className={style.mask}>
              <h3 id="KvText" className={style.text}>脳全体を解析するAI技術で、<br></br>
                将来の認知症リスクを知る。</h3>
            </div>
          </div>
          <StaticImage src="../images/scroll.png" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.scroll} alt="scroll" />
        </div>

        <div id="about" className={style.about}>

          <div id="aboutTitleMask" className={style.mask}>
            <h1 id="aboutTitle" className={style.aboutTitle}>
              認知症リスク検査とは？
            </h1>
          </div>

          <div id="aboutImage" className={style.aboutImageMask}>
            <img src={about} className={style.aboutImage} alt="background" />
          </div>

          <div id="aboutCopy" className={style.aboutCopy}>
            <div className={style.mask}>
              <p id="copy" className={style.copy}>
                全脳の状態から
              </p>
            </div>

            <div className={style.mask}>
              <p id="copy" className={style.copy}>
                将来の認知症リスクを知り、
              </p>
            </div>

            <div className={style.mask}>
              <p id="copy" className={style.copy}>
                ライフスタイルを見直すきっかけに。
              </p>
            </div>

          </div>

          <div id="aboutCopy" className={style.aboutCopySp}>
            <div className={style.mask}>
              <p id="copy" className={style.copy}>
                全脳の状態から
              </p>
            </div>

            <div className={style.mask}>
              <p id="copy" className={style.copy}>
                将来の認知症リスクを知り、
              </p>
            </div>

            <div className={style.mask}>
              <p id="copy" className={style.copy}>
                ライフスタイルを
              </p>
            </div>

            <div className={style.mask}>
              <p id="copy" className={style.copy}>
                見直すきっかけに。
              </p>
            </div>
          </div>

          <div id="line1" className={style.lineMask}>
            <hr className={style.line1}></hr>
          </div>

          <div id="aboutTriger0" className={style.mask}>
            <div id="aboutText0" className={style.aboutText0}>
              認知症リスク検査は、島根大学医学部、滋賀医科大学、株式会社ERISAで共同開発された脳画像解析技術で、脳の状態を検査し将来の認知症リスクを予測します。脳の一部だけではなく、脳全体を膨大なデータと比較することで、高い精度を実現。将来を見据えた認知症予防に取り組むきっかけを提供し、受検者のライフスタイル見直しに貢献します。
            </div>
          </div>

          <div id="reference" className={style.reference}>
            <div className={style.RMarkContainer}>
              <div id="RMark">
                <StaticImage src="../images/RMark.png" alt="RMark" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.RMark} />
              </div>
            </div>

            <div>
              <div id="aboutTriger1" className={style.mask}>
                <div id="aboutText1" className={style.aboutText1}>
                  日本における65歳以上の認知症患者数は約700万人。高齢者の<font color="#BD0000">5人に1人</font>が発症する身近な問題です。症状が現れる20年以上前から徐々に脳の変化が始まっているとされ、早期から対策することによりある程度予防できることがわかっています。
                </div>
              </div>
            </div>

            <div className={style.mask}>
              <div id="referenceImage">
                <StaticImage src="../images/referenceImage.png" alt="referenceImage" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.referenceImage} />
                <StaticImage src="../images/referenceImageSp.png" alt="referenceImageSp" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.referenceImageSp} />
              </div>
            </div>

          </div>
          <StaticImage src="../images/aboutBack.png" quality={90} placeholder={"none"} formats={["AUTO", "WEBP", "AVIF"]} className={style.aboutBack} loading="lazy" alt="background" />

        </div>

        <div id="feature" className={style.featureContainer}>
          <StaticImage src="../images/featureBack.png" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.featureBack} loading="lazy" alt="background" />
          <StaticImage src="../images/featureBackBottom.png" quality={90} placeholder=" blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.featureBackBottom} loading="lazy" alt="background" />

          <div className={style.feature}>

            <div id="featureAnime" className={style.featureAnime}>
              <img src={featureImage} className={style.featureImage} loading="lazy" alt="background" />
            </div>

            <div id="featureTitle" className={style.featureTitle}>
              <h1>認知症リスク検査の特徴</h1>
            </div>

            <div id="mri" className={style.mri}>
              <div id="mriImageAnime" className={style.mriImageAnime}>
                <div id="mriImageMask" className={style.mriImageMask}>
                  <StaticImage id="mriImage" src="../images/mriImage.jpg" quality={90} loading="eager" formats={["AUTO", "WEBP", "AVIF"]} className={style.mriImage} alt="mriImage" />
                </div>
              </div>

              <div id="mriTextMask" className={style.mriTextMask}>
                <div className={style.mriText}>
                  <div className={style.mriTexttextContainer}>
                    <h1>AIによる<br />
                      高精度のMRI画像解析で<br />
                      脳全体の状態を把握</h1>
                    <hr />
                    <p>脳の一部（海馬など）のみならず、脳全体の状態を把握することで、膨大なデータベースと照合し高精度の解析を実現。脳各部位の体積の将来変化を予測することで、これまでの解析以上に正確な脳状態を確認できます。</p>
                    <p className={style.textSp}>
                      脳の一部（海馬など）のみならず、脳全体の状態を把握することで、膨大なデータベースと照合し高精度の解析を実現。脳各部位の体積の将来変化を予測することで、これまでの解析以上に正確な脳状態を確認できます。</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="examination" className={style.examination}>
              <div id="examinationImageAnime" className={style.examinationImageAnime}>
                <div id="examinationImageMask" className={style.examinationImageMask}>
                  <StaticImage src="../images/examination.jpg" quality={90} loading="eager" formats={["AUTO", "WEBP", "AVIF"]} className={style.examinationImageSp} alt="examinationImage" />
                </div>
              </div>
              <div id="examinationTextMask" className={style.examinationTextMask}>
                <div className={style.examinationText}>
                  <div className={style.examinationTextContainer}>
                    <h1>将来の脳状態を予測し<br />
                      認知症リスクを検査</h1>
                    <hr />
                    <p>脳全体の状態から将来の脳状態を予測することで、受検者様それぞれの認知症リスクを検査。解説付きの検査レポートを通じて、早期対策・予防に活用できます。</p>
                  </div>
                </div>
              </div>
              <div id="examinationImageAnime" className={style.examinationImageAnime}>
                <div className={style.examinationImageMask}>
                  <StaticImage src="../images/examination.jpg" quality={90} loading="eager" formats={["AUTO", "WEBP", "AVIF"]} className={style.examinationImage} alt="examinationImage" />
                </div>
              </div>
            </div>

            <div id="prevention" className={style.prevention}>
              <div id="preventionImageAnime" className={style.preventionImageAnime}>
                <div id="preventionImageMask" className={style.preventionImageMask}>
                  <StaticImage src="../images/prevention.jpg" quality={90} loading="eager" formats={["AUTO", "WEBP", "AVIF"]} className={style.preventionImage} alt="preventionImage" />
                </div>
              </div>

              <div id="preventionTextMask" className={style.preventionTextMask}>
                <div className={style.preventionText}>
                  <div className={style.preventionTextContainer}>
                    <h1>
                      早期対策・予防方針による<br />
                      ライフスタイルの見直し</h1>
                    <hr />
                    <p>自身の脳状態や将来の認知症リスクを知ることで、レポートや医療機関を通じた早期対策・予防方針から、効果的な生活習慣の見直しを検討することに繋がります。</p>
                    <p className={style.textSp}>自身の脳状態や将来の認知症リスクを知ることで、レポートや医療機関を通じた早期対策・予防方針から、効果的な生活習慣の見直しを検討することに繋がります。</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div id="voiceMask" className={style.voiceMask} loading="lazy">
          <div id="voice" className={style.voiceContainer}>
            <div id="voiceImageMask" className={style.voiceImageMask}>
              <img src={voiceImage} alt="voice" className={style.voiceImage} />
              <img src={voiceImageSp} alt="voice" className={style.voiceImageSp} />
            </div>

            <div id="voiceTitleSp" className={style.voiceTitleSp}>
              <h1>受検者の声</h1>
            </div>

            <div className={style.voiceText}>
              <div id="voiceText" className={style.voiceTextContainer}>
                <p>認知症の今の状態が詳しくわかったので、安心して暮らしていけると思っています。</p>
                <hr />
                <h6>80代・男性</h6>
              </div>
              <div id="voiceText" className={style.voiceTextContainer}>
                <p>認知機能低下予防のために生活習慣の見直しを決心できたので、また3年後に検査を受けたいです。</p>
                <hr />
                <h6>70代・女性</h6>
              </div>
              <div id="voiceText" className={style.voiceTextContainer}>
                <p>特定健康診査やがん検診と同じように、今後も定期的に検査していくつもりです。</p>
                <hr />
                <h6>70代・女性</h6>
              </div>
            </div>

          </div>
        </div>

        <div id="flow" className={style.flowContainer} loading="lazy">
          <h1 id="flowTitle">検査の流れ</h1>
          <div id="flowImageMask" className={style.flowImageMask} >
            <img src={flowImage} className={style.flowImage} loading="lazy" alt="flowImage" />
          </div>

          <div className={style.circleContainer}>
            <div id="circle" className={style.circle}>
              <img src={number1} className={style.number} loading="lazy" alt="01" />
              <h3>導入医療機関で予約</h3>
              <h4>予約方法は<br />
                各医療機関により異なりますので<br />
                直接お問い合わせください</h4>

              <AnchorLink href="#introduce">
                <span className={style.flowButton}>
                  <p>導入医療機関を探す</p>
                  <span className={style.playButton}></span>
                </span>
              </AnchorLink>
            </div>
            <div>
              <img id="circle" src={pointLine} className={style.pointLine} alt="pointLine" />
            </div>

            <div id="circle" className={style.circle}>
              <img src={number2} className={style.number} alt="02" />
              <h3>頭部MRI撮影</h3>
              <h4>ご予約の医療機関にて<br />
                脳ドックを受検いただき<br />
                MRI撮像による脳画像データを取得</h4>
              <StaticImage src="../images/brain.png" alt="brain" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.brainImage} />
            </div>
            <div>
              <img id="circle" src={pointLine} className={style.pointLine} alt="pointLine" />
            </div>
            <div id="circle" className={style.circle}>
              <img src={number3} className={style.number} alt="03" />
              <h3>レポート受取</h3>
              <h4>解説付きの検査レポートを<br />
                医療機関からお渡しいたします</h4>
              <StaticImage src="../images/report.png" alt="report" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.reportImage} />
            </div>
          </div>
        </div>


        <div id="question" className={style.questionContainer0} loading="lazy">

          <div id="questionContainer1" className={style.questionContainer1}>
            <div id="questionImageMask" className={style.questionImageMask}>
              <img src={questionImage} className={style.questionImage} loading="lazy" alt="questionImage" />
            </div>
            <h1 id="questionTitle">よくあるご質問</h1>

            <div className={style.questionTextMask}>
              <div className={style.questionText}>
                <hr />

                <div className={style.mask}>
                  <div id="questionText0" className={style.question}>
                    <h2 className={style.Q}>Q.</h2>
                    <h3 className={style.title}>どれくらいの頻度で受けるべきですか？</h3>
                  </div>
                </div>

                <div className={style.mask}>
                  <div id="questionText0" className={style.question}>
                    <h2 className={style.A}>A.</h2>
                    <h3 className={style.answer}>2～3年に1回の検査をおすすめします。</h3>
                  </div>
                </div>

              </div>

              <div className={style.questionText}>
                <hr />
                <div className={style.mask}>
                  <div id="questionText1" className={style.question}>
                    <h2 className={style.Q}>Q.</h2>
                    <h3 className={style.title}>何歳から受けられますか？</h3>
                  </div>
                </div>

                <div className={style.mask}>
                  <div id="questionText1" className={style.question}>
                    <h2 className={style.A}>A.</h2>
                    <h3 className={style.answer}>50歳以上の方に推奨しています。</h3>
                  </div>
                </div>

              </div>

              <div className={style.questionText}>
                <hr />
                <div className={style.mask}>
                  <div id="questionText2" className={style.question}>
                    <h2 className={style.Q}>Q.</h2>
                    <h3 className={style.title}>この検査で認知症であることがわかりますか？</h3>
                  </div>
                </div>
                <div className={style.mask}>
                  <div id="questionText2" className={style.question}>
                    <h2 className={style.A}>A.</h2>
                    <h3 className={style.answer}>この検査結果のみで認知症と判断されることはありません。この検査の目的は、将来の認知症リスクを知り、ライフスタイルを見直すことで、認知機能低下を予防することです。</h3>
                  </div>
                </div>
              </div>

              <div className={style.questionText}>
                <hr />
                <div className={style.mask}>
                  <div id="questionText3" className={style.question}>
                    <h2 className={style.Q}>Q.</h2>
                    <h3 className={style.title}>脳が萎縮すると認知症になるのですか？</h3>
                  </div>
                </div>

                <div className={style.mask}>
                  <div id="questionText3" className={style.question}>
                    <h2 className={style.A}>A.</h2>
                    <h3 className={style.answer}>脳の萎縮のみから認知症の診断はできません。検査結果が心配な方は専門医の受診をお勧めします。</h3>
                  </div>
                </div>
                <hr />
              </div>
            </div>

          </div>
        </div>
        
        <div id="introduce" className={style.Introduce} loading="lazy">

          <div id="introduceTitle" className={style.title}>
            <h1>導入医療機関</h1>
          </div>
          <Search />
          <StaticImage src="../images/search.png" alt="searchImage" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.searchImage} />

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
                  <hr /><AnchorLink href="#introduce"><p>導入医療機関</p></AnchorLink>
                </div>
                <div className={style.list}>
                  <hr /><AnchorLink href="#flow"><p>検査の流れ</p></AnchorLink>
                </div>
                <div className={style.list}>
                  <hr /><a href="https://www.erisa.co.jp/#contact" target="_blank" rel="noreferrer"><p>お問い合わせ</p></a>
                </div>
                <div className={style.list}>
                  <hr /><AnchorLink href="#question"><p>よくあるご質問</p></AnchorLink>
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
      <meta property="og:image" content={ogpToc} />
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