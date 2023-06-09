import React , {Component } from 'react';
import axios from 'axios'
export default class EditExercise extends Component {
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
     
console.log(props);
    
}
    componentDidMount(){
        // axios.get('http://localhost:5002/exercise/'+this.props.match.params.id)
        // .then(response =>{
        //     this.setState({username: response.data.username,
        //         description: response.data.description,
        //         duration: response.data.duration
        //     })
        //     .catch(function(error){
        //         console.log(error);
        //     })
        // })

  //  console.log(this.props.match.params.id);
    console.log(this.props.match.params.id);
          
       axios.get('http://localhost:5002/users/')
       .then(response=>{
        if(response.data.length >0)
        {
            this.setState({users: response.data.map(user => user.username)
            })
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

    // axios.post('http://localhost:5002/exercise/update'+this.props.match.params.id,exercise)
    // .then(res=>console.log(res.data))
    // .catch((error)=> {
    //     console.log(error);
    // })

    window.location ='/'
    }
   

    render(){
        return (
           <div>
            <h3>edit exercise log </h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group ">
                    <label>Username:</label>
                    <select ref="userInput" value={this.state.username} onChange={this.onChangeUsername}>{
                        this.state.users.map(function(user){
                            return <option
                            key={user} value={user}> {user}
                            </option>
                        })
                    }</select>

                </div>
                <div className="form-group ">
                    <label>Description:</label>
                    <input type="text" value={this.state.description} onChange={this.onChangeDescription}></input>
                </div>
                <div className="form-group ">
                    <label>Duration :</label>
                    <input type="text" value={this.state.duration} onChange={this.onChangeDuration}></input>
                    

                </div>
             
                <div>
                     <input type="submit" value="edit exercise log" className="btn ">
                        
                     </input>
                </div>
            </form>
           </div> 
        )
    }
}