import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SmartAbos" <contact@smartabos.com>`,
      to: process.env.PERSONAL_EMAIL,
      replyTo: email,
      subject: `Nouveau message SmartAbos - ${name}`,
      text: `
Nom : ${name}
Email : ${email}

Message :
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Erreur envoi email' },
      { status: 500 }
    );
  }
}