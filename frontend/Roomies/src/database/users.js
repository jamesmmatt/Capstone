const userData = [
    {
        name: "Matthew James",
        email: 'james@user',
        password: 'password',
    }
];

export function GetUsers() {
    return userData;
}

export function SetUsers(fullname, email, password) {
    userData.push({"fullname" : fullname, "email": email, "password": password});
    console.log(userData);
}
