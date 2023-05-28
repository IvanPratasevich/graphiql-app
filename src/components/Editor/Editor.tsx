import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { json, jsonLanguage } from '@codemirror/lang-json';
import { tokyoNightStorm } from '@uiw/codemirror-theme-tokyo-night-storm';
import { RefObject, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { editorSlice } from '../../toolkitRedux/editorSlice';
import request, { gql } from 'graphql-request';
import { Flex, Loader } from '@mantine/core';
import isJSON from '@stdlib/assert-is-json';

const Editor = (props: {
  openAdditionalEditor: boolean;
  parentContainerRef: RefObject<HTMLDivElement>;
  purpose: string;
}) => {
  const { headers, main, variables, makeRequest, response } = useAppSelector(
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

  const [heightValue, setHeight] = useState<number>();

  useEffect(() => {
    if (makeRequest) {
      async function getData() {
        try {
          const parseJSON = (str: string, errName: string) => {
            if (str.split('').every((symbol) => symbol === ' ')) {
              return '';
            }

            try {
              if (!isJSON(str)) {
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

          console.log(headersJson);

          console.log(variablesJson, headersJson);

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

          const data = await response.json();

          dispatch(changeResponse(JSON.stringify(data, null, '\t')));
          dispatch(changeMakeRequest(false));
        } catch (err) {
          console.log(err);
          dispatch(changeMakeRequest(false));

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
  }, [changeMakeRequest, changeResponse, dispatch, headers, main, makeRequest, variables]);

  useEffect(() => {
    if (openAdditionalEditor || openAdditionalEditor) {
      setHeight(parentContainerRef!.current!.clientHeight);
    }

    window.addEventListener('resize', () => {
      setHeight(parentContainerRef!.current!.clientHeight);
    });

    setHeight(parentContainerRef!.current!.clientHeight);
  }, [parentContainerRef, openAdditionalEditor, heightValue]);

  switch (purpose) {
    case 'request':
      return (
        <>
          <CodeMirror
            onError={() => console.log('error')}
            basicSetup={{}}
            onChange={(code) => dispatch(changeMainQuery(code))}
            value={main.query}
            maxHeight={`${heightValue! - 20}px`}
            height={'100%'}
            theme={tokyoNightStorm}
            extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
          />
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
          <CodeMirror
            basicSetup={{}}
            onChange={(code) => dispatch(changeVariablesQuery(code))}
            value={variables.query}
            maxHeight={`${heightValue! - 60}px`}
            height={'100%'}
            theme={tokyoNightStorm}
            extensions={[json(), EditorView.lineWrapping]}
          />
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
            maxHeight={`${heightValue! - 165}px`}
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
            value="console.log('hello world!');"
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
