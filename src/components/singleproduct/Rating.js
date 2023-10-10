import React from 'react'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
const Rating = (props) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return <span key={index} style={{color:"#FFD700"}}>
            {
                props.star >= index + 1 ? <FaStar /> : props.star >= number ? <FaStarHalfAlt /> : <AiOutlineStar />
            }
        </span>
    })
    return (
        <div>
            {ratingStar}
            <p>{props.count} customer reviews</p>
        </div>
    )
}

export default Rating
