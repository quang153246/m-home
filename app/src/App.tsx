import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

function App() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

export default App;
