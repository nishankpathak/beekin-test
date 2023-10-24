import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {UserAppliedJobs, UserAppliedJobsRelations} from '../models';

export class UserAppliedJobsRepository extends DefaultCrudRepository<
  UserAppliedJobs,
  typeof UserAppliedJobs.prototype.id,
  UserAppliedJobsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(UserAppliedJobs, dataSource);
  }
}
