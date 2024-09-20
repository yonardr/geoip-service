import { Module } from '@nestjs/common';
import { GeoipService } from './geoip.service';
import { GeoipController } from './geoip.controller';

@Module({
  providers: [GeoipService],
  controllers: [GeoipController],
})
export class GeoipModule {}
