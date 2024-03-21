
import React, { useState } from "react";
import Card from "./Card";

function Cards(props){

    const courses=props.courses;
    const category=props.category; 
    const allCourses=[];
    const [likedCourses,setLikedCourses]=useState([]);

    //this returns the single array of all courses received from the api response
    const getCourses=()=>{

        if(category==="All"){
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                          allCourses.push(course);
                })
            })
            return allCourses;

        }
        else{   //return specific category

            return courses[category];

        }
      
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
           {
            getCourses().map((course)=>{
                return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>    //return a single card for each element of array , i.e each course
            })
           }
        </div>
    )

}

export default Cards;