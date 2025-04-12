import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* About Section */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h1 className="text-2xl font-bold mb-2 text-gray-900">About Us</h1>
          <h2 className="text-lg font-medium text-gray-700 mb-4">Khushi Yadav</h2>

          {/* User Details */}
          <UserClass />
        </div>
      </div>
    );
  }
}

export default About;
