import { TypeSchemaEnum } from '../components/Docs/Docs';

export interface GraphQL {
  data: Data;
}

export interface Data {
  __schema: Schema;
}

export interface Schema {
  description: null | string;
  fields: Field[] | null;
  name: string;
  kind: TypeSchemaEnum;
  queryType: QueryType;
  mutationType: null;
  subscriptionType: null;
  types: TypeElement[];
  directives: Directive[];
  field: Field;
}

export interface Directive {
  name: string;
  description: string;
  locations: string[];
  args: Arg[];
}

export interface Arg {
  name: string;
  description: null | string;
  type: OfTypeClass;
  defaultValue: null | string;
}

export interface OfTypeClass {
  kind: Kind;
  name: null | string;
  ofType: OfTypeClass;
}

export enum Kind {
  Enum = 'ENUM',
  InputObject = 'INPUT_OBJECT',
  List = 'LIST',
  NonNull = 'NON_NULL',
  Object = 'OBJECT',
  Scalar = 'SCALAR',
}

export interface QueryType {
  name: string;
}

export interface TypeElement {
  kind: Kind;
  name: string;
  description: string;
  fields: Field[] | null;
  inputFields: Arg[] | null;
  interfaces: string[] | null;
  enumValues: EnumValue[] | null;
  possibleTypes: null;
}

export interface EnumValue {
  name: string;
  description: string;
  isDeprecated: boolean;
  deprecationReason: null;
}

export interface Field {
  name: string;
  description: string;
  args: Arg[];
  type: OfTypeClass;
  isDeprecated: boolean;
  deprecationReason: null;
}
