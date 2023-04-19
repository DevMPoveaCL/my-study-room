import React from "react";

import {Routes, Route, HashRouter} from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage, MainView, ProfilePage } from "./pages";


import RedditPage from "./pages/RedditPage/RedditPage";
import Post1Blog from "./pages/RedditPage/RedditPostPages/Post1Blog";
import Post2Blog from "./pages/RedditPage/RedditPostPages/Post2Blog";
import Post3Blog from "./pages/RedditPage/RedditPostPages/Post3Blog";
import Post4Blog from "./pages/RedditPage/RedditPostPages/Post4Blog";
import UsuarioComponent from "./components/TodoComponents/UsuarioComponent";


const App = ()=>{
  return (
    <HashRouter>
      <Routes>
        <Route exact path = "/MSR-FrontEnd" element={<HomePage/>}/>
        <Route path = "/Login" element={<LoginPage/>}/>
        <Route path = "/Register" element={<RegisterPage/>}/>
        <Route path = "/MainView" element={<MainView/>}/>
        <Route path = "/Profile" element={<ProfilePage/>}/>
        <Route path = "/Reddit" element={<RedditPage/>} />
        <Route path = "/Post1" element={<Post1Blog/>} />
        <Route path = "/Post2" element={<Post2Blog/>} />
        <Route path = "/Post3" element={<Post3Blog/>} />
        <Route path = "/Post4" element={<Post4Blog/>} />
        <Route path = "/Todo" element={<UsuarioComponent/>} />


      </Routes>
    </HashRouter>
  )
}
export default App;