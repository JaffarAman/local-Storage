// function setData(){
//     var name = document.getElementById("name"); 
//     var email = document.getElementById("email"); 
//     var phone = document.getElementById("phone");
//     // console.log(name.value , email.value , phone.value);

//     var obj = {
//         name : name.value,
//         email : email.value,
//         phone : phone.value
//     }
    
//     localStorage.setItem("userData" , JSON.stringify(obj))


// }

// function getData(){
//     var ul = document.getElementById("ul")
//     var getDatas = localStorage.getItem("userData")
//     var dataObj =  JSON.parse(getDatas)
//     console.log(dataObj)
// }


function setData(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;

    var userObj = {
        userName : name,
        userEmail : email,
        userPhone : phone,
        userAge : age,
    }

    localStorage.setItem("userInfo" , JSON.stringify(userObj))
}

function getData(){
    var getName = document.getElementById("getName");
    var getEmail = document.getElementById("getEmail");
    var getPhone = document.getElementById("getPhone");
    var getAge = document.getElementById("getAge");

    var getUserData = JSON.parse(localStorage.getItem("userInfo"))
    console.log(getUserData.userName)


    getName.value = getUserData.userName
    getEmail.value = getUserData.userEmail
    getPhone.value = getUserData.userPhone
    getAge.value = getUserData.userAge
}