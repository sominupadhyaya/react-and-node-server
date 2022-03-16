import React , {Component} from 'react'
import api from './api'
import uuid from 'uuid'
export default class App extends Component{
    state = {data : []}
     componentDidMount = async () =>{
        const response = await api.get("/")
        this.setState({data : response.data})
    }
    render(){
        return (
            <div>
            <h2>{this.state.data.map((userinfo) => {
                return(
                <div key = {uuid()}>
                <li>The person's name is : {userinfo.name}</li>
                <li>Their age is : {userinfo.age}</li>
                <li>Their school  is : {userinfo.school}</li>
                <li>They study in grade : {userinfo.class}</li>
                <br />
                </div>
            )
        }                                   
            )}</h2>
            </div>
        )
    }
}