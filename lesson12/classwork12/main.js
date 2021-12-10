// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((posts) => {
        let mainWrap = document.createElement('div');
        mainWrap.classList.add('mainWrap');
        for (const post of posts) {
            let wrap = document.createElement('div');
            wrap.classList.add('post');
            wrap.innerHTML = `<p>id: ${post.id}</p>  <h3>title: ${post.title}</h3>  <h4>body: ${post.body}</h4>`;
            let btn = document.createElement('button');
            btn.innerText = 'click';
            wrap.appendChild(btn);
            btn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(response => response.json())
                    .then((comments) => {
                        let divComment = document.createElement('div');
                        for (let comment of comments) {
                            divComment.innerHTML = `<p>id: ${comment.id}</p> <h2>name: ${comment.name}</h2> <h4>email: ${comment.email}</h4> <h3>body: ${comment.body}</h3>`
                        }
                        wrap.appendChild(divComment);
                    });
            };
            mainWrap.appendChild(wrap);
        }
        document.body.appendChild(mainWrap);
    });
