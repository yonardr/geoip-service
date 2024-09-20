import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
  NotFoundException,
} from '@nestjs/common';
import { GeoipService } from './geoip.service';
import { IpQueryDto } from './dto/ip-query.dto';

@Controller()
export class GeoipController {
  constructor(private readonly geoipService: GeoipService) {}

  @Get('/')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async getGeoLocation(@Query() query: IpQueryDto) {
    const { ip } = query;

    // Получаем данные о геолокации
    const location = this.geoipService.getGeoLocationByIp(ip);

    if (!location) {
      throw new NotFoundException(['No data found for this IP']);
    }

    return location;
  }
}
