import React from "react";
import FoodJournal from "./FoodJournal";
import Favorites from "./Favorites";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

const JournalContainer = () => {
  return (
    <Tabs activeLinkStyle={{}}>
      <TabLink to="tab1" className="font-weight-bold border-0 bg-white">
        <h4 className="font-weight-bolder">Food Journal</h4>
      </TabLink>
      <TabLink to="tab2" className="font-weight-bold border-0 bg-white">
        <h4 className="font-weight-bolder">Favorites</h4>
      </TabLink>

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
