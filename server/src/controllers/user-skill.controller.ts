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
import {UserSkill} from '../models';
import {UserSkillRepository} from '../repositories';
@authenticate('jwt')
export class UserSkillController {
  constructor(
    @repository(UserSkillRepository)
    public userSkillRepository: UserSkillRepository,
  ) {}

  @post('/user-skills')
  @response(200, {
    description: 'UserSkill model instance',
    content: {'application/json': {schema: getModelSchemaRef(UserSkill)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserSkill, {
            title: 'NewUserSkill',
            exclude: ['id'],
          }),
        },
      },
    })
    userSkill: Omit<UserSkill, 'id'>,
  ): Promise<UserSkill> {
    return this.userSkillRepository.create(userSkill);
  }

  @get('/user-skills/count')
  @response(200, {
    description: 'UserSkill model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UserSkill) where?: Where<UserSkill>,
  ): Promise<Count> {
    return this.userSkillRepository.count(where);
  }

  @get('/user-skills')
  @response(200, {
    description: 'Array of UserSkill model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UserSkill, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UserSkill) filter?: Filter<UserSkill>,
  ): Promise<UserSkill[]> {
    return this.userSkillRepository.find(filter);
  }

  @patch('/user-skills')
  @response(200, {
    description: 'UserSkill PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserSkill, {partial: true}),
        },
      },
    })
    userSkill: UserSkill,
    @param.where(UserSkill) where?: Where<UserSkill>,
  ): Promise<Count> {
    return this.userSkillRepository.updateAll(userSkill, where);
  }

  @get('/user-skills/{id}')
  @response(200, {
    description: 'UserSkill model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UserSkill, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UserSkill, {exclude: 'where'})
    filter?: FilterExcludingWhere<UserSkill>,
  ): Promise<UserSkill> {
    return this.userSkillRepository.findById(id, filter);
  }

  @patch('/user-skills/{id}')
  @response(204, {
    description: 'UserSkill PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserSkill, {partial: true}),
        },
      },
    })
    userSkill: UserSkill,
  ): Promise<void> {
    await this.userSkillRepository.updateById(id, userSkill);
  }

  @put('/user-skills/{id}')
  @response(204, {
    description: 'UserSkill PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() userSkill: UserSkill,
  ): Promise<void> {
    await this.userSkillRepository.replaceById(id, userSkill);
  }

  @del('/user-skills/{id}')
  @response(204, {
    description: 'UserSkill DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.userSkillRepository.deleteById(id);
  }
}
