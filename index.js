let post1 = document.getElementById('user1');
let post2 = document.getElementById('user2');
let post3 = document.getElementById('user3');
let post4 = document.getElementById('user4');
let post5 = document.getElementById('post1');
let post6 = document.getElementById('post2');
let post7 = document.getElementById('post3');
let post8 = document.getElementById('post4');

async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();

    const userInfo = `
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
    `;

    post1.innerHTML = userInfo;
    console.log(user); 
}

async function getUser2() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
    const user = await response.json();

    const userInfo = `
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
    `;

    post2.innerHTML = userInfo;
    console.log(user); 
}

async function getUser3() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
    const user = await response.json();

    const userInfo = `
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
    `;

    post3.innerHTML = userInfo;
    console.log(user); 
}

async function getUser4() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/4');
    const user = await response.json();

    const userInfo = `
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
    `;

    post4.innerHTML = userInfo;
    console.log(user); 
}

async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await response.json();

    const posts = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;

    post5.innerHTML = posts;
    console.log(user); 
}

async function getPost2() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const post = await response.json();

    const posts = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;

    post6.innerHTML = posts;
    console.log(user); 
}

async function getPost3() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/3');
    const post = await response.json();

    const posts = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;

    post7.innerHTML = posts;
    console.log(user); 
}

async function getPost4() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/4');
    const post = await response.json();

    const posts = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
    `;

    post8.innerHTML = posts;
    console.log(user); 
}

async function getComment() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    const comment = await response.json();
    document.getElementById('user2').innerHTML = JSON.stringify(comment.body);
    console.log(comment);
}

async function Address() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/4');
    const user = await response.json();
    document.getElementById('user3').innerHTML = JSON.stringify(user.address);
    console.log(user.address);
}

async function getAddresses() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const users = await response.json();
    let addressesHtml = '';
    for (let i = 0; i < 3; i++) {
        addressesHtml += JSON.stringify(users[i].address) + '<br>';
    }
    document.getElementById('user4').innerHTML = addressesHtml;
}

getUser();
getUser2();
getUser3();
getUser4();
getPost();
getPost2();
getPost3();
getPost4();
