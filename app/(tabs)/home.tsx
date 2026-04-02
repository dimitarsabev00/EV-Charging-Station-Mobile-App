import Header from "@/components/HomeTabScreen/Header";
import PlaceListView from "@/components/HomeTabScreen/PlaceListView";
import SearchBar from "@/components/HomeTabScreen/SearchBar";
import { SelectMarkerContext } from "@/contexts/SelectMarkerContext";
import { UserLocationContext } from "@/contexts/UserLocationContext";
import GlobalApi from "@/services/GlobalApi";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AppMapView from "../../components/HomeTabScreen/AppMapView";

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);
  const [placeList, setPlaceList] = useState([]);
  const [selectedMarker,setSelectedMarker] = useState([]);
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
      setPlaceList(res.data?.places);
    });
  };

  return (
    <SelectMarkerContext.Provider value={{selectedMarker,setSelectedMarker}}>
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
        {placeList && <AppMapView placeList={placeList} />}

        <View>
          <View style={styles.placeListContainer}>
            {placeList && <PlaceListView placeList={placeList} />}
          </View>
        </View>
      </View>
    </SelectMarkerContext.Provider>
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
  placeListContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    width: "100%",
  },
});
