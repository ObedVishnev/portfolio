const mainText = document.getElementById('main-text');
const programmerImage = document.getElementById('programmer-image');
const section1 = document.getElementById('section1');
const textSkills = document.getElementById('text-skills');
const table = document.getElementById('table');
const proj = document.getElementById('proj');
const head = document.getElementById('header-ul');
const headerul = document.querySelectorAll('#header-ul>li>a');
const section3 = document.getElementById('section3');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const hdmob = document.getElementById('hdmob');

let observer = new IntersectionObserver(function (entries, observer) {

    entries.forEach(el => {

        if (el.isIntersecting) {


            el.target.style.transform = 'translateX(-100)';

            el.target.style.opacity = '0';


            setTimeout(() => {

                const headerul = document.querySelectorAll('#header-ul>li>a');
                if (headerul) {
                    headerul.forEach(el => {

                        el.style.color = 'rgb(255, 255, 255)'
                    })
                    hdmob.style.color = 'rgb(255,255,255)'
                }

                el.target.style.transform = 'translateX(0)';

                el.target.style.opacity = '1';

                section1.style.opacity = '1';

            }, 300);

            el.target.classList.add('visib');

            el.target.classList.remove('opacity')
        } else {

            el.target.style.transform = 'translateX(0)';
            el.target.style.opacity = '1';

            setTimeout(() => {
                el.target.style.transform = 'translateX(-200px)';
                el.target.style.opacity = '0';
                section1.style.opacity = '0';
                if (headerul) {
                    headerul.forEach(el => {
                        hdmob.style.color = 'transparent'
                        el.style.color = 'transparent'
                    })
                }
            }, 200)

            el.target.classList.add('opacity')
            el.target.classList.remove('visib');
        }
    })

}, { threshold: .3 })

let observer2 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(el => {

        if (el.isIntersecting) {
            console.log('w')

            el.target.classList.add('visib1');

            el.target.classList.remove('opacity1')

            el.target.style.opacity = '0';


            setTimeout(() => {

                if (window.innerWidth < 1200) {
                    el.target.style.transform = 'translateX(0px)';
                    el.target.style.marginLeft = '150px'
                } else {
                    el.target.style.transform = 'translateX(0px)';
                }



                el.target.style.opacity = '1';

            }, 300);



            ;
        } else {

            el.target.style.transform = 'translateX(0)';
            el.target.style.opacity = '1';

            setTimeout(() => {
                el.target.style.transform = 'translateX(200px)';
                el.target.style.opacity = '0';

            }, 200)

            el.target.classList.add('opacity1')
            el.target.classList.remove('visib1');
        }
    })
}, { threshold: .2 })

let observer3 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(el => {


        if (el.isIntersecting) {
            console.log('pk')

            el.target.style.opacity = '0';


            setTimeout(() => {

                el.target.style.opacity = '1';


            }, 300);



            ;
        } else {

            el.target.style.opacity = '1';

            setTimeout(() => {
                el.target.style.opacity = '0';

            }, 200)

        }
    })
}, { threshold: .5 })

let observer4 = new IntersectionObserver(function (entries, observer) {
    entries.forEach(el => {

        if (el.isIntersecting) {
            ;

            if (headerul) {
                headerul.forEach(el => { el.style.color = 'white'; el.style.textShadow = '0 0 5px black' })
                 hdmob.style.color = 'white'
            }



            section3.style.opacity = '0'
            el.target.style.opacity = '0';


            setTimeout(() => {
                section3.style.opacity = '1'
                el.target.style.transform = 'translateX(100px);'
                el.target.style.opacity = '1';

            }, 300);

        } else {
            hdmob.style.color ='transparent'
            if (headerul) {
                headerul.forEach(el => {
                    el.style.color = 'transparent';
                    el.style.backGroundMask = 'text';
                    el.style.textShadow = '';
                })
            }



            el.target.style.opacity = '1';
            section3.style.opacity = '1'

            setTimeout(() => {
                section3.style.opacity = '0'
                el.target.style.opacity = '0';

            }, 200)

        }
    })
}, { threshold: .1 })

observer2.observe(programmerImage);
observer.observe(mainText);
observer3.observe(textSkills);
observer3.observe(table);
observer4.observe(proj)

let scrollAnim = document.querySelectorAll(`a[href*='#']`);

scrollAnim.forEach(el => {
    el.onclick = (e) => {
        e.preventDefault()
        let docEl = document.querySelector(el.getAttribute('href'));
        docEl.scrollIntoView({ block: "center", behavior: "smooth" });

    }


})
console.log(scrollAnim);


const form = document.querySelector('form');
observer3.observe(form);
const textArea = document.querySelector('textarea');
const emailEl = document.querySelector('#email');
const subjects = document.getElementById('subject')
const messageEl = document.getElementById('sendername');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

subjects.addEventListener('input', () => {
    if (subjects.value.length < 3) {
        subjects.style.border = '2px solid red'
    } else {
        subjects.style.border = '2px solid green'
    }
})

messageEl.addEventListener("input", () => {
    if (messageEl.value.length < 3) {
        messageEl.style.border = '2px solid red'
    } else {
        messageEl.style.border = '2px solid green'
    }
})

textArea.addEventListener('input', () => {
    if (textArea.value.length < 15) {
        textArea.style.border = '2px solid red'
        return;
    } else {
        textArea.style.border = '2px solid green'
    }

})

emailEl.addEventListener('input', () => {
    console.log('i');

    if (isEmailValid(emailEl.value)) {
        console.log('good');

        emailEl.style.border = '2px solid green';;

    } else {
        emailEl.style.border = '2px solid red';
    }
})

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function sendMail() {
    if (emailEl.style.border === '2px solid green' && textArea.style.border === '2px solid green' && messageEl.style.border === '2px solid green') {
        (function () {
            emailjs.init("Bucrq3w4lTFeT9nIf");
        })();

        const params = {
            sendername: messageEl.value,
            to: 'kizafrenyt@gmail.com',
            subject: subjects.value,
            replyto: emailEl.value,
            message: textArea.value,
        }
        var serviceID = 'service_ds0txn9';
        var templateID = 'template_51zjto1';
        emailjs.send(serviceID, templateID, params)
            .then(res => {
                const form = document.querySelector('form');
                console.log(params)
                alert('succesfuly!Thank You!')
            })
            .catch(res => {
                alert('Sorry, You have a error!')
            })
    } else {
        alert('Sorry, You have a error!')
    }

}

const closeButt = document.getElementById('close');
const aside = document.querySelector('aside')

closeButt.addEventListener('click', () => {
    aside.style.transform = '0';
    setTimeout(() => {
        aside.style.transform = 'translateX(-1000px)'
    },300)
})

hdmob.onclick = () => {
    aside.style.transform = 'translateX(-1000px)';
    setTimeout(() => {
        aside.style.transform = 'translateX(0)'
    },300)
}