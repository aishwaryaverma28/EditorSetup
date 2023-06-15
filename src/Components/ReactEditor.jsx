import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from "./Styles/BlogAdd.module.css";

function ReactEditor({ onDataTransfer }) {
  const [value, setValue] = useState('');
  
  const handleQuillChange = (value) => {
    setValue(value);
    onDataTransfer(value); 
    // console.log("react edit",value);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ align: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
      // Add additional tools here
      ['color', 'background'],
      ['blockquote'],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      ['video'],
    ],
  };

  return <ReactQuill theme="snow" value={value} onChange={handleQuillChange} modules={modules} className={styles.quillEditor}/>;
}

export default ReactEditor;
