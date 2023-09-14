import React, { Fragment } from "react";
import NavScrollExample from "./component/Navbar";
import BasicExample from "./component/Cardlist";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Fragment>
      <div>

        {/* this is a bootstrap navbar  */}
        <NavScrollExample />
      </div>
      <div class="container" style={{ marginTop: '80px' }}>
        <div class="row">
          <div class="col-4"></div>
          <div class="col-4">

            {/* This is the Heading */}
            <h2>St_Manuel Check list</h2>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
      <div>
        {/* This is the bootstrap Card  */}
        <BasicExample/>
      </div>
    </Fragment>
  );
}

export default App;
