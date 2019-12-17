import React, {Component} from 'react';
import Data from './Data';
import fetchData from '../fetchData';

class App extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        const offerData = fetchData();

        this.setState({
            data: offerData
        });
    }

    render() {
        return (
            <div>
                <p>Pocket Coach</p>
                {this.state.data ? Object.values(this.state.data).map((data) => <Data key={data.id} data={data}/>) : null}
            </div>
        )
    }
}

export default App;
