var users = []

users.push({
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '123123123'
})
users.push({
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '123123123'
})
users.push({
    name: 'Pepito Grillo',
    email: 'pepito@grillo.com',
    password: '123123123'
})

var registerPage = document.querySelector('.register')
var loginPage = document.querySelector('.login')
var homePage = document.querySelector('.home')

registerPage.querySelector('form').addEventListener('submit',
function(event) {
    event.preventDefault()

    registerPage.classList.add('off')
    loginPage.classLst.remove('off')
})
loginPage.querySelector('form').addEventListener('submint', 
function(event) {
    event.preventDefault ()

    var email = loginPage.querySelector('input[name=email]').value
    var password = loginPage.querySelector('input[name=password]').value

    var foundUser

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            foundUser = user

            break
        }
    }
    if (foundUser !== undefined && foundUser.password === password) {
        loginPage.classList.add('off')
        homePage.classList.remove('off')
    } else alert('wrong email or password')
})
registerPage.querySelector('a').addEventListener('click', function (event) {
    event.preventDefault()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
})

loginPage.querySelector('a').addEventListener('click', function (event) {
    event.preventDefault()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
})
/*
document.querySelector('.register').querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()

    // TODO how to get all data from inputs
    console.log('hello sumbit')

    document.querySelector('.register').classList.add('off')
    document.querySelector('.login').classList.remove('off')
})

document.querySelector('.login').querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault()

    // TODO how to get all data from inputs
    console.log('hello sumbit')

    document.querySelector('.login').classList.add('off')
    document.querySelector('.home').classList.remove('off')
})

document.querySelector('.register').querySelector('a').addEventListener('click', function (event) {
    event.preventDefault();

    document.querySelector('.register').classList.add('off')

    document.querySelector('.login').classList.remove('off')
})
/*