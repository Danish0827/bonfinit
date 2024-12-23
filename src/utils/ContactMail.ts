"use server";
import React from "react";
generateEmailTemplate;
import { sendmail } from "./mail";
import { generateEmailTemplate } from "./emailTemplate";

interface SendFuncProps {
  name: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  message: string;
}

export const send: React.FC<SendFuncProps> = async ({
  name,
  email,
  phoneCode,
  phoneNumber,
  message,
}) => {
  const emailBody = generateEmailTemplate({
    name,
    email,
    phoneCode,
    phoneNumber,
    message,
  });

  try {
    await sendmail({
      to: "sales@binfinit.co",
      name: "Binfinit Global Business",
      subject: "Enquiry From Binfinit",
      body: emailBody,
    });

    return true;
  } catch (error) {
    console.error("Error sending mail:", error);
    return false;
  }
};
