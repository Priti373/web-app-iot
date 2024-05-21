import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// https://script.google.com/macros/s/AKfycbzhiJIQWFIzMebM97nXxbntvoLp1J2WFZHeRqrMTXMPbQBF9JEvK1FnfpYStRToy-3l/exec
// AKfycbzhiJIQWFIzMebM97nXxbntvoLp1J2WFZHeRqrMTXMPbQBF9JEvK1FnfpYStRToy-3l

const Home = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const handleActivate = (value)=>{
    setActive(value)
  }
  const allData = []
  var form;  
  var data;
  const submitForm = (e) =>{
    e.preventDefault()
    form = e.target;
    console.log(form)
    data = form;
    console.log("submit")
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    console.log(data)
    navigate('/survey')
  }
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzhiJIQWFIzMebM97nXxbntvoLp1J2WFZHeRqrMTXMPbQBF9JEvK1FnfpYStRToy-3l/exec'

  return (
    <div className='d-flex justify-content-center align-items-top pt-5 ' style={{height:'90vh'}}>
      <div className='d-flex flex-column w-75 pt-5'>
        <p className=''>By participating in this assessment, you hereby consent to the recording of the video and screen activity for research purposes. Your consent is voluntary, and you may choose to withdraw from the assessment at any time without penalty.
        If you have any concerns or questions regarding the recording process, please feel free to raise them before proceeding with the assessment. We are committed to ensuring that your participation is both informed and comfortable. Thank you for your cooperation and understanding.</p>

        <div className='d-flex justify-content-center align-items-top'>
          <div className='d-flex flex-column w-50'>
            <div className='d-flex justify-content-center align-content-center align-items-center'>
              <div action="" className='d-flex gap-lg-5 mb-5'>
                <label>
                  <input type="radio" name="option" required onClick={()=>handleActivate(true)}  className='form-radio h-5 w-5'/>
                  Agree
                </label>
                <label>
                  <input type="radio" name="option" required value="option2" onClick={()=>handleActivate(false)} className='form-radio h-5 w-5'/>
                  Disagree
                </label>
              </div>
            </div>
            <form action="" name='submit-to-google-sheet' onSubmit={(e) => { submitForm(e)}} id='form'>
              <div className="input-group mb-3">
                <span className="w-full p-2 mb-3 border rounded" id="basic-addon1">Name : </span>
                <input type="text" className="form-control" name='name' required placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group mb-3">
                <span className="w-full p-2 mb-3 border rounded" id="basic-addon1">SRN : </span>
                <input type="text" className="form-control" name='srn' required placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group mb-3">
                <span className="w-full p-2 mb-3 border rounded" id="basic-addon1">Class : </span>
                <input type="text" className="form-control" name='class' required placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group mb-3">
                <span className="w-full p-2 mb-3 border rounded" id="basic-addon1">Email : </span>
                <input type="text" className="form-control" name='email' required placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              <div className="input-group mb-3">
                <span className="w-full p-2 mb-3 border rounded" id="basic-addon1">Phone NO. : </span>
                <input type="text" className="form-control" name='phone' required placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
              </div>
              {active ? <div className='d-flex justify-content-center align-content-center align-items-center'><button type="submit" className='rounded-2 btn btn-info' >Submit</button></div> : <div className='d-flex justify-content-center align-content-center align-items-center'><button type="submit" disabled className='rounded-2 btn btn-info' >Submit</button></div>}
            </form>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}

export default Home
