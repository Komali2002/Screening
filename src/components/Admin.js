import {useForm} from 'react-hook-form'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {FaSignInAlt} from 'react-icons/fa'
import axios from 'axios'
import { Form, Button } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import {Link} from 'react-router-dom'
import { render } from '@testing-library/react'
function Admin() {
    {
        document.body.style.backgroundColor = "LightGray"
    }
    const [formValues, setFormValues] = useState([{ name: ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: ""}])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
      
    const {register,formState:{errors}}=useForm()

    

  return(
    <div>
      <div className='container mb-4'>
            <div>
            <h1 className='display-2 text-center header mt-20'>Screening Questions</h1>
            
                <div className='row mt-3'>
                    <div className='col-12 col-sm-12 col-md-6 mx-auto'>
                        <Form >
                        <h3>Sample Title</h3>
                            <Form.Group className="mb-3 form-group p-3">
                    <label>Q1.Can you please speak to prioritization,budget allocation broadly and ROI for posh Technologies?Please elaborate below</label>
                    {/*Yes*/}
                    <div className="form-check">
                        <input type="radio" id="Yes" className="form-check-input" {...register("gender",{required:true})} value="Yes"/>
                        <label htmlFor="Yes" className="form-check-label">Yes</label>
                    </div>
                    {/*No*/}
                    <div className="form-check">
                        <input type="radio" id="NO" className="form-check-input" {...register("gender",{required:true})} value="No"/>
                        <label htmlFor="NO" className="form-check-label">No</label>
                    </div>
                    {errors.gender?.type === 'required' && <p className='text-danger'>*answer required</p>}

                    </Form.Group>
                    <Form.Group className="mb-3 form-group p-3">
                    <label>Q2.Can you please speak to prioritization,budget allocation broadly and ROI for posh Technologies?Please elaborate below</label>
                    {/*Yes*/}
                    <div className="form-check">
                        <input type="radio" id="Yes" className="form-check-input" {...register("gender",{required:true})} value="Yes"/>
                        <label htmlFor="Yes" className="form-check-label">Yes</label>
                    </div>
                    {/*No*/}
                    <div className="form-check">
                        <input type="radio" id="NO" className="form-check-input" {...register("gender",{required:true})} value="No"/>
                        <label htmlFor="NO" className="form-check-label">No</label>
                    </div>
                    {errors.gender?.type === 'required' && <p className='text-danger'>*answer required</p>}

                    </Form.Group>
                    
                    <Form.Group className="mb-3 form-group">
                    <label className="p-3">Q3.Can you please speak to prioritization,budget allocation broadly and ROI for posh Technologies?Please elaborate below</label>
                    <div className="form-check">
                    <label for="text"></label>
                    <textarea id="text" className="text p-3 pt-2" rows="2" cols="60" placeholder="Long answer text"></textarea>
                    </div>
                    {errors.answer?.type === 'required' && <p className='text-danger'>*answer required</p>}

                    </Form.Group>
                    
                    <Form.Group className="mb-3 form-group p-3">
                    <label>Q4.Can you please speak to prioritization,budget allocation broadly and ROI for posh Technologies?Please elaborate below</label>
                    {/*Yes*/}
                    <div className="form-check">
                        <input type="radio" id="Yes" className="form-check-input" {...register("gender",{required:true})} value="Yes"/>
                        <label htmlFor="Yes" className="form-check-label">Yes</label>
                    </div>
                    {/*No*/}
                    <div className="form-check">
                        <input type="radio" id="NO" className="form-check-input" {...register("gender",{required:true})} value="No"/>
                        <label htmlFor="NO" className="form-check-label">No</label>
                    </div>
                    {errors.gender?.type === 'required' && <p className='text-danger'>*answer required</p>}

                    </Form.Group>
                    <Form.Group className="mb-3 form-group">
                    <label className="p-3">Q5.Can you please speak to prioritization,budget allocation broadly and ROI for posh Technologies?Please elaborate below</label>
                    <div className="form-check">
                    <label for="text"></label>
                    <textarea id="text" className="text p-3 pt-2" rows="2" cols="60" placeholder="Long answer text" ></textarea>
                    </div>
                    {errors.answer?.type === 'required' && <p className='text-danger'>*answer required</p>}

                    </Form.Group>
                    <Form.Group className="mb-3 form-group p-3">
                    {formValues.map((element, index) => (
                 <div className="form" key={index}>
              <label className="p-3">Q6.Can you please speak to prioritization,budget allocation broadly and ROI for posh Technologies?Please elaborate below</label>
              <input className="p-3 w-100"type="text" name="name" value={element.name || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove ms-2 " onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
                    ))}
                    </Form.Group>
                    <div className="button-section">
                    <button className="button add mt-3" type="button" onClick={() => addFormFields()}>Add</button>

          </div>
                    </Form>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
};
export default Admin