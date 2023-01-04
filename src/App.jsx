import { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [postcodeTextInput, setPostcodeTextInput] = useState("");
  const [postcode, setPostcode] = useState("");

  const load = async () => {
    try {
      const areaData = await getAreaData(postcode);

      setAreas(areaData);
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  useEffect(() => {
    load();
  }, [postcode]);

  const handleChange = (event) => {
    setPostcodeTextInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPostcode(postcodeTextInput);
    setPostcodeTextInput("");
  };
  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form className="postcodeSearchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the outcode part of the postcode (eg: BB10 for 'BB10 2BQ)"
          onChange={handleChange}
          value={postcodeTextInput}
          className="postcodeText"
        />
        <button className="searchBtn">Search</button>
      </form>
      {areas.length ? (
        <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
      ) : null}
    </div>
  );
}

export default App;
