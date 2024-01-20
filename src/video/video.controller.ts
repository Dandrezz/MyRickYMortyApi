import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  create(@Body() createVideoDto: CreateVideoDto) {
    return this.videoService.create(createVideoDto);
  }

  @Get()
  findAll() {
    return this.videoService.findAll();
  }

  @Get('filter/:searchString')
  async findByCriterial(@Param('searchString') searchString: string) {
    return this.videoService.findByCriterial({
      where: {
        OR: [
          {
            name: {
              contains: searchString,
            },
          },
          {
            content: {
              contains: searchString,
            },
          },
        ],
      },
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.videoService.findOne({ id: Number(id) });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVideoDto: UpdateVideoDto,
  ) {
    return this.videoService.update({
      where: { id: Number(id) },
      data: updateVideoDto,
    });
  }

  @Patch(':idVideo/add/:idCharacter')
  async addCharacter(
    @Param('idVideo') idVideo: string,
    @Param('idCharacter') idCharacter: string,
  ) {
    return this.videoService.addCharacter(Number(idVideo), Number(idCharacter));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.videoService.remove({ id: Number(id) });
  }
}
