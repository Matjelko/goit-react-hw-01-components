import { Profile } from "./Profile";
import { Panel } from "./Panel";
import { Statistics } from "./Statistics";
import user from './user.json';
import data from './data.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'cursive',
        backgroundColor: 'grey'
      }}
    >
      <Panel>
        <Profile 
          username={user.username} 
          tag={user.tag} 
          location={user.location} 
          avatar={user.avatar}
          followers={user.stats.followers} 
          views={user.stats.views}
          likes={user.stats.likes} 
        />

        <Statistics
          title = "Upload stats"
          stats = {data}
        />
      </Panel>

      
    </div>
    
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
