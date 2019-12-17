import React, {Component} from 'react';
import Data from './Data';
import fetchData from '../fetchData';

class App extends Component {
    state = {
        data: null
    }

    autoPopulate = () => {
        // New offer object data
        const newData = fetchData();
        const currentOfferObject = this.state.data;
        let newObjData = {};

        // Increment id in ascending order
        Object.values(newData).map((data, index) => {
            let newId = Object.keys(currentOfferObject).length + index;
            data.id = newId;
            newObjData[newId] = data;
        });

        // New incremented offer object
        const newOfferObject = Object.assign({}, this.state.data, newObjData);

        // Update state and render new data
        this.setState({
            data: newOfferObject
        });
    }

    componentDidMount() {
        const offerData = fetchData();

        this.setState({
            data: offerData
        }, () => {
            // Invoke after 5sec
            setInterval(this.autoPopulate, 5000);
        });
    }

    render() {
        return (
          <div className="card-panel">
            <table className="centered">
              <thead className="grey lighten-1">
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Bid</th>
                </tr>
              </thead>
              {this.state.data
                ? Object.values(this.state.data).map(data => (
                    <Data key={data.id} data={data} />
                  ))
                : null}
            </table>
          </div>
        );
    }
}

export default App;
