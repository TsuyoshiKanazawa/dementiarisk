import React, { useEffect } from "react"
import Layout from "../../../../components/layout"



export const Index = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "../../../";
        }, 3 * 1000);
    }, )

    return (

        <Layout>
            <body>
                <p>本サイトは移転しました。5秒後にジャンプします。<br />
                    ジャンプしない場合は、以下のURLをクリックしてください。</p>
                <p><a href="../../../">移転先のページ</a></p>
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