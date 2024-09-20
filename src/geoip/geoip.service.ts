import { Injectable } from '@nestjs/common';
import * as geoip from 'geoip-lite';

@Injectable()
export class GeoipService {
  getGeoLocationByIp(ip: string) {
    // Проверяем, есть ли данные по IP
    const geo = geoip.lookup(ip);

    if (!geo) {
      return null;
    }

    // Возвращаем структуру данных
    return {
      lat: geo.ll[0], // Широта
      lng: geo.ll[1], // Долгота
      country: geo.country,
      city: geo.city || 'Unknown',
    };
  }
}
