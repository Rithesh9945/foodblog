// import './App.css';
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import SignUp from './components/SignUp'
// import SignIn from './components/SignIn'


// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<SignUp/>}/>
        
//         {/* <Route path="/" element={<SignIn/>}/> */}


//       </Routes>

//       </BrowserRouter>
//     </div>
   
//   );
// }

// export default App;


import {BrowserRouter  , Routes , Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/SignUp';
import Home from './components/Home'
import About from './components/About';
import Addpost from './components/AddPost';

 

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='addpost' element={<Addpost/>}/>
     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;