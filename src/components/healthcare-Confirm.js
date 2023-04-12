import React, { useState} from "react"
import "../styles/input.css"
import * as style from "../styles/healthcare-contact.module.scss"
import { init, send } from 'emailjs-com'
import { StaticImage } from "gatsby-plugin-image"

const Confirmation = props => {
  const { values, hideConfirmation } = props
  //propsで渡ってきたvaluesを受けとって入力内容確認画面で表示

  //チェックボックス
  const [isChecked, setIsChecked] = useState(false)
  const toggleCheckbox = () => {
    setIsChecked(!isChecked)
  }


 //メール送信/////
  const orname = values.orname; //氏名
  const name = values.name; //氏名
  const affiliation = values.affiliation; //氏名
  const mail = values.email; //メールアドレス
  const tel = values.tel; //電話番号
  const message = values.contact; //お問い合わせ内容

  const serviceID = "service_1obp7sd";
  const templateID = "template_m9b9knw";

  const sendMail = () => {
    init("OhzGRqewkPcbhrZ0o");

    const template_param = {
      orname: orname,
      name: name,
      affiliation: affiliation,
      mail: mail,
      tel: tel,
      message: message,
    };

    send("service_1obp7sd", "template_m9b9knw", template_param).then(() => {
      window.location.href = '/healthcare/contact-completion';
    });
  }

  return (
    <>
      <div className={style.confirmBox}>
        <h1 className={style.note}>以下の内容でお間違いなければ「送信」ボタンを押してください。</h1>
        <div className={style.forms}>
          <h1>医療機関名・団体名<span>※</span></h1>
          <p>{values.orname}</p>
        </div>
        <p>例) 株式会社〇〇〇〇</p>
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

        <div className={style.terms}>
          <input type="checkbox" name="agree" id="agreeCheck" onChange={() => toggleCheckbox()}/>
          <label htmlFor="agreeCheck">「<a href="/">個人情報の取り扱い</a>」同意の上、<br />申込みます。</label>
          <a href="/"><StaticImage src="../images/linkIcon.png" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.linkIcon} loading="lazy" alt="background" /></a>
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

          <div className={style.sendButtonContainer}>
            <button 
              className={style.sendButton}
              onClick={sendMail}
              disabled={!isChecked}><p>送信</p></button>
            <span className={style.playButton}></span>
          </div>

        </div>
      </div>
    </>
  )
}

export default Confirmation