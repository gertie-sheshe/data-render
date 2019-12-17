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
