import React, {Component} from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Route } from 'react-router-dom';
import Content from './content/content';
import Feature from './content/feature';

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Route exact path="/" component={() => <Content />} />
                {/* <Footer/> */}
                <Route exact path="/feature" component={() => <Feature />} />
            </div>
        );
    }
}
export default Home;