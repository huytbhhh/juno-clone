import { useEffect, useState } from 'react';
import { getAllNewProduct } from '../../api/page_api/new_product';


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
                {products.map((products) => {
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