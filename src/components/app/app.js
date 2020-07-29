import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indiactor';
import './app.css';
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import {SwapiServiceProvider} from "../swapi-service-contex";
import {PeoplePage, PlanetPage, StarshipPage} from "../pages";

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
                    <div className="stardb-app">
                        <Header/>
                        <RandomPlanet/>
                        <PeoplePage/>
                        <PlanetPage/>
                        <StarshipPage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
