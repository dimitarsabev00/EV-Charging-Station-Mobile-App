import Header from "@/components/HomeTabScreen/Header";
import SearchBar from "@/components/HomeTabScreen/SearchBar";
import { UserLocationContext } from "@/contexts/UserLocationContext";
import GlobalApi from "@/services/GlobalApi";
import { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AppMapView from "../../components/HomeTabScreen/AppMapView";

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    location && GetNearByPlace();
  }, [location]);

  /**
   * Used to get Near by place using google place api
   */
  const GetNearByPlace = () => {
    const data = {
      includedTypes: ["electric_vehicle_charging_station"],
      maxResultCount: 10,
      locationRestriction: {
        circle: {
          center: {
            latitude: location?.latitude,
            longitude: location?.longitude,
          },
          radius: 5000.0,
        },
      },
    };
    GlobalApi.NewNearByPlace(data).then((res) => {
      console.log(res.data?.places);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar
          searchedLocation={(location) =>
            setLocation({
              latitude: location.lat,
              longitude: location.lng,
            })
          }
        />
      </View>
      <AppMapView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 60,
    width: "100%",
    paddingHorizontal: 20,
  },
});
