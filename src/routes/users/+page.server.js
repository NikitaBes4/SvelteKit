async function uniqUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let ids = []
    let data = await response.json()

    data.forEach(e => {!(e.userId in ids)? ids.push(e.userId):false});
    console.log(ids)  
    
    return {posts:data,ids:[...new Set(ids)]}
  }
    
    export async function load({params}) {
    let tmp = await uniqUser()
    return {
      posts: tmp.posts,
      users: tmp.ids
    }
  }

