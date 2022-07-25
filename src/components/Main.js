import React, { useState } from 'react'
import Navbar from './Navbar'
import RCard from './RCard'
import "./main.css"

const Main = (props) => {
  const [search,setSearch] = useState('india')
  // const changeHandler = (events) => {
  //   setSearch(events.target.value);
  //   console.log(events.target.value);
  // }
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   console.log(search);
  //   props.searchsend(search);
  //   // setSearch(events.target.value)
  //   // setSearch(events.target.value)
  // }

  const searchhand = (data) => {
    console.log(data)
    setSearch(data)
  }
  return (
    <div>
        <Navbar onsearch={searchhand}></Navbar>
        <center>
        <RCard searchh={search} />
        </center>
    </div>
  )
}

export default Main