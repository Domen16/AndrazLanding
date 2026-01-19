import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import fs from 'fs';
import path from 'path';

function createSESClient() {
  if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    throw new Error('AWS credentials not configured');
  }
  
  return new SESClient({
    region: process.env.AWS_REGION || 'eu-central-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const sesClient = createSESClient();

    // Read HTML template
    const templatePath = path.join(process.cwd(), 'email-templates', 'waitlist-welcome.html');
    const htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

    const params = {
      Source: 'ROK STRATEGIST <no-reply@rokstrategist.com>',
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: {
          Data: '🎮 Welcome to ROK STRATEGIST - Your Strategic Advantage Awaits!',
          Charset: 'UTF-8',
        },
        Body: {
          Html: {
            Data: htmlTemplate,
            Charset: 'UTF-8',
          },
          Text: {
            Data: `Welcome to ROK STRATEGIST!

Thank you for joining our waitlist. You're now part of an exclusive group of governors who will get early access to the most advanced Rise of Kingdoms strategy platform.

What you can expect:
- Weekly Event Analysis with ROI calculations
- Personalized Strategies based on your spending tier and KvK stage
- AI-Powered Insights for instant strategy answers
- 50% OFF First Month as an early supporter

We'll keep you updated on our progress and notify you as soon as we launch.

Stay strategic,
The ROK STRATEGIST Team

Visit us: https://rokstrategist.com`,
            Charset: 'UTF-8',
          },
        },
      },
      ReplyToAddresses: ['contact@rokstrategist.com'],
    };

    const command = new SendEmailCommand(params);
    await sesClient.send(command);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
