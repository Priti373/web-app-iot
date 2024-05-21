import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Survey = () => {
  const navigate = useNavigate();
  const handleChange = (e)=>{
    e.preventDefault()
    navigate('/test1')
  }
  
  return (
    <div>
      survey 20 questions
      <Link to='/test1'><button onClick={(e)=>handleChange(e)}>submit</button></Link>

    </div>
  )
}

export default Survey
