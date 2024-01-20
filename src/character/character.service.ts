import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Character, Prisma } from '@prisma/client';

@Injectable()
export class CharacterService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.CharacterCreateInput): Promise<Character> {
    return this.prisma.character.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.character.findMany();
  }

  async findByCriterial(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CharacterWhereUniqueInput;
    where?: Prisma.CharacterWhereInput;
    orderBy?: Prisma.CharacterOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.character.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(
    characterWhereUniqueInput: Prisma.CharacterWhereUniqueInput,
  ): Promise<Character> {
    return this.prisma.character.findUnique({
      where: characterWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.CharacterWhereUniqueInput;
    data: Prisma.CharacterUpdateInput;
  }): Promise<Character> {
    const { data, where } = params;
    return this.prisma.character.update({
      data,
      where,
    });
  }

  async addVideo(characterId: number, videoId: number): Promise<Character> {
    return this.prisma.character.update({
      where: { id: characterId },
      data: {
        videos: {
          connect: {
            id: videoId,
          },
        },
      },
    });
  }

  async remove(where: Prisma.CharacterWhereUniqueInput): Promise<Character> {
    return this.prisma.character.delete({
      where,
    });
  }
}
