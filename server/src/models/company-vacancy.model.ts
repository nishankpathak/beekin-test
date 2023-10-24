import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {strict: false},
  mysql: {
    //type of the connector, NOT datasource name
    table: 'companyVacancy', //table name you want to map to
  },
})
export class CompanyVacancy extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  companyId: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  requiredExperience: string;

  @property({
    type: 'number',
    required: true,
  })
  designationId: number;

  @property({
    type: 'boolean',
    required: true,
  })
  activeStatus: boolean;

  @property({
    type: 'number',
    required: true,
  })
  postedByUserId: number;

  @property({
    type: 'string',
    required: true,
  })
  budget: string;

  @property({
    type: 'string',
    required: true,
  })
  expiresOn: string;

  @property({
    type: 'number',
    required: true,
  })
  numberOfVacancy: number;

  @property({
    type: 'string',
    required: true,
  })
  majorSkills: string;

  @property({
    type: 'string',
    required: true,
  })
  websiteApplyLink: string;

  @property({
    type: 'string',
    required: true,
  })
  createdAt: string;

  @property({
    type: 'string',
    required: true,
  })
  updatedAt: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CompanyVacancy>) {
    super(data);
  }
}

export interface CompanyVacancyRelations {
  // describe navigational properties here
}

export type CompanyVacancyWithRelations = CompanyVacancy &
  CompanyVacancyRelations;
