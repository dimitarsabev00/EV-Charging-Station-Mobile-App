import { FlatList, View } from "react-native";
import PlaceItem from "./PlaceItem";

export default function PlaceListView({ placeList }) {
  return (
    <View>
      <FlatList
        data={placeList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View key={index}>
            <PlaceItem place={item} />
          </View>
        )}
      />
    </View>
  );
}
