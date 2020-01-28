projects = [
    {
        name:'Zart Message',
        gitHubImage:'./image/Octocat.png',
        gitHub:'https://github.com/adibfazli/Zart-Message',
        link:'https://zart-message.herokuapp.com/login',
        image:'./image/zart.jpg',
    } ,
    {
        name:'Junkie',
        gitHubImage:'./image/Octocat.png',
        gitHub:'https://github.com/adibfazli/junkie',
        link:'https://collection-junkie.herokuapp.com/',
        image:'./image/junkie.jpg',
    } ,
    {
        name:'You Pick',
        gitHubImage:'./image/Octocat.png',
        gitHub:'https://github.com/adibfazli/youPick',
        link:'https://youpick2.herokuapp.com/',
        image:'./image/youpick.jpg',
    } ,
    {
        name:'Minesweeper',
        gitHubImage:'./image/Octocat.png',
        gitHub:'https://github.com/adibfazli/Minesweeper',
        link:'',
        image:'./image/minesweeper.jpg',
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
    const info = document.createElement('div')
    info.classList.add('postInfoDiv')

        const name = document.createElement('a')
        name.classList.add('projectName')
        name.textContent = `${element.name}`
        name.setAttribute('href' , `${element.link}`)
        info.appendChild(name)

        const gitA = document.createElement('a')
        const gitImg = document.createElement('img')
        gitImg.classList.add('gitImg')
        gitImg.setAttribute('src',`${element.gitHubImage}`)
        gitImg.setAttribute('href',`${element.gitHub}`)
        gitA.appendChild(gitImg)
        info.appendChild(gitA)

        const gitHubLink = document.createElement('a')
        gitHubLink.classList.add('gitHubLink')
        gitHubLink.textContent = 'GitHub'
        gitHubLink.setAttribute('href' , `${element.gitHub}`)
        info.appendChild(gitHubLink)
// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> SHOT
    const shot = document.createElement('div')
    shot.classList.add('postShotDiv')
        const projectShot = document.createElement('img')
        projectShot.setAttribute('src' , `${element.image}`)
        projectShot.classList.add('postImg')
        shot.appendChild(projectShot)
// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><> POST
    post = document.createElement('div')
    post.classList.add('post')
    post.appendChild(info)
    post.appendChild(shot)
    container.appendChild(post)
});