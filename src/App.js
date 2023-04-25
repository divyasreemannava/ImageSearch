import { BrowserRouter,Routes,Route } from "react-router-dom";
import Imagesearch from "./components/image";
import Bookmark from "./components/tab";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Imagesearch/>}/>
      <Route path = "/BookmarkImages" element={<Bookmark/>}/>
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
