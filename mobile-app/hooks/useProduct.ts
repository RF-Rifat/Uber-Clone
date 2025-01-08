import { Product } from '../types/Product';
import { products } from '../data/products';

export function useProduct(id: number) {
  const product = products.find(p => p.id === id);
  
  return {
    product,
  };
}