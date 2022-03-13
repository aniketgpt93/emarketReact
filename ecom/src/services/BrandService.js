import * as WebURL from './WebUrls'
class BrandService
{
    loadBrand(){
        return fetch(WebURL.LOAD_BRAND)
    }
} 

export default new BrandService()