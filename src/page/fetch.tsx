import { New_Product } from './product/new_product';



// Khai báo kiểu dữ liệu 


// Tạo 1 component
 const ProductList = () => {
  return(
    <h1></h1>

  )
  // // Khai báo biến dùng useState để lưu trữ dữ liệu
  // const [products, setProducts] = useState<Iproduct[]>([]);

  // // Dùng useEffect để call API 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://localhost:3000/products');
  //       const data: Iproduct[] = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching product list:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(products);

  // if (!products.length) {
  //   return <div>Loading...</div>;
  // }

  // return (
    // <></>
    // <div>

    //   {products.map((productData, index) => (
    //     <div key={index}>
    //       {/* <div className='text-center font-Menlo my-8'>
    //         <h2 className=' text-2xl mb-3'>Hàng mới về</h2>
    //       <p>Các sản phẩm bắt nhịp quốc tế,nàng thời thượng không lên bỏ lỡ </p>
    //       </div> */}
    //         <div className='text-center pt-10 pb-10'>
    //         <h1 className='text-xl font-bold'>HÀNG MỚI VỀ</h1>
    //         <p className='text-lg font-light'>Các sản phẩm bắt nhịp quốc tế,nàng thời thượng không lên bỏ lỡ</p>
    //         </div>

    //       {/* <ul className='mx-auto gap-5 mt-9 mb-20 leading-10 flex text-center items-center  '> */}


    //       <ul className='mx-auto mt-8 grid grid-cols-4 mb-[100px] gap-5 text-center ml-20 mr-20'>
    //         {productData.product_new.map((data) => (
    //           <Product_sp  data={data} key={data.id} />
    //         ))}
    //        <img className='' />
         
    //       </ul>

    //           <hr className='mb-10'/>
    //       <h1 className='text-center text-xl font-bold'>NHÓM SẢN PHẨM ĐƯỢC QUAN TÂM NHẤT</h1>


    //       <ul className='gap-5 mt-9 mb-20 leading-10 flex text-center items-center  '>
    //         {productData.product_sale.map((data) => (
    //           <Product_sp data={data} key={data.id} />
    //         ))}
    //         <img className='w-80 ' />
    //       </ul>
    //       <hr className='mt-10 mb-10'/>

    //       <div>
    //           <Bosutap/>
    //           </div>

    //       <ul className='mx-auto mt-8 grid grid-cols-4 mb-[100px] gap-5 text-center ml-20 mr-20'>
    //         {productData.product_goiy.map((data) => (
    //           <Product_sp data={data} key={data.id} />
    //         ))}
    //       </ul>
    //     </div>
    //   ))}

    // </div>

}

export default ProductList;
