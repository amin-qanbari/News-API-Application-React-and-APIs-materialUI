import React, { useEffect, useState } from "react";
import { mapTime , shorten } from "../helper/mapTime";
import { getStory } from "../services/newsApi";

//material-ui
import { Card, CardContent, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1, 2, 0, 2),
    borderRadius: "10px !important",
  },
  a: {
    textDecoration: "none !important",

    "&:hover": {
      color: "purple !important",
    },

    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },

  cardContent: {
    display: "flex",
    alignItems: "center",
    paddingBottom: theme.spacing(0),
    color: theme.palette.text.disabled,

    [theme.breakpoints.down("md")]: {
      fontSize: "1px",
    },
    "&:last-child": {
      padding: 0,
    },
  },

  subtitle1: {
    [theme.breakpoints.down("md")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px !important",
    },
  },
}));

const Story = ({ newsId }) => {
  const [story, setstory] = useState({});

  const classes = useStyles();

  useEffect(() => {
    getStory(newsId).then((data) => data && data.url && setstory(data));
  }, [newsId]);
console.log(story);
  return (
    <div>
      {story && story.url ? (
        <Card className={classes.card} sx={{}}>
          <Typography variant="h6">
            <Link className={classes.a} href={story.url}>
              {shorten(story.title)}
            </Link>
          </Typography>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.subtitle1}> by {story.by}</Typography>
            <Typography className={classes.subtitle1} variant="subtitle1">
              |
            </Typography>
            <Typography className={classes.subtitle1}>
              posted: {mapTime(story.time)}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
};

export default Story;
