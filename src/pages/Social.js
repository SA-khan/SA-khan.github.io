const Social = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "div",
      {
        className: 'row'
      },
      React.createElement(
        "div",
        {
          className: 'col col-sm-4'
        },
        [
          React.createElement("p", null, "Visit Gmail")
        ]
      )
    )
  )
}

const social = document.getElementById("social_media");
const social_root = ReactDOM.createRoot(social);
social_root.render(React.createElement(Social)); 
