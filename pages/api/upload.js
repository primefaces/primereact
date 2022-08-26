export default function handler(req, res) {
    res.status(200).setHeader('Access-Control-Allow-Origin', '*').json({ name: 'Fake Upload Process' });
}
