import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { PlaybacksService } from './playbacks.service';
import { CreatePlaybackDto } from './dto/create-playback.dto';
import { UpdatePlaybackDto } from './dto/update-playback.dto';

@Controller('playbacks')
export class PlaybacksController {
    constructor(private readonly playbacksService: PlaybacksService) {}

    @Post()
    create(@Body() createPlaybackDto: CreatePlaybackDto) {
        return this.playbacksService.create(createPlaybackDto);
    }

    @Get()
    findAll() {
        return this.playbacksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.playbacksService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updatePlaybackDto: UpdatePlaybackDto,
    ) {
        return this.playbacksService.update(+id, updatePlaybackDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.playbacksService.remove(+id);
    }
}
