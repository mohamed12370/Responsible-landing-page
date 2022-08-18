let ineer = document.getElementById('ineer');
let left = document.getElementById('left');
let right = document.getElementById('right');
let number = document.getElementById('number');

let start = 1;
let end = 0;
let images = [
    './images/1.png',
    './images/2.png',
    './images/3.png',
    './images/4.png',
    './images/5.png',
];

right.addEventListener('click', () => {
    let cartona = ``;

    if (start == -1) {
        start = 1;
    }
    if (start < images.length) {
        cartona += `
                    <div id="col-left" class="col-sm-12 col-lg-6 mb-sm-5">
                        <h1 class="text-light mb-lg-5">Lorem ipsum dolor sit amet.</h1>
                        <button class="btn btn-outline-danger w-50">More</button>
                    </div>
                    <div class="col-sm-12 col-lg-6 text-center">
                        <img class="w-100" src=${images[start]} alt="#" />
                    </div>
                `;
        ineer.innerHTML = cartona;
        number.innerText = start + 1;
        end = start - 1;
        start += 1;
    }
    console.log('right start' + start);
    console.log('right end' + end);
});

left.addEventListener('click', () => {
    let cartona = ``;

    if (end >= 5) {
        end = 3;
    }
    console.log('left end' + end);
    if (end >= 0 && end < 5) {
        cartona += `<div id="col-left" class="col-sm-12 col-lg-6 mb-sm-5">
                        <h1 class="text-light mb-lg-5">Lorem ipsum dolor sit amet.</h1>
                        <button class="btn btn-outline-danger w-50">More</button>
                    </div>
                    <div class="col-sm-12 col-lg-6 text-center">
                        <img class="w-100" src=${images[end]} alt="#" />
                    </div>
                `;
        ineer.innerHTML = cartona;
        number.innerText = end + 1;
        start = end + 1;
        end -= 1;
    }
    // console.log('left start' + start);
    // console.log('left end' + end);
});

/*   sec2 */
let sec2_ineer = document.getElementById('arrow_ineer');
let arrow_left = document.getElementById('arrow-left');
let arrow_right = document.getElementById('arrow-right');
let arroe_number = document.getElementById('arrow-number');

let sec2_start = 1;
let sec2_end = 0;

arrow_right.addEventListener('click', () => {
    let cartona = ``;

    if (sec2_start == -1) {
        sec2_start = 1;
    }
    if (sec2_start < images.length) {
        cartona += `
                    <div class="box">
                <div class="img">
                    <img src=${images[sec2_start]} alt="" />
                </div>
                <div class="content">
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem?
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis iste necessitatibus odio assumenda dolor sapiente et dolore. Aut eveniet mollitia eum veritatis, facere minus nulla nam eos saepe at?
                    </p>
                    <div class="icons">
                        <p><i class="fas fa-home me-2"></i> 8-16-2020 cairo-Egypt</p>
                        <p>
                            <i class="fas fa-magic me-2"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sed ipsum!
                        </p>
                    </div>
                    <button class="btn btn-outline-danger">Read More</button>
                </div>
            </div>
                `;
        sec2_ineer.innerHTML = cartona;
        arroe_number.innerText = sec2_start + 1;
        sec2_end = sec2_start - 1;
        sec2_start += 1;
    }
    console.log('right start' + sec2_start);
    console.log('right end' + sec2_end);
});

arrow_left.addEventListener('click', () => {
    let cartona = ``;

    if (sec2_end >= 5) {
        sec2_end = 3;
    }
    console.log('left end' + sec2_end);
    if (sec2_end >= 0 && sec2_end < 5) {
        cartona += `
                    <div class="box">
                <div class="img">
                    <img src=${images[sec2_end]} alt="" />
                </div>
                <div class="content">
                    <h3>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem?
                    </h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis iste necessitatibus odio assumenda dolor sapiente et dolore. Aut eveniet mollitia eum veritatis, facere minus nulla nam eos saepe at?
                    </p>
                    <div class="icons">
                        <p><i class="fas fa-home me-2"></i> 8-16-2020 cairo-Egypt</p>
                        <p>
                            <i class="fas fa-magic me-2"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, sed ipsum!
                        </p>
                    </div>
                    <button class="btn btn-outline-danger">Read More</button>
                </div>
            </div>
                `;
        sec2_ineer.innerHTML = cartona;
        arroe_number.innerText = sec2_end + 1;
        sec2_start = sec2_end + 1;
        sec2_end -= 1;
    }
    // console.log('left start' + start);
    // console.log('left end' + end);
});

/* navbar */
let navBar = document.getElementById('navBar');
let sec1 = document.getElementById('sec1');
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled === sec1.offsetTop) {
        navBar.style.backgroundColor = 'red !important';
        //console.log('dd');
    }
});