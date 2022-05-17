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
        select: "friend",
      },
      newarr:[]

    }
  }

  zzzzzzzz = (e) => {
    e.preventDefault()
    this.setState({})

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
      // console.log(e.target.value);
      let obj1 = {
      select: e.target.value
    }
    this.setState({ obj: {...this.state.obj, ...obj1}})
    }
    
    submitHandler = (e) => {
    e.preventDefault()
    this.setState({arr:[...this.state.arr,{ ...this.state.obj}]})
    this.setState({newarr:[...this.state.newarr,{ ...this.state.obj}]})
    e.target.reset()
    }
    btntanla = (e) => {
      e.preventDefault()
      // console.log(e.target.textContent);
      let a = e.target.textContent
      if (a == "Family") {
        let pustoyarr = []
        // console.log(this.state.newarr);
        this.state.newarr.filter(item => {
          if (item.select === "Family") {
            pustoyarr.push(item)
          }

        })
        this.setState({arr:[ ...pustoyarr]})
      }

      if (a == "Friends") {
        let pustoyarr = []
        // console.log(this.state.newarr);
        this.state.newarr.filter(item => {
          if (item.select === "Friends") {
            pustoyarr.push(item)
          }

        })
        this.setState({arr:[ ...pustoyarr]})
      }

      if (a == "classmates") {
        let pustoyarr = []
        // console.log(this.state.newarr);
        this.state.newarr.filter(item => {
          if (item.select === "classmates") {
            pustoyarr.push(item)
          }

        })
        this.setState({arr:[ ...pustoyarr]})
      }
      
      if (a == "All") {
        this.setState({arr:[ ...this.state.newarr]})
     }
    }

    // buttonclicks = (e) => {
    //   e.preventDefault()
    //   // let elbtngroup = document.querySelector(".btn-group")
  
    //   // elbtngroup.addEventListener("click", (e) => {
    //   //   let newBaddiy = newarr.filter((item) => {
    //   //     return item.categorilar == e.target.textContent ;
      
    //   //   });
    //   //   if (e.target.textContent == "All") {
    //   //     newBaddiy = newarr
    //   //   }
    //   //   newlistarr = newBaddiy.map((item) => {
    //   //     return `<li class="list-group-item d-flex"><span class="me-2 w-25">${item.fname}</span><span class="me-5 ms-5 w-25">${item.lname}</span> <span class="ms-2 w-25">${item.tel}</span></li>`
    //   //   })
    //   //   ellist.innerHTML =  newlistarr.join("")
    //   // })
    //   console.log("okeyyyyyy");
    //   console.log(this.state.obj.select);
    // }
    
  render() {
    return (

      <div>
        <Form nameChangeHandler={this.nameChangeHandler}
          surnameChangeHandler={this.surnameChangeHandler}
          numberChangeHandler={this.numberChangeHandler}
          categoryChangeHandler={this.categoryChangeHandler}
          submitHandler={this.submitHandler}
          btntanla={this.btntanla}
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














