document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    var pdfLink = "https://example.com/path/to/your/pdf/file.pdf"; // Reemplaza esto con el enlace real a tu archivo PDF
    var subject = "Archivo PDF Adjunto";
    var body = "Hola " + nombre + " " + apellidos + ",\n\nAdjunto encontrarás el archivo PDF que solicitaste: " + pdfLink;
    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
    alert("Se ha enviado el enlace al correo electrónico.");
});