

import React, { Component } from 'react'
import './form.css'


export default class Form extends Component {
constructor (props) {
  super(props)
  console.log(props);
}
  render() {
    return (
      <div className="father">
      <form id="form" onSubmit={this.props.submitHandler}>
        <input className="input" type="text" placeholder="first-name"  neme="imput" onChange={this.props.nameChangeHandler}/>
        <input className="input"  type="text" placeholder="last-name" onChange={this.props.surnameChangeHandler}/>
        <input className="input"  type="number" placeholder="tel" onChange={this.props.numberChangeHandler} />
        <input className="category" type="text" list="date" onChange={this.props.categoryChangeHandler}/>
        <datalist id="date"  onChange={this.props.categoryChangeHandler}>
          <option>Family</option>
          <option>Friends</option>
          <option>classmates</option>
        </datalist>
        <button className="btn btn-primary mb-3" type="submit">submit</button>
      </form>
      <div className="info">
        <div className="btn-group">
          <button id="all-btn" className="btn btn-primary" type="button">All</button>
          <button id="family-btn" className="btn btn-primary" type="button">Family</button>
          <button id="friend-btn" className="btn btn-primary" type="button">Friends</button>
          <button id="classmate-btn" className="btn btn-primary" type="button">classmates</button>
        </div>
        <ul id="list" className="list-group list-group-numbered mt-3">
          {this.props.arr.map(item => (
            <li className='itemm'><p>{item.name}</p><p>{item.surname}</p><p>{item.number}</p></li>
          ))}
        </ul>
    </div>
</div>
    )
  }
}







