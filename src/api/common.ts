import request from '@/utils/request'

// 例如(post)：
export function updateBook(obj: any) {
    return request({
        url: '/book/update',      // url = base url + request url
        method: 'post',
        data: obj, 
    })
}
// 例如(get)：
export function getBookList(obj: any) {
    return request({
        url: '/book/list',      // url = base url + request url
        method: 'post',
        params: obj,   
    })
}