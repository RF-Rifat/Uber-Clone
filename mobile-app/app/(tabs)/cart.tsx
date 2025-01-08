import { View, FlatList } from 'react-native';
import { CartItem } from '../../components/CartItem';
import { useCart } from '@/hooks/CartContext';
import { CartSummary } from '@/components/CartSummary';

export default function CartScreen() {
  const { cart } = useCart();

  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        ListFooterComponent={<CartSummary />}
      />
    </View>
  );
}