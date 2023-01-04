import axios from "axios";

export const getAreaData = async (postcode) => {
  console.log(postcode);
  if (postcode) {
    const { data } = await axios.get(
      `https://api.zippopotam.us/GB/${postcode}`
    );

    return data.places;
  } else {
    return [];
  }
};
