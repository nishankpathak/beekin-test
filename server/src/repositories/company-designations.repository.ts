import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {CompanyDesignations, CompanyDesignationsRelations} from '../models';

export class CompanyDesignationsRepository extends DefaultCrudRepository<
  CompanyDesignations,
  typeof CompanyDesignations.prototype.id,
  CompanyDesignationsRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(CompanyDesignations, dataSource);
  }
}
