import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as style from "../styles/index.module.scss"

const SearchResult = () => {

    //ドロップダウンメニューの開閉////////////////
    const [clicked, setClicked] = useState(100);

    const handleClick = (index) => {
        if (clicked === index) {
            return setClicked(100);
        }
        setClicked(index);
    };
    //ドロップダウンメニューの開閉////////////////
    const tempData = useStaticQuery(graphql`
        query SearchData {
            allMicrocmsIntroduce {
                edges {
                    node {
                        address
                        name
                        number
                        prefectures
                        url
                    }
                }
            }
              allMicrocmsRegion {
                edges {
                    node {
                        prefectures
                        region
                        prefectures0 {
                        prefecture
                        }
                    }
                }
            }
        }
    `)

    const className = useState("")
    const allPosts = tempData.allMicrocmsIntroduce.edges
    const emptyQuery = ""
    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery,
    })
    const handleInputChange = (event, e) => {
        console.log(event.target.id)
        const query = event.target.id
        const posts = tempData.allMicrocmsIntroduce.edges || []

        const filteredData = posts.filter(post => {
            const address = post.node.address
            return (
                address.toLowerCase().includes(query.toLowerCase())
            )
        })
        setState({
            query,
            filteredData,
        })
    }
    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const result = hasSearchResults ? filteredData : allPosts

    return (
        <div className={className}>
            <div className={style.region}>
                <div id="spacey2" className={style.spacey2}>
                    {tempData.allMicrocmsRegion.edges.map((region, index) => (
                        <div>
                            <div // eslint-disable-line jsx-a11y/no-static-element-interactions
                                className={style.button}
                                type="button"
                                onClick={() => {
                                    handleClick(index);
                                }}
                                style={{ '-webkit-tap-highlight-color': 'rgba(0,0,0,0)' }}
                            >
                                <p>{region.node.region}</p>

                                <div className={style.triangle}
                                    style={
                                        clicked === index
                                            ? {
                                                borderColor: "transparent transparent #565656 #565656", marginTop: "11px"
                                            }
                                            : { borderColor: "#565656 #565656 transparent transparent", marginTop: "15px" }
                                    }
                                >

                                </div>
                            </div>

                            <hr
                                style={
                                    clicked === index
                                        ? {
                                            height: "15px",
                                            marginBottom: "85px"
                                        }
                                        : { height: "0", opacity: "0", transitionDelay: "0.5s" }
                                } />

                            <div
                                className={style.menus}
                                style={
                                    clicked === index
                                        ? {
                                            minheight: "85px",
                                            backgroundColor: "#fff",
                                            transitionDelay: "0.3s"
                                        }
                                        : { height: "0", visibility: "hidden", opacity: "0" }
                                }>
                                <p key={index} id={region.node.prefectures[0]} onClick={handleInputChange}>{region.node.prefectures[0]}</p>
                                <p key={index} id={region.node.prefectures[1]} onClick={handleInputChange}>{region.node.prefectures[1]}</p>
                                <p key={index} id={region.node.prefectures[2]} onClick={handleInputChange}>{region.node.prefectures[2]}</p>
                                <p key={index} id={region.node.prefectures[3]} onClick={handleInputChange}>{region.node.prefectures[3]}</p>
                                <p key={index} id={region.node.prefectures[4]}>{region.node.prefectures[4]}</p>
                                <p key={index} id={region.node.prefectures[5]}>{region.node.prefectures[5]}</p>
                                <p key={index} id={region.node.prefectures[6]}>{region.node.prefectures[6]}</p>
                                <p key={index} id={region.node.prefectures[7]}>{region.node.prefectures[7]}</p>
                                <p key={index} id={region.node.prefectures[8]}>{region.node.prefectures[8]}</p>
                                <p key={index} id={region.node.prefectures[9]}>{region.node.prefectures[9]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id="hospitalContainer" className={style.hospitalContainer}>
                {result && result.map(({ node: post }) => {
                    return (
                        <div key={post.slug} id="hospital" className={style.hospital}>
                                <h1>{post.name}</h1>
                                <h2>Address：{post.address}</h2>
                                <h3>Tel：{post.number}</h3>
                                <a href={post.url}>
                                    <span className={style.hospitalButton}>
                                        <p>VIEW WEB</p>
                                        <span className={style.playButton}></span>
                                    </span>
                                </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchResult