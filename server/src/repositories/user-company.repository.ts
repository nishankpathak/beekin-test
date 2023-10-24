import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {UserCompany, UserCompanyRelations} from '../models';

export class UserCompanyRepository extends DefaultCrudRepository<
  UserCompany,
  typeof UserCompany.prototype.id,
  UserCompanyRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(UserCompany, dataSource);
  }
}
