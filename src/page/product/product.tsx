type Props={data: any } 

const Product_sp = ({data}: Props) =>{
    return (
    <div >


        

        <li key={data.id}>
            <img src={data.img} />

            <span>{data.p}</span> 

            <span>{data.price}</span>



          </li>
          </div>
    )
    
}
export default Product_sp