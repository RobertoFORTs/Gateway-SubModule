import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ClimateService } from './services/climate.service';
import { NewsletterService } from './services/newsletter.service';

@Module({
  imports: [HttpModule],
  providers: [ClimateService, NewsletterService],
  exports: [ClimateService, NewsletterService],
})
export class GatewayModule {}
