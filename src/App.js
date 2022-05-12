import "./App.css";
import StoriesContainer from "./containers/StoriesContainer";

import { Box } from "@mui/system";

function App() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          p: 3,
        }}
      >
        <StoriesContainer />
      </Box>
    </div>
  );
}

export default App;
