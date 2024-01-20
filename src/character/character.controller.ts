import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Post()
  async create(@Body() createCharacterDto: CreateCharacterDto) {
    return this.characterService.create(createCharacterDto);
  }

  @Get()
  async findAll() {
    return this.characterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.characterService.findOne({ id: Number(id) });
  }

  @Get('filter/:searchString')
  async findByCriterial(@Param('searchString') searchString: string) {
    return this.characterService.findByCriterial({
      where: {
        OR: [
          {
            name: {
              contains: searchString,
            },
          },
        ],
      },
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ) {
    return this.characterService.update({
      where: { id: Number(id) },
      data: updateCharacterDto,
    });
  }

  @Post(':idCharacter/addVideo/:idVideo')
  async addCharacter(
    @Param('idVideo') idVideo: string,
    @Param('idCharacter') idCharacter: string,
  ) {
    return this.characterService.addVideo(Number(idCharacter), Number(idVideo));
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.characterService.remove({ id: Number(id) });
  }
}
