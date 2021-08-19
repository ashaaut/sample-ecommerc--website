import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { NgModule } from '@angular/core';
@NgModule({
  providers:[StaticDataSource,ProductRepository] //registering and launch
})
export class ModelModule{}
