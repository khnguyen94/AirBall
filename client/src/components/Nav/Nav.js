import React from "react";
import ListItem from "../Nav/NavItem"; 

class Nav extends React.Component {
  constructor(props) {
    super(props); 
    this.allTeams = {

    }; 
    this.faveTeams = []
  }


<List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  );
                })}
              </List>


  render() {
    return (
      <div class="nav">
        {this.state.allTeams.map(team => {
          return (

          )
        })}



        
        {/* <ul>
          <li className="nav-link">
            <a href="#">Home</a>
          </li>

          <li className="nav-link dropdown-toggle">
            <a href="#">Favorites</a>



            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>

          <li className="nav-link dropdown-toggle">
            <a href="#">All Teams</a>
          </li>

          <li className="nav-link">
            <a href="#">Calendars</a>
          </li>
        </ul> */}
      </div>
    );
  }
}

export default Nav;
