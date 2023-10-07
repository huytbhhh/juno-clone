import { useEffect, useState } from 'react';
import { getAllNewProduct } from '../../api/page_api/new_product';
import { forMartNumber } from '../../utils/formatNumber';
import Iproduct from '../../interface_product/interface';


export const New_product = ({ data }: any) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetProducts = async () => {
            const { data } = await getAllNewProduct ()

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
                {products.map(({id, img,p,price} : Iproduct) => {
                    return (
                        <div key={id}>
                            <img src={img} />
                            <span className="text-lg font-light">{p}</span><br />
                            <span>{forMartNumber(price)}</span> <br />
                        </div>

                    )
                })}
            </div>

            
        </div>



    )


}