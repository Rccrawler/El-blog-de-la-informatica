<?php
// Directorio donde están los archivos de los artículos
$dir = "blog";

// Obtener todos los archivos HTML en la carpeta 'blog'
$archivos = array_diff(scandir($dir), array('..', '.')); // Ignorar los directorios '.' y '..'

// Ordenar los archivos en orden descendente (para que el más reciente aparezca primero)
rsort($archivos);
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog de Ejemplo</title>
    <link rel="stylesheet" href="estilos.css"> <!-- Aquí puedes agregar tu archivo CSS -->
</head>
<body>
    <div class="container">
        <h1>Bienvenido a mi Blog</h1>
        
        <?php
        // Mostrar cada artículo
        foreach ($archivos as $archivo) {
            // Mostrar el contenido de cada archivo HTML
            echo "<div class='post'>";
            echo file_get_contents($dir . "/" . $archivo);
            echo "</div>";
        }
        ?>
    </div>
</body>
</html>
