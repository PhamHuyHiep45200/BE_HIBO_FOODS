import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PrismaService } from 'src/prisma.service';
import { GetChatDto } from './dto/get-chat.dto';

@ApiTags('chat')
@Controller('chat')
export class ChatController {
  constructor(private prisma: PrismaService) {}
  @Get('/user-chat')
  async getAllUserChat() {
    return 0;
  }

  @Get('/all')
  async getAll() {
    return 0;
  }

  @Get('')
  async getAllChatById(@Query() chat: GetChatDto) {
    // const admin = await this.prisma.user.findFirst({
    //   where: {
    //     role: 'ADMIN',
    //   },
    // });
    // const data = await this.prisma.message.findMany({
    //   where: {
    //     OR: [
    //       {
    //         idPersonSend: chat.idPersonSend,
    //         idPersonRecipient: chat.idPersonRecipient || admin.id,
    //       },
    //       {
    //         idPersonSend: chat.idPersonRecipient || admin.id,
    //         idPersonRecipient: chat.idPersonSend,
    //       },
    //     ],
    //   },
    //   include: {
    //     userSend: true,
    //     userRecipient: true,
    //   },
    // });
    // return { status: 200, data };
    return 0;
  }
}
