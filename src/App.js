import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData,apiUrl } from "./data";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Spinner from "./components/Spinner";
const App = () => {


  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  useEffect(()=>{
    const fetchData=async()=>{
      setLoading(true);   //Before fetching data set loading=true
        try {
            const res=await fetch(apiUrl);  //fetch data from api
            const output=await res.json();  //convert data to json format
            setCourses(output.data);   //set courses =fetched data
            console.log(courses);
            
        } catch (error) {
            toast.error("Something went wrong")
        }
        setLoading(false);    //After fetching data set loading=false
    }
    fetchData();
},[])


  return (
  <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
          <Navbar/>
      </div>
      <div className="bg-bgDark2">
      <div>
       <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
     
     <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
     {
      loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)   //If loading value is true then render spinner else render Cards
     }
     </div>
      </div>
     
     

  </div>);
};

export default App;
