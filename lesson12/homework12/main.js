// 1.
// Отримати відповідь з цього ресурсу , та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then((posts) => {
//         let mainWrap = document.createElement('div');
//         mainWrap.classList.add('mainWrap');
//         for (const post of posts) {
//             let wrap = document.createElement('div');
//             wrap.classList.add('post');
//             wrap.innerHTML = `<p>id: ${post.id}</p>  <h3>title: ${post.title}</h3>  <h4>body: ${post.body}</h4>`;
//             mainWrap.appendChild(wrap);
//         }
//         document.body.appendChild(mainWrap);
//     } );


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then((comments) => {
        let divWrap = document.createElement('div');
        divWrap.classList.add('divWrap');
        for (let comment of comments) {
            let container = document.createElement('div');
            container.classList.add('comments');
            container.innerHTML = `<p>id: ${comment.id}</p>  <h3>name: ${comment.name}</h3>  <h4>email: ${comment.email}</h4> body: ${comment.body}`;
            divWrap.appendChild(container);
        }
        document.body.appendChild(divWrap);
    } );