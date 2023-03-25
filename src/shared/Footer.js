const Footer = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("p", { className: "text-center small border border-light p-2" }, " 2023 - All Right Reserved ")
  );
}

const footer = document.getElementById("footer");
const footer_root = ReactDOM.createRoot(footer);
footer_root.render(React.createElement(Footer));
