const skills = [
    {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
        name: "Sass",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    },
    {
        name: "Vue.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg",
    },
    {
        name: "asp.net",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    }

]

const links = [
    {
        name: "GitHub",
        url: "https://github.com/melosh101",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/milas-holsting-152a59326/",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    },
]


const skillsElement = document.getElementById("skills");
const linksElement = document.getElementById("links");
if (!skillsElement || !linksElement) {
    throw new Error("Skills or links element not found");
}
skills.forEach((skill) => {
    const skillElement = document.createElement("div");
    skillElement.classList.add("skill");

    const skillIcon = document.createElement("img");
    skillIcon.src = skill.icon;

    const skillName = document.createElement("span");
    skillName.textContent = skill.name;

    skillElement.appendChild(skillIcon);
    skillElement.appendChild(skillName);

    skillsElement.appendChild(skillElement);
});

links.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer";
    linkElement.classList.add("link");


    const linkIcon = document.createElement("img");
    linkIcon.src = link.icon;
    linkIcon.alt = link.name;
    linkElement.appendChild(linkIcon);

    const linkName = document.createElement("span");
    linkName.textContent = link.name;
    linkElement.appendChild(linkName);


    linksElement.appendChild(linkElement);
});