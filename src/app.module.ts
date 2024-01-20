import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterModule } from './character/character.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [CharacterModule, VideoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
