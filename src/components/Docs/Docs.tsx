import { IntrospectionSchema, IntrospectionType } from 'graphql';
import style from './docs.module.scss';
import { Schema } from '../../type/schemas';
import { Dispatch, SetStateAction } from 'react';

export enum TypeSchemaEnum {
  'OBJECT' = 'OBJECT',
  'SCALAR' = 'SCALAR',
  'INTERFACE' = 'INTERFACE',
  'ENUM' = 'ENUM',
}

const Docs = (props: {
  schemas: IntrospectionSchema | null;
  currentSchema: Schema;
  previousSchema: string[];
  setPreviousSchema: (arg0: string[]) => void;
  setCurrentSchema: Dispatch<SetStateAction<Schema | IntrospectionType | null>>;
}) => {
  const { schemas, currentSchema, previousSchema, setCurrentSchema, setPreviousSchema } = props;
  const isScalarType = TypeSchemaEnum.SCALAR === currentSchema?.kind;
  const previous = previousSchema[previousSchema.length - 1];
  const goBack = (): void => {
    const newSchema = schemas?.types.find((type) => {
      return type.name === previous;
    });
    setCurrentSchema(newSchema || null);
    previousSchema.pop();
    setPreviousSchema([...previousSchema]);
  };

  const handleClick = (name: string | null): void => {
    const newSchema = schemas?.types.find((type) => {
      return type.name === name;
    });
    previousSchema.push(currentSchema.name);
    setCurrentSchema(newSchema || null);
    setPreviousSchema([...previousSchema]);
  };
  return (
    <div className={style.docs}>
      <div
        style={{
          color: 'red',
          cursor: 'pointer',
        }}
        onClick={() => goBack()}
      >
        to {previous}
      </div>
      {isScalarType && <div>{currentSchema.description}</div>}
      {!isScalarType && (
        <div>
          <div>{currentSchema.name}</div>
          <div>{currentSchema.description}</div>
          {currentSchema.fields?.length && (
            <div>
              <div>fields</div>
              {currentSchema?.fields.map((field, idx) => (
                <div key={field.name + idx}>
                  <div style={{ display: 'flex' }}>
                    <div>{field.name}:</div>
                    <div
                      style={{ color: 'yellow', cursor: 'pointer' }}
                      onClick={() => handleClick(field.type?.ofType?.name || field?.type.name)}
                    >
                      {field.type?.ofType?.name || field.type.name}
                    </div>
                  </div>
                  <div>{field.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Docs;
