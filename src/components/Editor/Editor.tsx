import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNightStorm } from '@uiw/codemirror-theme-tokyo-night-storm';
import { windowInnerHeight } from '../../utils/window';
import { useEffect, useState } from 'react';

const Editor = (props: { height: any; openAdditionalEditor: boolean }) => {
  const { height: value } = props;
  const { openAdditionalEditor: h } = props;

  const [hight1, setHeight] = useState(Number(windowInnerHeight) / 2 - 160);

  useEffect(() => {
    !h ? setHeight(windowInnerHeight - 400) : setHeight(windowInnerHeight / 2 - 180);
    console.log(hight1);
  }, [hight1, h]);

  return (
    <>
      <CodeMirror
        basicSetup={{}}
        value="console.log('hello world!');"
        // maxHeight={`${value}px`}
        height={`${hight1}px`}
        theme={tokyoNightStorm}
        extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
      />
    </>
  );
};
export default Editor;
