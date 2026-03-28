import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Colors from "../../constants/Colors";

export default function SearchBar({ searchedLocation }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 15,
        paddingHorizontal: 5,
        backgroundColor: Colors.WHITE,
        borderRadius: 6,
      }}
    >
      <Ionicons
        name="location-sharp"
        size={24}
        color={Colors.GRAY}
        style={{ paddingTop: 10 }}
      />
      <GooglePlacesAutocomplete
        placeholder="Search EV Charging Station"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true

          searchedLocation(details?.geometry?.location);
        }}
        query={{
          key: "AIzaSyB9ctiAb-J9CZil_ZlpAg3ZOXpxwudHlNw", // change this key!! ITS FAKEE
          language: "en",
        }}
      />
    </View>
  );
}
