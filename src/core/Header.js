const Header = () => {
  return React.createElement(
    "div",
    {},
    [
      //React.createElement("img",{ src: "../../public/images/profile.jpg", width: '40px', height: '40px' }, "")
      React.createElement("h4", { className: 'bg-dark text-white p-2' },
        [
          "PORTFOLIO",
          React.createElement('a', { className: 'btn btn-warning btn-sm p-1 text-decoration-none float-end' },
          "Download PDF Now!")
        ]
      )
    ]
  );
}

const header = document.getElementById("header");
const header_root = ReactDOM.createRoot(header);
header_root.render(React.createElement(Header));
