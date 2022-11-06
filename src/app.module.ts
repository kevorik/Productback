import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [ProductsModule,MongooseModule.forRoot(`mongodb+srv://kevorik:Laptev2699-@cluster0.ntlhzue.mongodb.net/?retryWrites=true&w=majority`)],
  controllers: [AppController],//mongodb+srv://kevorik:<password>@cluster0.ntlhzue.mongodb.net/?retryWrites=true&w=majority
  providers: [AppService], 
})
export class AppModule {

}
