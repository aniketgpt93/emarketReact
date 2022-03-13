import React from 'react'
import UserService from '../services/UserService';
import Store from '../reduxdata/Store'
import {ACTION_SET_USERDATA} from '../reduxdata/actions/UserAction'
export default class Login extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            regmsg : "",
            loginmsg : ""
        }
    }
    register = (event)=>{
        var name = this.namebox.value;
        var phone = this.phonebox.value;
        var email = this.emailbox.value;
        var password = this.passwordbox.value;

        var ob = {name,phone,email,password};
        this.setState({regmsg:"Registeration in Process ...."})
        UserService.saveUser(ob).then(response=>response.json()).then(result=>{
            this.setState({regmsg:result.msg})
        })
        this.namebox.value=''
        this.phonebox.value=''
        this.emailbox.value=''
        this.passwordbox.value=''
        event.preventDefault();
    }

    login = (event)=>{
        var email = this.loginemailbox.value;
        var password = this.loginpassbox.value;

        var ob = {email,password};
        this.setState({loginmsg:"Login in Process ...."})
        UserService.loginUser(ob).then(response=>response.json()).then(result=>{
            this.setState({loginmsg:result.msg})
            if(result.status){
                Store.dispatch({
                    ...ACTION_SET_USERDATA,payload:{
                        loginstatus : true,
                        token : result.token,
                        username : result.username
                    }
                })
            }
        })
    
        this.loginemailbox.value=''
        this.loginpassbox.value=''
        event.preventDefault();
    }

    render()
    {
        return <>
            <br/>
            <section id="new-arrivals" class="new-arrivals">
			<div class="container">
		        <div class='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h2 class="section-header">User Register</h2>
                        <br/>
                        <form onSubmit={this.register}>
                        <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <input type="text" ref={c=>this.namebox=c} className="form-control" placeholder='Name' required/>
                        </div>
                        
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <input type="text" ref={c=>this.phonebox=c} className="form-control" placeholder='Phone' required/>
                        </div>
                        </div>
                        <br/>
                        <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <input type="email" ref={c=>this.emailbox=c} className="form-control" placeholder='Email' required/>
                        </div>
                        
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <input type="password" ref={c=>this.passwordbox=c} className="form-control" placeholder='Password' required/>
                        </div>
                        </div>
                        <br/>
                        <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                           <button className='btn btn-success' type='sub mit'>Register</button>
                        </div>
                        
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <b className='text-danger'>{this.state.regmsg}</b>
                        </div>
                        </div>
                        </form>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <h2 class="section-header">User Login</h2>
                        <br/>
                        <form onSubmit={this.login}>
                        <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <input type="email" ref={c=>this.loginemailbox=c} className="form-control" placeholder='Email' required/>
                        </div>
                        
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <input type="password" ref={c=>this.loginpassbox=c} className="form-control" placeholder='Password' required/>
                        </div>
                        </div>
                        <br/>
                        <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                           <button className='btn btn-success' type='submit'>Login</button>
                        </div>
                        
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <b className='text-danger'>{this.state.loginmsg}</b>
                        </div>
                        </div>
                        </form>
                    </div>
                </div>

            </div>
            </section>    
        </>
    }
}