import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Redirect,HttpCode, Header, Req, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response, Request } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) {

    }

    // @Get()
    // // @Redirect('https://google.com', 301) перенаправлйает на сайт,который желаешь
    // getAll(@Req() req: Request, @Res() res: Response) {
    //     res.status(201).end('Poka')
    //     return 'getAll'
    // }

    @Get()
    getAll(): Promise<Product[]> {
        return this.productService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id): Promise<Product> {
        return this.productService.getById(id)
        // return 'getOne ' + id
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() body:any): Promise<Product> {
        return this.productService.create(body)
        // return `Title: ${CreateProductDto.title} Price: ${CreateProductDto.price}`
    }

    @Delete(':id')
    remove(@Param('id') id): Promise<Product> {
        return this.productService.remove(id)
        // return 'Remove ' + id
    }

    @Put(':id')
    update(@Body() UpdateProductDto: UpdateProductDto, @Param('id') id): Promise<Product>{
        return this.productService.update(id, UpdateProductDto)
        // return 'Update ' + id
    }


}
