import { useCart } from "@/hooks/CartContext";
import { View, Text, StyleSheet } from "react-native";

export function CartSummary() {
  const { getTotalPrice } = useCart();
  const total = getTotalPrice();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal:</Text>
        <Text style={styles.amount}>${total.toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Shipping:</Text>
        <Text style={styles.amount}>Free</Text>
      </View>

      <View style={[styles.row, styles.totalRow]}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.checkoutButton}>Proceed to Checkout</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: "#666",
  },
  amount: {
    fontSize: 16,
    fontWeight: "500",
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 8,
    marginTop: 8,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007AFF",
  },
  buttonContainer: {
    marginTop: 16,
  },
  checkoutButton: {
    backgroundColor: "#007AFF",
    color: "white",
    padding: 16,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
