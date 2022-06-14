import Header from "./components/Header/Header.jsx"
import SideBarLeft from "./components/SidebarLeft/SidebarLeft.jsx";
import SideBarRight from "./components/SidebarRight/SidebarRight.jsx"

function App() {
  return (
    <div className="app">
        <SideBarLeft />
        <div className="main">
          <Header />
        </div>
        <SideBarRight />
      
    </div>
  );
}

export default App;
