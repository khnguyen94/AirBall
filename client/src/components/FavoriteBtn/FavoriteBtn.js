import React, {Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./FavoriteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
class FavoriteBtn extends Component {
  // Set initial state for this component
  state = {
    isFavorite: false
  };

  // Funtion to switch isFavorite to the other option depending on current state
  toggleFavorite = (event) => {
    event.preventDefault();
    this.setState(state => ({
      isFavorite: !state.isFavorite
    }))
  };

  render() {
    // Define isFavorite as a state
    const {isFavorite} = this.state; 

    return (
      <Container>
        <label for="faveBTNTeamID-" className="favoriteCheckbox">
          <input type="checkbox" id="faveBTNTeamID-" onClick={this.toggleFavorite}/>
            <i class="glyphicon glyphicon-star-empty"></i>
            <i class="glyphicon glyphicon-star"></i>
          <span>Favorite</span>
        </label>
      </Container>
    )
  }
}

export default FavoriteBtn;











import React, { Component } from 'react';

class ThemeSwitcher extends Component {

  state = { theme: null }
  
  resetTheme = evt => {
    evt.preventDefault();
    this.setState({ theme: null });
  }
  
  chooseTheme = (theme, evt) => {
    evt.preventDefault();
    this.setState({ theme });
  }
  
  render() {
  
    const { theme } = this.state;
    const themeClass = theme ? theme.toLowerCase() : 'secondary';
    
    return (
      <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
      
        <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{ theme || 'Default' }</span>
        
        <div className="btn-group">
        
          <button type="button" className={`btn btn-${themeClass} btn-lg`}>{ theme || 'Choose' } Theme</button>
          
          <button type="button" className={`btn btn-${themeClass} btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="sr-only">Toggle Theme Dropdown</span>
          </button>
          
          <div className="dropdown-menu">
          
            <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Primary', e)}>Primary Theme</a>
            <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Danger', e)}>Danger Theme</a>
            <a class="dropdown-item" href="#" onClick={e => this.chooseTheme('Success', e)}>Success Theme</a>
            
            <div className="dropdown-divider"></div>
            
            <a className="dropdown-item" href="#" onClick={this.resetTheme}>Default Theme</a>
          </div>
          
        </div>
        
      </div>
    );
    
  }
  
}

export default ThemeSwitcher;