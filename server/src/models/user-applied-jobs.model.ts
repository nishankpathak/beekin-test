import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {strict: false},
  mysql: {
    //type of the connector, NOT datasource name
    table: 'userAppliedJobs', //table name you want to map to
  },
})
export class UserAppliedJobs extends Entity {
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
  userId: number;

  @property({
    type: 'number',
    required: true,
  })
  companyVacancyId: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

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

  constructor(data?: Partial<UserAppliedJobs>) {
    super(data);
  }
}

export interface UserAppliedJobsRelations {
  // describe navigational properties here
}

export type UserAppliedJobsWithRelations = UserAppliedJobs &
  UserAppliedJobsRelations;
