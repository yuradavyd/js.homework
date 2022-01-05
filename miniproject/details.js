window.onload = async function () {
    const idUserFromUrl = +window.location.hash.replace(/\D/g, '');
    let detail = await fetch(`https://jsonplaceholder.typicode.com/users/${idUserFromUrl}`)
        .then(response => response.json())
    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {catchPhrase, bs}
    } = detail;
    let divDetailUser = document.createElement('div');
    divDetailUser.classList.add('card');
    divDetailUser.innerHTML +=                          `<div class="card-header">id: ${id}</div> 
                                                        <div class="card-body">
                                                        <h5 class="card-title">name: ${name}</h5> 
                                                        <h5 class="card-title">username: ${username}</h5>
                                                        <h5 class="card-title">email: ${email}</h5>
                                                        <h5 class="card-title">address:</h5>
                                                        <ul class="list-group list-group-flush">
                                                        <li class="list-group-item"><span>street: </span>${street}</li>
                                                        <li class="list-group-item"><span>suite: </span>${suite}</li>
                                                        <li class="list-group-item"><span>city: </span>${city}</li>
                                                        <li class="list-group-item"><span>zipcode: </span>${zipcode}</li>
                                                        </ul>  
                                                        <h5 class="card-title">geo: </h5>
                                                        <ul class="list-group list-group-flush">
                                                        <li class="list-group-item"><span>lat: </span>${lat}</li>
                                                        <li class="list-group-item"><span>lng </span>${lng}</li>
                                                        </ul>
                                                        <h5 class="card-title">phone: ${phone}</h5>          
                                                        <h5 class="card-title">website: ${website}</h5> 
                                                        
                                                        <h5 class="card-title">company: </h5>
                                                        <ul class="list-group list-group-flush">
                                                        <li class="list-group-item"><span>catchPhrase: </span>${catchPhrase}</li>
                                                        <li class="list-group-item"><span>bs: </span>${bs}</li>
                                                        </ul>
                                                         </div>`


    document.body.appendChild(divDetailUser)
    let post = document.createElement('div');
    post.classList.add('d-grid');
    post.innerHTML = `<button class="btn btn-primary" type="button">post of current user</button>`
    document.body.appendChild(post);

    post.addEventListener('click', async ()=> {
        let posts = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(response => response.json())
        for (const post of posts) {
            let postsWrap = document.createElement('div');
            postsWrap.classList.add('card');
            postsWrap.innerHTML +=                      `<div class="card-body"><h5 class="card-title">title: ${post.title}</h5></div>`
            document.body.appendChild(postsWrap);
            let postDetails = document.createElement('button');
            postDetails.addEventListener('click', () => {
                window.location.assign(`./post-details.html${"#"+"postDetails/"+post.id}`);
            })
            postDetails.innerText = 'post-details';
            postsWrap.appendChild(postDetails);
        }

    })
};
