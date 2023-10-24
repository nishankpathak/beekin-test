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
import {UserCompany} from '../models';
import {UserCompanyRepository} from '../repositories';
@authenticate('jwt')
export class UserCompanyController {
  constructor(
    @repository(UserCompanyRepository)
    public userCompanyRepository: UserCompanyRepository,
  ) {}

  @post('/user-companies')
  @response(200, {
    description: 'UserCompany model instance',
    content: {'application/json': {schema: getModelSchemaRef(UserCompany)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserCompany, {
            title: 'NewUserCompany',
            exclude: ['id'],
          }),
        },
      },
    })
    userCompany: Omit<UserCompany, 'id'>,
  ): Promise<UserCompany> {
    return this.userCompanyRepository.create(userCompany);
  }

  @get('/user-companies/count')
  @response(200, {
    description: 'UserCompany model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UserCompany) where?: Where<UserCompany>,
  ): Promise<Count> {
    return this.userCompanyRepository.count(where);
  }

  @get('/user-companies')
  @response(200, {
    description: 'Array of UserCompany model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UserCompany, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UserCompany) filter?: Filter<UserCompany>,
  ): Promise<UserCompany[]> {
    return this.userCompanyRepository.find(filter);
  }

  @patch('/user-companies')
  @response(200, {
    description: 'UserCompany PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserCompany, {partial: true}),
        },
      },
    })
    userCompany: UserCompany,
    @param.where(UserCompany) where?: Where<UserCompany>,
  ): Promise<Count> {
    return this.userCompanyRepository.updateAll(userCompany, where);
  }

  @get('/user-companies/{id}')
  @response(200, {
    description: 'UserCompany model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UserCompany, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UserCompany, {exclude: 'where'})
    filter?: FilterExcludingWhere<UserCompany>,
  ): Promise<UserCompany> {
    return this.userCompanyRepository.findById(id, filter);
  }

  @patch('/user-companies/{id}')
  @response(204, {
    description: 'UserCompany PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserCompany, {partial: true}),
        },
      },
    })
    userCompany: UserCompany,
  ): Promise<void> {
    await this.userCompanyRepository.updateById(id, userCompany);
  }

  @put('/user-companies/{id}')
  @response(204, {
    description: 'UserCompany PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() userCompany: UserCompany,
  ): Promise<void> {
    await this.userCompanyRepository.replaceById(id, userCompany);
  }

  @del('/user-companies/{id}')
  @response(204, {
    description: 'UserCompany DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.userCompanyRepository.deleteById(id);
  }
}
