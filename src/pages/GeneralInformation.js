const GeneralInformation = () => {
  return React.createElement(
    "div",
    {
      className : 'container container-fluid table border border-light shadow p-1'
    },
    [
      React.createElement(
        "div",
        {
          className: "row no-gutters"
        },
        React.createElement(
          "div",
          {
            className: 'col'
          },
          React.createElement("div", { className: 'display-6 small text-white bg-dark text-center' }, 'General Information')
        )
      ),
      React.createElement(
        "div",
        {
          className: "row no-gutters"
        },
        [
          React.createElement(
            "div",
            {
              className: 'col col-sm-3'
            },
            React.createElement("div", { className: 'float-end' }, 'Full Name:')
          ),
          React.createElement(
            "div",
            {
              className: 'col col-sm-9'
            },
            React.createElement("div", null, 'Muhammad Saad Ahmed')
          )
        ]
      ),
      React.createElement(
        "div",
        {
          className: "row no-gutters"
        },
        [
          React.createElement(
            "div",
            {
              className: 'col col-sm-3'
            },
            React.createElement("div", { className: 'float-end' }, 'Nationality:')
          ),
          React.createElement(
            "div",
            {
              className: 'col col-sm-9'
            },
            React.createElement("div", null, 'Pakistan')
          )
        ]
      ),
      React.createElement(
        "div",
        {
          className: "row no-gutters"
        },
        [
          React.createElement(
            "div",
            {
              className: 'col col-sm-3'
            },
            React.createElement("div", { className: 'float-end' }, 'Religion:')
          ),
          React.createElement(
            "div",
            {
              className: 'col col-sm-9'
            },
            React.createElement("div", null, 'Islam')
          )
        ]
      ),
      React.createElement(
        "div",
        {
          className: "row no-gutters"
        },
        [
          React.createElement(
            "div",
            {
              className: 'col col-sm-3'
            },
            React.createElement("div", { className: 'float-end' }, 'Bio:')
          ),
          React.createElement(
            "div",
            {
              className: 'col col-sm-9'
            },
            React.createElement("div", null, 'Curious Coder, Researcher & Self Motivated Employee')
          )
        ]
      ),
      React.createElement(
        "div",
        {
          className: "row no-gutters"
        },
        [
          React.createElement(
            "div",
            {
              className: 'col col-sm-3'
            },
            React.createElement("div", { className: 'float-end' }, 'Academia:')
          ),
          React.createElement(
            "div",
            {
              className: 'col col-sm-9'
            },
            React.createElement("div", null, 'BCS, MCS & MS(Information Security)')
          )
        ]
      ),
      React.createElement(
        "div",
        {
          className: "row no-gutters"
        },
        [
          React.createElement(
            "div",
            {
              className: 'col col-sm-3'
            },
            React.createElement("div", { className: 'float-end' }, 'Skills:')
          ),
          React.createElement(
            "div",
            {
              className: 'col col-sm-9'
            },
            React.createElement("div", null, '.NET, EF-CORE, MS-SQL-SERVER, ANDROID(JAVA), REACT & ANGULAR')
          )
        ]
      ),
      React.createElement(
        "div",
        {
          className: "row no-gutters"
        },
        [
          React.createElement(
            "div",
            {
              className: 'col col-sm-3'
            },
            React.createElement("div", { className: 'float-end' }, 'Hobbies:')
          ),
          React.createElement(
            "div",
            {
              className: 'col col-sm-9'
            },
            React.createElement("div", null, 'Book Reading, Travelling')
          )
        ]
      ),
      React.createElement(
        "div",
        {
          className: "row no-gutters"
        },
        [
          React.createElement(
            "div",
            {
              className: 'col col-sm-3'
            },
            React.createElement("div", { className: 'float-end' }, 'Nick:')
          ),
          React.createElement(
            "div",
            {
              className: 'col col-sm-9'
            },
            React.createElement("div", null, 'Assay')
          )
        ]
      )
    ]
  )
}

const GI = document.getElementById("general-info");
const GI_root = ReactDOM.createRoot(GI);
GI_root.render(React.createElement(GeneralInformation));
