import { Controller, Get } from '@nestjs/common';
import { FileGeneratedService } from './file-generated.service';

@Controller('file-generated')
export class FileGeneratedController {
    constructor(
        private readonly fileGeneratedService: FileGeneratedService
    ) { }

    @Get()
    async findAll() {
        return this.fileGeneratedService.getData();
    }
}
