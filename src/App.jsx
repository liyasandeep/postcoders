import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import PostcodeSearchForm from "./components/PostcodeSearchForm";
import Grid from "@mui/material/Grid";
import CardInfo from "./components/CardInfo";
import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);

  const [postcode, setPostcode] = useState("");

  const [invalidInput, setInvalidInput] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [areaCacheMap, setAreaCacheMap] = useState(new Map());

  const cacheArea = async () => {
    if (!areaCacheMap.has(postcode)) {
      await areaCacheMap.set(postcode, getAreaData(postcode));
    }
    // console.log(areaCacheMap);
    return areaCacheMap.get(postcode);
  };
  const load = async () => {
    try {
      setIsLoading(true);
      setInvalidInput(false);
      const areaData = await cacheArea();

      setAreas(areaData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // console.log(error);

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

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Grid
          container
          spacing={2}
          style={{
            padding: "10px 40px",
          }}
        >
          {areas.map((place, index) => {
            return (
              <CardInfo place={place} index={index} key={index}></CardInfo>
            );
          })}
        </Grid>
      )}
    </div>
  );
}

export default App;
