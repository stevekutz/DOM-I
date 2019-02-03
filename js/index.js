const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);



////////////////////////////////////////
//   populate anchor tags using NodeList - bracket notation math is a bit finicky
const anchorText = document.querySelectorAll('a');
console.log('anchorText is ', anchorText);

anchorText.forEach( (a, i) => {
 //  anchorText[i].style.color = 'green';
  i++;

  anchorText[i-1].textContent = siteContent['nav']['nav-item-'+i++];
});



///////////////////////////////////////
//  populate cta section with JSON data
const ctaText_h1 = document.querySelector('h1');
// let addBR = siteContent['cta']['h1'].split(' ');


////////////////////////////////////////////////////////
//     helper function to add <br>
///////////////////////////////////////////////////////
let addBreaks = obj => {
  let arr = obj.split(' ');
  for(let i = 0; i < arr.length; i++) {
    if(i < arr.length - 1) {
      arr[i] += '<br>';
    }
  }

  return arr.join('');
};


console.log(addBreaks(siteContent['cta']['h1']));


// ctaText_h1.textContent = siteContent['cta']['h1'];
ctaText_h1.innerHTML = addBreaks(siteContent['cta']['h1']);

const ctaText_buttonText = document.querySelector('button');
ctaText_buttonText.textContent = siteContent['cta']['button'];
console.log('button text', ctaText_buttonText );

const ctaImage_src = document.getElementById('cta-img');
ctaImage_src.setAttribute('src', siteContent['cta']['img-src']);

///////////////////////////////////////
// populate main content section with JSON data

// Not sure there is a good way to iterate this since order
// of properties in obj is not guaranteed, manipulate JSON ?
// !!!!!!!!!!        REFACTOR after STRETCH


// experimenting here ***************
const topContentChildren = document.querySelector('.top-content').children;
console.log('topTextContentChildren is ', topContentChildren);


const  topContent = document.querySelectorAll('.top-content .text-content');
console.log('selecting .top-content .text-content', topContent);

const main_h4 = document.querySelectorAll('.text-content h4');
console.log('main_h4 is ', main_h4);

//  STEP 1) refactor experiment  - template literal works within bracket notation
let textContent_first_h4_TEST = topContent[0].querySelector('h4');
let val = 'features';
//textContent_first_h4_TEST.textContent = siteContent['main-content'][`${val}-h4`];

// STEP 2) refactor experiment   -NodeList value assigned data using template literals
main_h4[0].textContent = siteContent['main-content'][`${val}-h4`];

// siteContent["main-content"];
//STEP 3)  refactor experiment    -array from Object keys
let h4_mainJSON = Object.keys(siteContent['main-content']).filter(keyVal => keyVal.includes('h4') );
console.log('h4_mainJSON is ', h4_mainJSON);



// REFACTOR to put in all h4 JSON content
for(let i = 0; i < h4_mainJSON.length; i++) {
  main_h4[i].innerHTML = siteContent['main-content'][`${h4_mainJSON[i]}`];
}


// **********************************
/*
/////   ORIGINAL    /////
const textContent_first_h4 = topContent[0].querySelector('h4');
// textContent_first_h4.textContent = siteContent['main-content']['features-h4'];

const textContent_first_p = topContent[0].querySelector('p');
textContent_first_p.textContent = siteContent['main-content']['features-content'];

const textContent_second_h4 = topContent[1].querySelector('h4');
textContent_second_h4.textContent = siteContent['main-content']['about-h4'];

const textContent_second_p = topContent[1].querySelector('p');
textContent_second_p.textContent = siteContent['main-content']['about-content'];

const middleIMG = document.getElementById("middle-img");
middleIMG.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const  bottomContent = document.querySelectorAll('.bottom-content .text-content');
console.log('selecting .bottom-content .text-content', bottomContent);

const textContent_third_h4 = bottomContent[0].querySelector('h4');
textContent_third_h4.textContent = siteContent['main-content']['services-h4'];

const textContent_third_p = bottomContent[0].querySelector('p');
textContent_third_p.textContent = siteContent['main-content']['services-content'];

const textContent_fourth_h4 = bottomContent[1].querySelector('h4');
textContent_fourth_h4.textContent = siteContent['main-content']['product-h4'];

const textContent_fourth_p = bottomContent[1].querySelector('p');
textContent_fourth_p.textContent = siteContent['main-content']['product-content'];

const textContent_fifth_h4 = bottomContent[2].querySelector('h4');
textContent_fifth_h4.textContent = siteContent['main-content']['vision-h4'];

const textContent_fifth_p = bottomContent[2].querySelector('p');
textContent_fifth_p.textContent = siteContent['main-content']['vision-content'];
*/
///////////////////////////////////////
//  populate contact section with JSON data
const contactChildren = document.querySelector('.contact').children;
console.log('contact children are  ', contactChildren);

// better way to go through
contactChildren[0].textContent = siteContent['contact']['contact-h4'];
contactChildren[1].textContent = siteContent['contact']['address'];
contactChildren[2].textContent = siteContent['contact']['phone'];
contactChildren[3].textContent = siteContent['contact']['email'];

// adjusted width to make address fit
contactChildren[1].style.width = '150px';

const footer_p = document.querySelector('footer').firstElementChild;
footer_p.innerHTML = siteContent['footer']['copyright'];


///////////////////////////////////////
//  Task 4 adding new content to nav & make GREEN
const a_first = document.createElement('a');
a_first.setAttribute('href', '#');
a_first.innerHTML = 'FIRST';


const a_last = document.createElement('a');
a_last.setAttribute('href', '#');
a_last.innerHTML = 'LAST';
console.log('this is a_first', a_last);


const nav = document.querySelector('nav');
console.log('this is nav ', nav);
nav.prepend(a_first);
nav.appendChild(a_last);


// let goRed = (a) => a.innerHTML = 'mouse over';
function logMouseOver() {
  green_a[0].innerHTML = 'mouseover';
  green_a[0].style.color = 'dodgerblue';
}

logMouseLeave = () => {
  green_a[0].innerHTML = 'FIRST';
  green_a[0].style.color = 'green';
};

let green_a = nav.querySelectorAll('a');
console.log('this is green a', green_a);
green_a.forEach(a => {
  a.style.color = 'green';
  a.style.boxShadow = '4px 0 2px 0 teal';
  a.style.padding = '5px';// a.onmouseover = goRed(a);
});

green_a[0].onmouseover = logMouseOver;
green_a[0].onmouseleave = logMouseLeave;