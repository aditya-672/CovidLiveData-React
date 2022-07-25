import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RCard(props) {
  const imgsrc = "https://countryflagsapi.com/png/" + props.searchh;
  const [expanded, setExpanded] = React.useState(false);
  // const [county,setCounty] = useState(props.searchh)
  const [dataset, setDataset] = useState([]);

  const getData = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "e4e5ed95c2msh1fbb7a489c8c97fp14204djsn763c3122b4d4",
        "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
      },
    };
    const res = await fetch(
      "https://covid-193.p.rapidapi.com/statistics?country=" + props.searchh,
      options
    );
    const data = await res.json();
    const list = data.response;
    setDataset(list);
    // console.log(list[0].country);
  };
  useEffect(() => {
    getData();
  }, [props.searchh]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {dataset.map((item) => {
        return (
          <>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  I
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  {/* <MoreVertIcon /> */}
                  <div>
                <span className="indicator online"></span><span className="LIVE">LIVE</span>
              </div>
                </IconButton>
              }
              title={item.country}
              subheader={item.day}
            >
              
            </CardHeader>
            <CardMedia>
              <img alt="sorrt" id="myImageID" src={imgsrc}></img>
            </CardMedia>
            <CardContent></CardContent>
            <CardActions disableSpacing>
              <span>{Date(item.day)}</span>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Cases : {item.cases.total}</Typography>
                <Typography paragraph>Deaths : {item.deaths.total}</Typography>
                <Typography paragraph>
                  Total Tests Done : {item.tests.total}
                </Typography>
              </CardContent>
            </Collapse>
          </>
        );
      })}
    </Card>
  );
}
