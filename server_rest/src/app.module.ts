import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { Typeuser } from './typeusers/entities/typeuser.entity';
import { TypeusersModule } from './typeusers/typeusers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'server_rest',
      entities: [Product, Typeuser],
      synchronize: true,
    }),
    ProductsModule,
    TypeusersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
