function sendEmail() {
   var phone = document.querySelector("input[name=phone]").value;
   var email = document.querySelector("input[name=email]").value;
 
   var smtpHost = "smtp.gmail.com";
   var smtpPort = 587;
   var smtpUser = "mykolamieshkov@gmail.com";
   var smtpPassword = "Mieshkov123123";
 
   var mailOptions = {
     host: smtpHost,
     port: smtpPort,
     user: smtpUser,
     password: smtpPassword,
     auth: true,
   };
 
   var mailMessage = {
     from: smtpUser,
     to: "mykolamieshkov@gmail.com",
     subject: "New contact form submission",
     text: "Phone number: " + phone + "\nEmail address: " + email,
   };
 
   var xhr = new XMLHttpRequest();
   xhr.open("POST", "/contact", true);
   xhr.setRequestHeader("Content-Type", "application/json");
   xhr.send(JSON.stringify(mailMessage));
 }