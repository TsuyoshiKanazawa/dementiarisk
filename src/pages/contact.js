import React, { useState, useEffect, useCallback, useLayoutEffect } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { scroller } from 'react-scroll'
import Confirmation from '../components/Confirm'

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/contact.module.scss"
import "../styles/input.css"

import logoColor from '../images/logoColor.svg'
import logoFooter from '../images/logoFooter.svg'
import ogpToc from '../images/ogpToc.jpg'

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

    const { 
        register, 
        handleSubmit, 
        watch, 
        errors, 
        getValues,
    } = useForm()

    //useFormを呼び出して使いたいメソッドを書く
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false)
    //isConfirmationVisibleにstateを持たせて、入力内容確認画面の表示・非表示をコントロール
    //isConfirmationVisibleの初期値はfalseで入力内容確認画面は非表示に
    const hideConfirmation = () => setIsConfirmationVisible(false)
    //入力内容確認画面の閉じるボタンを押した時非表示にする関数を宣言
    const onSubmitData = () => setIsConfirmationVisible(true)
    //submitボタンを押した時、入力内容確認画面を表示させる

    const Name = watch('name')
    const Email = watch('email')
    const Contact = watch('contact')
    //watchに各フォーム部品のnameの値を引数で渡すとでタイムリーで入力状態を監視してる

    useEffect(() => {
        if (isConfirmationVisible == true){
            scroller.scrollTo('scrollTarget', {
                duration: 0,
            })
        }
    },[isConfirmationVisible])

    return (
        <Layout>
            <Helmet>
                <script src="https://cdn.gtranslate.net/widgets/latest/float.js"></script>
            </Helmet>
            <body id="body" className={style.body}>
                <div class="gtranslate_wrapper"></div>

                <header className={style.headerWrapper}>
                    <div className={isHeaderShown ? "contact-module--container--6353d" : "contact-module--show--ef6ee"}>
                        <div className={style.flexContainer}>
                            <a href="/">
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
                                    <StaticImage src="../images/hamberger.svg" alt=" profile" quality={90} placeholder="none" formats={["AUTO", "WEBP", "AVIF"]} className={style.hamberger} />
                                </button>
                            </div>
                            <div // eslint-disable-line jsx-a11y/no-static-element-interactions
                                className={`contact-module--menuWrapper--5421e ${isShow ? "contact-module--menuWrapper__active--99f07" : ""}`}
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
                                            <hr /><p>Support Brainとは？</p>
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
                                        <a href="/contact"
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

                <div className={style.contactContainer} name='scrollTarget'>
                    <StaticImage src="../images/contactBack.png" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.contactBack} loading="lazy" alt="background" />
                    <StaticImage src="../images/contactBackSP.png" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.contactBackSp} loading="lazy" alt="background" />
                    
                    <h1>一般の方向け</h1>
                    <h2>お問い合わせ</h2>
                    <hr />
                    <h3>本フォームは一般の方向けの<br className={style.br}></br>お問い合わせとなります。<br />
                        医療関係者の方は<a href="/healthcare/contact">こちら</a>のフォームより<br className={style.br}></br>お問い合わせください。</h3>
                        
                    <div className={style.contact}>
                        <form onSubmit={handleSubmit(onSubmitData)} className={style.contactBox}>
                            {/*onSubmit(入力フォームの送信ボタンがクリックされた時に発生するイベント)で入力された値をhandleSubmitで取り出す*/}

                            <h1>「 ※ 」印は入力必須です。</h1>

                            <div className={style.forms}>
                                <label htmlFor='name'>氏名
                                    <span>※</span>
                                </label>
                                <input
                                    name='name'
                                    placeholder=''
                                    ref={register({ required: true })} />
                            </div>
                            <p>例) 山田花子</p>
                            {errors.name && <p className={style.caveat}>氏名を入力して下さい</p>}{/*nameが正しく入力されていない時に表示される*/}

                            <div className={style.forms}>
                                <label htmlFor='email'>メールアドレス
                                    <span>※</span>
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    ref={register({
                                        required: true,
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                    })}
                                />
                            </div>
                            <p>例) abc@abc.com</p>
                            {errors.email && <p className={style.caveat}>メールアドレスを正しく入力して下さい</p>}

                            <div className={style.forms}>
                                <label htmlFor='email1'>メールアドレス確認用
                                    <span>※</span>
                                </label>
                                    <input
                                        type='email1'
                                        name='email1'
                                        ref={register({
                                            required: true,
                                            validate: (value) => {
                                                return (
                                                    value === getValues("email")
                                                )
                                            }
 
                                        })}
                                    />
                            </div>
                            <p>例) abc@abc.com</p>
                            {errors.email1 && <p className={style.caveat}>メールアドレスが一致していません</p>}
                            
                            <div className={style.forms}>
                                <label htmlFor='tel'>電話番号
                                </label>
                                <input
                                    type='tel'
                                    name='tel'
                                    ref={register({
                                        required: false,
                                    })}
                                />
                            </div>
                            <p>例) 0311112222 市外局番よりご入力ください</p>
                            
                            <div className={style.forms}>
                                <label htmlFor='contact'>お問い合わせ内容
                                    <span>※</span>
                                </label>
                                <textarea
                                    name='contact'
                                    placeholder=''
                                    ref={register({
                                        required: true,
                                        rows: 8,
                                        minLength: 1,
                                    })}
                                />
                            </div>
                            {errors.contact && <p className={style.caveat0}>お問い合わせ内容を入力して下さい</p>}

                            <div className={style.nextbuttonContainer}>
                                <input
                                    type='submit'
                                    value=' '
                                    className={style.nextButton}>
                                </input>
                                <p>確認に進む</p>
                                <span className={style.playButton}></span>
                            </div>

                        </form>
                        {isConfirmationVisible &&//trueの時だけ入力内容確認画面を表示
                            <Confirmation//入力内容確認画面コンポーネント
                                values={getValues()}//getValues()でフォーム全体のデータを返してくれる！！
                                hideConfirmation={hideConfirmation}//入力内容確認画面表示・非表示のstateをConfirmationに渡す
                            />
                        }

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
                                    <hr /><a href="/#about"><p>Support Brainとは？</p></a>
                                </div>
                                <div className={style.list}>
                                    <hr /><a href="/#introduce"><p>導入医療機関</p></a>
                                </div>
                                <div className={style.list}>
                                    <hr /><a href="/#flow"><p>検査の流れ</p></a>
                                </div>
                                <div className={style.list}>
                                    <hr /><a href="/contact"><p>お問い合わせ</p></a>
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
            <meta property="og:image" content={ogpToc} />
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