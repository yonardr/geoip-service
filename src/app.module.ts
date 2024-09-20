import { Module } from '@nestjs/common';
import { GeoipModule } from './geoip/geoip.module';

@Module({
  imports: [GeoipModule],
})
export class AppModule {}
