export default function handler(req, res) {
    res.setDraftMode({ enable: true })
    // res.end('Draft mode is enabled');
    // res.status(200).json({ text: 'Hello' });
    res.status(200).json({ text: 'Hello 2' })
}
