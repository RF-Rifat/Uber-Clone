import { View, FlatList } from 'react-native';
import { ProductCard } from './ProductCard';
import { useProducts } from '../hooks/useProducts';
import { CartButton } from './CartButton';

export default function ProductsScreen() {
  const { products } = useProducts();

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <CartButton />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}