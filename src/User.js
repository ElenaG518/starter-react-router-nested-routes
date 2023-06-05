import React from "react";
import { Route, Switch } from "react-router-dom";
import UserProfile from "./UserProfile";
import PostList from "./PostList";

function User() {
  return (
    <Switch>
      
      <Route exact path={"/users/:userId"}>
        <UserProfile />
      </Route>
      <Route path={"/users/:userId/posts"}>
        <PostList />
      </Route>
    </Switch>
  );
};

export default User;
