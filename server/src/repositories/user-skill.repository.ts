import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {UserSkill, UserSkillRelations} from '../models';

export class UserSkillRepository extends DefaultCrudRepository<
  UserSkill,
  typeof UserSkill.prototype.id,
  UserSkillRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(UserSkill, dataSource);
  }
}
