document.addEventListener("DOMContentLoaded", function () {
    const eventoContainer = document.querySelector(".ebent-apart img");

    // Mapa de festividades y fechas (inicio de cada festividad)
    const festividades = {
        "01-01": "img/imajenes-ebento/año-nuevo.gif", // Año Nuevo
        "06-01": "img/imajenes-ebento/reyes.gif", // Reyes Magos
        "14-02": "img/imajenes-ebento/san-valentin.gif", // San Valentín
        "19-03": "img/imajenes-ebento/san-jose.gif", // San José
        "01-05": "img/imajenes-ebento/dia-trabajo.gif", // Día del Trabajador
        "15-08": "img/imajenes-ebento/asuncion.gif", // Asunción
        "12-10": "img/imajenes-ebento/hispanidad.gif", // Día de la Hispanidad
        "01-11": "img/imajenes-ebento/todos-santos.gif", // Todos los Santos
        "06-12": "img/imajenes-ebento/constitucion.gif", // Constitución
        "25-12": "img/imajenes-ebento/navidad.gif", // Navidad
        "31-10": "img/imajenes-ebento/halloween.gif", // Halloween
        "20-02": "img/imajenes-ebento/carnaval.gif", // Carnaval (ajustar según el año)
        "01-04": "img/imajenes-ebento/semana-santa.gif" // Semana Santa (aproximado)
    };

    // Obtener la fecha actual
    const hoy = new Date();
    const fechaActual = hoy.toISOString().slice(5, 10);

    // Función para calcular el rango de fechas de la festividad (7 días)
    function dentroDeLaSemana(fechaInicio) {
        const [mes, dia] = fechaInicio.split("-").map(Number);
        const fechaFestividad = new Date(hoy.getFullYear(), mes - 1, dia);

        const inicioSemana = new Date(fechaFestividad);
        const finSemana = new Date(fechaFestividad);
        finSemana.setDate(fechaFestividad.getDate() + 6); // Extender 7 días

        // Verificar si la fecha actual está dentro del rango
        return hoy >= inicioSemana && hoy <= finSemana;
    }

    // Buscar si la fecha actual coincide con alguna festividad
    let gifMostrado = "";
    for (const [fechaInicio, gif] of Object.entries(festividades)) {
        if (dentroDeLaSemana(fechaInicio)) {
            gifMostrado = gif;
            break;
        }
    }

    // Cambiar el GIF según la festividad o dejarlo vacío
    eventoContainer.src = gifMostrado || ""; // Mostrar el GIF o dejar vacío
});
