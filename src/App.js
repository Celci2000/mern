import React from 'react';
import './app.css';
import { BrowserRouter as Router ,Route ,Routes} from "react-router-dom"
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component"
import EditExercise  from "./components/edit-exercise.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUser from "./components/create-user.component";
function App() {
  return (
    <Router>
    <Navbar />
    <br />
    <Routes>
    <Route path ="/" exact element = {<ExercisesList />} />
    <Route path ="/edit/:id"  component={ <EditExercise  /> } />
    <Route path ="/create" element ={<CreateExercise />} />
    <Route path ="/user"  element ={ <CreateUser />} />
    </Routes>
    </Router> 
    
  );
}

export default App;
