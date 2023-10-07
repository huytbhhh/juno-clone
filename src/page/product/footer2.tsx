import { useEffect, useState } from 'react';
import { getAllDataFooter2 } from '../../api/page_api/footer2.api';


export const Footer2 = ({ data }: any) => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetProducts = async () => {
            const { data } = await getAllDataFooter2()

            setProducts(data)
        }
        fetProducts()
    }, []);
    console.log(data)
    return (
        <div className=' flex gap-5 justify-center items-center border-t border-gray-500  text-center '>
 
            <div className='w-[471px] '>
               
                <ul>
                    <p>GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</p>
                    <h1>1800 1162</h1>
                    <p>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</p>
                </ul>

                <ul>
                    <p>GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</p>
                    <h1>1800 1162</h1>
                    <p>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</p>
                </ul>
            </div>

            <div className='flex gap-5 text-center'>
                
                {products.map((products : any) => {
                    return (
                        <div className='W-[471px]' key={products.id}>
                            <p>Hệ Thống</p>
                            <img className='w-[431px]' src={products.img} />
                            <span className="text-lg font-light">{products.p}</span><br />
                            <span>{products.price}</span> <br />
                        </div>

                    )
                })}
            </div>


        </div>



    )


}

// export const Footer2 = () =>{
//     return (
//         <div>

//             <div>
//                 <ul>
//                 <p>GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</p>
//                 <h1>1800 1162</h1>
//                 <p>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</p>
//                 </ul>

//                 <ul>
//                 <p>GỌI MUA HÀNG ONLINE (08:00 - 21: 00 mỗi ngày)</p>
//                 <h1>1800 1162</h1>
//                 <p>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</p>
//                 </ul>
//             </div>






//         </div>

//     )
// }