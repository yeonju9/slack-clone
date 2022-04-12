import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiParam({
    name: 'url',
    required: true,
    description: '워크스페이스 url',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 아이디',
  })
  @ApiParam({
    name: 'perPage',
    required: true,
    description: '한번에 가져오는 개수',
  })
  @ApiParam({
    name: 'page',
    required: true,
    description: '불러올 페이지',
  })
  @Get(':id/chats')
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }

  @Post(':id/chats')
  postChat(@Body() body, @Param() param) {
    console.log(body.content);
    console.log(param.id, param.url);
  }

  @Get(':id/unreads')
  getUnread(@Query() query, @Param() param) {
    console.log(query.after);
    console.log(param.id, param.url);
  }

  // @POST(':id/images')
  // postImage() {}
}