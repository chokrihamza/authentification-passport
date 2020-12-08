import React from 'react'
import { useState } from 'react';
import FlashMessage from 'react-flash-message';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../js/actions/index';
import { Redirect } from 'react-router-dom'
const Signup = () => {

      const loading = useSelector((state) => state.userReducer.loading)
      const user = useSelector((state) => state.userReducer.user)
      const errors = useSelector((state) => state.userReducer.errors)
      console.log(errors)
      const dispatch = useDispatch()
      const [name, setName] = useState();
      const [email, setEmail] = useState();
      const [password, setPassword] = useState();
      const [phoneNumber, setPhoneNumber] = useState();
      const addUser = e => {
            e.preventDefault();
            dispatch(register({
                  name,
                  email,
                  password,
                  phoneNumber,
            }))
      }
      return (

            <div className="row mt-5 ">
                  <div className="col-md-6 m-auto">
                        <div className="card card-body">
                              <h1 className="text-center mb-3">
                                    <i className="fas fa-user-plus"></i>
         Register
            </h1>
                              {
                                    errors ? (
                                          errors.errors.map((e, i) => (
                                                <div key={i} className="alert alert-warning alert-dismissible fade show" role="alert">
                                                      <strong>{e.param}</strong> ${e.msg}.
                                                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                      </button>
                                                </div>

                                          )

                                          )) : null






                              }
                              {
                                    (loading) ? (<div className="alert alert-info" role="alert">
                                          Please wait
                                    </div>) : user ? (<Redirect to='/login' />) :

                                                (<FlashMessage duration={1000} >
                                                      <div className="alert alert-success" role="alert">
                                                            Great
                                     </div>
                                                </FlashMessage>)

                              }
                              <div className="form-group">
                                    <label >Name</label>
                                    <input type="text" className="form-control-plaintext" name="name" onChange={(e) => setName(e.target.value)} placeholder="name..." />
                              </div>



                              <div className="form-group">

                                    <label>email</label>
                                    <input type="email" className="form-control-plaintext border" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="email..." />
                              </div>


                              <div className="form-group">

                                    <label>password</label>
                                    <input type="password" className="form-control-plaintext" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="password..." />
                              </div>


                              <div className="form-group">

                                    <label>phoneNumber</label>
                                    <input type="text" className="form-control-plaintext" name="phoneNumber" onChange={(e) => setPhoneNumber(e.target.value)} placeholder="phone Number..." />
                              </div>



                              <button type="submit" className="btn btn-primary btn-block" onClick={addUser}>
                                    Register
        </button>
                              <p className="lead mt-4">Have An Account? <a href="/login">Login</a>   Go Home? <a href="/">Home</a></p>

                        </div>
                  </div>

            </div>
      );

}
export default Signup