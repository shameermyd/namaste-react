import { useEffect, useState } from "react";
import { SWIGGY_API } from "./constants";
import { useParams } from "react-router";

const useRestaurantFetch = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchResData()
    },[])  
    
    

    const fetchResData = async ()=>{
        const data = await fetch(SWIGGY_API);
        const jsonData = await data?.json();
        
        const restJsonLiveData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResInfo(restJsonLiveData);
    }

    return resInfo;
}

export default useRestaurantFetch;
