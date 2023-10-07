import { useEffect, useState } from 'react';
import { getAllgoiy } from '../../api/page_api/goiy.api';
import Iproduct from '../../interface_product/interface';
export const Product_goiy = ({ data }: any) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetProducts = async () => {
            const { data } = await getAllgoiy ()

            setProducts(data)
        }
        fetProducts()
    }, []);
    console.log(data)
    return (
        <div>

            <div className='text-center font-Menlo my-8'>
                <h2 className=' text-2xl mb-3'>Hàng mới về</h2>
                <p>Các sản phẩm bắt nhịp quốc tế,nàng thời thượng không lên bỏ lỡ </p>
            </div>

            <div className='mx-auto mt-8 grid grid-cols-4 mb-[100px] gap-5 text-center ml-20 mr-20'>
                {products.map((products : Iproduct) => {
                    return (
                        <div key={products.id}>
                            <img src={products.img} />
                            <span className="text-lg font-light">{products.p}</span><br />
                            <span>{products.price}</span> <br />
                        </div>

                    )
                })}
            </div>

            
        </div>



    )


}