import fs from 'fs';
import PDFDocument from 'pdfkit';
import Certificate from '../models/Certificate.js';
import User from '../models/User.js';

const generateCertificate = async (name, email, userId, post) => {
    return new Promise(async (resolve, reject) => {
        const doc = new PDFDocument();
        const buffers = [];
        const certificatePath = `Certificates/${name}_certificate.pdf`; // Adjust the folder path as needed
        const writeStream = fs.createWriteStream(certificatePath);

        // Pipe the PDF document to buffers array
        doc.on('data', buffers.push.bind(buffers));

        // Pipe the PDF document to write stream to save locally
        doc.pipe(writeStream);

        // Add background image
        doc.image('/home/rushabh/Desktop/renuhealthcare/public/logo.png', 0, 0, { width: 612,  opacity: 0.1 }); // Adjust image path, width, and height

        doc.font('Helvetica');
        doc.fontSize(12);

        // Add content to the PDF
        doc.text(`Renu Sharma Healthcare Education & Foundation`, { align: 'left' });
        doc.text(`Gurugram, Haryana`, { align: 'left' });
        doc.text(`Sector - 14`, { align: 'left' });
        doc.text(`Pincode: 122503`, { align: 'left' });
        doc.moveDown();

        const currentDate = new Date().toLocaleDateString();
        doc.text(`Date - ${currentDate}`, { align: 'left' });
        doc.moveDown();

        doc.fontSize(18).text(`Subject - Offer letter of ${post}`, { align: 'left' });
        doc.moveDown();

        doc.fontSize(12).text(`Dear ${name},`, { align: 'left' });
        doc.moveDown();

        doc.text(`We are thrilled to extend an offer of employment for the position of ${post} intern at Renu Sharma Healthcare Education & Foundation. We were impressed by your qualifications and experience, and we believe that you will make a valuable addition to our team.`, { align: 'left' });
        doc.moveDown();

        doc.text(`To accept this offer, please sign and return this letter by 3 days from now. If you have any questions or concerns, please do not hesitate to contact me at 9671457366 or Neha.rshefoundation@gmail.com`, { align: 'left' });
        doc.moveDown();

        doc.text(`We are excited about the possibility of you joining our team and look forward to your positive response.`, { align: 'left' });
        doc.moveDown();

        doc.text(`Congratulations!`, { align: 'left' });
        doc.moveDown();

        doc.text(`Name - ${name}`, { align: 'left' });
        doc.moveDown();

        doc.text(`Sign:`, { align: 'left' });

        // Finalize PDF
        doc.end();

        writeStream.on('finish', async () => {
            console.log(`Certificate generated and stored locally at: ${certificatePath}`);

            // Read the generated PDF file as a buffer
            const pdfBuffer = fs.readFileSync(certificatePath);

            try {
                // Create a new certificate document in the database
                const certificate = new Certificate({
                    userId,
                    content: `Offer letter for ${name}`,
                    pdfBuffer, // Store the PDF buffer
                    post: post
                });
                await certificate.save();

                // Update user document in the database with the certificate data
                await User.findByIdAndUpdate(userId, { certificate: pdfBuffer });

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
