import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product, ProductDocument } from "./schemas/product.schema";

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>){ // uмпортuрованuе моделей u uнжектuрованuе моделей

    }
    // private products = []

    async getAll(): Promise<Product[]> {
        return this.productModel.find().exec()  //return 'getAll'
    }


    async getById(id: ''): Promise<Product> {
        return this.productModel.findById(id)
        // return this.products.find(p => p.id === id)
    }

    async create(productDto: CreateProductDto): Promise<Product> {
        console.log(productDto);
        
        const newProduct = this.productModel.create(productDto);
        return newProduct
        
        // this.products.push({
        //     ...productDto,
        //     id: Date.now().toString()
        // })
    }

    async remove(id: ''): Promise<Product> {
        return this.productModel.findByIdAndRemove(id)
    }

    async update(id: '', productDto: UpdateProductDto): Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, productDto, {new: true})
    }

}