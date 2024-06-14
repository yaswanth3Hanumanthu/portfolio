document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('.project');

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-trigger');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    projects.forEach(project => {
        project.classList.add('fade-in');
        observer.observe(project);
    });
});
