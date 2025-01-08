import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartProduct } from '../types/Product';
import { useCart } from '@/hooks/CartContext';
import { PriceTag } from './PriceTag';

type Props = {
  item: CartProduct;
};

export function CartItem({ item }: Props) {
  const { removeFromCart } = useCart();

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.name}</Text>
        <PriceTag price={item.price} />
      </View>
      <Pressable
        onPress={() => removeFromCart(item.id)}
        style={styles.removeButton}
      >
        <Ionicons name="trash-outline" size={24} color="#ff4444" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  removeButton: {
    padding: 4,
  },
});