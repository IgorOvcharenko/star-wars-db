import React, {Component} from "react";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indiactor";

const withData = (View) => {
    return class extends Component {

        state = {
            loading: true,
            error: false,
            data: null
        }

        componentDidMount() {
           this.update()
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        update() {
            this.setState({
                loading: true,
                error: false
            })
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false
                    })
                })
        }

        render() {
            const {data, loading, error} = this.state;
            if (loading) {
                return <Spinner/>;
            }
            if(error){
                return <ErrorIndicator/>
            }

            return <View {...this.props} data={data}/>
        }
    }
};

export {withData};