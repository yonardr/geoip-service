import { IsNotEmpty, IsIP } from 'class-validator';

export class IpQueryDto {
  @IsNotEmpty()
  @IsIP(undefined, { message: 'Invalid IP address format' })
  ip: string;
}
