import React, {Component} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Stories from '../components/Stories/Stories';
import './App.css';

class App extends Component {

  state = {
    stories: [

      {
        id: 1,
        title: 'Getting the meat',
        views: 13
      },

      {
        id: 2,
        title: 'Stuff to do at midnight',
        views: 21
      },

      {
        id: 3,
        title: 'Hey, what year is it?',
        views: 34
      }

    ]

  }

  render() {
    return (
      <div className = "App" >

          <Sidebar></Sidebar>

          <main>
            <Stories stories={this.state.stories} />
          </main>

      </div>
    );
  }
}

export default App;
