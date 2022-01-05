window.onload = async function () {
    const idPostFromUrl = +window.location.hash.replace(/\D/g, '');
    let detailPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPostFromUrl}`)
        .then(response => response.json())
    const {
        userId,
        id,
        title,
        body,
    } = detailPost;
    let divDetailPost = document.createElement('div');
    divDetailPost.classList.add('card');
    divDetailPost.classList.add('border-primary');
    divDetailPost.classList.add('text-primary');
    divDetailPost.innerHTML +=                          `<div class="card-header">userId: ${userId}</div> 
                                                         <div class="card-header">id: ${id}</div> 
                                                         <div class="card-body">
                                                         <h5 class="card-title">title: ${title}</h5> 
                                                         <p class="card-text">body: ${body}</p>
                                                         </div> `

    document.body.appendChild(divDetailPost);

    fetch(`https://jsonplaceholder.typicode.com/posts/${idPostFromUrl}/comments`)
        .then(response => response.json())
        .then((comments) => {
            for (const comment of comments) {
                let divComment = document.createElement('div');
                divComment.classList.add('card');
                divComment.innerHTML =                  `<div class="card-header mt-5">postId: ${comment.postId}</div> 
                                                         <div class="card-header">id: ${comment.id}</div> 
                                                         <h5 class="card-title">name: ${comment.name}</h5> 
                                                         <h5 class="card-title">email: ${comment.email}</h5>
                                                         <h5 class="card-title">body: ${comment.body}</h5>`
                document.body.appendChild(divComment);
            }

        });

}