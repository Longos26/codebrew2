// pages/api/crypto.js
export const dynamic = "force-static"; // Force static generation
export const revalidate = 60; // Revalidate every 60 seconds (if needed)

import { encrypt, decrypt } from '../../utils/crypto';

export default function handler(req, res) {
    const { action, text, encryptedText } = req.body;

    if (action === 'encrypt' && text) {
        const encryptedData = encrypt(text);
        res.status(200).json({ encryptedData });
    } else if (action === 'decrypt' && encryptedText) {
        const decrypted = decrypt(encryptedText);
        res.status(200).json({ decrypted });
    } else {
        res.status(400).json({ error: 'Invalid parameters' });
    }
}
