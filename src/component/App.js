import { Switch, Route } from "react-router-dom";
// import {Home,CreatePost,Navbar,PostDetails} from './'
import Home from "./Home";
import CreatePosts from "./CreatePosts";
import Navbar from "./Navbar";
import PostDetails from "./PostDetails";

function App() {
  return (
    <div className="container">
      {/* HI */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post:postId" component={PostDetails} />
        <Route exact path="/create-post" component={CreatePosts} />
      </Switch>
    </div>
  );
}

export default App;
