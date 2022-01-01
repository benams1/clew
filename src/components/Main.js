import React from "react";
import Form from "./Form";
import Typography from "@mui/material/Typography";
import useStore from "../store/useStore";
import {observer} from "mobx-react";
import Box from "@mui/material/Box";

const Main = () => {
  const store = useStore()
  return(
    <div className="App">
      <header className={"header"}>
        <Typography variant="h3" component="div" gutterBottom className={"h-1"} style={{ textAlign: "center" }}>
          Clew Assignment Form
        </Typography>
      </header>
      <Box sx={{ paddingTop:5 ,flexGrow: 1, overflow: 'hidden', px: 3, width: 250, margin: "0 auto" }}>
        <Form questions={store.activeForm} number={store.updates} />
      </Box>
    </div>)
}


Main.propTypes = {}

export default observer(Main);
