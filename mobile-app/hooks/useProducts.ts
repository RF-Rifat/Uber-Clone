import { useState, useEffect } from 'react';
import { Product } from '../types/Product';
import { products } from '../data/products';

export function useProducts() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return {
    products,
    loading,
  };
}