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
import {Company} from '../models';
import {CompanyRepository} from '../repositories';

@authenticate('jwt')
export class CompanyController {
  constructor(
    @repository(CompanyRepository)
    public companyRepository: CompanyRepository,
  ) {}

  @post('/companies')
  @response(200, {
    description: 'Comany model instance',
    content: {'application/json': {schema: getModelSchemaRef(Company)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Company, {
            title: 'NewComany',
            exclude: ['id'],
          }),
        },
      },
    })
    comany: Omit<Company, 'id'>,
  ): Promise<Company> {
    return this.companyRepository.create(comany);
  }

  @get('/companies/count')
  @response(200, {
    description: 'Comany model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Company) where?: Where<Company>): Promise<Count> {
    return this.companyRepository.count(where);
  }

  @get('/companies')
  @response(200, {
    description: 'Array of Comany model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Company, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Company) filter?: Filter<Company>,
  ): Promise<Company[]> {
    return this.companyRepository.find(filter);
  }

  @patch('/companies')
  @response(200, {
    description: 'Comany PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Company, {partial: true}),
        },
      },
    })
    comany: Company,
    @param.where(Company) where?: Where<Company>,
  ): Promise<Count> {
    return this.companyRepository.updateAll(comany, where);
  }

  @get('/companies/{id}')
  @response(200, {
    description: 'Comany model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Company, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Company, {exclude: 'where'})
    filter?: FilterExcludingWhere<Company>,
  ): Promise<Company> {
    return this.companyRepository.findById(id, filter);
  }

  @patch('/companies/{id}')
  @response(204, {
    description: 'Comany PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Company, {partial: true}),
        },
      },
    })
    comany: Company,
  ): Promise<void> {
    await this.companyRepository.updateById(id, comany);
  }

  @put('/companies/{id}')
  @response(204, {
    description: 'Comany PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() comany: Company,
  ): Promise<void> {
    await this.companyRepository.replaceById(id, comany);
  }

  @del('/companies/{id}')
  @response(204, {
    description: 'Comany DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.companyRepository.deleteById(id);
  }
}
