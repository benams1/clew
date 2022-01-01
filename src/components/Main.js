import React, {useEffect} from "react";
import Form from "./Form";
import Typography from "@mui/material/Typography";
import useStore from "../store/useStore";
import {observer} from "mobx-react";

const Main = () => {
  const store = useStore()
  return(
    <div className="App">
      <header className={"header"}>
        <Typography variant="h3" component="div" gutterBottom className={"h-1"}>
          Clew Assignment Form
        </Typography>
      </header>
      <body>
        <Form questions={store.activeForm} />
      </body>
    </div>)
}


Main.propTypes = {}

export default Main;
