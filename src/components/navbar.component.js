import React , {Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
   return (
    <nav class=" text-white bg-gray-800 flex justify-between  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  h-50">
        <Link to="/" class="text-4xl font-bold " >Exercise Tracker</Link>
        <div class="flex  justify-end">
            <ul class="flex flex-row ml-4 space-x-4  text-lg ">
                <li class=" text-gray-300 hover:text-white">
                <Link to ="/">Exercises</Link></li>
                <li class=" text-gray-300 hover:text-white">
                <Link to ="/create">Create Exercise Log</Link></li>
                <li class="text-gray-300 hover:text-white">
                <Link to ="/user">Create User</Link></li>
                
                
           </ul>
        </div>
    </nav>
   )
  }
}


