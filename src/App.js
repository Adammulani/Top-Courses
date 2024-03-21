import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData,apiUrl } from "./data";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Spinner from "./components/Spinner";
const App = () => {


  const [courses,setCourses]=useState("");
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const fetchData=async()=>{
      setLoading(true);
        try {
            const res=await fetch(apiUrl);
            const output=await res.json();
            setCourses(output.data);
            console.log(courses);
            
        } catch (error) {
            toast.error("Something went wrong")
        }
        setLoading(false);
    }
    fetchData();
},[])


  return <div>
     <Navbar/>
     <Filter filterData={filterData}/>
     {
      loading?(<Spinner/>):(<Cards courses={courses}/>)
     }
     

  </div>;
};

export default App;
