# AWS SES Email Setup Instructions

## Prerequisites
- AWS Account
- Domain verified in AWS SES (rokstrategist.com)
- Email address verified (noreply@rokstrategist.com)

## Setup Steps

### 1. AWS SES Configuration

1. **Go to AWS SES Console** (eu-central-1 region)
2. **Verify Domain:**
   - Navigate to "Verified identities"
   - Click "Create identity"
   - Select "Domain"
   - Enter: `rokstrategist.com`
   - Add the provided DNS records to your domain registrar

3. **Verify Email Address:**
   - Create identity → Email address
   - Enter: `noreply@rokstrategist.com`
   - Verify via email link

4. **Request Production Access:**
   - Navigate to "Account dashboard"
   - Click "Request production access"
   - Fill out the form (usually approved within 24 hours)

### 2. Create IAM User for SES

1. **Go to IAM Console**
2. **Create User:**
   - Name: `rok-strategist-ses`
   - Access type: Programmatic access

3. **Attach Policy:**
   - Create inline policy with this JSON:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "ses:SendEmail",
           "ses:SendRawEmail"
         ],
         "Resource": "*"
       }
     ]
   }
   ```

4. **Save Credentials:**
   - Copy Access Key ID
   - Copy Secret Access Key

### 3. Configure Environment Variables

Create `.env.local` file in project root:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# AWS SES
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=eu-central-1
FROM_EMAIL=noreply@rokstrategist.com
```

### 4. Test Email Sending

1. **Start dev server:** `npm run dev`
2. **Join waitlist** on the landing page
3. **Check email** - should receive welcome email
4. **Check logs** - look for any errors in console

## Email Flow

1. User submits email on waitlist form
2. Email saved to Supabase
3. API route `/api/send-welcome-email` is called
4. AWS SES sends welcome email using HTML template
5. User receives email in inbox

## Troubleshooting

**Email not sending:**
- Check AWS SES is out of sandbox mode
- Verify domain and email in SES console
- Check IAM user has correct permissions
- Verify environment variables are set

**Email goes to spam:**
- Set up SPF, DKIM, and DMARC records
- Use verified domain email (noreply@rokstrategist.com)
- Avoid spam trigger words

**Rate limits:**
- Sandbox: 200 emails/day, 1 email/second
- Production: Request limit increase if needed

## Production Deployment

When deploying to Vercel/Netlify:
1. Add environment variables in dashboard
2. Ensure AWS SES is in production mode
3. Monitor email delivery in SES console
4. Set up CloudWatch alarms for failures

## Security Notes

- Never commit `.env.local` to git
- Rotate credentials if exposed
- Use least privilege IAM policies
- Monitor AWS SES usage and costs
