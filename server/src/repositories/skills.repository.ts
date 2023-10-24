import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Skills, SkillsRelations} from '../models';

export class SkillsRepository extends DefaultCrudRepository<
  Skills,
  typeof Skills.prototype.id,
  SkillsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Skills, dataSource);
  }
}
