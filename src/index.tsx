import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { BrowserRouter, Switch, Route, } from 'react-router-dom'
import Chat from './daufyn/pages/friends/chat'
import Timeline from './daufyn/pages/timeline/timeline'
import Menudown from './daufyn/blocks/menudown'
import Notification from './daufyn/pages/notification/notification'
import Pag404 from './daufyn/pages/error/404'
import Searchnews from './daufyn/pages/search/search' 
import Friends from './daufyn/pages/friends/friends'
import Settings from './daufyn/pages/settings/settings'
import Profile from './daufyn/pages/profile/prof'
import Login from './daufyn/pages/log/login'
import Signin from './daufyn/pages/log/signin'
import Smartphone from './daufyn/pages/log/smartphone'
import Terms from './daufyn/pages/log/terms'
import Signup from './daufyn/pages/log/signup'
import Forgot from './daufyn/pages/log/forgot'
import Editprofile from './daufyn/pages/log/editprofile'
import Logout from './daufyn/pages/log/logout'
import './root.css'
import './daufyn/fragment/css/bank.css'
import './daufyn/fragment/css/divs.css'
import './daufyn/fragment/css/profile.css'
import './daufyn/fragment/css/post.css'


ReactDOM.render(
    <BrowserRouter >
    <Switch>
    <Route path = "/home" component = { Timeline }/> 
    <Route path = "/forgot" component = { Forgot }/> 
    <Route path = "/terms" component = { Terms } />
    <Route path = "/editprofile"component = { Editprofile }/>
    <Route path = "/smartphone"component = { Smartphone }/>
    <Route path = "/signup" component = { Signup }/> 
    <Route path = "/signin"  component = { Signin } />
    <Route path = "/" exact = { true }component = {  Login }/> 
    <Route path = "/search" component = { Searchnews }/>
    <Route path = "/notifications" component = { Notification }/>
    <Route path = "/messages"component = { Friends }/> 
    <Route path = "/user" component = { Profile }/>
    <Route path = "/settings" component = { Settings }/>
    <Route path = "/chat" component = { Chat }/>
    <Route path = '*'component = { Pag404 }/>
    </Switch>     
    <Menudown/>
    </BrowserRouter>,
    document.getElementById('root'));