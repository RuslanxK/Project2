const user = require('./userModel')


const getAllUsers = () => {

    return new Promise((resolve, reject) => {

        user.find({}, function(err, data) {

            if(err) {

                reject(err)
            }

            else {

                resolve(data)
            }
        })
    })
}


const getUser = (id) => {

    return new Promise((resolve, reject) => {

        user.findById(id, function(err, data) {

            if(err) {

                reject(err)
            }

            else {

                resolve(data)
            }
        })
    })
}



const addUser = (obj) =>
{
    return new Promise((resolve,reject) =>
    {
       

        let User = new user({

            name : obj.name,
            email : obj.email,
            street : obj.street,
            city : obj.city,
            zipcode : obj.zipcode,
            tasks : obj.tasks,
            posts : obj.posts

        });
        
      
       User.save(function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Created!');
            }

        })
    })
}


const updateUser = (id,obj) =>
{
    return new Promise((resolve,reject) =>
    {

        user.findByIdAndUpdate(id,{

            name : obj.name,
            email : obj.email,
            street : obj.street,
            city : obj.city,
            zipcode : obj.zipcode,
            tasks : obj.tasks,
            posts : obj.posts
            
        }, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Updated!');
            }
        });
        
      
    })
}





const deleteUser = (id) => {

    return new Promise((resolve, reject) => {

        user.findByIdAndDelete(id, function(err) {

            if(err) {

                reject(err)
            }

            else {

                resolve("Deleted")
            }
        })
    })
}



module.exports = { getAllUsers, getUser, deleteUser, addUser, updateUser}