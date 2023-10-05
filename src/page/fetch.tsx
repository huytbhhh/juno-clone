import React, { useState, useEffect } from 'react';
import Product_sp from './product/product';

// Khai báo kiểu dữ liệu 
interface IProduct {
  products: {
    prouct_sale: IProductSale[];
    product_new: IProductNew[];
  }[];
}

interface IProductSale {
  id: number;
  img: string;
  price: string;
  p: string;
}

interface IProductNew {
  id: number;
  img: string;
  price: string;
  p: string;
}

// Tạo 1 component
const ProductList: React.FC = () => {
  // Khai báo biến dùng useState để lưu trữ dữ liệu
  const [products, setProducts] = useState<IProduct[]>([]);

  // Dùng useEffect để call API 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const data: IProduct[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching product list:', error);
      }
    };

    fetchData();
  }, []);

  console.log(products);

  if (!products.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* {products.map((productData, index) => (
        <div key={index}>
          <h2>Hàng mới về</h2>
          <ul className='grid grid-cols-4'>
            {productData.products.product_new.map((data) => (
              <Product_sp data={data} key={data.id} />
            ))}
          </ul>
        </div>
      ))} */}
    </div>
  );
};

export default ProductList;
