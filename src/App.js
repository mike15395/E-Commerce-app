
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Suspense } from 'react';
import Login from './pages/Login';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={
            <Suspense fallback={<div>....loading</div>}><Login/></Suspense>}>

          </Route>
          
          <Route exact path="/home" element={
            <Suspense fallback={<div>....loading</div>}><Home/></Suspense>}>

          </Route>
          
          <Route exact path="/products" element={
            <Suspense fallback={<div>....loading</div>}><Product/></Suspense>}>

          </Route>
          
          <Route  exact path="/cart" element={
            <Suspense fallback={<div>....loading</div>}><Cart/></Suspense>}>

           </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
