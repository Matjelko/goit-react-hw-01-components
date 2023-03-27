import { Panel } from "../Panel/Panel";
import { Profile } from "../Profile/Profile";
import { Statistics } from "../Statistics/Statistics";
import { FriendList } from "../FriendList/FriendList";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";
import "../Container/Container.css"
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json'

export const App = () => {
  return (
    <div className="container">
      <Panel>
        <Profile 
          username = {user.username} 
          tag = {user.tag} 
          location = {user.location} 
          avatar = {user.avatar}
          follower = {user.stats.followers} 
          views = {user.stats.views}
          likes = {user.stats.likes} 
        />

        <Statistics
          title = "Upload stats"
          stats = {data}
        />

        <FriendList 
          friends = {friends} 
        />;

        <TransactionHistory 
          items = {transactions} 
        />;

      </Panel>

      
    </div>
  );
};