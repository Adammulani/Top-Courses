import React from "react";
import {FcLike} from "react-icons/fc"

function Card({course}){
  
     function clickHandler(){
        
     }

  return(
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden">
        <div className="relative">
            <img src={course.image.url}></img>
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
            <button onClick={clickHandler}>
                <FcLike fontSize="1.75rem"/>
            </button>
        </div>
        </div>
       
        <div>
            <p className="text-white font-semibold text-lg leading-6 px-3 py-2">{course.title}</p>
            <p className="mt-2 text-white px-3">{course.description}</p>
        </div>
    </div>
  )

}

export default Card;

