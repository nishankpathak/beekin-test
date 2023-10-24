import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {strict: false},
  mysql: {
    //type of the connector, NOT datasource name
    table: 'userCompany', //table name you want to map to
  },
})
export class UserCompany extends Entity {
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
    type: 'number',
    required: true,
  })
  userId: number;

  @property({
    type: 'number',
    default: 0,
  })
  designationId?: number;

  @property({
    type: 'string',
    default: '',
  })
  salary?: string;

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

  constructor(data?: Partial<UserCompany>) {
    super(data);
  }
}

export interface UserCompanyRelations {
  // describe navigational properties here
}

export type UserCompanyWithRelations = UserCompany & UserCompanyRelations;
