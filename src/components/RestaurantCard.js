import { FOOD_IMG } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={FOOD_IMG + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>⭐ {avgRating}</h4>
        </div>
    )
}
export default RestaurantCard;