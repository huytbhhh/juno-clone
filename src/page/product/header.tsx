import logo from '../img/header/logo.svg'
import user from '../img/header/user.png'
import cart from '../img/header/cart.png'
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
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.99952 8C4.79727 8 2.98828 6.19608 2.98828 4C2.98828 1.80392 4.79727 0 6.99952 0C9.20176 0 11.0108 1.80392 11.0108 4C11.0108 6.19608 9.20176 8 6.99952 8ZM6.99952 1.01961C5.34783 1.01961 4.01075 2.35294 4.01075 4C4.01075 5.64706 5.34783 6.98039 6.99952 6.98039C8.6512 6.98039 9.98828 5.64706 9.98828 4C9.98828 2.35294 8.6512 1.01961 6.99952 1.01961Z" fill="#2D2D2D"></path>
						<path d="M13.5281 15.9998H0.47191C0.157303 15.9998 0 15.7645 0 15.5292V12.0782C0 11.5292 0.235955 11.0586 0.707865 10.8233C4.48315 8.47036 9.59551 8.47036 13.3708 10.8233C13.764 11.0586 14.0787 11.6076 14.0787 12.0782V15.5292C14 15.7645 13.764 15.9998 13.5281 15.9998ZM1.02247 14.9802H13.0562V12.0782C13.0562 11.9213 12.9775 11.7645 12.8202 11.686C9.35955 9.5684 4.7191 9.5684 1.25843 11.686C1.10112 11.7645 1.02247 11.9213 1.02247 12.0782V14.9802Z" fill="#2D2D2D"></path>
					</svg>
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 16H0V5H15V16ZM0.789474 15.1665H14.1228V5.84209H0.789474V15.1665Z" fill="#2D2D2D"></path>
						<path d="M11.1586 7.25279H10.4849V3.78071C10.4849 2.08325 9.13752 0.694416 7.49074 0.694416C5.84395 0.694416 4.49658 2.08325 4.49658 3.78071V7.17563H3.74805V3.78071C3.74805 1.69746 5.39483 0 7.49074 0C9.58664 0 11.2334 1.69746 11.2334 3.78071V7.25279H11.1586Z" fill="#2D2D2D"></path>
						<path d="M5.09591 6.48145H3V7.25302H5.09591V6.48145Z" fill="#2D2D2D"></path>
						<path d="M11.8322 6.48145H9.73633V7.25302H11.8322V6.48145Z" fill="#2D2D2D"></path>
					</svg>
                </div>

            </div>
        </div>

    )
}
export default Header