import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {CompanyVacancy} from '../models';
import {CompanyVacancyRepository} from '../repositories';
@authenticate('jwt')
export class CompanyVacancyController {
  constructor(
    @repository(CompanyVacancyRepository)
    public companyVacancyRepository: CompanyVacancyRepository,
  ) {}

  @post('/company-vacancies')
  @response(200, {
    description: 'CompanyVacancy model instance',
    content: {'application/json': {schema: getModelSchemaRef(CompanyVacancy)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyVacancy, {
            title: 'NewCompanyVacancy',
            exclude: ['id'],
          }),
        },
      },
    })
    companyVacancy: Omit<CompanyVacancy, 'id'>,
  ): Promise<CompanyVacancy> {
    return this.companyVacancyRepository.create(companyVacancy);
  }

  @get('/company-vacancies/count')
  @response(200, {
    description: 'CompanyVacancy model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CompanyVacancy) where?: Where<CompanyVacancy>,
  ): Promise<Count> {
    return this.companyVacancyRepository.count(where);
  }

  @get('/company-vacancies')
  @response(200, {
    description: 'Array of CompanyVacancy model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CompanyVacancy, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CompanyVacancy) filter?: Filter<CompanyVacancy>,
  ): Promise<CompanyVacancy[]> {
    return this.companyVacancyRepository.find(filter);
  }

  @patch('/company-vacancies')
  @response(200, {
    description: 'CompanyVacancy PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyVacancy, {partial: true}),
        },
      },
    })
    companyVacancy: CompanyVacancy,
    @param.where(CompanyVacancy) where?: Where<CompanyVacancy>,
  ): Promise<Count> {
    return this.companyVacancyRepository.updateAll(companyVacancy, where);
  }

  @get('/company-vacancies/{id}')
  @response(200, {
    description: 'CompanyVacancy model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CompanyVacancy, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CompanyVacancy, {exclude: 'where'})
    filter?: FilterExcludingWhere<CompanyVacancy>,
  ): Promise<CompanyVacancy> {
    return this.companyVacancyRepository.findById(id, filter);
  }

  @patch('/company-vacancies/{id}')
  @response(204, {
    description: 'CompanyVacancy PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyVacancy, {partial: true}),
        },
      },
    })
    companyVacancy: CompanyVacancy,
  ): Promise<void> {
    await this.companyVacancyRepository.updateById(id, companyVacancy);
  }

  @put('/company-vacancies/{id}')
  @response(204, {
    description: 'CompanyVacancy PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() companyVacancy: CompanyVacancy,
  ): Promise<void> {
    await this.companyVacancyRepository.replaceById(id, companyVacancy);
  }

  @del('/company-vacancies/{id}')
  @response(204, {
    description: 'CompanyVacancy DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.companyVacancyRepository.deleteById(id);
  }
}
