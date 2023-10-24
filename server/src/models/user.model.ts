import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {strict: false},
  mysql: {
    //type of the connector, NOT datasource name
    table: 'user', //table name you want to map to
  },
})
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  mobileNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'boolean',
    required: true,
  })
  mobileVerified: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  emailVerified: boolean;

  @property({
    type: 'number',
    required: true,
  })
  failedLoginCount: number;

  @property({
    type: 'number',
    required: true,
  })
  loginCount: number;

  @property({
    type: 'string',
    required: true,
  })
  lastLogin: string;

  @property({
    type: 'string',
  })
  resume?: string;

  @property({
    type: 'string',
    required: true,
  })
  experience: string;

  @property({
    type: 'string',
    required: true,
  })
  currentCtc: string;

  @property({
    type: 'string',
    required: true,
  })
  expectedCtc: string;

  @property({
    type: 'string',
    default: '',
  })
  currentDesignation?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  professionalHiringStatus: boolean;

  @property({
    type: 'number',
    required: true,
  })
  companyId: number;

  @property({
    type: 'string',
  })
  appraisalDueOn?: string;

  @property({
    type: 'string',
  })
  profileSummary?: string;

  @property({
    type: 'date',
    required: true,
  })
  createdAt: string;

  @property({
    type: 'date',
    required: true,
  })
  updatedAt: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
