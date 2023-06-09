import React , {Component } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';

const Exercise =props =>{
    return(
    <tr>
        <td class="border py-2 px-4 captalize font-noraml font-mono">{props.exercise.username}</td>
        <td class="border py-2 px-4 captalize font-noraml font-mono">{props.exercise.description}</td>
       
        <td  class=" flex space-x-2"> 
           <button class="px-4 py-2 bg-blue-500 text-white rounded-md"> <Link to ={"/edit/"+props.exercise._id}>edit</Link></button>
         <button  class="px-4 py-2 bg-red-500 text-white rounded-md"><a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a></button>
        </td> 
    </tr>
    )
}

export default class ExercisesList extends Component {
    constructor(props){
        super(props);
        this.deleteExercise=  this.deleteExercise.bind(this);
        this.state ={
            exercises :[]
        }

        
    }

    componentDidMount() {
        axios.get('http://localhost:5002/exercise/')
        .then(res=>{
            console.log(res.data)
            this.setState({exercises :res.data})
        })
        .catch(err=>console.log(err));

        
    }

    deleteExercise(id){
        axios.delete('http://localhost:5002/exercise/'+id)
        .then(res =>console.log(res.data))
     
        this.setState({exercises :this.state.exercises.filter(el => el._id !==id)
        })
    }

    exerciseList(){
        return this.state.exercises.map(currentexercise=>{
            return <Exercise exercise={currentexercise} deleteExercise= {this.deleteExercise} key ={currentexercise._id}/>
        })
    }
    render(){
        return (
           <div class="flex  flex-col">
           <h3 class="capitalize font-bold flex  mb-4 text-lg "> logged exercise</h3>
           <table class="w-full border-collapse">
            <thead class="text-md uppercase">
                <tr>
                    <th class="bg-gray-100 py-2 px-4 ">username</th>
                    <th class="bg-gray-100 py-2 px-4">description</th>
                    

                </tr>
            </thead>
            <tbody>{this.exerciseList()}</tbody>
           </table>
           </div> 
        )
    }
}