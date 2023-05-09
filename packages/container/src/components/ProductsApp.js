import { mount } from 'products/ProductsApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount();
  }, []);
  return (
    <div>
      <app-root></app-root>
    </div>
  );
};
