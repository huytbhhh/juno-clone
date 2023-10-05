import logo from '../page/img/header/logo.svg'
import user from './img/header/user.png'
import cart from './img/header/cart.png'


const Header = () => {
    return (

        <div className='flex  place-content-around bg-gray-100 ' >
            <img className='w-[90px] h-[90px] cursor-pointer' src={logo} alt="" />

            <div className='mt-8 ml-20'>
                <ul className='flex gap-7'>
                    <li className='text-sm cursor-pointer text-gray-950 hover:opacity-60 font-extralight '>HÀNG MỚI</li>
                    <li className='text-sm cursor-pointer text-gray-950 hover:opacity-60 font-extralight'>SẢN PHẨM</li>
                    <li className='text-sm cursor-pointer text-gray-950 hover:opacity-60 font-extralight'>BST LADY MOON</li>
                    <li className='text-sm cursor-pointer hover:opacity-60 font-semibold text-red-600'>SALE</li>
                    <li className='text-sm cursor-pointer hover:opacity-60 font-semibold text-red-600'> SALE QUẦN ÁO TỪ 149K</li>
                    <li className='text-sm cursor-pointer text-gray-950 hover:opacity-60 font-extralight'>SHOWROOM</li>
                </ul>
            </div>

            <div className='flex  '>
                <div className='mr-5 '>
                    <input className='bg-pink border-7  mt-8' type="Tìm Kiếm" />
                </div>

                <div className='flex  '>
                    <img className='w-[17px] h-[17px] mt-8  mr-2 ' src={user} alt="" />
                    <img className='w-[17px] h-[17px] mt-8' src={cart} alt="" />
                </div>

            </div>
        </div>

    )
}
export default Header