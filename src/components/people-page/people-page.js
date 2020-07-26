import React, {Component} from "react";
import './people-page.css';
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indiactor";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";


export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: null,
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

                {(i) => (
                    `${i.name} (${i.birthYear}`
                )}
            </ItemList>
        )

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        )

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        )
    }

}