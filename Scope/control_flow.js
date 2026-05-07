let userRole = "manager";
let accesslevel;
let a = "sadib";

if (userRole == "admin"){
    accesslevel = "full access granted";
} else if (userRole == "manager"){
    accesslevel = "limited access granted";
} else {
    accesslevel = "no access granted";
}

console.log("Access level:", accesslevel);

let isloggedin = true;
let usermessage;

if (isloggedin) {
    if (userRole == "admin") {
        usermessage = "welcome admin";
        console.log(usermessage, a);
    } else if (userRole == "manager") {
        usermessage = "welcome manager";
        console.log(usermessage);
    }
    else {
        usermessage = "please log in first";
        console.log(usermessage);
    }

}

//switch case
let usertype = "admin";
let usercategory;

switch (usertype) {
    case "admin":
        usercategory = "administrator";
        break;
    
    case "manager":
        usercategory = "manager";
        break;
    
    case "subsciber":
        usercategory = "subsciber";
        break;
    
    default:
        usercategory = "unknown";
}

console.log("user category:", usercategory);


//Ternary operator
let isAuthenticated = false;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("AuthenticationStatus", authenticationStatus);