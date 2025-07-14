import express from 'express'
import userData from './users.json' with {type:'json'}
const app =express()

app.get("/",(req,resp)=>{
    console.log(userData)
    resp.send(userData)
})
app.get("/user/:id" ,(req,resp)=>{
    const id = req.params.id
    console.log(id)
    let filterData = userData.filter((users)=>users.id==id)
    resp.send(filterData)

    //🔍 Explanation
    //userData: an array of objects (likely your users).
    //.filter(...): loops through each user in that array.
    //user.id == id: compares the id property of each user to a variable id.
    //==: checks for equality (non-strict, allows type coercion).
    //filterData: a new array containing all users with id matching id.

/* Behind scences
    let filterData = [];
    for (let i = 0; i < userData.length; i++) {
    let users = userData[i]; // Each user in the array
    if (users.id == id) {
        filterData.push(users);
    }
    }
*/
})

app.get("/username/:name" ,(req,resp)=>{
    const name = req.params.name
    console.log(name)
    let filterData = userData.filter((users)=>users.name==name)
    resp.send(filterData)


})
app.listen(3200)