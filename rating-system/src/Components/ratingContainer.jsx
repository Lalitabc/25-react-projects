import { useState } from 'react';
import Styles from './ratingContainer.module.css'
import { FaStar } from "react-icons/fa";
const RatingContainer = ({ arr }) => {

    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    function onMouseMove(e){
        setHover(e)


    }
    
    function onClickHandle(e){
        setRating(e)
    }

    function onMouseLeave(e){
        setHover(rating)
    }
    return (<>
        <div className={Styles.ratingContainer}>
            <div className="rating">
                {arr.map((_, index) => {
                    index +=1
                    return <FaStar
                        className={`${index <=( hover || rating) ?  Styles.active : Styles.inActive} ${Styles.star}`}
                        key={index}
                        onMouseMove={()=>onMouseMove(index)}
                        onMouseLeave={()=> onMouseLeave(index)}
                        onClick={(e)=>onClickHandle(index)}
                    />
                 } )}
            </div>

        </div>

    </>)

}

export default RatingContainer;