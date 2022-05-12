import React, { useEffect, useState } from "react";
import { mapTime } from "../helper/mapTime";
import { getStory } from "../services/newsApi";

const Story = ({ storyId }) => {
  const [story, setstory] = useState({});
  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setstory(data));
  }, [storyId]);
  return story && story.url ? (
    <>
      <a href={story.url}>
        {story.title}
      </a>
      By: <p>{story.by}</p>
      Posted: <p>{mapTime(story.time)}</p>
    </>
  ) : null;
};

export default Story;
