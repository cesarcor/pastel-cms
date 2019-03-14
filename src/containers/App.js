import React, {Component} from 'react';
import Heading from '../components/Heading/Heading';
import Sidebar from '../components/Sidebar/Sidebar';
import Stories from '../components/Stories/Stories/Stories';
import CreateStoryButton from '../components/Stories/CreateStoryButton/CreateStoryButton';
import Overview from '../components/Overview/Overview';
import './App.css';
import img_1 from '../assets/images/img_1.jpg';
import img_2 from '../assets/images/img_2.jpg';
import img_3 from '../assets/images/img_3.jpg';
import img_4 from '../assets/images/img_4.jpg';

class App extends Component {

  /*

    All content as state cause' no backend :)

  */

  state = {
    stories: [

      {
        id: 0,
        title: 'She folded her handkerchief neatly.',
        views: 13,
        comments: 1,
        img: img_1,
      },

      {
        id: 1,
        title: 'Stuff to do at midnight',
        views: 21,
        comments: 2,
        img: img_2,
      },

      {
        id: 2,
        title: 'Hey, what year is it?',
        views: 34,
        comments: 3,
        img: img_3,
      }

    ]

  }

  render() {
    return (
      <div className = "App" >

          <Sidebar />
          <main className = "main-content-area">

            <section className="p-section">

              <Heading>Stories</Heading>

              <div className="story-container">
                <CreateStoryButton />
                <Stories stories={this.state.stories} />
              </div>

            </section>

            <section className="p-section">

              <Heading>Overview</Heading>

            <div className = "overview-container">
              <Overview />
            </div>

            </section>

          </main>

      </div>
    );
  }
}

export default App;
