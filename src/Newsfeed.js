import React, { useState, useEffect } from "react";
import "./Newsfeed.css";
import Article from "./Article";
import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LineGraph from "./LineGraph";
import Chip from '@material-ui/core/Chip';
import TimeLine from './TimeLine'
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import TopMover from "./TopMover";


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
    "TSLA",
    "APPL",
    "FB",
    "AMZN",
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
            <LineGraph />
            <TimeLine />
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
              <Chip 
                className="topic__badge"
                variant="outlined"
                label={topic}
                avatar={<Avatar
                  src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                />} 
              />
            ))}
          </div>
        </div>
        <div className="newsfeed__articles__section">
          <div className="newsfeed__articles__header">
            <h1>News</h1>
          </div>
          <Article genre="general"/>
          <div className="newsfeed__topmovers__section">
            <div className="newsfeed__topmovers__intro">
              <h1>Top Movers</h1>
              <div className="newsfeed__topmovers__intro__details">
                <p>Stocks making the biggest moves today</p>
                <p> Show More</p>
              </div>
              {/* use Card / CardContent @material-uit */}
              <div className="newsfeed__topmovers__cards__container">
                {cards.map((card) => (
                  <TopMover card={card} />
                ))}
              </div>
            </div>
          </div>
          {articles.map((stock) => (
            <Article genre="company" stock={stock}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
