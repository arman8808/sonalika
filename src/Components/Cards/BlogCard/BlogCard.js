import React from 'react'
import './BlogCard.css'
import img from '../../Assests/Image/image 18.png'
import { useNavigate } from 'react-router-dom'
function BlogCard({marginRight}) {
  const history =useNavigate()
  return (
    <div className="productcard blogcard" style={{marginRight:`${marginRight}`}}>
    <div className="productcard_top blogcard_top">
      <img src={img} alt="product img"/>
    </div>
    <div className="productcard_bottom blogcard_bottom">
      <h3>Faceted crystal bracelet</h3>
      <p>This beautiful faceted crystal bracelet is the perfect finishing touch READ MORE</p>
      <button onClick={()=>history('/singleblogpage')}>Read More</button>
    </div>
  </div>
  )
}

export default BlogCard