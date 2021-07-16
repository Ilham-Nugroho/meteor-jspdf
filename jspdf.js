if (Meteor.isClient) {
  Template.pdfreport.events({
    "click .button": function () {
      var HTML2PDF = function demoFromHTML() {
        var pdf = new jsPDF("p", "pt", "letter");

        source = $("#report")[0];

        specialElementHandlers = {
          "#bypassme": function (element, renderer) {
            return true;
          },
        };
        margins = {
          top: 80,
          bottom: 60,
          left: 40,
          width: 522,
        };

        pdf.fromHTML(
          source,
          margins.left,
          margins.top,
          {
            width: margins.width,
            elementHandlers: specialElementHandlers,
          },

          function (dispose) {
            pdf.save("Test.pdf");
          },
          margins
        );
      };
      return HTML2PDF();
    },
  });
}

if (Meteor.isServer) {
}
