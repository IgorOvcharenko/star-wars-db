import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indiactor';
import './app.css';
import ErrorBoundry from "../error-boundry";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import {Record} from "../item-details/item-details";
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from "../sw-components";
import Row from "../row";

export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        showRandomPlanet: true,
        hasError: false,
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    }

    componentDidCatch() {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <ErrorBoundry>
                <div className="stardb-app">
                    <Header/>

                    {planet}

                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>

                    <Row left={
                        <PersonList>
                            {({name}) => <span>{name}</span>}
                        </PersonList>}
                         right={<PersonDetails itemId={11}/>}/>

                    <Row left={
                        <PlanetList>
                            {({name}) => <span>{name}</span>}
                        </PlanetList>}
                         right={<PlanetDetails itemId={11}/>}/>

                    <Row left={
                        <StarshipList>
                            {({name}) => <span>{name}</span>}
                        </StarshipList>}
                         right={<StarshipDetails itemId={11}/>}/>
                </div>
            </ErrorBoundry>
        );
    }
};
