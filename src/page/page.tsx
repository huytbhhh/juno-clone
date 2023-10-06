import React from 'react'
import Header from './header'
import MyComponent from './fetch'
import banner1 from '../page/img/header/banner1.webp'


const Admin = () => {
    return (
        <div>
            
            <Header/>
            <img src={banner1}/>
            <MyComponent/>
        </div>
    )
}
export default Admin