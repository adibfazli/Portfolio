projects = [
    {
        name:'Zart Message',
        gitHubImage:'./image/Octocat.png',
        gitHub:'https://github.com/adibfazli/Zart-Message',
        link:'https://zart-message.herokuapp.com/login',
        image:'./image/zart.jpg',
        technology:'./image/MERN.png',
    } ,
    {
        name:'Junkie',
        gitHubImage:'./image/Octocat.png',
        gitHub:'https://github.com/adibfazli/junkie',
        link:'https://collection-junkie.herokuapp.com/',
        image:'./image/junkie.jpg',
        technology:'./image/python.png',
    } ,
    {
        name:'You Pick',
        gitHubImage:'./image/Octocat.png',
        gitHub:'https://github.com/adibfazli/youPick',
        link:'https://youpick2.herokuapp.com/',
        image:'./image/youpick.jpg',
        technology:'./image/MEN.png',
    } ,
    {
        name:'Minesweeper',
        gitHubImage:'./image/Octocat.png',
        gitHub:'https://github.com/adibfazli/Minesweeper',
        link:'https://adibfazli.github.io/Minesweeper/',
        image:'./image/minesweeper.jpg',
        technology:'./image/jsHtmlCss.png',
    }
]

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.querySelector(".aboutDiv").style.visibility = "visible";
  } else {
    document.querySelector(".aboutDiv").style.visibility = "hidden";
  }
}

const container = document.querySelector('.postContainer')
projects.forEach(element => {
// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> INFO
    const info = document.createElement('div');
    info.classList.add('postInfoDiv');

        const name = document.createElement('a');
        name.classList.add('projectName');
        name.textContent = `${element.name}`
        name.setAttribute('href' , `${element.link}`);
        info.appendChild(name)

        const gitA = document.createElement('a');
        const gitImg = document.createElement('img');
        gitImg.classList.add('gitImg');
        gitImg.setAttribute('src',`${element.gitHubImage}`);
        gitImg.setAttribute('href',`${element.gitHub}`);
        gitA.appendChild(gitImg)
        

        const gitHubLink = document.createElement('a');
        const gitDiv = document.createElement('div');
        gitDiv.classList.add('gitDiv')
        gitHubLink.classList.add('gitHubLink');
        gitHubLink.textContent = 'GitHub'
        gitHubLink.setAttribute('href' , `${element.gitHub}`);
        gitDiv.appendChild(gitImg)
        gitDiv.appendChild(gitHubLink)
        info.appendChild(gitDiv)

        const stack = document.createElement('img');
        stack.classList.add('stack')
        stack.setAttribute('src' , `${element.technology}`);
        info.appendChild(stack)
// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> SHOT
    const shot = document.createElement('div');
    shot.classList.add('postShotDiv');
        const projectShot = document.createElement('img');
        projectShot.setAttribute('src' , `${element.image}`);
        projectShot.classList.add('postImg')
        shot.appendChild(projectShot)
// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> POST
    post = document.createElement('div');
    post.classList.add('post');
    post.appendChild(info);
    post.appendChild(shot);
    container.appendChild(post);
});