function searchBlog() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const sections = document.querySelectorAll('.content section');
    const menuLinks = document.querySelectorAll('.sidebar.right a[href^="#seccion"]');
    let found = false;

    // Restablecer visibilidad inicial
    sections.forEach(section => (section.style.display = 'block'));
    menuLinks.forEach(link => link.classList.remove('highlight'));

    // Buscar en el contenido de las secciones
    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(query)) {
            section.style.display = 'block';
            found = true;
        } else {
            section.style.display = 'none';
        }
    });

    // Buscar en los enlaces del menú lateral
    menuLinks.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        if (linkText.includes(query)) {
            link.classList.add('highlight'); // Resaltar enlace si coincide
            found = true;
        }
    });

    // Mostrar mensaje si no hay resultados
    document.getElementById('noResults').style.display = found ? 'none' : 'block';

    // Restablecer si no se escribe nada
    if (!query.trim()) {
        sections.forEach(section => (section.style.display = 'block'));
        menuLinks.forEach(link => link.classList.remove('highlight'));
        document.getElementById('noResults').style.display = 'none';
    }
}
