import Statistics from './components/Statistics/Statistics';
import Friends from './components/Friends/Friends';


import stats from './stats.json'
import friends from './friends.json'
console.log(friends);



import './App.css'
console.log(stats);

function App() {

  return (
    <>
     <Statistics stats={stats}/>


     <Friends friends={friends}/>
    </>
  )
}

export default App
