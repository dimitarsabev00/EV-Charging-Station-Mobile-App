import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": GOOGLE_API_KEY,
    "X-Goog-FieldMask": [
      "places.displayName",
      "places.formattedAddress",
      "places.location",
      "places.evChargeOptions",
      "places.shortFormattedAddress",
      "places.photos",
      "places.id",
    ],
  },
};

const NewNearByPlace = (data) => axios.post(BASE_URL, data, config);

export default {
  NewNearByPlace,
  GOOGLE_API_KEY,
};
