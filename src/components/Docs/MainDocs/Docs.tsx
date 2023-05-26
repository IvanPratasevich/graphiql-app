import { IntrospectionSchema, IntrospectionType } from 'graphql';
import style from './docs.module.scss';
import { Schema } from '../../../type/schemas';
import { Dispatch, SetStateAction } from 'react';
const MainDocs = (props: {
  schemas: IntrospectionSchema | null;
  previousSchema: string[];
  setPreviousSchema: (arg0: string[]) => void;
  setCurrentSchema: Dispatch<SetStateAction<Schema | IntrospectionType | null>>;
}) => {
  const { schemas, setCurrentSchema, setPreviousSchema } = props;
  const handleClick = (type: IntrospectionType): void => {
    if (type) {
      setCurrentSchema(type);
      setPreviousSchema(['DOCS']);
    } else {
      setPreviousSchema([]);
      setCurrentSchema(null);
    }
  };
  return (
    <div className={style.docs}>
      <div> Docs</div>
      <div> A GraphQL schema provides a root type for each kind of operation.</div>
      <div>Root Types</div>
      <div>query: {schemas?.queryType.name}</div>
      <div>All Schema Types</div>
      {schemas &&
        schemas.types.map((type, idx) => (
          <div
            style={{
              color: 'yellow',
              cursor: 'pointer',
            }}
            onClick={() => handleClick(type)}
            key={type.name + idx}
          >
            {type.name}
          </div>
        ))}
    </div>
  );
};
export default MainDocs;
