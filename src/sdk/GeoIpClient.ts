import axios, { AxiosInstance } from 'axios';

interface GeoIpResponse {
  lat: string;
  lng: string;
  country: string;
  city: string;
}

export class GeoIpClient {
  private readonly client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
    });
  }

  async getGeoLocationByIp(ip: string): Promise<GeoIpResponse> {
    try {
      const response = await this.client.get<GeoIpResponse>('/', {
        params: { ip },
      });
      return response.data;
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            throw new Error('Invalid IP address format');
          case 404:
            throw new Error('No data found for this IP');
          case 500:
            throw new Error('Server error');
          default:
            throw new Error('Unknown error');
        }
      } else {
        throw new Error('Unable to connect to the server');
      }
    }
  }
}
