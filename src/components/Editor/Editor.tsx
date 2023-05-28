import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { tokyoNightStorm } from '@uiw/codemirror-theme-tokyo-night-storm';
import { RefObject, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { editorSlice } from '../../toolkitRedux/editorSlice';
import { gql } from 'graphql-request';
import { Modal } from '@mantine/core';
import isJSON from '@stdlib/assert-is-json';
import { useDisclosure } from '@mantine/hooks';
import { Text } from '@mantine/core';
import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';

const Editor = (props: {
  openAdditionalEditor: boolean;
  parentContainerRef: RefObject<HTMLDivElement>;
  purpose: string;
}) => {
  const { graphQLSchema, headers, main, variables, makeRequest, response } = useAppSelector(
    (state) => state.editorSlice
  );
  const {
    changeMainQuery,
    changeHeadersQuery,
    changeVariablesQuery,
    changeResponse,
    changeMakeRequest,
  } = editorSlice.actions;
  const dispatch = useAppDispatch();

  const { openAdditionalEditor, parentContainerRef, purpose } = props;

  const [opened, { open, close }] = useDisclosure(false);

  const [heightValue, setHeight] = useState<number>();

  useEffect(() => {
    if (makeRequest) {
      async function getData() {
        try {
          const parseJSON = (str: string, errName: string) => {
            try {
              if (str.trim().length === 0) {
                return '';
              }

              if (!isJSON(str.trim())) {
                throw new Error(errName);
              }

              return JSON.parse(str);
            } catch {
              throw new Error(errName);
            }
          };

          const variablesJson = parseJSON(
            variables.query,
            'Check the correctness of the entered data in the Variables section (the data must be in JSON format)'
          );

          const headersJson = parseJSON(
            headers.query,
            'Check the correctness of the entered data in the Headers section'
          );

          const document = gql`
            ${main.query}
          `;

          const response = await fetch('https://rickandmortyapi.com/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              ...headersJson,
            },
            body: JSON.stringify({
              query: document,
              variables: variablesJson,
            }),
          });

          if (!response.ok && response.status !== 400) {
            throw new Error('API error');
          }

          const data = await response.json();
          dispatch(changeResponse(JSON.stringify(data, null, '\t')));
          dispatch(changeMakeRequest(false));
        } catch (err) {
          dispatch(changeMakeRequest(false));

          if ((err as Error).message.includes('API error')) {
            open();
            return;
          }

          if ((err as Error).message.includes('Check the correctness of the entered data')) {
            dispatch(changeResponse((err as Error).message));
            return;
          }

          const errJson = (err as Error).message.slice((err as Error).message.indexOf(`{`));
          dispatch(changeResponse(JSON.stringify(JSON.parse(errJson), null, '\t')));
        }
      }
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [makeRequest]);

  useEffect(() => {
    if (parentContainerRef) {
      setHeight(parentContainerRef!.current!.clientHeight);
    }

    const handleResize = () => {
      if (parentContainerRef) {
        setHeight(parentContainerRef!.current!.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openAdditionalEditor]);

  switch (purpose) {
    case 'request':
      return (
        <>
          {graphQLSchema ? (
            <CodeMirror
              basicSetup={{}}
              onChange={(code) => dispatch(changeMainQuery(code))}
              value={main.query}
              maxHeight={`${heightValue! - 20}px`}
              height={'100%'}
              theme={tokyoNightStorm}
              extensions={[EditorView.lineWrapping, graphql(graphQLSchema as GraphQLSchema)]}
            />
          ) : (
            <CodeMirror
              basicSetup={{}}
              onChange={(code) => dispatch(changeMainQuery(code))}
              value={main.query}
              maxHeight={`${heightValue! - 20}px`}
              height={'100%'}
              theme={tokyoNightStorm}
              extensions={[EditorView.lineWrapping]}
            />
          )}
        </>
      );

    case 'headers':
      return (
        <>
          <CodeMirror
            basicSetup={{}}
            onChange={(code) => dispatch(changeHeadersQuery(code))}
            value={headers.query}
            maxHeight={`${heightValue! - 60}px`}
            height={'100%'}
            theme={tokyoNightStorm}
            extensions={[json(), EditorView.lineWrapping]}
          />
        </>
      );

    case 'variables':
      return (
        <>
          <>
            <CodeMirror
              basicSetup={{}}
              onChange={(code) => dispatch(changeVariablesQuery(code))}
              value={variables.query}
              maxHeight={`${heightValue! - 60}px`}
              height={'100%'}
              theme={tokyoNightStorm}
              extensions={[json(), EditorView.lineWrapping]}
            />
            <Modal opened={opened} onClose={close} size="md" title="API Error" centered>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 50,
                }}
              >
                <div className="apiError" style={{ color: 'red' }}>
                  <Text fz="lg" fw={700}>
                    {'Error from the API Side!'}
                  </Text>
                </div>
              </div>
            </Modal>
          </>
        </>
      );

    case 'response':
      return (
        <>
          <CodeMirror
            basicSetup={{
              lineNumbers: false,
            }}
            onChange={(code) => dispatch(changeVariablesQuery(code))}
            value={response.query}
            maxHeight={`445px`}
            height={'100%'}
            theme={tokyoNightStorm}
            extensions={[json(), EditorView.lineWrapping]}
            readOnly
          />
        </>
      );

    default:
      return (
        <>
          <CodeMirror
            basicSetup={{}}
            value="let a = 5;"
            maxHeight={`${heightValue! - 20}px`}
            height={'100%'}
            theme={tokyoNightStorm}
            extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
          />
        </>
      );
  }
};
export default Editor;
