import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
// import { SocketProvider } from "./providers/socket";

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/" element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
