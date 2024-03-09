// Agrega un evento de escucha al envío del formulario con el id "emailForm"
document.getElementById("emailForm").addEventListener("submit", function(event) {
    // Previene el comportamiento predeterminado del envío del formulario
    event.preventDefault();
    
    // Obtiene los valores de los campos del formulario por su id
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    
    // Enlace al archivo PDF que se adjuntará en el correo electrónico
    var pdfLink = "https://example.com/path/to/your/pdf/file.pdf"; // Reemplaza esto con el enlace real a tu archivo PDF
    
    // Asunto del correo electrónico
    var subject = "Archivo PDF Adjunto";
    
    // Cuerpo del correo electrónico con el nombre, apellidos y enlace al PDF
    var body = "Hola " + nombre + " " + apellidos + ",\n\nAdjunto encontrarás el archivo PDF que solicitaste: " + pdfLink;
    
    // Crea el enlace "mailto" con el destinatario, asunto y cuerpo del correo electrónico
    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    
    // Redirige a la aplicación de correo electrónico del usuario con el enlace "mailto"
    window.location.href = mailtoLink;
    
    // Muestra una alerta indicando que se ha enviado el enlace al correo electrónico
    alert("Se ha enviado el enlace al correo electrónico.");
});
