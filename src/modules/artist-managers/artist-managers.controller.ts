import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ArtistManagersService } from './artist-managers.service';
import { CreateArtistManagerDto } from './dto/create-artist-manager.dto';
import { UpdateArtistManagerDto } from './dto/update-artist-manager.dto';

@Controller('artist-managers')
export class ArtistManagersController {
    constructor(
        private readonly artistManagersService: ArtistManagersService,
    ) {}

    @Post()
    create(@Body() createArtistManagerDto: CreateArtistManagerDto) {
        return this.artistManagersService.create(createArtistManagerDto);
    }

    @Get()
    findAll() {
        return this.artistManagersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.artistManagersService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateArtistManagerDto: UpdateArtistManagerDto,
    ) {
        return this.artistManagersService.update(+id, updateArtistManagerDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.artistManagersService.remove(+id);
    }
}
