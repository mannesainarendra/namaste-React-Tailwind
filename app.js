const parent  = React.createElement("div", {id: "parent"}, [React.createElement("h1", {}, "Hello 1st children"), React.createElement("h2", {}, "Hello 2nd children")]);
const parent2  = React.createElement("div", {id: "parent"}, [React.createElement("h3", {}, "Hello 3rd children"), React.createElement("h4", {}, "Hello 4th children")]);
// const heading = <h1 id="heading">Hello React World</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([parent, parent2]);

console.log(parent);

console.log(typeof(parent));