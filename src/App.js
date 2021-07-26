import './App.css';
import Sidebar from './sidebar/Sidebar'
import Feed from './feed/Feed'
import Widgets from './widgets/Widgets.js'

function App() {
  return (
    <div className="App">

      <Sidebar />
      <Feed />
      <Widgets />
      {/* Widgets */}
    </div>
  );
}

export default App;
