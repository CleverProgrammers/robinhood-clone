import React, { useState, useEffect } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import {key} from "./api";
import axios from "axios";

const BASE_URL = "https://finnhub.io/api/v1/news?category=general";

function Article(props) {
    const [article, setArticle] = useState({});
   
    useEffect(() => {
        if (props) {
            return axios
              .get(BASE_URL)
              .then((res) => {
                  console.log(res.data, 'res data');
                  let article = res.data[0];
                  setArticle(article);
                })
              .catch((error) => {
                console.error("Error", error.message);
              });
            }
        },[]);

    return (
    <div className="newsfeed__articles">
        <div className="newsfeed__article__title">
            <FlashOnIcon />
            <div className="newsfeed__article__source">
                <p>{article.headline}</p>
            </div>
            <MoreHorizIcon />
        </div>
        <div className="newsfeed__article__content">
            <div className="newsfeed__article__paragraph">
                <p>
                    {article.summary}
                </p>
            </div>
            <div className="newsfeed__article__image">
                <img src={article.image} width="125" height="75"/>
            </div>
        </div>
    </div>
    );
}
export default Article; 
