/**
 * 
 * 
 */

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div",{id:"child"},"child DIV")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);