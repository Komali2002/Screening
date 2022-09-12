import React from 'react'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {FaSignInAlt} from 'react-icons/fa'
import axios from 'axios'
import { Form, Button } from "react-bootstrap";
import { MdLogin } from "react-icons/md";
import './Login.css';
import {Link} from 'react-router-dom'
function Login()
{
  const {register,handleSubmit,formState:{errors}}=useForm()

  //form submission
  const onFormSubmit = (userObj) => {
      //http post req
      axios
        .post("http://localhost:5000/user-api/login", userObj)
        .then((response) => {
            console.log(response)
          alert("login successful");
          console.log(userObj);
          
        })
        .catch((error) => {
          console.log(error);
          alert("Something went wrong in creating user");
        });
    };
  return(
      <div className='row mt-3' >
      <p className="display-2 header  text-center">Login</p>
      <div className="col-10 col-sm-8 col-md-6 mx-auto mt-3">
      <form onSubmit={handleSubmit(onFormSubmit)} className='w-75 mx-auto'>
          {/*username*/}
          <div className="mb-3">
              <label htmlFor='un'>Username</label>
              <input type="text" id="un" className="form-control" {...register("username", { required: true, minLength: 4 ,maxLength:6})} />
                  {/* validation error msg for username */}
                  {errors.username?.type === 'required' && <p className='text-danger'>* Username required</p>}
                  {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                  {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 6</p>}

          </div>
          {/*password*/}
          <div className="mb-3">
              <label htmlFor='un'>password</label>
              <input type="password" id="password" className="form-control" {...register("password", { required: true, minLength: 4 ,maxLength:6})} />
                  {/* validation error msg for password */}
                  {errors.password?.type === 'required' && <p className='text-danger'>* password is  required</p>}
                 

          </div>
          
          
          <Button  id="a" type="submit" className="btn btn-success w-70 mb-4" href="/Admin">
                                Login<FaSignInAlt/>
                            </Button>
          <h1 className="h1-e mt-3">Not registered yet <Link to={{pathname:'/Signup'}}>sign up?</Link></h1>

      </form>
      </div>
  
  </div>
  )
}
export default Login