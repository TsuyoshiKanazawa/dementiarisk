import React, { useState} from "react"
import "../styles/input.css"
import * as style from "../styles/healthcare-contact.module.scss"
import { init, send } from 'emailjs-com'
import { StaticImage } from "gatsby-plugin-image"

const Confirmation = props => {
  const [isSendButton, setisSendButton] = useState(true);
  const [isTermBox, setisTermBox] = useState(true);
  const { values, hideConfirmation } = props
  //propsで渡ってきたvaluesを受けとって入力内容確認画面で表示

  //チェックボックス
  const [isChecked, setIsChecked] = useState(false)
  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
    setisSendButton(!isSendButton)
  }


 //メール送信/////
  const orname = values.orname; //氏名
  const name = values.name; //氏名
  const affiliation = values.affiliation; //氏名
  const mail = values.email; //メールアドレス
  const tel = values.tel; //電話番号
  const message = values.contact; //お問い合わせ内容

  const sendMail = () => {
    setIsChecked(!isChecked)
    setisSendButton(!isSendButton);
    setisTermBox(!isTermBox);
    init("YDhr2yz42Wq5BPUL0");

    const template_param = {
      site: "医療従事者向け",
      orname: orname,
      ornameText: "医療機関名・団体名：" + orname,
      name: name,
      affiliation: affiliation,
      affiliationText: "所属：" + affiliation,
      mailText: "メールアドレス：" + mail,
      mail: mail,
      tel: "電話番号:" + tel,
      message: message,
    };

    send("Erisa_info_1", "template_0vx0s4e", template_param).then(() => {
      window.location.href = '/healthcare/contact-completion';
    });
  }

  return (
    <>
      <div className={style.confirmBox}>
        <h1 className={style.note}>以下の内容でお間違いなければ<br />「送信」ボタンを押してください。</h1>
        <div className={style.forms}>
          <h1>医療機関名・団体名<span>※</span></h1>
          <p>{values.orname}</p>
        </div>
        <p>例) 〇〇病院、〇〇クリニック</p>
        <div className={style.forms}>
          <h1>氏名<span>※</span></h1>
          <p>{values.name}</p>
        </div>
        <p>例) 山田花子</p>
        <div className={style.forms}>
          <h1>所属</h1>
          <p>{values.affiliation}</p>
        </div>
        <p>例) 〇〇〇〇部</p>
        <div className={style.forms}>
          <h1>メールアドレス<span>※</span></h1>
          <p>{values.email}</p>
        </div>
        <p>例) abc@abc.com</p>
        <div className={style.forms}>
          <h1>電話番号</h1>
          <p>{values.tel}</p>
        </div>
        <p>例) 0311112222 市外局番よりご入力ください</p>
        <div className={style.forms}>
          <h1>お問い合わせ内容<span>※</span></h1>
          <p className={style.contactText}>{values.contact}</p>
        </div>


        <div className={isTermBox ? "healthcare-contact-module--terms--1e2ec" : "healthcare-contact-module--terms_none--f7bf0"}>
          <input type="checkbox" name="agree" id="agreeCheck" onChange={() => toggleCheckbox()}/>
          <label htmlFor="agreeCheck">「<a href="https://www.erisa.co.jp/privacypolicy" target="_blank" rel="noopener noreferrer">個人情報の取り扱い</a>」同意の上、<br />申込みます。</label>
          <a href="https://www.erisa.co.jp/privacypolicy" target="_blank" rel="noopener noreferrer"><StaticImage src="../images/linkIcon.png" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.linkIcon} loading="lazy" alt="background" /></a>
        </div>


        <div className={style.buttonContainer}>

          <div className={style.backButtonContainer}>
            <input
              type='button'
              onClick={hideConfirmation}
              //クリックでstateをクリアし、入力内容確認画面コンポーネントを非表示にする
              value='入力に戻る'
              className={style.backButton} />
              <span className={style.playButton}></span>
          </div>
          
          <div className={isSendButton ? "healthcare-contact-module--sendButtonContainer--630f7" : "healthcare-contact-module--sendButtonContainer_visible--35d31"}>
            <button 
              className={style.sendButton}
              onClick={sendMail}
              disabled={!isChecked}
              ><p>送信</p></button>
            <span className={style.playButton}></span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Confirmation