import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Taylor Durden",
      image:
        "https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",
      places: "3",
    },
  ];
  return <UserList items = {USERS}/>;
};

export default Users;
