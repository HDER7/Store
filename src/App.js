import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Shoes from './components/productos';
import Crud from './components/Crud';
import Foo from './components/ccc';
import Home from './components/home';
import Shirt  from './components/Tshirt';

function App() {
  return (
    <div className="App">
      <Router>
      <Menu></Menu>
          <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
            <Route path='/shoes' element={<Shoes></Shoes>}></Route>
            <Route path='/shirts' element={<Shirt></Shirt>}></Route>
            <Route path='/clients' element={<Crud></Crud>}></Route>
            <Route  path='*' element={<h1>Error 404</h1>}></Route>
          </Routes>
          <Foo></Foo>
      </Router>  
        
    </div>
  );
}
export default App;
