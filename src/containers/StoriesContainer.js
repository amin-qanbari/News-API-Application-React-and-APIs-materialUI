import React, { useEffect, useState, useContext } from "react";

//api
import { getStoryIds } from "../services/newsApi";

//material-ui
import { Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

//components
import Loader from "../components/Loader/Loader";
import Story from "../components/Story";
import { MaterialUISwitch } from "../components/Switch/Switch";
//context
import { ColorModeContext } from "../components/store/colorContextProvider";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "1000px",
    padding: theme.spacing(2, 0, 4, 0),
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    color: theme.palette.warning.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "30px !important",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px !important",
    },
  },
}));

const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [visible, setVisible] = useState(10);
  const { toggleMode } = useContext(ColorModeContext);


  const classes = useStyles();

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  useEffect(() => {
    getStoryIds().then((data) => {
      setStoryIds(data);
      setIsShown(true);
    });
  }, []);

  return (
    <Container className={classes.container}>
      <div className={classes.title}>
        <Typography variant="h4" className={classes.logo}>
          Hacker News Stories
        </Typography>
        <MaterialUISwitch onClick={toggleMode} />
      </div>
      <div>
        {storyIds.length === 0 ? (
          <Loader />
        ) : (
          storyIds
            .slice(0, visible)
            .map((newsId) => <Story key={newsId} newsId={newsId} />)
        )}
      </div>
      <div>
        {storyIds.length !== 0 && isShown && (
          <Button
            size="small"
            color="warning"
            variant="contained"
            onClick={showMoreItems}
          >
            load more
          </Button>
        )}
      </div>
    </Container>
  );
};

export default StoriesContainer;
