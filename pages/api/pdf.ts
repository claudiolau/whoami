import stream from 'stream'
import { promisify } from 'util'
import fetch from 'node-fetch'
import myPdf from '../../public/Claudio_Lau.pdf'

const pipeline = promisify(stream.pipeline)

const handler = async (req, res) => {
    //   const response = await fetch(url); // replace this with your API call & options
    //   if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    //   res.setHeader('Content-Type', 'application/pdf');
    //   res.setHeader('Content-Disposition', 'attachment; filename=dummy.pdf');
    //   await pipeline(response.body, res);
}
