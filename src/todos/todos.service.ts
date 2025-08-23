import { Injectable } from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {Prisma} from "@prisma/client";

@Injectable()
export class TodosService {

  constructor(private readonly databaseService: DatabaseService){}
  create(createTodoDto: Prisma.TodoCreateInput) {
    return this.databaseService.todo.create({data: createTodoDto});
  }

  findAll() {
    return this.databaseService.todo.findMany();
  }


  update(id: number, updateTodoDto: Prisma.TodoUpdateInput) {
    return this.databaseService.todo.update({
      where: {id},
      data: updateTodoDto
    });
  }

  remove(id: number) {
    return this.databaseService.todo.delete({
      where: { id }
    });
  }
}
