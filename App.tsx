import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, Image, Text, View, FlatList } from 'react-native';
import { list } from './data';
import { ProductItem } from './components/product-item';
import { Product } from './types/Product';

export default function App() {
  const [quantity, setQuantity] = useState(0); // Estado para controlar a quantidade de produtos

  const handleBuy = () => {
    setQuantity(quantity + 1); // Incrementa a quantidade de produtos
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.cabecalho}>
        <Image
          source={require('./assets/voltar.png')}
          style={styles.voltarCabecalho}
        />
        <Text style={styles.textocabecalho}>BIG SUPLEMENTOS</Text>
        <Image
          source={require('./assets/busca.png')}
          style={styles.buscaCabecalho}
        />
      </View>
      <View style={styles.compras}>
        <Image
          source={require('./assets/home.png')}
          style={styles.iconCompras}
        />
        <Image
          source={require('./assets/usuario.png')}
          style={styles.iconCompras}
        />
        <View style={styles.carrinho}>
          <Image
            source={require('./assets/carrinho.png')}
            style={styles.iconCompras}
          />
          {/* Exibir a quantidade de produtos ao lado do ícone do carrinho */}
          <Text style={styles.h1}>+{quantity}</Text>
        </View>
        <Image
          source={require('./assets/menu.png')}
          style={styles.iconCompras}
        />
      </View>
      <View style={styles.produtos}>
        <FlatList
          data={list}
          renderItem={({ item }: { item: Product }) => (
            <ProductItem
              product={item}
              onBuy={handleBuy} // Passa a função handleBuy para incrementar a quantidade
              quantity={quantity} // Passa o estado quantity para o componente ProductItem
            />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cabecalho: {
    backgroundColor: '#000',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  voltarCabecalho: {
    width: 20,
    height: 20,
  },
  textocabecalho: {
    fontSize: 16,
    color: '#fff',
  },
  buscaCabecalho: {
    width: 20,
    height: 20,
  },
  compras: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#9A5B40',
    height: 50,
  },
  iconCompras: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    elevation: 5,
    width: 40,
    height: 40,
  },
  carrinho: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  h1: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 1,
  },
  produtos: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
