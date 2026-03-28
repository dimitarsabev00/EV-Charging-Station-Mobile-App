import Header from "@/components/HomeTabScreen/Header";
import SearchBar from "@/components/HomeTabScreen/SearchBar";
import { StyleSheet, View } from "react-native";
import AppMapView from "../../components/HomeTabScreen/AppMapView";
import { useContext } from "react";
import { UserLocationContext } from "@/contexts/UserLocationContext";

export default function HomeScreen() {
    const { location, setLocation } = useContext(UserLocationContext);
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar 
        searchedLocation={(location) => 
        setLocation({
          latitude:location.lat,
          longitude:location.lng
        })} />
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
