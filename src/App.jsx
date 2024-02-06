import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/postList";
import { useState } from "react";
import PostListProvider from "./Store/post-list-store";

function App() {
  const [select, setSelect] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar select={select} setSelect={setSelect}></Sidebar>
        <div className="content">
          <Header></Header>
          {select === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
