import React from 'react'

import Store from '../reduxdata/Store'
import {ACTION_ADDCART_ITEM} from '../reduxdata/actions/CartAction'

import { connect } from 'react-redux'
var mapStateToProps = (state)=>{
	return { 
			categories : state.categories,
			brands : state.brands,
			products : state.products		
			}
}
class Home extends React.Component
{

	addCart = (prod)=>{
			Store.dispatch({
				...ACTION_ADDCART_ITEM,payload:{product:prod}
			})
	}
  render(){
    return <>
      <br/>
      <section id="new-arrivals" class="new-arrivals">
			<div class="container">
				<div class="section-header">
					<h2>new arrivals</h2>
				</div>
				<div class="new-arrivals-content">
					<div class="row">
					    <div class="col-md-2 col-sm-2">
							<h3>Categories</h3>
							<hr/>
							{this.props.categories.map(cate=>{
								return <h6 className='text-success'>
									&nbsp;&nbsp;{cate.cate_name}
								</h6>
							})}
							<br/>
							<h3>Brands</h3>
							<hr/>
							{this.props.brands.map(bd=>{
								return <h6 className='text-success'>
									&nbsp;&nbsp;{bd.brand_name}
								</h6>
							})}
						</div>
						<div class="col-md-10 col-sm-10">
						{this.props.products.map((prod,index)=>
						{
							return <div class="col-md-3 col-sm-4" key={index}>
							<div class="single-new-arrival">
								<div class="single-new-arrival-bg">
									<img src={'https://ecommerce-web-sample.herokuapp.com/'+prod.prod_image} alt="new-arrivals images"/>
									<div class="single-new-arrival-bg-overlay"></div>
									<div class="sale bg-1">
										<p>sale</p>
									</div>
									<div class="new-arrival-cart">
										<p>
											<span class="lnr lnr-cart"></span>
										<b className='btn btn-warning' onClick={()=>this.addCart(prod)}>add <span>to </span> cart</b>
										</p>
										<p class="arrival-review pull-right">
											<span class="lnr lnr-heart"></span>
											<span class="lnr lnr-frame-expand"></span>
										</p>
									</div>
								</div>
								<h4><a href="#">{prod.prod_name}</a></h4>
								<p class="arrival-product-price">Rs. {prod.prod_price}</p>
							</div>
						</div>
						})}

						
						
					</div>
					</div>
				</div>
			</div>
            </section>
    </>
  }
}

export default connect(mapStateToProps)(Home)