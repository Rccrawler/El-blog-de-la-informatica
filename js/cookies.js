// Comprobar si el usuario ya  aceptó
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('cookiesAceptadas') === 'true') {
        document.getElementById('cookie-banner').classList.add('hidden');
    }
});

// Guardar preferencia y ocultar cartel
function aceptarCookies() {
    localStorage.setItem('cookiesAceptadas', 'true');
    localStorage.setItem('cookiesPreferencias', JSON.stringify({
        analiticas: true,
        publicidad: true
    }));
    document.getElementById('cookie-banner').classList.add('hidden');
}

// Abrir configuración de cookies
function abrirConfiguracion() {
    document.getElementById('configurar-cookies-modal').classList.remove('hidden');
}

// Guardar configuración
function guardarConfiguracion() {
    const form = document.getElementById('configurar-cookies-form');
    const preferencias = {
        analiticas: form.elements['cookies-analiticas'].checked,
        publicidad: form.elements['cookies-publicidad'].checked
    };
    localStorage.setItem('cookiesPreferencias', JSON.stringify(preferencias));
    localStorage.setItem('cookiesAceptadas', 'true');
    document.getElementById('cookie-banner').classList.add('hidden');
    cerrarConfiguracion();
}

// Cerrar modal de configuración
function cerrarConfiguracion() {
    document.getElementById('configurar-cookies-modal').classList.add('hidden');
}