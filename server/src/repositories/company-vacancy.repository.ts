import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {CompanyVacancy, CompanyVacancyRelations} from '../models';

export class CompanyVacancyRepository extends DefaultCrudRepository<
  CompanyVacancy,
  typeof CompanyVacancy.prototype.id,
  CompanyVacancyRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(CompanyVacancy, dataSource);
  }
}
