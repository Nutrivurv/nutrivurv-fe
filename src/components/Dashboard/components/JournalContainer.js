import React from "react";
import FoodJournal from "./FoodJournal";
import Favorites from "./Favorites";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

const JournalContainer = () => {
  return (
    <Tabs>
      <TabLink to="tab1" className="font-weight-bold">
        Food Journal
      </TabLink>
      <TabLink to="tab2" className="font-weight-bold">
        Favorites
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
