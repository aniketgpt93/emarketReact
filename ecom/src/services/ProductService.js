import * as WebURL from './WebUrls'
class ProductService
{
   loadProduct(){
        return fetch(WebURL.LOAD_PRODUCT)
    }
} 

export default new ProductService()