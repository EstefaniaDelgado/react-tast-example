import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';




function App() {


  return (
    <main className='bg-zinc-900 h-screen'>

      <div className='container mx-auto'>
      <TaskForm  />
      <TaskList />
      </div>
       
    </main>
  );
}

export default App;




// const user = [
//   {
//     id: 1,
//     name: 'Ryan',
//     image: 'https://robohash.org/user1',
//   },
//   {
//     id: 2,
//     name: 'Robot',
//     image: 'https://robohash.org/user2',
//   },
//   {
//     id: 3,
//     name: 'Joe',
//     image: 'https://robohash.org/user10',
//   },
// ];