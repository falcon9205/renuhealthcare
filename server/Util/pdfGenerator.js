import PDFDocument from "pdfkit";
import fs from "fs";
import userModal from '../models/User.js'; // Import your User model

const generateCertificate = async (name, email) => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const buffers = [];
        const certificatePath = `Certificates/${name}_certificate.pdf`; // Adjust the folder path as needed
        const writeStream = fs.createWriteStream(certificatePath);

        // Pipe the PDF document to buffers array
        doc.on('data', buffers.push.bind(buffers));

        // Pipe the PDF document to write stream to save locally
        doc.pipe(writeStream);

        doc.fontSize(20).text(`Internship Certificate`, { align: 'center' });
        doc.fontSize(14).text(`This is to certify that ${name} successfully completed the internship program.`, { align: 'center' });
        doc.fontSize(14).text(`Email: ${email}`, { align: 'center' });

        doc.end();

        writeStream.on('finish', async () => {
            console.log(`Certificate generated and stored locally at: ${certificatePath}`);

            // Read the generated PDF file
            const certificateData = fs.readFileSync(certificatePath);

            try {
                // Update the user document in the database with the certificate data
                const user = await userModal.findOneAndUpdate({ email: email }, { certificate: certificateData }, { new: true });

                console.log(`Certificate stored in the database for ${email}`);
                resolve({ path: certificatePath, buffer: Buffer.concat(buffers) }); // Resolve with the path to the saved PDF file and the PDF buffer
            } catch (error) {
                console.error(`Error storing certificate in the database: ${error.message}`);
                reject(error);
            }
        });

        writeStream.on('error', (error) => {
            console.error(`Error generating certificate: ${error.message}`);
            reject(error);
        });
    });
};

export default generateCertificate;
