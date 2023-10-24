import {Model, model, property} from '@loopback/repository';

@model({
  settings: {strict: false},
  mysql: {
    //type of the connector, NOT datasource name
    table: 'skills', //table name you want to map to
  },
})
export class Skills extends Model {
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

  constructor(data?: Partial<Skills>) {
    super(data);
  }
}

export interface SkillsRelations {
  // describe navigational properties here
}

export type SkillsWithRelations = Skills & SkillsRelations;
