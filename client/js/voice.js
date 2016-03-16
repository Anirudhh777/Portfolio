// var annyangScript = document.createElement('script');
//     if (/localhost/.exec(window.location)) {
//       annyangScript.src = "//localhost:8443/annyang.js"
//     } else {
//       annyangScript.src = "https://cdnjs.cloudflare.com/ajax/libs/annyang/2.2.1/annyang.js"
//     }
//     document.write(annyangScript.outerHTML)


//   if (annyang) {
//     var home = function() {
//       $("#home").slideUp("slow");
//       scrollTo("#header");
//     };
//     var getStarted = function() {
//       window.location.href = 'https://github.com/TalAter/annyang';
//     }
//     var commands = {
//       'hello (there)':        home,
//     };
//     annyang.debug();
//     annyang.addCommands(commands);
//     annyang.setLanguage('en');

//   //   // Start listening. You can call this here, or attach this call to an event, button, etc.
//     annyang.start();
//   } else {
//     $(document).ready(function() {
//       $('#unsupported').fadeIn('fast');
//     });
//   }

//   var scrollTo = function(identifier, speed) {
//     $('html, body').animate({
//         scrollTop: $(identifier).offset().top
//     }, speed || 1000);
//   }