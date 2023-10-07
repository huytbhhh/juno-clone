import { useEffect, useState } from 'react';
import { getAllSale } from "../../api/page_api/sale.api";


export const Sale_product = ({ data }: any) => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetProducts = async () => {
            const { data } = await getAllSale()

            setProducts(data)
        }
        fetProducts()
    }, []);
    console.log(data)
    return (
        <div>

            <div className='text-center font-Menlo my-8'>
            <h1 className='text-center text-xl font-bold'>NHÓM SẢN PHẨM ĐƯỢC QUAN TÂM NHẤT</h1>
            </div>

            <div className='mx-auto mt-8 grid grid-cols-3 mb-[100px] gap-5 text-center ml-20 mr-20'>
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