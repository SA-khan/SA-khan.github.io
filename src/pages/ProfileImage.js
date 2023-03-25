const ProfileImage = () => {
  return React.createElement(
    "div",
    {
      className: "container container-fluid"
    },
    React.createElement(
      "div",
      {
        className: "row"
      },
      React.createElement(
        "div",
        {
          className: "col"
        },
        [
          React.createElement(
            "img",
            {
              src: './public/images/profile.png',
              width: 420,
              height: 400,
              className: ''
            }
          )
        ]
      )
    )
  );
}

const profileImage = document.getElementById('profile-image');
const profileImageRoot = ReactDOM.createRoot(profileImage);
profileImageRoot.render(React.createElement(ProfileImage));
