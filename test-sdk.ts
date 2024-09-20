import { GeoIpClient } from './src/sdk/GeoIpClient';

(async () => {
  const client = new GeoIpClient('http://localhost:3000');

  try {
    const result = await client.getGeoLocationByIp('66.243.91.0');
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
})();
