import { PartialType } from '@nestjs/swagger';
import { CreateArtistManagerDto } from './create-artist-manager.dto';

export class UpdateArtistManagerDto extends PartialType(
    CreateArtistManagerDto,
) {}
