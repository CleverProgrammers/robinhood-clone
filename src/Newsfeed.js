import React, { useState, useEffect } from "react";
import "./Newsfeed.css";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function Newsfeed() {
  const [popularTopics, setTopics] = useState([
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "Technology",
    "China",
    "Pharma",
  ]);

  const [seed, setSeed] = useState("");

  const [articles, setArticles] = useState([
    "Business Insider",
    "MarketWatch",
    "Reuters",
    "VentureBeat",
  ]);

  const [cards, setCards] = useState([
    "Eco Energy",
    "Shift Technologies",
    "Appian",
    "Slack",
  ]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="newsfeed">
      <div className="newsfeed__container">
        <div className="newsfeed__chart__section">
          <div className="newsfeed_price_asset">
            <h1> $114,656,84</h1>
            <p> $142.90 (-0,12) Today </p>
          </div>
          <div className="newsfeed__chart">
            <h1> CHART </h1>
          </div>
        </div>
        <div className="newsfeed__buying__section">
          <h2> Buying Power</h2>
          <h2> $4.11</h2>
        </div>
        <div className="newsfeed__market__section">
          <div className="newsfeed__market__box">
            <p> Markets Closed</p>
            <h1> Happy Thanksgiving</h1>
          </div>
        </div>
        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <h1>Popular lists</h1>
            <p> Show More</p>
          </div>
          <div className="newsfeed_popularlists_badges">
            {popularTopics.map((topic) => (
              <div className="topic__badge">
                <Avatar
                  src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />
                {topic}
              </div>
            ))}
          </div>
        </div>
        <div className="newsfeed__articles__section">
          <div className="newsfeed__articles__header">
            <h1>News</h1>
          </div>
          <div className="newsfeed__article">
            <div className="newsfeed__article__title">
              <FlashOnIcon />
              <div className="newsfeed__article__source">
                <p>The Wallstreet Journal</p>
              </div>
              <MoreHorizIcon />
            </div>
            <div className="newsfeed__article__content">
              <div className="newsfeed__article__paragraph">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>
              <div className="newsfeed__article__image">
                <h2>Image Unsplash</h2>
              </div>
            </div>
          </div>
          <div className="newsfeed__topmovers__section">
            <div className="newsfeed__topmovers__intro">
              <h1>Top Movers</h1>
              <div className="newsfeed__topmovers__intro__details">
                <p>Stocks making the biggest moves today</p>
                <p> Show More</p>
              </div>
              <div className="newsfeed__topmovers__cards__container">
                {cards.map((card) => (
                  <div className="newsfeed__topmovers__card">
                    <div className="newsfeed__topmovers__card_name">
                      <p> {card}</p>
                    </div>
                    <div className="newsfeed__topmovers__card__numbers">
                      <h1>$15.20</h1>
                      <p>+43.32%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {articles.map((article) => (
            <div className="newsfeed__article">
              <div className="newsfeed__article__title">
                <FlashOnIcon />
                <div className="newsfeed__article__source">
                  <p>{article}</p>
                </div>
                <MoreHorizIcon />
              </div>
              <div className="newsfeed__article__content">
                <div className="newsfeed__article__paragraph">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </div>
                <div className="newsfeed__article__image">
                  <h2>Image Unsplash</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
