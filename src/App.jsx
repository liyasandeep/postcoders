import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import PostcodeSearchForm from "./components/PostcodeSearchForm";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);

  const [postcode, setPostcode] = useState("");

  const [invalidInput, setInvalidInput] = useState(false);

  const load = async () => {
    try {
      setInvalidInput(false);
      const areaData = await getAreaData(postcode);

      setAreas(areaData);
    } catch (error) {
      console.log(error);

      setInvalidInput(true);
      setAreas([]);
      // window.alert("todo: fix app");
    }
  };

  useEffect(() => {
    load();
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <PostcodeSearchForm
        setPostcode={setPostcode}
        invalidInput={invalidInput}
      />
      {areas.length ? (
        <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
      ) : null}
    </div>
  );
}

export default App;
