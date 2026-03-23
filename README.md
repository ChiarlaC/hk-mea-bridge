# HK-MEA Bridge

Policy intelligence for Hong Kong family office practitioners.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create `.env.local`:

```
RESEND_API_KEY=your_resend_api_key
RESEND_AUDIENCE_ID=your_resend_audience_id
```

Both are optional in development — the subscribe form will still work and log to console.

## Deploy

Push to GitHub, connect to Vercel. Environment variables are set in Vercel dashboard.
