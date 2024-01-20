import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Video, Prisma } from '@prisma/client';

@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.VideoCreateInput): Promise<Video> {
    return this.prisma.video.create({
      data,
    });
  }

  async findAll(): Promise<Video[]> {
    return this.prisma.video.findMany();
  }

  async findByCriterial(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.VideoWhereUniqueInput;
    where?: Prisma.VideoWhereInput;
    orderBy?: Prisma.VideoOrderByWithRelationInput;
  }): Promise<Video[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.video.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(
    videoWhereUniqueInput: Prisma.VideoWhereUniqueInput,
  ): Promise<Video> {
    return this.prisma.video.findUnique({
      where: videoWhereUniqueInput,
    });
  }

  async update(params: {
    where: Prisma.VideoWhereUniqueInput;
    data: Prisma.VideoUpdateInput;
  }): Promise<Video> {
    const { data, where } = params;
    return this.prisma.video.update({
      data,
      where,
    });
  }

  async addCharacter(videoId: number, characterId: number): Promise<Video> {
    return this.prisma.video.update({
      where: { id: videoId },
      data: {
        characters: {
          connect: {
            id: characterId,
          },
        },
      },
    });
  }

  async remove(where: Prisma.VideoWhereUniqueInput): Promise<Video> {
    return this.prisma.video.delete({
      where,
    });
  }
}
