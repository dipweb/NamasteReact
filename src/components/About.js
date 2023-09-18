import UserClass from "./UserClass";
import React from "react";
import UserContex from "../util/UserContext";

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("About Render");
    return (
      <div>
        <h1>About</h1>
        <UserContex.Consumer>
          {({ loggidInUser }) => {
            return (
              <h1 className="text-xl font-bold">
                LoggedIn User: {loggidInUser}
              </h1>
            );
          }}
        </UserContex.Consumer>
        <h3>This is Namaste React Web Series</h3>
        <UserClass />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h3>This is Namaste React Web Series</h3>
//       {User}
//       {/* <User name="Deepak kumar (from functional Component)" /> */}
//       <UserClass
//         name={"Deepak Kumar (from class based Component)"}
//         location={"Noida class"}
//       />
//     </div>
//   );
// };

// export default About;
