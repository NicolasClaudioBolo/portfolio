import React from 'react'
import upArrow from '../assets/upload.png'
import {Link as LinkScroll} from 'react-scroll'

const BackToTop = () => {
  return (
    <div>
      <LinkScroll to='top' spy={true} smooth={true} offset={-100} duration={400}>
        <img src={upArrow} style={{height:70, backgroundColor:'white', borderRadius:360, marginBottom:25}} alt='back to top'/>
      </LinkScroll>
    </div>
  )
}

export default BackToTop
