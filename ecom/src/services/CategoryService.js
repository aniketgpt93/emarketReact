import * as WebURL  from './WebUrls'
class CategoryService
{
    loadCategory(){
        return fetch(WebURL.LOAD_CATEGORY)
    }

    saveCategory(name){
        return fetch(WebURL.SAVE_CATEGORY,{
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({cate_name:name})
        })
    }
} 

export default new CategoryService()