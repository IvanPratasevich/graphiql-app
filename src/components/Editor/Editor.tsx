import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { json, jsonLanguage } from '@codemirror/lang-json';
import { tokyoNightStorm } from '@uiw/codemirror-theme-tokyo-night-storm';
import { RefObject, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hook/redux';
import { editorSlice } from '../../toolkitRedux/editorSlice';
import request from 'graphql-request';

const Editor = (props: {
  openAdditionalEditor: boolean;
  parentContainerRef: RefObject<HTMLDivElement>;
  purpose: string;
}) => {
  const { headers, main, variables, makeRequest } = useAppSelector((state) => state.editorSlice);
  const { changeMakeRequest, changeMainQuery, changeHeadersQuery, changeVariablesQuery } =
    editorSlice.actions;
  const dispatch = useAppDispatch();

  const [code, setCode] = useState('');

  useEffect(() => {
    console.log(code);
  }, [code]);

  const { openAdditionalEditor, parentContainerRef, purpose } = props;

  const [heightValue, setHeight] = useState<number>();
  console.log(variables.query);

  useEffect(() => {
    console.log(variables);
    if (variables.query) {
      console.log(JSON.parse(variables.query));
    }

    // async function getData() {
    //   await request(
    //     'https://rickandmortyapi.com/graphql',
    //     main.query,
    //     JSON.parse(variables.query),
    //     headers.query
    //   );
    //   const data = await request('https://rickandmortyapi.com/graphql', main.query);
    //   console.log(data);
    // }
    // getData();
  }, [headers, main, makeRequest, variables]);

  useEffect(() => {
    switch (purpose) {
      case 'request':
        dispatch(changeMainQuery(code));
        break;
      case 'headers':
        dispatch(changeHeadersQuery(code));
        break;

      case 'variables':
        dispatch(changeVariablesQuery(code));
        break;

      default:
        break;
    }
  }, [changeHeadersQuery, changeMainQuery, changeVariablesQuery, code, dispatch, purpose]);

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
            basicSetup={{}}
            onChange={(value) => setCode(value)}
            value="console.log('hello world!');"
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
            onChange={(value) => setCode(value)}
            value={variables.query}
            maxHeight={`${heightValue! - 20}px`}
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
            onChange={(value) => setCode(value)}
            value={variables.query}
            maxHeight={`${heightValue! - 20}px`}
            height={'100%'}
            theme={tokyoNightStorm}
            extensions={[json(), EditorView.lineWrapping]}
          />
        </>
      );

    default:
      return (
        <>
          <CodeMirror
            basicSetup={{}}
            onChange={(value) => setCode(value)}
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
