import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indiactor';
import './app.css';
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../swapi-service-contex";
import {PeoplePage, PlanetPage, StarshipPage} from "../pages";

import {BrowserRouter as Router, Route} from "react-router-dom";
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component {


    state = {
        hasError: false,
        swapiService: new SwapiService()

    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header/>
                            <RandomPlanet/>

                            <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact/>
                            <Route path="/people/:id?" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetPage}/>
                            <Route path="/starships" exact component={StarshipPage}/>
                            <Route path="/starships/:id"
                                   render={({match}) => {
                                       const {id} = match.params
                                       return <StarshipDetails itemId={id}/>
                                   }}/>

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
