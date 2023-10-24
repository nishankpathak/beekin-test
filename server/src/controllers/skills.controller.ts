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
import {Skills} from '../models';
import {SkillsRepository} from '../repositories';

@authenticate('jwt')
export class SkillsController {
  constructor(
    @repository(SkillsRepository)
    public skillsRepository: SkillsRepository,
  ) {}

  @post('/skills')
  @response(200, {
    description: 'Skills model instance',
    content: {'application/json': {schema: getModelSchemaRef(Skills)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Skills, {
            title: 'NewSkills',
            exclude: ['id'],
          }),
        },
      },
    })
    skills: Omit<Skills, 'id'>,
  ): Promise<Skills> {
    return this.skillsRepository.create(skills);
  }

  @get('/skills/count')
  @response(200, {
    description: 'Skills model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(@param.where(Skills) where?: Where<Skills>): Promise<Count> {
    return this.skillsRepository.count(where);
  }

  @get('/skills')
  @response(200, {
    description: 'Array of Skills model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Skills, {includeRelations: true}),
        },
      },
    },
  })
  async find(@param.filter(Skills) filter?: Filter<Skills>): Promise<Skills[]> {
    return this.skillsRepository.find(filter);
  }

  @patch('/skills')
  @response(200, {
    description: 'Skills PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Skills, {partial: true}),
        },
      },
    })
    skills: Skills,
    @param.where(Skills) where?: Where<Skills>,
  ): Promise<Count> {
    return this.skillsRepository.updateAll(skills, where);
  }

  @get('/skills/{id}')
  @response(200, {
    description: 'Skills model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Skills, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Skills, {exclude: 'where'})
    filter?: FilterExcludingWhere<Skills>,
  ): Promise<Skills> {
    return this.skillsRepository.findById(id, filter);
  }

  @patch('/skills/{id}')
  @response(204, {
    description: 'Skills PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Skills, {partial: true}),
        },
      },
    })
    skills: Skills,
  ): Promise<void> {
    await this.skillsRepository.updateById(id, skills);
  }

  @put('/skills/{id}')
  @response(204, {
    description: 'Skills PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() skills: Skills,
  ): Promise<void> {
    await this.skillsRepository.replaceById(id, skills);
  }

  @del('/skills/{id}')
  @response(204, {
    description: 'Skills DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.skillsRepository.deleteById(id);
  }
}
