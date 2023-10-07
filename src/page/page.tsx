import React from 'react'
import MyComponent from './fetch'
import banner1 from '../page/img/header/banner1.webp'
import Header from './product/header'
import Footer from './product/footer'
import { New_product } from './product/new_product'
// import Footer from './product/footer'
import { Sale_product } from './product/sale_product';
import { Product_goiy } from './product/goiy'
import Bosutap from './product/bosutap'
import { Footer2 } from './product/footer2'


const Admin = () => {
    return (
        <div>
            
            <Header/>
            <img src={banner1}/>
            <New_product/>
            <Sale_product/>
            
            <Product_goiy/>
            <Bosutap/>
            <Footer/>
            <Footer2/>
            

        </div>
    )
}
export default Admin