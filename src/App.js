import './App.css';
import Form from './companent/form/form';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      arr: [
       
      ],

      obj: {
        name: undefined,
        surname: undefined,
        number: undefined,
        select: 'family',
      },

    }
  }

  nameChangeHandler = (e) => {

    let obj1 = {
      name: e.target.value
    }
    this.setState({ obj: { ...this.state.obj, ...obj1 } })
    
    }
    
    surnameChangeHandler = (e) => {
    let obj1 = {
      surname: e.target.value
    }
    this.setState({ obj: {...this.state.obj, ...obj1}})
    }
    
    numberChangeHandler = (e) => {
    let obj1 = {
      number: e.target.value
    }
    this.setState({ obj: {...this.state.obj, ...obj1}})
    }
    
    categoryChangeHandler = (e) => {
    let obj1 = {
      select: e.target.value
    }
    this.setState({ obj: {...this.state.obj, ...obj1}})
    }
    
    submitHandler = (e) => {
    e.preventDefault()
    this.setState({arr:[...this.state.arr,{ ...this.state.obj}]})
    e.target.reset()
    }
    
  render() {
    return (

      <div>
        <Form nameChangeHandler={this.nameChangeHandler}
          surnameChangeHandler={this.surnameChangeHandler}
          numberChangeHandler={this.numberChangeHandler}
          categoryChangeHandler={this.categoryChangeHandler}
          submitHandler={this.submitHandler}
          arr= {this.state.arr}
        />
      </div>
      
    )
  }
}





// this.state = {
//   arr: [
    
//   ],

//   obj: {
//     name: undefined,
//     surname: undefined,
//     number: undefined,
//     select: 'family',

//   }
// };
// }

// nameChangeHandler = (e) => {

// let obj1 = {
//   name: e.target.value
// }
// this.setState({ obj: { ...this.state.obj, ...obj1 } })

// }

// surnameChangeHandler = (e) => {
// let obj1 = {
//   surname: e.target.value
// }
// this.setState({ obj: {...this.state.obj, ...obj1}})
// }

// numberChangeHandler = (e) => {
// let obj1 = {
//   number: e.target.value
// }
// this.setState({ obj: {...this.state.obj, ...obj1}})
// }

// categoryChangeHandler = (e) => {
// let obj1 = {
//   select: e.target.value
// }
// this.setState({ obj: {...this.state.obj, ...obj1}})
// }

// submitHandler = (e) => {
// e.preventDefault()
// this.setState({arr:[...this.state.arr,{ ...this.state.obj}]})
// e.target.reset()
// }














