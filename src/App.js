import React, { useState } from "react";

import SelectBox from "devextreme-react/select-box";
import List from "devextreme-react/list";

import { products } from "./data.js";

function ItemTemplate(data) {
  return <div>{data.Name}</div>;
}

function App(props) {
  const [searchMode, setSearchMode] = useState("contains");
  const [selectedItemKeys, setselectedItemKeys] = useState([]);

  const onSearchModeChange = args => {
    setSearchMode(args.value);
  };
  const onOptionChanged = e => {
    if (e.name === "selectedItemKeys") {
      setselectedItemKeys(e.value);
    }
  };

  return (
    <React.Fragment>
      <div className={"list-container"}>
        <List
          dataSource={products}
          height={400}
          itemRender={ItemTemplate}
          // search
          searchExpr={"Name"} // change to array will cause error
          searchEnabled={true}
          searchMode={searchMode}
          // selection
          showSelectionControls={true}
          selectedItemKeys={selectedItemKeys}
          selectionMode={"all"}
          selectAllMode={"allPages"}
          onOptionChanged={onOptionChanged} // if comment out, searchExpr use arrage still fine
        />
      </div>
      <div className={"options"}>
        <div className={"caption"}>Options</div>
        <div className={"option"}>
          <span>Search mode </span>
          <SelectBox
            items={["contains", "startsWith"]}
            value={searchMode}
            onValueChanged={onSearchModeChange}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
