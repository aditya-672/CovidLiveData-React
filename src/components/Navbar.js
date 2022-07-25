import React, { useState } from 'react'

const Navbar = (props) => {

    const [search , setSearch] = useState('')
    const changeHandler = (events) => {
        // props.onsearch(events.target.value)
        setSearch(events.target.value)
        console.log(events.target.value)
    }

    const submitHandler = (events) => {
      events.preventDefault();
      console.log(search)
      props.onsearch(search);
    }

  return (
    <div><nav className="navbar bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href='/'>Covid Live Database</a>
      <form className="d-flex" role="search" onSubmit={submitHandler}>
        <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" onChange={changeHandler}/>
        <input className="btn btn-outline-success" type="submit"></input>
      </form>
   </div>
  </nav></div>
  )
}

export default Navbar