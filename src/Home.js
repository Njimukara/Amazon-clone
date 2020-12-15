import React from 'react'
import './Home.css'
import Product from './Product'
import Slider from './Slider'

function Home() {
    return (
        <div className='home'>
            <div className='jome_cntainer'>
            <div className='slide'>
                <Slider />
            </div>
            <div className="home_row">
                <Product 
                    id= '2323'
                    title='The LeanStartup'
                    image='/images/leanstartup.jpg'
                    price={23.23}
                    rating={4}
                />
                <Product 
                    id= '5676'
                    title='The Addidas Shoes'
                    image='/images/Adidas Shoes.jpg'
                    price={23.23}
                    rating={3}
                />
                <Product 
                    id = '4534'
                    title='The Play Station 4'
                    image='/images/Play station 4.jpg'
                    price={23.23}
                    rating={4}
                />
            </div>
            <div className="home_row">
                <Product id='product'
                    id = '2356'
                    title='The Samsung Smart TV'
                    image='/images/Samsung-Smart-Tv.jpg'
                    price={23.23}
                    rating={4}
                />
                <Product 
                    id = '2350'
                    title='The Samsung Galaxy S9'
                    image='/images/Samsung galaxy s9.jpg'
                    price={23.23}
                    rating={3}
                />
                
            </div>
            <div className="home_row">
                <Product 
                    id = '6765'
                    title='The Iphone 12 Pro'
                    image='/images/Iphone12 pro.jpg'
                    price={23.23}
                    rating={5}
                />
            </div>
            </div>
        </div>
    )
}


export default Home
