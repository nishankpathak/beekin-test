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
import {CompanyDesignations} from '../models';
import {CompanyDesignationsRepository} from '../repositories';

import {authenticate} from '@loopback/authentication';
@authenticate('jwt')
export class CompanyDesignationsController {
  constructor(
    @repository(CompanyDesignationsRepository)
    public companyDesignationsRepository: CompanyDesignationsRepository,
  ) {}

  @post('/company-designations')
  @response(200, {
    description: 'CompanyDesignations model instance',
    content: {
      'application/json': {schema: getModelSchemaRef(CompanyDesignations)},
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyDesignations, {
            title: 'NewCompanyDesignations',
            exclude: ['id'],
          }),
        },
      },
    })
    companyDesignations: Omit<CompanyDesignations, 'id'>,
  ): Promise<CompanyDesignations> {
    return this.companyDesignationsRepository.create(companyDesignations);
  }

  @get('/company-designations/count')
  @response(200, {
    description: 'CompanyDesignations model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CompanyDesignations) where?: Where<CompanyDesignations>,
  ): Promise<Count> {
    return this.companyDesignationsRepository.count(where);
  }

  @get('/company-designations')
  @response(200, {
    description: 'Array of CompanyDesignations model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CompanyDesignations, {
            includeRelations: true,
          }),
        },
      },
    },
  })
  async find(
    @param.filter(CompanyDesignations) filter?: Filter<CompanyDesignations>,
  ): Promise<CompanyDesignations[]> {
    return this.companyDesignationsRepository.find(filter);
  }

  @patch('/company-designations')
  @response(200, {
    description: 'CompanyDesignations PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyDesignations, {partial: true}),
        },
      },
    })
    companyDesignations: CompanyDesignations,
    @param.where(CompanyDesignations) where?: Where<CompanyDesignations>,
  ): Promise<Count> {
    return this.companyDesignationsRepository.updateAll(
      companyDesignations,
      where,
    );
  }

  @get('/company-designations/{id}')
  @response(200, {
    description: 'CompanyDesignations model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CompanyDesignations, {
          includeRelations: true,
        }),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CompanyDesignations, {exclude: 'where'})
    filter?: FilterExcludingWhere<CompanyDesignations>,
  ): Promise<CompanyDesignations> {
    return this.companyDesignationsRepository.findById(id, filter);
  }

  @patch('/company-designations/{id}')
  @response(204, {
    description: 'CompanyDesignations PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CompanyDesignations, {partial: true}),
        },
      },
    })
    companyDesignations: CompanyDesignations,
  ): Promise<void> {
    await this.companyDesignationsRepository.updateById(
      id,
      companyDesignations,
    );
  }

  @put('/company-designations/{id}')
  @response(204, {
    description: 'CompanyDesignations PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() companyDesignations: CompanyDesignations,
  ): Promise<void> {
    await this.companyDesignationsRepository.replaceById(
      id,
      companyDesignations,
    );
  }

  @del('/company-designations/{id}')
  @response(204, {
    description: 'CompanyDesignations DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.companyDesignationsRepository.deleteById(id);
  }
}
