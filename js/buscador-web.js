function searchBlog() {
const query = document.getElementById('searchInput').value.toLowerCase();
const sections = document.querySelectorAll('.content section');
let found = false;

sections.forEach(section => {
    const text = section.textContent.toLowerCase();
    if (text.includes(query)) {
        section.style.display = 'block'; 
        found = true;
    } else {
        section.style.display = 'none';
    }
});

document.getElementById('noResults').style.display = found ? 'none' : 'block';

if (!query.trim()) {
    sections.forEach(section => section.style.display = 'block');
    document.getElementById('noResults').style.display = 'none';
}
}