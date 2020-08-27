import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import {
  Text,
  BackHeader,
  Button,
  DottedButton,
  OrderSummary,
} from "../components";
import { StackScreenProps } from "@react-navigation/stack";
import { CartStackParamList } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { white } from "../constants/Colors";
import { paymentCards } from "../data/paymentcards";
import { width } from "../constants/Layout";

const ITEM_WIDTH = width * 0.8;

const Payment = ({
  navigation,
}: StackScreenProps<CartStackParamList, "Payment">) => {
  const { top: height, bottom } = useSafeAreaInsets();

  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <Text size="big" weight="medium" style={{ marginLeft: 20 }}>
          Payment
        </Text>
        <View style={styles.cards}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_WIDTH}
            snapToAlignment="center"
            decelerationRate="fast"
            contentContainerStyle={{
              height: 250,
              alignItems: "center",
            }}
          >
            {[
              { name: "first", image: null },
              ...paymentCards,
              { name: "last", image: null },
            ].map(({ image }, index) => {
              if (index === 0 || index === 4) {
                return (
                  <View
                    key={index}
                    style={{ width: (width - ITEM_WIDTH) / 2 }}
                  />
                );
              }
              return (
                <View key={index} style={styles.imageContainer}>
                  <Image
                    source={image}
                    style={styles.cardImage}
                    resizeMode="contain"
                  />
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View style={{ width: "100%", padding: 20 }}>
          <OrderSummary />
        </View>
      </ScrollView>
      <View style={{ ...styles.buttons }}>
        <DottedButton label="Add Card" onPress={() => {}} />
        <Button
          label="Checkout"
          onPress={() => navigation.navigate("Checkout")}
        />
      </View>
    </>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  buttons: {
    width: "100%",
    bottom: 0,
    left: 0,
    backgroundColor: white,
    paddingBottom: 20,
  },
  imageContainer: {
    width: ITEM_WIDTH,
    alignItems: "center",
  },
  cardImage: {
    width: ITEM_WIDTH * 0.92,
    height: ITEM_WIDTH * 0.92,
  },
  cards: {
    height: 250,
  },
});
