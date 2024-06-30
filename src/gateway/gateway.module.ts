import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ClimateService } from './climate.service';
import { NewsletterService } from './newsletter.service';

@Module({
  imports: [HttpModule],
  providers: [ClimateService, NewsletterService],
  exports: [ClimateService, NewsletterService],
})
export class GatewayModule {}
