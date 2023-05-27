import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNightStorm } from '@uiw/codemirror-theme-tokyo-night-storm';
import { RefObject, useEffect, useRef, useState } from 'react';

const Editor = (props: {
  openAdditionalEditor: boolean;
  parentContainerRef: RefObject<HTMLDivElement>;
}) => {
  const { openAdditionalEditor, parentContainerRef } = props;

  const [heightValue, setHeight] = useState<number>();

  useEffect(() => {
    if (openAdditionalEditor || openAdditionalEditor) {
      setHeight(parentContainerRef!.current!.clientHeight);
      console.log(heightValue);
    }

    window.addEventListener('resize', () => {
      setHeight(parentContainerRef!.current!.clientHeight);
      console.log(heightValue);
    });

    setHeight(parentContainerRef!.current!.clientHeight);
    console.log(heightValue);
  }, [parentContainerRef, openAdditionalEditor, heightValue]);

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
};
export default Editor;
