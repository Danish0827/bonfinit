export const generateEmailTemplate = ({
  name,
  email,
  phoneCode,
  phoneNumber,
  message,
}: {
  name: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  message: string;
}) => {
  return `
        <div style="font-family: Arial, sans-serif; padding: 30px; background-color: #000000; color: #ffffff;">
          <div style="padding-bottom: 20px;">
            <img src="https://i.ibb.co/WcCDPgM/Bi-NFINIT-main.png" alt="Caliber Star Logo" style="max-width: 150px;">
          </div>
          <h2 style="color: #ee7737;">New Enquiry Details</h2>
          <p style="text-transform: capitalize;"><strong>Name:</strong> ${name} </p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #ffffff;">${email}</a></p>
            <p><strong>Country Code:</strong> <a href="tel:${phoneCode}" style="color: #ffffff;">${phoneCode}</a></p>
          <p><strong>Phone No:</strong> <a href="tel:${phoneNumber}" style="color: #ffffff;">${phoneNumber}</a></p>
          <p><strong>Message:</strong> ${message}</p>
          <hr style="border: 1px solid #555555;" />
          <p style="color: #999999; font-size: 12px;">
            This email was generated from the  Binfinit website. Please contact us if you have any questions.
          </p>
        </div>
      `;
};
