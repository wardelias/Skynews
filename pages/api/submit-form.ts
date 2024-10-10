import type { NextApiRequest, NextApiResponse } from 'next'

const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Apps Script');
    }

    res.status(200).json({ message: 'Form submitted successfully' })
  } catch (error) {
    console.error('Error submitting form:', error)
    res.status(500).json({ message: 'Error submitting form' })
  }
}