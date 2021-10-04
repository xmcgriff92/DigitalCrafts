import React, { useEffect, useState } from "react";
import { UserButton,
    HeaderHeader,
    HeaderContainer,
    UserPicture,
  } from "../components/styled-components/Header-style"

const URL = "https://randomuser.me/api/";
export default function Header(props) {
  const [user, setUser] = useState({});
  const [counter, setCounter] = useState(0);
  // useEffect is a hook
  // hook that fires when the component is mounted
  useEffect(() => {
    const getNewsData = async () => {
      const getTheNews = await fetch(URL, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jsonNews = await getTheNews.json();
      console.log(jsonNews);
      setUser({
        ...jsonNews.results[0],
        userImage: jsonNews?.results[0]?.picture?.thumbnail,
      });
    };
    getNewsData();
    return () => {};
  }, [counter]);

  // useEffect(()=>{}) fire when we mount and anytime we call useState

  // useEffect(()=>{},[]) fire when we mount and only when we mount

  // useEffect(()=>{},[variable]) fire when we mount and only when when variable changes in value

  return (
    <HeaderContainer>
      <UserButton>View Sidebar</UserButton>
    <HeaderHeader> User Logged In</HeaderHeader>
    <UserPicture src={user?.picture?.large} alt="" />
    <p>
      Welcome {user?.name?.first} {""} {user?.name?.last}
    </p>
    <p>{user?.location?.city}</p>
    <UserButton onClick={() => setCounter(counter + 1)}>
      Get New User
    </UserButton>
  </HeaderContainer>
  );
}

