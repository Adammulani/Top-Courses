import React, { useEffect } from "react";
import { apiUrl } from "../data";
function Filter({filterData}){

    

    return(
        <div>
         {filterData.map((data)=>{
           return (<button key={data.id}>{data.title}</button>)
         })}
        </div>
    )

}

export default Filter;