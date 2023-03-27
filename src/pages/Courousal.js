const Courousal = () => {
  return React.createElement(
    "div",
    {
      className: 'container container-fluid'
    },
    React.createElement(
      "div",
      {
        className: 'row no-gutters'
      },
      [
        React.createElement(
          "div",
          {
            className: 'col-sm-4'
          },
          React.createElement("div",
          {
            className: 'card shadow',
          },
            React.createElement(
              "div",
              {
                className: 'text-center'
              },
              [
                React.createElement(
                  "img",
                  {
                    src: "./public/images/travel.png",
                    width: 410,
                    height: 200,
                    overflow: 'hidden',
                    className: 'card-img-top'
                  }
                ),
                React.createElement(
                  "div",
                  {
                    className: 'card-body'
                  },
                  React.createElement(
                    "div",
                    {
                      className: 'card-title'
                    },
                    'Travelling & Tour'
                  )
                )
              ]
            )
          )
        ),
        React.createElement(
          "div",
          {
            className: 'col-sm-4'
          },
          React.createElement("div",
          {
            className: 'card shadow',
          },
          React.createElement(
            "div",
            {
              className: 'text-center'
            },
            [
              React.createElement(
                "img",
                {
                  src: "./public/images/blogs.png",
                  width: 410,
                  height: 200,
                  overflow: 'hidden',
                  className: 'card-img-top'
                }
              ),
              React.createElement(
                "div",
                {
                  className: 'card-body'
                },
                React.createElement(
                  "div",
                  {
                    className: 'card-title'
                  },
                  'Blogs'
                )
              )
            ]
          )
          )
        ),
        React.createElement(
          "div",
          {
            className: 'col-sm-4'
          },
          React.createElement("div",
          {
            className: 'card shadow',
          },
          React.createElement(
            "div",
            {
              className: 'text-center'
            },
            [
              React.createElement(
                "img",
                {
                  src: "./public/images/portfolio.png",
                  width: 410,
                  height: 200,
                  overflow: 'hidden',
                  className: 'card-img-top'
                }
              ),
              React.createElement(
                "div",
                {
                  className: 'card-body'
                },
                React.createElement(
                  "div",
                  {
                    className: 'card-title'
                  },
                  'Portfolio'
                )
              )
            ]
          )
          )
        )
      ]
    )
  )
}

const courousal = document.getElementById("courousal");
const courousal_root = ReactDOM.createRoot(courousal);
courousal_root.render(React.createElement(Courousal));
