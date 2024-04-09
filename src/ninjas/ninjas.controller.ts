import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    NotFoundException, 
    Param, 
    Patch, 
    Post, 
    Query 
} from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto/create-ninja.dto';
import { UpdateNinjasDto } from './dto/update-ninjas.dto/update-ninjas.dto';

@Controller('ninjas')
export class NinjasController {

    constructor(private readonly ninjasService: NinjasService) {} // declare and init at the same time

    @Get('')
    findAll(@Query() paginationQuery) {
        // const { limit, offset } = paginationQuery;
        return this.ninjasService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        const ninja = this.ninjasService.findOne(''+id);
        if(!ninja) {
            throw new NotFoundException(`Ninja #${id} not found`);
        };
        return ninja
    }

    @Post()
    create(@Body() createNinjaDto: CreateNinjaDto) {
        return this.ninjasService.create(createNinjaDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateNinjasDto: UpdateNinjasDto) {
        return this.ninjasService.update(id, updateNinjasDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ninjasService.remove(id);
    }
}
