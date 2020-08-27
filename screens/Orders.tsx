import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, BackHeader, OrderCard } from "../components";
import { white } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { orders } from "../data/orders";

interface OrdersProps {}

const Orders = (props: OrdersProps) => {
  const { top: height } = useSafeAreaInsets();
  return (
    <>
      <View style={{ height, backgroundColor: white }} />
      <ScrollView style={{ backgroundColor: white }}>
        <BackHeader />
        <View style={styles.container}>
          <Text size="big" weight="medium">
            Orders
          </Text>
          {orders.map((order, index) => (
            <OrderCard product={order} key={index} first={index === 0} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
