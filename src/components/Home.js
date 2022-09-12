import React from 'react' 
import './Home.css'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {FaSignInAlt} from 'react-icons/fa'
import axios from 'axios'
import { Form, Button } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import {Link} from 'react-router-dom'
function Home() {
    {
        document.body.style.backgroundColor = "LightGray"
    }
    const {register,handleSubmit,formState:{errors}}=useForm()

    //form submission
    const onFormSubmit = (userObj) => {
        //http post req
        console.log(userObj)
        axios
          .post('http://localhost:5000/response-api/create-responses', userObj)
          .then((response) => {
              console.log(response)
            alert("Response add");
            console.log(userObj);
            
          })
          .catch((error) => {
            console.log(error);
            alert("Something went wrong in adding responses");
          });
      };
  return(
    <div>
        <div className='container mb-4'>
            <div>
            <h1 className='display-2 text-center header mt-20'>Screening Questions</h1>
            
                <div className='row mt-3'>
                    <div className='col-12 col-sm-12 col-md-6 mx-auto'>
                        <Form onSubmit={handleSubmit(onFormSubmit)}>
                        <h3>Sample Title</h3>
                        <Form.Group className="mb-3 form-group p-3">
                    <label htmlFor='un'>Clientname</label>
                    <input type="text" id="un" className="form-control" {...register("Clientname", { required: true, minLength: 4 ,maxLength:6})} />
                        {/* validation error msg for Clientname */}
                        {errors.Clientname?.type === 'required' && <p className='text-danger'>* Clientname required</p>}
                        {errors.Clientname?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.Clientname?.type === 'maxLength' && <p className='text-danger'>* Max length should be 6</p>}
                    
                    </Form.Group>
                            <Form.Group className="mb-3 form-group p-3">
                    <label>Q1.Can you please speak to prioritization,budget allocation broadly and ROI for posh Technologies?Please elaborate below</label>
                    {/*Yes*/}
                    <div className="form-check">
                        <input type="radio" id="Yes" className="form-check-input" {...register("q2")} value = "yes"/>
                        <label htmlFor="Yes" className="form-check-label">Yes</label>
                    </div>
                    {/*No*/}
                    <div className="form-check">
                        <input type="radio" id="NO" className="form-check-input" {...register("q2")} value = "no"/>
                        <label htmlFor="NO" className="form-check-label">No</label>
                    </div>
                    {errors.text?.type === 'required' && <p className='text-danger'>*answer required</p>}

                    </Form.Group>
                    
                    <Form.Group className="mb-3 form-group p-3">
                    <label>Q2.Can you please speak to prioritization,budget allocation broadly and ROI for posh Technologies?Please elaborate below</label>
                    {/*Yes*/}
                    <div className="form-check">
                        <input type="radio" id="Yes" className="form-check-input" {...register("text",{required:true})} value="Yes"/>
                        <label htmlFor="Yes" className="form-check-label">Yes</label>
                    </div>
                    {/*No*/}
                    <div className="form-check">
                        <input type="radio" id="NO" className="form-check-input" {...register("text",{required:true})} value="No"/>
                        <label htmlFor="NO" className="form-check-label">No</label>
                    </div>
                    {errors.text?.type === 'required' && <p className='text-danger'>*answer required</p>}

                    </Form.Group>
                    <Form.Group className="mb-3 form-group">
                    <label className="p-3">Q3.Can you please speak to prioritization,budget allocation broadly and ROI for posh Technologies?Please elaborate below</label>
                    <div className="form-check">
                    <label for="text"></label>
                    <textarea id="text" className="text p-3 pt-2" rows="2" cols="60" placeholder="Long answer text" {...register("text", { required: true})}></textarea>
                    </div>
                    {errors.answer?.type === 'required' && <p className='text-danger'>*answer required</p>}

                    </Form.Group>
                    <Form.Group className="mb-3 form-group p-3">
                    <label>Q4.Can you please speak to prioritization,budget allocation broadly and ROI for posh Technologies?Please elaborate below</label>
                    {/*Yes*/}
                    <div className="form-check">
                        <input type="radio" id="Yes" className="form-check-input" {...register("text",{required:true})} value="Yes"/>
                        <label htmlFor="Yes" className="form-check-label">Yes</label>
                    </div>
                    {/*No*/}
                    <div className="form-check">
                        <input type="radio" id="NO" className="form-check-input" {...register("text",{required:true})} value="No"/>
                        <label htmlFor="NO" className="form-check-label">No</label>
                    </div>
                    {errors.text?.type === 'required' && <p className='text-danger'>*answer required</p>}

                    </Form.Group>
                    <Form.Group className="mb-3 form-group">
                    <label className="p-3">Q3.Can you please speak to prioritization,budget allocation broadly and ROI for posh Technologies?Please elaborate below</label>
                    <div className="form-check">
                    <label for="text"></label>
                    <textarea id="text" className="text p-3 pt-2" rows="2" cols="60" placeholder="Long answer text" {...register("text", { required: true})}></textarea>
                    </div>
                    {errors.answer?.type === 'required' && <p className='text-danger'>*answer required</p>}

                    </Form.Group>
                    </Form>
                    </div>
                </div>
            </div>
        
        </div>
       
    </div>
  )
};
export default Home