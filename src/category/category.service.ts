import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class CategoryService {

  constructor(private readonly databaseService: DatabaseService){}
  create(createCategoryDto: Prisma.CategoryCreateInput) {
    return this.databaseService.category.create({data: createCategoryDto});
  }

  findAll() {
    return this.databaseService.category.findMany();
  }

  remove(id: number) {
    return this.databaseService.category.delete({
      where: { id }
    });
  }
}
