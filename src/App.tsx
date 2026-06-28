import {Topbar} from './components/TopBar';
import './index.css';

export function App() {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <Topbar/>
    </div>
  );
}

export default App;
