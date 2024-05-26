// Detect when project section is in viewport
function handleScroll() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        const rect = project.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            project.classList.add('appear');
        } else {
            project.classList.remove('appear');
        }
    });
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);
