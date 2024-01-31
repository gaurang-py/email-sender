import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
