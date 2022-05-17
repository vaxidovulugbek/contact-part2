

import React, { Component } from 'react'
import './form.css'


export default class Form extends Component {
constructor (props) {
  super(props)
  console.log(props);
  this.state = {
    selectvale: "okkiii"
  }
}

  
// buttonfaily = (e) => {
//   e.preventDefault()
//   let lii = document.querySelectorAll(".lii")
//   let friendbtn = document.querySelector("#friend-btn")
//   let familybtn = document.querySelector("#family-btn")
//   let classmatebtn = document.querySelector("#classmate-btn")

//   // this.props.arr.forEach(el => {
//     // console.log(el.select);
//     // if (el.select == "Family") {
//       lii.forEach(item => {
//         if (familybtn.textContent == "Family")
//         // if (item.classList[1] == "Family") {
//         //   item.style.display = "flex"
//         // }

//         // item.classList.add("Family")
//         // item.classList.remove("classmates")
//         // item.classList.remove("Friends")
        

//         familybtn.classList.add("fabtn")
//         classmatebtn.classList.remove("clbtn")
//         friendbtn.classList.remove("frbtn")
//         console.log(familybtn.classList[2]);
//         if (familybtn.classList[2] == "fabtn") {
//           item.style.display = "flex"
//         }
//         else {
//           item.style.display = "none"
//         }

//       })

//     // }
//     // else if (el.select != "Family") {
//     //   lii.forEach(item => {
//     //     if (item.classList[1] != "Family") {
//     //       item.style.display = "none"
//     //     }
//     //   })
//     // }
//   // }) 
// }

// buttonfriend = (e) => {
//   e.preventDefault()
//   let lii = document.querySelectorAll(".lii")
//   let friendbtn = document.querySelector("#friend-btn")
//   let familybtn = document.querySelector("#family-btn")
//   let classmatebtn = document.querySelector("#classmate-btn")



//   // this.props.arr.forEach(el => {
//     // if (el.select == "Friends") {
//       lii.forEach(item => {
//         // item.style.display = "flex"
//         // item.classList.add("Friends")
//         // item.classList.remove("classmates")
//         // item.classList.remove("Family")
//         console.log(item);

//         familybtn.classList.remove("fabtn")
//         classmatebtn.classList.remove("clbtn")
//         friendbtn.classList.add("frbtn")
//         if (friendbtn.classList[2] == "frbtn")  {
//           item.style.display = "flex"
//         }
//         else {
//           item.style.display = "none"
//         }
//       })
//     // }

//     // else if (el.select != "Friends") {
//     //   lii.forEach(item => {
//     //     item.style.display = "none"
//     //   })
//     // }
//   // }) 
// }
// buttonclassmates = (e) => {
//   e.preventDefault()
//   let lii = document.querySelectorAll(".lii")
//   let friendbtn = document.querySelector("#friend-btn")
//   let familybtn = document.querySelector("#family-btn")
//   let classmatebtn = document.querySelector("#classmate-btn")


//   // this.props.arr.forEach(el => {
//     // if (el.select == "classmates") {
//       lii.forEach(item => {
//        // item.style.display = "flex"
 //       // item.classList.add("classmates")
 //       // item.classList.remove("Friends")
 //       // item.classList.remove("Family")
//         console.log(item);

//         familybtn.classList.remove("fabtn")
//         classmatebtn.classList.add("clbtn")
//         friendbtn.classList.remove("frbtn")
//         if (classmatebtn.classList[2] == "frbtn")  {
//           item.style.display = "flex"
//         }
//         else {
//           item.style.display = "none"
//         }


//       })
//     // }

//     // else if (el.select != "Friends") {
//     //   lii.forEach(item => {
//     //     item.style.display = "none"
//     //   })
//     // }
//   // }) 
// }



  
// buttonfaily = (e) => {
//   e.preventDefault()
//   let lii = document.querySelectorAll(".lii")
//   let friendbtn = document.querySelector("#friend-btn")
//   let familybtn = document.querySelector("#family-btn")
//   let classmatebtn = document.querySelector("#classmate-btn")

//   let optionfamily = document.querySelector("#optionfamily")
//   console.log(optionfamily.textContent);
  
//       lii.forEach(item => {
//         // if (familybtn.textContent == "Family")

//         // familybtn.classList.add("fabtn")
//         // classmatebtn.classList.remove("clbtn")
//         // friendbtn.classList.remove("frbtn")

//         // item.classList.add("Family")
//         // item.classList.remove("Friends")
//         // item.classList.remove("classmates")

//         if (optionfamily.textContent == "Family") {
//           item.classList.add("Family")
//           item.classList.remove("Friends")
//           item.classList.remove("classmates")
//         }

//         // if (familybtn.classList[2] == "fabtn") {
//         //   item.style.display = "flex"
//         //   console.log(familybtn.textContent);
//         // }
//         // else if (familybtn.classList[2] != "fabtn"){
//         //   item.style.display = "none"
//         // }
//         console.log(item);
//         console.log(optionfamily.textContent);

//       })
// }

// buttonfriend = (e) => {
//   e.preventDefault()
//   let lii = document.querySelectorAll(".lii")
//   let friendbtn = document.querySelector("#friend-btn")
//   let familybtn = document.querySelector("#family-btn")
//   let classmatebtn = document.querySelector("#classmate-btn")

//   let optionfamily = document.querySelector("#optionfamily")
//   console.log(optionfamily.textContent);

//       lii.forEach(item => {

//         // familybtn.classList.remove("fabtn")
//         // classmatebtn.classList.remove("clbtn")
//         // friendbtn.classList.add("frbtn")

//         if (optionfamily.textContent == "Friends") {
//           item.classList.remove("Family")
//           item.classList.add("Friends")
//           item.classList.remove("classmates")
//         }


//         // if (friendbtn.classList[2] == "frbtn")  {
//         //   item.style.display = "flex"
//         // }
//         // else if (friendbtn.classList[2] != "frbtn") {
//         //   item.style.display = "none"
//         // }
//         console.log(item);
//         console.log(optionfamily.textContent);


//       })
// }
// buttonclassmates = (e) => {
//   e.preventDefault()
//   let lii = document.querySelectorAll(".lii")
//   let friendbtn = document.querySelector("#friend-btn")
//   let familybtn = document.querySelector("#family-btn")
//   let classmatebtn = document.querySelector("#classmate-btn")

//   let optionfamily = document.querySelector("#optionfamily")
//   console.log(optionfamily.textContent);

//       lii.forEach(item => {

//         // familybtn.classList.remove("fabtn")
//         // classmatebtn.classList.add("clbtn")
//         // friendbtn.classList.remove("frbtn")

//         if (optionfamily.textContent == "classmates") {
//           item.classList.remove("Family")
//           item.classList.remove("Friends")
//           item.classList.add("classmates")
//         }


//         // if (classmatebtn.classList[2] == "clbtn"){
//         //   item.style.display = "flex"
//         // }
//         // else if(classmatebtn.classList[2] != "clbtn"){
//         //   item.style.display = "none"
//         // }

//         console.log(item);
//         console.log(optionfamily.textContent);

//       })
//   }


// selection = (e) => {
//   e.preventDefault() 
//     this.props.arr.forEach(el => {
//     // let aa = el.select
//     this.setState({selectvale:  el.select})
//   }) 
//   console.log(this.state.selectvale);
// }



  render() {
    return (
      <div className="father">
      <form id="form" onSubmit={this.props.submitHandler}>
        <input className="input" type="text" placeholder="first-name"  neme="imput" onChange={this.props.nameChangeHandler}/>
        <input className="input"  type="text" placeholder="last-name" onChange={this.props.surnameChangeHandler}/>
        <input className="input"  type="number" placeholder="tel" onChange={this.props.numberChangeHandler} />
        <input className="category" type="text" list="date" onChange={this.props.categoryChangeHandler}/>
        <datalist id="date"  onChange={this.props.categoryChangeHandler}>
          <option id='optionfamily'>Family</option>
          <option>Friends</option>
          <option>classmates</option>
        </datalist>
        <button className="btn btn-primary mb-3" type="submit">submit</button>
      </form>
      <div className="info"> 
        <form className="btn-group">
          <button id="all-btn" className="btn btn-primary" type="button" onClick={this.props.btntanla}>All</button>
          <button id="family-btn" className="btn btn-primary" type="button" onClick={this.props.btntanla}>Family</button>
          <button id="friend-btn" className="btn btn-primary" type="button" onClick={this.props.btntanla}>Friends</button>
          <button id="classmate-btn" className="btn btn-primary" type="button" onClick={this.props.btntanla}>classmates</button>
        </form>
        <ul id="list" className="list-group list-group-numbered mt-3">
          {this.props.arr.map((item,i) => (
            <li id='lii' className='itemm lii' key={this.state.selectvale}><p key={i + 1}>{item.name}</p><p key={i + 2}>{item.surname}</p><p key={i + 3}>{item.number}</p></li>
          ))}
        </ul>
    </div>
</div>
    )
  }
}


// function button() {
//   let elbtngroup = document.querySelector(".btn-group")
  
//   elbtngroup.addEventListener("click", (e) => {
//     let newBaddiy = newarr.filter((item) => {
//       return item.categorilar == e.target.textContent ;
  
//     });
//     if (e.target.textContent == "All") {
//       newBaddiy = newarr
//     }
//     newlistarr = newBaddiy.map((item) => {
//       return `<li class="list-group-item d-flex"><span class="me-2 w-25">${item.fname}</span><span class="me-5 ms-5 w-25">${item.lname}</span> <span class="ms-2 w-25">${item.tel}</span></li>`
//     })
//     ellist.innerHTML =  newlistarr.join("")
//   })
  
// }
// button()



