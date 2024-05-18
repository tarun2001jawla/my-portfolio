import React, { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const CodeEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editorRef.current) {
      const quillEditor = new Quill(editorRef.current, {
        modules: {
          syntax: true,
          toolbar: '#toolbar',
        },
        placeholder: 'Type your code here...',
        theme: 'snow',
      });

      return () => {
        quillEditor.off("he");
      };
    }
  }, []);

  return (
    <div>
      <div id="toolbar">
        <button className="ql-bold">Bold</button>
        <button className="ql-italic">Italic</button>
        {/* Add more toolbar buttons as needed */}
      </div>
      <div ref={editorRef} style={{ height: '500px' }} />
    </div>
  );
};

export default CodeEditor;