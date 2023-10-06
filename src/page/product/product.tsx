const Product_sp = ({data}: any) =>{
    return (
    <div className='flex flex-col'>
        <li className='flex' key={data.id}>
            <img src={data.img} />

            <span>{data.price}</span> 

            <span>{data.p}</span>

          </li>
          </div>
    )
    
}
export default Product_sp