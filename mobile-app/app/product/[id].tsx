import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { PriceTag } from '../../components/PriceTag';
import { Button } from '../../components/Button';
import { useCart } from '@/hooks/CartContext';
import { useProduct } from '@/hooks/useProduct';

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { product } = useProduct(Number(id));
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{product.name}</Text>
        <PriceTag price={product.price} />
        <Text style={styles.description}>{product.description}</Text>
        <Button
          onPress={() => {
            addToCart(product);
            router.push('/cart');
          }}
          title="Add to Cart"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginVertical: 16,
  },
});