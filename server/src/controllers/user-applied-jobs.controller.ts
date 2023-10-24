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
import {UserAppliedJobs} from '../models';
import {UserAppliedJobsRepository} from '../repositories';

@authenticate('jwt')
export class UserAppliedJobsController {
  constructor(
    @repository(UserAppliedJobsRepository)
    public userAppliedJobsRepository: UserAppliedJobsRepository,
  ) {}

  @post('/user-applied-jobs')
  @response(200, {
    description: 'UserAppliedJobs model instance',
    content: {'application/json': {schema: getModelSchemaRef(UserAppliedJobs)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserAppliedJobs, {
            title: 'NewUserAppliedJobs',
            exclude: ['id'],
          }),
        },
      },
    })
    userAppliedJobs: Omit<UserAppliedJobs, 'id'>,
  ): Promise<UserAppliedJobs> {
    return this.userAppliedJobsRepository.create(userAppliedJobs);
  }

  @get('/user-applied-jobs/count')
  @response(200, {
    description: 'UserAppliedJobs model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(UserAppliedJobs) where?: Where<UserAppliedJobs>,
  ): Promise<Count> {
    return this.userAppliedJobsRepository.count(where);
  }

  @get('/user-applied-jobs')
  @response(200, {
    description: 'Array of UserAppliedJobs model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(UserAppliedJobs, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(UserAppliedJobs) filter?: Filter<UserAppliedJobs>,
  ): Promise<UserAppliedJobs[]> {
    return this.userAppliedJobsRepository.find(filter);
  }

  @patch('/user-applied-jobs')
  @response(200, {
    description: 'UserAppliedJobs PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserAppliedJobs, {partial: true}),
        },
      },
    })
    userAppliedJobs: UserAppliedJobs,
    @param.where(UserAppliedJobs) where?: Where<UserAppliedJobs>,
  ): Promise<Count> {
    return this.userAppliedJobsRepository.updateAll(userAppliedJobs, where);
  }

  @get('/user-applied-jobs/{id}')
  @response(200, {
    description: 'UserAppliedJobs model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(UserAppliedJobs, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(UserAppliedJobs, {exclude: 'where'})
    filter?: FilterExcludingWhere<UserAppliedJobs>,
  ): Promise<UserAppliedJobs> {
    return this.userAppliedJobsRepository.findById(id, filter);
  }

  @patch('/user-applied-jobs/{id}')
  @response(204, {
    description: 'UserAppliedJobs PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(UserAppliedJobs, {partial: true}),
        },
      },
    })
    userAppliedJobs: UserAppliedJobs,
  ): Promise<void> {
    await this.userAppliedJobsRepository.updateById(id, userAppliedJobs);
  }

  @put('/user-applied-jobs/{id}')
  @response(204, {
    description: 'UserAppliedJobs PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() userAppliedJobs: UserAppliedJobs,
  ): Promise<void> {
    await this.userAppliedJobsRepository.replaceById(id, userAppliedJobs);
  }

  @del('/user-applied-jobs/{id}')
  @response(204, {
    description: 'UserAppliedJobs DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.userAppliedJobsRepository.deleteById(id);
  }
}
