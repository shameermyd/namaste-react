import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router";


const Body = () => {
    const [restList, setRestList] = useState([]);
    const [filterResList, setFilterResList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const restLiveData = await fetch(SWIGGY_API);
        
        const jsonData = await restLiveData.json();
        
        const restJsonLiveData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setRestList(restJsonLiveData);
        setFilterResList(restJsonLiveData);
    }


    return restList?.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <input type="text" className="search-text" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                <button
                    className="search-btn"
                    onClick={() => {
                        const searchedList = restList.filter(
                            (res) => res?.info?.name?.includes(searchText)
                        );
                        setFilterResList(searchedList);

                    }}
                >
                    Seach
                </button>

                <button
                    className="filter-btn"
                    onClick={() => {
                        const fileredList = restList.filter(
                            res => res.info.avgRating > 4.5
                        );
                        setRestList(fileredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">

                {filterResList?.map((restaurant) => (
                    <Link 
                        key={restaurant.info.id}
                        to={"/restaurant/"+restaurant.info.id}
                    >
                        <RestaurantCard  resData={restaurant} />
                    </Link>
                    
                ))
                }

            </div>
        </div>
    )
}

export default Body;