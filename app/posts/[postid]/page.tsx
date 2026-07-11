import axios from 'axios'

export default async function posts({params}:{
    params:Promise<{postid:string}>
}){
    // since nextjs 15+ considers params to be a promise
    const resolvedparam = await params;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${resolvedparam.postid}`)

    return<>
    <div>{response.data.title}</div>
    <div>{response.data.body}</div>
    </>


}