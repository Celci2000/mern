import React , {Component } from 'react';
import axios from 'axios'
export default class CreateExercise extends Component {
    constructor(props){
         super(props)
          this.onChangeUsername = this.onChangeUsername.bind(this)
          
         
      this.onSubmit = this.onSubmit.bind(this)

        this.state={
            username: '',
         
        }

    }
    componentDidMount(){
        this.setState({
          users:['test-user'], 
            username: ''       })
    }

    onChangeUsername(e){
        this.setState({username: e.target.value})
    }
   
  
   onSubmit(e){
    e.preventDefault()
     const user={
        username: this.state.username,
     }
   console.log('hell')
   console.log(user)
    axios.post('http://localhost:5002/users/add',user)
    .then(res=>console.log(res.data))
    .catch((error)=> {
        console.log(error);
    })

    this.setState({username:''})
    }
   

    render(){
        return (
           <div class="flex flex-col">
            <h3 class="font-bold text-lg mx-4 mt-3">Create a new log </h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group space-y-4 text-md font-medium ">
                    <label class="mx-4 mt-3">Username:</label>
                    <input placeholder ="Enter User"type="text" class=" mx-2 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"value={this.state.username} onChange={this.onChangeUsername} />
               </div>
               <div>
               <input type="submit" class="border rounded-md bg-blue-500 px-4 py-2 mx-4 mt-3"value="create user" ></input>
               </div>
            </form>
           </div> 
        )
    }
}