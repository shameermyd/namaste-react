import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import { useParams } from "react-router";
import useRestaurantFetch from "../utils/useRestaurantFetch";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantFetch();
    
    return (
        <div className="res-menu">
            {
                resInfo?.
                    filter(res => res?.info?.id == resId)
                    .map(res => (
                        <div key={res?.info?.id}>
                            <h1>{res?.info?.name}</h1>
                        </div>

                        //console.log(res.info.name,'====resss');
                    ))
            }
        </div>
    );
};

export default RestaurantMenu;
