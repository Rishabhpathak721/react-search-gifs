import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './search';
import './App.css';

class App extends React.Component {
  handleTermChange(term) {
    console.log(term);
  }
    render() {
        return (
            <div className="Search-Bar">
                <SearchBar onTermChange={this.handleTermChange} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));