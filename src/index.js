import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import SearchBar from './components/search';
import GifList from './components/GifList';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        gifs: [],
    };

    // this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange = (term) =>{
    console.log(term);
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=A1g0Ln9WQY4V23ZIn0ge42j3WSzBjZ56`;

    axios
    .get(url)
    .then((res) => {
      console.log(res.data.data)
      this.setState({ gifs: res.data.data })
    })
    .catch((error) => {
      console.log(error)
    });
  };
    render() {
        return (
            <div className="Search-Bar">
                <SearchBar onTermChange={term => this.handleTermChange(term)} />
                <GifList gifs={this.state.gifs} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));