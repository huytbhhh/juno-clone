import { useEffect, useState } from "react";
import { getAllDataFooter } from "../../api/page_api/footer.api";

const Footer = ({data}: any) =>{
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetProducts = async () => {
            const { data } = await getAllDataFooter()
            setProducts(data)
        }
        fetProducts()
    }, []);
    console.log(data)
    return (
        <div>
            <div className="text-center mt-20">

                <h1 className="text-xl font-bold ">INSTAGRAM</h1>
                <hr />
                <p className="text-lg">@juno.vn</p>
            </div>

            

                           
        <div>
    <div className='mx-auto mt-8 grid grid-cols-4 mb-[100px] gap-5 text-center ml-20 mr-20 '>
        {products.map((products)=>{
                return  <div key={products.id}>
                <img src={products.img} />
                <span className="text-lg font-light">{products.p}</span><br />
                <span>{products.price}</span> <br />
                </div>
        })}
       
       </div>
          
    
   
        </div>
<hr />
        </div>
        )
    
}
export default Footer