import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';

@Controller('items')
export class ItemsController {
  @Get()
  findeAll(): string {
    return 'i am items';
  }

  @Post()
  creatItems(@Body() createItemDto: CreateItemDto): string {
    return `Name:${createItemDto.name} 
    Des:${createItemDto.description}`;
  }

  @Get(':id')
  findById(@Param() param): string {
    return `${param.id}`;
  }
}
