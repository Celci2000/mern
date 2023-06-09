import React , {Component } from 'react';
import axios from 'axios'
export default class CreateExercise extends Component {
    constructor(props){
         super(props)
          this.onChangeUsername = this.onChangeUsername.bind(this)
          this.onChangeDescription = this.onChangeDescription.bind(this)
      this.onChangeDuration= this.onChangeDuration.bind(this)
         
      this.onSubmit = this.onSubmit.bind(this)

        this.state={
            username: '',
            description :'',
            duration : 0 ,
            
            users :[]
        }

    }
    componentDidMount(){
       axios.get('http://localhost:5002/users/')
       .then(response=>{
        if(response.data.length >0)
        {
            this.setState({users: response.data.map(user => user.username)
            ,username: response.data[0].username})
        }
       })
    }

    onChangeUsername(e){
        this.setState({username: e.target.value})
    }
    onChangeDescription(e){
        this.setState({description: e.target.value})
    }
    onChangeDuration(e){
        this.setState({duration: e.target.value})
    }
  
   onSubmit(e){
    e.preventDefault()
     const exercise={
        username: this.state.username,
        description : this.state.description,
        duration : this.state.duration ,
        
     }
    console.log(exercise)

    axios.post('http://localhost:5002/exercise/add',exercise)
    .then(res=>console.log(res.data))
    .catch((error)=> {
        console.log(error);
    })

    window.location ='/'
    }
   

    render(){
        return (
            <div className="flex flex-col">
              <h3 className="font-bold text-lg">Create a new log</h3>
              <form onSubmit={this.onSubmit} className="space-y-4">
                <div className="form-group">
                  <label className="text-md font-medium ">Username:</label>
                  <select
                    ref="userInput"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    className="border border-gray-300 rounded-md py-2  focus:outline-none focus:ring focus:border-blue-500 px-16 mx-4  text-gray-700 leading-tight " >
                    {this.state.users.map(function (user) {
                      return (
                        <option key={user} value={user}>
                          {user}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group ">
                  <label className="text-md font-medium">Description:</label>
                  <input
                    type="text"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    className="border border-gray-300  mx-2 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div className="form-group">
                  <label className="text-md font-medium">Duration:</label>
                  <input
                    type="text"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    className="border border-gray-300 mx-6 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="submit"
                    value="Create Exercise Log"
                    className="bg-blue-500 hover:bg-blue-600  text-white py-2 px-4 rounded-md cursor-pointer"
                  />
                </div>
              </form>
            </div>
          );
          
    }
}