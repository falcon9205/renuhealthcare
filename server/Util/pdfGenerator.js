import fs from 'fs';
import PDFDocument from 'pdfkit';
import Certificate from '../models/Certificate.js';

const generateCertificate = async (name, email,userId,post) => {
    return new Promise(async (resolve, reject) => {
        const doc = new PDFDocument();
        const buffers = [];
        const certificatePath = `Certificates/${name}_certificate.pdf`; // Adjust the folder path as needed
        const writeStream = fs.createWriteStream(certificatePath);

    // Pipe the PDF document to buffers array
    doc.on("data", buffers.push.bind(buffers));

    // Pipe the PDF document to write stream to save locally
    doc.pipe(writeStream);

    doc.font("Helvetica");

    doc
      .fontSize(18)
      .fillColor("green")
      .font("Helvetica-Bold")
      .text("Renu Sharma Healthcare Education & Foundation", { align: "left" });
    doc.moveDown();

    doc
      .fontSize(8)
      .font("Helvetica")
      .text("Gurugram, Haryana", { align: "left" });
    doc.fontSize(8).font("Helvetica").text("Sector - 14", { align: "left" });
    doc
      .fontSize(8)
      .font("Helvetica")
      .text("Pincode: 122503", { align: "left" });
    doc
      .fontSize(8)
      .fillColor("black")
      .font("Helvetica")
      .fontSize(10)
      .moveDown();

    doc.text(`Date: ${new Date().toLocaleDateString()}`, { align: "left" });
    doc.moveDown();
    doc.text(`Subject: Offer letter of ${post}`, { align: "left" });
    doc.moveDown();

    doc.text(`Dear ${name},`, { align: "left" });
    doc.moveDown();

    doc.text(
      `We are thrilled to extend an offer of employment for the position of ${post} intern at Renu Sharma Healthcare Education & Foundation. We were impressed by your qualifications and experience, and we believe that you will make a valuable addition to our team.`,
      { align: "left" }
    );
    doc.moveDown();

    doc
      .text(
        `To accept this offer, please sign and return this letter by 3 days from now. If you have any questions or concerns, please do not hesitate to contact us at `,
        { continued: true }
      )
      .font("Helvetica-Bold")
      .text("9671457366", { continued: true })
      .font("Helvetica")
      .text(" or ", { continued: true })
      .font("Helvetica-Bold")
      .text("Neha.rshefoundation@gmail.com");

    doc
      .fontSize(8)
      .fillColor("black")
      .font("Helvetica")
      .fontSize(10)
      .moveDown();

    doc.text(
      "We are excited about the possibility of you joining our team and look forward to your positive response.",
      { align: "left" }
    );
    doc.moveDown();

    doc.text("Congratulations!", { align: "left" });

    doc.moveDown();

    doc.text(`Name - ${name}`, { align: "left" });

    //  line width and stroke color for the border
    doc.lineWidth(25);
    doc.strokeColor("#000080");

    // position for the rectangle at the top right corner just above the border
    const rectWidth = 100; //  width of the rectangle
    const rectHeight = 100; //  height of the rectangle
    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;

    //  position for the first rectangle at the top right corner just above the border
    const rectX = pageWidth - rectWidth; //  right edge of the page
    const rectY = pageHeight - 60 - rectHeight; // Just above the border

    //  position for the second rectangle on the left side
    const secondRectX = pageWidth - rectWidth - 100; // right edge of the page
    const secondRectY = pageHeight - 60 - rectHeight; // Just above the border

    // Draw the border line at the bottom of the page
    doc
      .moveTo(0, pageHeight - 50)
      .lineTo(pageWidth, pageHeight - 50)
      .stroke();

    const gradient = doc.linearGradient(
      rectX,
      rectY,
      rectX + rectWidth,
      rectY + rectHeight
    );
    gradient.stop(1, "#C21E56	");
    gradient.stop(1, "#E37383");

    //  position for the third rectangle on the right side
    const thirdRectX = pageWidth - rectWidth - 200;
    const thirdRectY = pageHeight - 60 - rectHeight;

    //  third rectangle aligned with the right edge of the page

    doc.rect(rectX, rectY, rectWidth, rectHeight).fill(gradient);
    //second rectangle aligned with the right edge of the page
    doc
      .rect(secondRectX, secondRectY, rectWidth, rectHeight)
      .fillColor("#C21E56")
      .fill();

    // gradient for the third rectangle
    const thirdGradient = doc.linearGradient(
      thirdRectX,
      thirdRectY,
      thirdRectX + rectWidth,
      thirdRectY + rectHeight
    );
    thirdGradient.stop(1, "white"); // White color
    thirdGradient.stop(1, "#C21E56"); // Dark pink color

    //  third rectangle with the gradient and fill color
    doc
      .rect(thirdRectX, thirdRectY, rectWidth, rectHeight)
      .fill(thirdGradient)
      .fillColor("#3A9D23")
      .fill();

    doc.end();

    writeStream.on("finish", async () => {
      console.log(
        `Certificate generated and stored locally at: ${certificatePath}`
      );

      // Read the generated PDF file as a buffer
      const pdfBuffer = fs.readFileSync(certificatePath);

            try {
                // Create a new certificate document in the database
                const certificate = new Certificate({
                    userId,
                    content: `This is to certify that ${name} successfully completed the internship program.`,
                    pdfBuffer, // Store the PDF buffer
                });
                await certificate.save()
                console.log(`Certificate stored in the database for ${email}`);
                resolve({ path: certificatePath, buffer: Buffer.concat(buffers) }); // Resolve with the path to the saved PDF file and the PDF buffer
            } catch (error) {
                console.error(`Error storing certificate in the database: ${error.message}`);
                reject(error);
            }
        });

    writeStream.on("error", (error) => {
      console.error(`Error generating certificate: ${error.message}`);
      reject(error);
    });
  });
};

export default generateCertificate;
