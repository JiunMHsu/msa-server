import { Injectable } from '@nestjs/common';
import { CreateArtistManagerDto } from './dto/create-artist-manager.dto';
import { UpdateArtistManagerDto } from './dto/update-artist-manager.dto';

@Injectable()
export class ArtistManagersService {
    create(createArtistManagerDto: CreateArtistManagerDto) {
        return 'This action adds a new artistManager';
    }

    findAll() {
        return `This action returns all artistManagers`;
    }

    findOne(id: number) {
        return `This action returns a #${id} artistManager`;
    }

    update(id: number, updateArtistManagerDto: UpdateArtistManagerDto) {
        return `This action updates a #${id} artistManager`;
    }

    remove(id: number) {
        return `This action removes a #${id} artistManager`;
    }
}
