import React from "react";
import NewsFeed from "./components/newsFeed/NewsFeedIndex";
import SimpleNav from "./components/header/HeaderIndex"
import "./App.css";

function App() {
  return (
    <div>
      <SimpleNav/>
      <div className="ui two column centered grid">
        <div className="column">
          <NewsFeed />
        </div>
      </div>
    </div>
  );
}

export default App;


// User input data 는 어떻게 처리하는가
/*
  EX, Postform 컴포넌트에서 user input 을 받아 state 에 전달하고, 이 state 을 parent의 전달 =? callback?
  위 state 을 PostList 에 전달하고, PostList 에서는 obj로 받을수 있는지,
  - Postform 에서 states 을 postlist 에 전달하고 , postForm의 onSubmit func 으로 postList의 postObj(만들수있다면) data 를 하나씩 추가가 가능한지.
*/

/* PostList 의 renderPostItems ? postForm 의 onSubmit? */

/* postForm 에서 userInput 이나 데이터를 받아와서, PostList 에서 extra(카드나,feed) 컴포넌트를 만들어서 render 할수 있나*/
