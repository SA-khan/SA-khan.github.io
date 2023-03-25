const Social = () => {
  return React.createElement(
    "div",
    {
      className: 'container container-fluid pt-2 pb-2'
    },
    React.createElement(
      "div",
      {
        className: 'row'
      },
      [
        React.createElement(
          "div",
          {
            className: 'col col-sm-4 text-center'
          },
          [
            React.createElement("img", { src: './public/images/gmail.png', width: 25 }),
            React.createElement("a", { href: 'mailto:saadahmed7262@gmail.com', className: 'text-dark text-decoration-none mx-2' }, 'Mail')
          ]
        ),
        React.createElement(
          "div",
          {
            className: 'col col-sm-4 text-center'
          },
          [
            React.createElement("img", { src: './public/images/stackoverflow.png', width: 30 }),
            React.createElement("a", { href: 'https://stackoverflow.com/users/6178607/assay-khan', className: 'text-dark text-decoration-none mx-2' }, 'Profile')
          ]
        ),
        React.createElement(
          "div",
          {
            className: 'col col-sm-4 text-center'
          },
          [
            React.createElement("img", { src: './public/images/github.png', width: 25 }),
            React.createElement("a", { href: 'https://github.com/SA-khan', className: 'text-dark text-decoration-none mx-2' }, 'Work')
          ]
        )
      ]
    )
  )
}

const social = document.getElementById("social-media");
const social_root = ReactDOM.createRoot(social);
social_root.render(React.createElement(Social));
