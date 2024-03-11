document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    
    // Cambiar el enlace al que deseas enviar en el correo electrónico
    var pdfLink = "https://altafitgymclub.com/rutina-de-gimnasio-para-principiantes/";
    
    var subject = "Rutina de gimnasio para principiantes";
    
    var body = "Hola " + nombre + " " + apellidos + ",<br><br>Adjunto encontrarás el enlace a la rutina de gimnasio para principiantes que solicitaste: <a href='" + pdfLink + "'>" + pdfLink + "</a>";

    var mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
 

    window.location.href = mailtoLink;

    alert("Se ha enviado el enlace al correo electrónico.");
});
