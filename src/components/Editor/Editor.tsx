import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNightStorm } from '@uiw/codemirror-theme-tokyo-night-storm';

const Editor = (props: { height: any }) => {
  const { height: value } = props;
  console.log(value);
  return (
    <>
      <CodeMirror
        basicSetup={{}}
        value="console.log('hello world!');"
        maxHeight={`${value}px`}
        height="100%"
        theme={tokyoNightStorm}
        extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
      />
    </>
  );
};
export default Editor;
