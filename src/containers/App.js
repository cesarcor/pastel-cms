import React, {Component} from 'react';
import StoryList from '../components/Stories/StoryList';
import Heading from '../components/Heading/Heading';
import Sidebar from '../components/Sidebar/Sidebar';
import Overview from '../components/Overview/Overview';
import MaintenanceToggle from '../components/MaintenanceToggle/MaintenanceToggle';
import '../styles/Global.scss';

class App extends Component {

  render() {
    return (
      <div className = "app-contain" >

          <Sidebar />
          <main className = "main-content-area">

            <section className="p-section">

              <Heading>Stories</Heading>
              <MaintenanceToggle/>

              <StoryList />

            </section>

            <section className="p-section">

            <Heading>Audience Overview</Heading>

            <Overview />

            </section>

          </main>

      </div>
    );
  }
}

export default App;
