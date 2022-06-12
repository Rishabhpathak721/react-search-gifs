import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div class="container">
            <div class="row height d-flex justify-content-center align-items-center">
              <div class="col-md-6">
              <h1>Search Your Favourite GIF</h1>
              <br></br>
                <div class="form">
                  <i class="fa fa-search"></i>
                  <input type="text" onChange={event => this.onInputChange(event.target.value)} class="form-control form-input" placeholder="Search anything..." />
                  <span class="left-pan"><i class="fa fa-microphone"></i></span>
                </div>
                
              </div>
              
            </div>
            
          </div>

            
        );
    }
}

export default SearchBar;