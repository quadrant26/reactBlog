import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './Login'
import AdminIndex from './AdminIndex'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'

function Main (){
    return (
        <Router>
            <Route path="/login/" exact component={Login} />
            <Route path="/" exact component={Login} />
            <Route path="/index/" exact component={AdminIndex} />
            <Route path="/index/add" exact component={AddArticle} />
            <Route path="/index/add/:id" exact component={AddArticle} />
            <Route path="/index/list" exact component={ArticleList} />
        </Router>
    )
}

export default Main;