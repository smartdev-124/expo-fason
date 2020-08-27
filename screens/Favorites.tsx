import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, BackHeader, ProductCard } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { white } from "../constants/Colors";
import { useAppContext } from "../context/Context";
import { StackScreenProps } from "@react-navigation/stack";
import { FavoriteStackParamList } from "../types";

const Favorites = ({
  navigation,
}: StackScreenProps<FavoriteStackParamList, "Favorite">) => {
  const { top: height } = useSafeAreaInsets();
  const { favourites } = useAppContext();
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <Text
          size="big"
          weight="medium"
          style={{ marginLeft: 20, marginBottom: 20 }}
        >
          Favorites
        </Text>
        {favourites.length > 0 ? (
          <View style={styles.content}>
            {favourites.map((favourite, index) => (
              <ProductCard product={favourite} key={index} noMarginRight />
            ))}
          </View>
        ) : (
          <Text
            size="small"
            weight="medium"
            style={{ marginTop: 140, textAlign: "center" }}
          >
            You have no favorite items set
          </Text>
        )}
      </ScrollView>
    </>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});
