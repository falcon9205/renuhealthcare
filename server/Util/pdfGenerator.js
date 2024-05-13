import fs from 'fs';
import PDFDocument from 'pdfkit';
import Certificate from '../models/Certificate.js';

const generateCertificate = async (name, email,userId) => {
    return new Promise(async (resolve, reject) => {
        const doc = new PDFDocument();
        const buffers = [];
        const certificatePath = `Certificates/${name}_certificate.pdf`; // Adjust the folder path as needed
        const writeStream = fs.createWriteStream(certificatePath);

        // Pipe the PDF document to buffers array
        doc.on('data', buffers.push.bind(buffers));

        // Pipe the PDF document to write stream to save locally
        doc.pipe(writeStream);

        doc.font('Helvetica');
        doc.fontSize(12);
    
        // Add content to the PDF
        doc.text(`Date: ${new Date().toLocaleDateString()}`, { align: 'right' });
        doc.moveDown();
    
        doc.fontSize(18).text('Offer Letter For Web Developer Internship', { align: 'center' });
        doc.moveDown();
    
        doc.fontSize(12).text(`Dear ${name}`, { align: 'left' });
        doc.moveDown();
    
        doc.text(`I am delighted & excited to welcome you to ADM EDUCATION & WELFARE SOCIETY as a Web Developer intern. We believe that our team is our biggest strength and we take pride in hiring ONLY the best and the brightest. We are confident that you would play a significant role in the overall success of the venture and we wish you the most enjoyable, learning packed and truly meaningful internship experience with ADM EDUCATION & WELFARE SOCIETY. Your appointment will be governed by the terms & condition presented in the Annexure A.`, { align: 'left' });
        doc.moveDown();
    
        doc.text('We look forward to you joining us. Please do not hesitate to call us for any information you may need. Also, please sign at the end of this offer letter as your acceptance and forward the same to us.', { align: 'left' });
        doc.moveDown();
    
        doc.text('Congratulations!', { align: 'left' });
        
        // Finalize PDF
        doc.end();
        // Set fonts
        /*doc.font('Helvetica-Bold');
        doc.fontSize(28);

        // Add content to the PDF
        doc.text(`Internship Certificate`, { align: 'center' });
        doc.moveDown(0.5);

        // Set fonts and styles
        doc.font('Helvetica');
        doc.fontSize(14);
        doc.fillColor('#333'); // Dark gray color

        // Add formatted text
        doc.text(`This is to certify that`, { align: 'center' });doc.text(, { align: 'center', underline: true });
        doc.text(`has successfully joi the Internship Program.`, { align: 'center' });
        doc.moveDown(0.5);

        // Add paragraph with custom styling
        doc.text(`ADM EDUCATION & WELFARE SOCIETY acknowledges their commitment and dedication throughout the internship period. We wish them all the best in their future endeavors.`, { align: 'left' });
        doc.moveDown(0.5);

        // Add email
        doc.fontSize(12);
        doc.text(`Issued on: `, { align: 'left' });
        doc.text(`Email: ${email}`, { align: 'left' });
        
        // Finalize PDF
        doc.end();*/

        writeStream.on('finish', async () => {
            console.log(`Certificate generated and stored locally at: ${certificatePath}`);

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

        writeStream.on('error', (error) => {
            console.error(`Error generating certificate: ${error.message}`);
            reject(error);
        });
    });
};


export default generateCertificate;