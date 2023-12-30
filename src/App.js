import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom';
import BookForm from './pages/BookForm'
import BookTable from './pages/BookTable'
import BookList from './pages/BookList'
import BookUpdate from './pages/BookUpdate'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>

      <Routes>
        <Route path="/form" element= {<BookForm></BookForm>} > </Route>
        <Route path="/table" element= {<BookTable></BookTable>} > </Route>
        <Route path="/list" element= {<BookList></BookList>} > </Route>
        <Route path="/edit/:id" element= {<BookUpdate></BookUpdate>} > </Route>
      


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
