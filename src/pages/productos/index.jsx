import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Products = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/productos/encuestas-en-linea');
  });
  return (
    <>
    </>
  );
};

export default Products;
