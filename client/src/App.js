import './App.scss';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import MessengerPage from './pages/MessengerPage'
import ProfilePage from './pages/ProfilePage'
import Sale from './pages/AdminPage/Sale'
import Users from './pages/AdminPage/Users'
import Posts from './pages/AdminPage/Posts'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact="exact" component={HomePage}/>
                    <Route path="/messenger" exact="exact" component={MessengerPage}/>
                    <Route path="/login" exact="exact" component={LoginPage}/>
                    <Route path="/register" exact="exact" component={RegisterPage}/>
                    <Route path="/profile" exact="exact" component={ProfilePage}/>
                    <Route path="/admin" exact="exact" component={Sale}/>
                    <Route path="/admin/users" exact="exact" component={Users}/>
                    <Route path="/admin/posts" exact="exact" component={Posts}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
