import {Profile} from 'components/Profile/Profile'
import {Statistics} from 'components/Statistics/Statistics'
import {FriendList} from 'components/FriendList/FriendList'
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'


import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';



export const App = () => {
    return (
     <div> 
      <div>
       <div>
        <div>
        <Profile
 username={user.username}
 tag={user.tag}
 location={user.location}
 avatar={user.avatar}
 stats={user.stats}
/>
       </div>
       <Statistics title="Upload stats" stats={data} />

     </div>
     <FriendList friends={friends} />;
     </div>
     <TransactionHistory items={transactions} />;

     </div>

    );
  };

