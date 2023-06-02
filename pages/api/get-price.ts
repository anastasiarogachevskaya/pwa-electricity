import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_BASE_URL = 'https://api.porssisahko.net/v1';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { date, hour } = req.query;
  
  try {
    const response = await axios.get(`${API_BASE_URL}/price.json`, {
      params: {
        date,
        hour,
      },
    });
    
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}

export default handler;