import { useParams, useRouteError } from "react-router";

const Error = () => {
    const Err = useRouteError();
    console.log(Err,'==useRouteError');
    return (
        <div>
            <h1>oops!!</h1>
            <h2>Error Status: {Err.status}</h2>
            <h3>{Err.data}</h3>
            Page {Err.statusText}
        </div>
    )
}
export default Error;