import React from 'react'
import './DealoFWeek.css'
import { Link } from 'react-router-dom'
import Testimonial from '../../Cards/Testimonial/Testimonial'
import ProductCard from '../../Cards/ProductCard/ProductCard'
import Usertestimonial from '../Usertestimonial/Usertestimonial'
function DealoFWeek() {
  return (
    <div className='dealofweek'>
        <div className="dealofweek_left">
            <div className="dealofweek_left_heading">
                <h3>Testimonials</h3>
            </div>
            <div className="dealofweek_left_card">
                <Testimonial/>
                {/* <Usertestimonial/> */}
            </div>
        </div>
        <div className="dealofweek_right">
            <div className="dealofweek_right_heading">
                <span>
                    <h3>Deals of the Week</h3>
                    <p>Dont miss out on this weeks deals</p>
                </span>
                <Link to='#'>View More</Link>
            </div>
            <div className="dealofweek_right_card">
                <ProductCard marginright={'20px'}/>
                <ProductCard marginright={'20px'}/>
                <ProductCard marginright={'20px'}/>
                
            </div>
        </div>
    </div>
  )
}

export default DealoFWeek