import React, { useContext } from "react";
import { Image, StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { UserLocationContext } from "@/contexts/UserLocationContext";
import MapViewStyle from "../../constants/MapViewStyle.json";
export default function AppMapView() {
  const { location, setLocation } = useContext(UserLocationContext);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapViewStyle}
        region={{
          latitude: location?.latitude,
          longitude: location?.longitude,
          latitudeDelta: 0.0522,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location?.latitude,
            longitude: location?.longitude,
          }}
        >
          <Image
            source={require("../../assets/images/car-marker.png")}
            style={{ width: 60, height: 60 }}
          />
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
