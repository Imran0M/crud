import React from 'react'
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';


function Base({tittle, children}) {
    const history=useHistory();
  return (
    <div className="App">
        <div className='nav'>
        <Button  onClick={()=>history.push('/add/user')}className="btn" variant="dark">Add User</Button>
        <Button  onClick={()=>history.push('/')} className="btn" variant="secondary">Dashboard</Button>
        </div>
        <h2>{tittle}</h2>
        <div>{children}</div>
    </div>
  )
}

export default Base;