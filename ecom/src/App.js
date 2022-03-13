import React from 'react'

import {Routes,Route} from 'react-router-dom'

import Menu from './menuComponent/Menu'
import Home from './homeComponent/Home'
import Login from './loginComponent/Login'
import Cart from './cartComponent/Cart'

import CategoryService from './services/CategoryService'
import BrandService from './services/BrandService'
import ProductService from './services/ProductService'
import Store from './reduxdata/Store'
import {ACTION_LOAD_CATEGORY} from './reduxdata/actions/CategoryAction'
import {ACTION_LOAD_BRAND} from './reduxdata/actions/BrandAction'
import {ACTION_LOAD_PRODUCT} from './reduxdata/actions/ProductAction'
export default class App extends React.Component
{
  componentDidMount()
  {
    CategoryService.loadCategory().then(response=>response.json())
    .then(data=>
    {
        Store.dispatch({
          ...ACTION_LOAD_CATEGORY, payload:{
            categories : data
          }
        })

        BrandService.loadBrand().then(response=>response.json())
        .then(data=>
        {
          Store.dispatch({
            ...ACTION_LOAD_BRAND, payload:{
              brands : data
            }
          })

          ProductService.loadProduct().then(response=>response.json())
          .then(data=>
          {
            Store.dispatch({
              ...ACTION_LOAD_PRODUCT, payload:{
                products : data
              }
            })
          })
        })
    })
  }
  render(){
    return <>
      <Menu/>

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
       </Routes>

      
    </>
  }
}