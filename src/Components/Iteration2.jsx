import React, { useState } from 'react'
import video from '../assets/video2.mp4'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Iteration2 = () => {
  const navigate = useNavigate()
  let [survey1, setSurvey1] = useState(false);
  const handleChange = (e)=>{
    e.preventDefault()
    setTimeout(()=>{
      setSurvey1(true)
      console.log("in timeout")
      console.log(survey1)
    })
  }

  var form;
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzhiJIQWFIzMebM97nXxbntvoLp1J2WFZHeRqrMTXMPbQBF9JEvK1FnfpYStRToy-3l/exec'
  const submitForm = (e) =>{
    e.preventDefault()
    form = e.target;
    console.log("submit")
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    navigate('/test2')
  }
  
  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 pt-5 mt-5'>
      {!survey1 ?
      <div className='d-flex flex-column'>
        {/* width="640" height="360"  */}
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <video className='w-50' controls>
                <source src={video} type="video/mp4"/>
            </video>
            <div className='w-50'>
              <p>Video description</p>
              <p>An Idea of Powernap Marilyn Porter, the founder of Time Out Naps is confident that her mid-day power napping service will increase productivity in the workplace.</p>
            </div>
          </div>
          
          
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <p>you guys have to give a quiz after the video so watch it carefully</p>
          <p>Are you ready to take the quiz</p>
          <button type="button" className="btn btn-info" onClick={(e)=>handleChange(e)}>Submit</button>
        </div> 
      </div> 
      :
      <div>
        <p>1 What do you think?</p>
        {/* <form action="" className='d-flex flex-column' id='mtForm' onSubmit={(e) => { submitForm(e)}}>
            <span><input type="radio" name='a1' />&nbsp; She will be offered a deal that she asked for and she will accept the deal</span>
            <span><input type="radio" name='b1' />&nbsp; She will be offered a deal that she asked for and she will accept the deal</span>
            <span><input type="radio" name='c1' />&nbsp; She will be offered a deal that she asked for and she will accept the deal</span>
            <span><input type="radio" name='d1' />&nbsp; She will be offered a deal that she asked for and she will accept the deal</span>
            <div className=''><button type="submit" className='rounded-2 btn btn-info' >Submit</button></div>
        </form> */}

              <form action="" className='d-flex flex-column' onSubmit={(e)=>{submitForm(e)}}>
                <label>
                  <input type="radio" name="option2" required value='a1' />
                  She will be offered a deal that she asked for and she will accept the deal
                </label>
                <label>
                  <input type="radio" name="option2" required value='b1'  />
                  She will be offered a deal different than what she asked for and she will accept the deal
                </label>
                <label>
                  <input type="radio" name="option2" required value="c1"  />
                  She will be offered a deal different than what she asked for, and she will reject it.
                </label>
                <label>
                  <input type="radio" name="option2" required value="d1" />
                  She will not get any offers
                </label>
                <div className=''><button type="submit" className='rounded-2 btn btn-info' >Submit</button></div>
              </form>
      </div>

    }

    </div>
  )
}

export default Iteration2
