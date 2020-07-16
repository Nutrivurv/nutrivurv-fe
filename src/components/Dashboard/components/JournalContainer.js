import React from "react";
import FoodJournal from "./FoodJournal";
import Favorites from "./Favorites";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

const JournalContainer = () => {
  return (
    <Tabs activeLinkStyle={{}}>
      <div className="w-75" style={{ margin: "0px auto" }}>
        <TabLink to="tab1" className="font-weight-bold border-0 bg-light ">
          <h4 className="font-weight-bolder">Food Journal</h4>
        </TabLink>
        <TabLink to="tab2" className="font-weight-bold border-0 bg-light">
          <h4 className="font-weight-bolder">Favorites</h4>
        </TabLink>
      </div>

      <TabContent for="tab1">
        {" "}
        <FoodJournal />{" "}
      </TabContent>
      <TabContent for="tab2">
        {" "}
        <Favorites />{" "}
      </TabContent>
    </Tabs>
  );
};

export default JournalContainer;
