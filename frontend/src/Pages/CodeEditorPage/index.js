import Navbar from '../../components/Navbar/Navbar';
import "./CodeEditor.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import  Sidebar  from '../../components/sidebar/SidebarFile';
import { useState } from 'react';
import axios from 'axios';


const CodeEditor = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleRunClick = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("LanguageChoice", "5");
    encodedParams.append("Program", inputValue);

    const options = {
      method: 'POST',
      url: 'https://code-compiler.p.rapidapi.com/v2',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'cbdc674ff1msh892f29bf6a57b00p184d9ejsn36e5f91cc1ff',
        'X-RapidAPI-Host': 'code-compiler.p.rapidapi.com'
      },
      data: encodedParams
    };

    try {
      const response = await axios.post('https://code-compiler.p.rapidapi.com/v2', encodedParams, options);
      const output = response.data.Result;
      console.log(response)
      setOutputValue(output);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleSaveClick = async () => {
    const data = {
      title: 'python', // set your code file title here
      text: inputValue,
      description: 'clean code' // add description if needed
    };

    try {
      const response = await axios.post('http://localhost:8000/api/save-code', data);
      console.log(response.data);
      alert('Code saved successfully!');
    } catch (error) {
      console.error(error);
      alert('Error saving code. Please try again later.');
    }
  };
  const handleDownloadClick = () => {
    const blob = new Blob([inputValue], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'code.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Navbar/>
      <div className="code-editor-container">
        <div className="sidebar">
          <Sidebar/>
        </div>
        <div className="in-out-container">
          <div className='input-container'>
            <div className='input-header' >
              <div>
                <FontAwesomeIcon icon={faPython} />
                <span className='sidebar_file-name' >App.py</span>  
              </div>
              <div>
                <button className='run' onClick={handleRunClick}>
                  Run
                </button>
                <button className='save' onClick={handleSaveClick}>
                  Save
                </button>
                <button className='download' onClick={handleDownloadClick}>
                  Download
                </button>
              </div>
            </div>
            <textarea className='input-textarea' value={inputValue} onChange={handleInputChange}></textarea>
          </div>
          <div className='output-container'>
            <div className='output-tabs output-tabs-horizontal'>
              <div className='output-tab'>console</div>
              <div className='output-tab'>output</div>
              <div className='output-tab'>problems</div>
            </div>
            <textarea className='output-textarea' defaultValue={outputValue} ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeEditor;
