import "./App.css";
import Header from "./Header";
import NewsFeed from "./Newsfeed";
import Stats from "./Stats";
import { Card, CardContent, Typography } from "@material-ui/core";

function TopMover() {
  return (
    <div>
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
    </div>


    

// <div className="newsfeed__topmovers__card">
// <div className="newsfeed__topmovers__card_name">
//   <p> {card}</p>
// </div>
// <div className="newsfeed__topmovers__card__numbers">
//   <h1>$15.20</h1>
//   <p>+43.32%</p>
// </div>
// </div>