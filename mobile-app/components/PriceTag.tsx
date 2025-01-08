import { Text, StyleSheet } from 'react-native';

type Props = {
  price: number;
};

export function PriceTag({ price }: Props) {
  return (
    <Text style={styles.price}>
      ${price.toFixed(2)}
    </Text>
  );
}

const styles = StyleSheet.create({
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
});