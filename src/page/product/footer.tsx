import { useEffect, useState } from "react";
import { getAllDataFooter } from "../../api/page_api/footer.api";
import Iproduct from "../../interface_product/interface";

const Footer = () => {
    const [products, setProducts] = useState<Iproduct[]>([]);

    useEffect(() => {
        const fetProducts = async () => {
            const { data } = await getAllDataFooter()
            setProducts(data)
        }
        fetProducts()
    }, []);
    return (
        <div>
            <div className="text-center mt-20">

                <h1 className="text-xl font-bold ">INSTAGRAM</h1>
                <hr />
                <p className="text-lg">@juno.vn</p>
            </div>
            <div>
                <div className='mx-auto mt-8 grid grid-cols-4 mb-[100px] gap-5 text-center ml-20 mr-20 '>
                    {products.map(({ id, img }: Omit<Iproduct, "price" | "p">) => {
                        return <div key={id}>
                            <img src={img} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )

}
export default Footer