let x = JSON.parse(localStorage.getItem('favorites'))
for (const e of x) {
    let wrap = document.createElement('div');
    document.body.appendChild(wrap);
    let h3 = document.createElement('h3');
    h3.innerHTML ='Name is - ' + e.name;
    let p = document.createElement('p');
    p.innerHTML = e.age + ' years old';
    let p2 = document.createElement('p');
    p2.innerHTML ='status is - ' + e.status;
    wrap.append(h3,p,p2);
}