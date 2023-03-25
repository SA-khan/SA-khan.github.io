const GeneralInformation = () => {
  return React.createElement(
    "div",
    {
      className : 'container container-fluid'
    },
    React.createElement(
      "div",
      {
        className: "row no-gutters shadow"
      },
      [
        React.createElement(
          "div",
          {
            className: 'col col-3'
          },
          React.createElement("div", { className: 'float-end' }, 'Full Name:')
        ),
        React.createElement(
          "div",
          {
            className: 'col'
          },
          React.createElement("div", null, 'Muhammad Saad Ahmed')
        )
      ]
    )
  )
}

const GI = document.getElementById("GeneralInfo");
const GI_root = ReactDOM.createRoot(GI);
GI_root.render(React.createElement(GeneralInformation));
