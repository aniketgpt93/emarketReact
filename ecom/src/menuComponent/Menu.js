import React from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
var mapStateToProps = (state)=>{
    return { userinfo : state.user, cartcount : state.carts.length }
}
class Menu extends React.Component {
    render() {
        return <>
            <header id="home" class="welcome-hero">

                <div class="top-area">
                    <div class="header-area">

                        <nav class="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">


                            <div class="container">
                                <div class="attr-nav">
                                    <ul>
                                        <li class="dropdown">
                                            <Link to="/cart" class="dropdown-toggle" data-toggle="dropdown" >
                                                <span class="lnr lnr-cart"></span>
                                                <span class="badge badge-bg-1">
                                                {this.props.cartcount}
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                                        <i class="fa fa-bars"></i>
                                    </button>
                                    <a class="navbar-brand" href="index.html">E<span>market</span></a>

                                </div>
                                <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                                    <ul class="nav navbar-nav navbar-center">
                                        <li><Link to="/">home</Link></li>

                                        <li><Link to="/contact">contact</Link></li>

                                        {this.props.userinfo.loginstatus?<li><Link to="/profile">Profile ({this.props.userinfo.username})</Link></li>:<li><Link to="/login">Login</Link></li>}
                                        

                                        

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </header>

        </>
    }
}

export default connect(mapStateToProps)(Menu)