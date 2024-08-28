import React from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import { Product } from "../types/Product";

type Props = {
  product: Product;
  onBuy: () => void; // Adiciona prop onBuy
  quantity: number;  // Adiciona prop quantity
};

export const ProductItem = ({ product, onBuy, quantity }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <View style={styles.tituloProduto}>
          <Text style={styles.name}>{product.name}</Text>
        </View>
        <View>
          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
          <Button color={"#9A5B40"} title="Comprar" onPress={onBuy} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  row: {
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    alignContent: "space-between",
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  info: {
    padding: 10,
  },
  tituloProduto: {
    flex: 1,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 10,
  },
  quantity: {
    color: "#000000",
    fontSize: 14,
    marginTop: 10,
  },
});
