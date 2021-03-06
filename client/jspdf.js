// import "/js/jspdf.es.min.js";
// import "/js/jspdf.plugin.autotable.js";

if (Meteor.isClient) {
  Template.pdfreport.events({
    "click .button": function () {
      var HTML2PDF = function demoFromHTML() {
        var endpoint_datas = [
          {
            No: "1",
            End_Point: "/get/Nik",
            Success_Request: "5",
            Error_Request: "5",
            Total_Request: "10",
          },
          {
            No: "2",
            End_Point: "/get/Phone",
            Success_Request: "2",
            Error_Request: "20",
            Total_Request: "22",
          },
        ];

        var consumer_datas = [
          {
            No: "1",
            App_Name: "App-Profiler",
            End_Point: "/get/Nik",
            Success_Request: "10",
            Error_Request: "1",
            Total_Request: "11",
          },
          {
            No: "",
            App_Name: "",
            End_Point: "/get/Phone",
            Success_Request: "1",
            Error_Request: "1",
            Total_Request: "2",
          },
          {
            No: "2",
            App_Name: "App-Dua",
            End_Point: "/get/Nik",
            Success_Request: "10",
            Error_Request: "10",
            Total_Request: "20",
          },
          {
            No: "",
            App_Name: "",
            End_Point: "/get/Phone",
            Success_Request: "11",
            Error_Request: "12",
            Total_Request: "23",
          },
        ];

        // function createHeaders(keys) {
        //   var result = [];
        //   for (var i = 0; i < keys.length; i += 1) {
        //     result.push({
        //       id: keys[i],
        //       name: keys[i],
        //       prompt: keys[i],
        //       width: 50,
        //       align: "center",
        //     });
        //   }
        //   return result;
        // }

        var endpoint_headers = [
          {
            align: "right",
            id: "No",
            name: "No",
            prompt: "No",
            width: 15,
            margin: 0,
            padding: 0,
          },
          {
            align: "right",
            id: "End_Point",
            name: "End_Point",
            prompt: "End Point",
            width: 50,
            padding: 0,
            margin: 0,
          },
          {
            align: "right",
            id: "Success_Request",
            name: "Success_Request",
            prompt: "Success Request",
            width: 50,
            padding: 0,
            margin: 0,
          },
          {
            align: "right",
            id: "Error_Request",
            name: "Error_Request",
            prompt: "Error Request",
            width: 50,
            padding: 0,
            margin: 0,
          },
          {
            align: "right",
            id: "Total_Request",
            name: "Total_Request",
            prompt: "Total Request",
            width: 50,
            margin: 0,
            padding: 0,
          },
        ];

        // { align: "right", id: "id", name: "id", prompt: "id", width: 5 },
        //   "End_Point",
        //   "Success_Request",
        //   "Error_Request",
        //   "Total_Request",

        var consumer_headers = [
          {
            align: "right",
            id: "No",
            name: "No",
            prompt: "No",
            width: 15,
            margin: 0,
            padding: 0,
          },
          {
            align: "right",
            id: "App_Name",
            name: "App_Name",
            prompt: "App Name",
            width: 40,
            padding: 0,
            margin: 0,
          },
          {
            align: "right",
            id: "End_Point",
            name: "End_Point",
            prompt: "End Point",
            width: 40,
            padding: 0,
            margin: 0,
          },
          {
            align: "right",
            id: "Success_Request",
            name: "Success_Request",
            prompt: "Success Request",
            width: 50,
            padding: 0,
            margin: 0,
          },
          {
            align: "right",
            id: "Error_Request",
            name: "Error_Request",
            prompt: "Error Request",
            width: 40,
            padding: 0,
            margin: 0,
          },
          {
            align: "right",
            id: "Total_Request",
            name: "Total_Request",
            prompt: "Total Request",
            width: 40,
            margin: 0,
            padding: 0,
          },
        ];

        var doc = new jsPDF({
            putOnlyUsedFonts: true,
            orientation: "p",
            format: "a4",
            unit: "mm",
          }),
          margin = 30;

        // Only pt supported (not mm or in)

        // doc.autoTable(columns, rows);

        // doc.setHeaderRowTable([{}]);

        doc.setFontSize(16);
        doc.text(57, 20, "Laporan API Management Gateway");

        doc.setFontSize(10);
        doc.text(
          30,
          35,
          "Tanggal" + "              " + ": Kamis, 15 Juni 2021"
        );
        doc.setFontSize(10);
        doc.text(30, 41, "Data Laporan     : 14 Juni 2021 - 15 Juni 2021");

        doc.setFontSize(11);
        doc.text(30, 51, "Status API Gateway");

        doc.setFontSize(10);
        doc.text(30, 61, "Services" + "              " + ": 6");
        doc.setFontSize(10);
        doc.text(30, 67, "Routes" + "                " + ": 4");
        doc.setFontSize(10);
        doc.text(30, 73, "Consumer" + "           " + ": 7");

        doc.setFontSize(10);
        doc.text(30, 83, "Total Request" + " " + " " + " " + "    " + ": 1000");
        doc.setFontSize(10);
        doc.text(30, 89, "Error Request" + " " + " " + " " + "    " + ": 300");
        doc.setFontSize(10);
        doc.text(30, 95, "Success Request" + " " + " " + ": 700");

        doc.setFontSize(10);
        doc.text(30, 105, "Detail Service");

        doc.setFontSize(10);
        doc.text(35, 115, "1." + "   " + "Service Telkom");

        doc.setFontSize(10);
        doc.text(35, 125, "   " + "   " + "End Point Request");

        doc.table(23, 130, endpoint_datas, endpoint_headers, { fontSize: 10 });

        doc.setFontSize(10);
        doc.text(35, 195, "   " + "   " + "Consumer Request");

        doc.table(
          20,
          200,
          consumer_datas,
          consumer_headers,
          { fontSize: 10 },
          { padding: 0 }
        );

        // doc
        //   .setDrawColor(0, 255, 0)
        //   .setLineWidth(1 / 72)
        //   .line(margin, margin, margin, 297 - margin)
        //   .line(210 - margin, margin, 210 - margin, 297 - margin);

        window.open(doc.output("bloburl"), "_blank");

        // doc.save("Test.pdf");
      };
      return HTML2PDF();
    },
  });
}
