import Navbar from '../../components/Navbar/Navbar';
import "./CodeEditor.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import Sidebar from '../../components/sidebar/SidebarFile';
import { useState } from 'react';
import axios from 'axios';

const CodeEditor = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [showInputData, setShowInputData] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');

  const handleRunClick = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("LanguageChoice", "5");
    encodedParams.append("Program", inputValue);
  
    // Check if the input value contains valid Python code
    const isPythonCode = /^[ \t]*(def|class|if|for|while|try|with|@|[a-zA-Z0-9_]+)[ \t]*(\n|[:\(,])/m.test(inputValue);
    if (!isPythonCode) {
      // If the input value does not contain valid Python code, show an error message
      setOutputValue("Invalid Python code. Please enter valid Python code.");
      return;
    }
  
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
      console.log(response);
      setOutputValue(output);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleSaveClick = async () => {
    setShowInputData(true);
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

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionValue(event.target.value);
  };

  const handleSaveDataClick = async () => {
    const token = localStorage.getItem('token');
    const data = {
      title: titleValue || '', 
      text: inputValue,
      description: descriptionValue || ''
    };

    try {
      const headers = {
        'Authorization': `Bearer ${token}`
      };

      const response = await axios.post('http://localhost:8000/api/save-code', data, { headers });

      console.log(response.data);
      alert('Code saved successfully!');
    } catch (error) {
      console.error(error);
      alert('Error saving code. Please try again later.');
    }

    setShowInputData(false);
  };
  return (
    <div>
      <Navbar />
      <div className='code-editor-page'>
        <div className="code-editor-container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="in-out-container">
            <div className='input-container'>
              <div className='input-header'>
                <div>
                  <FontAwesomeIcon icon={faPython} />
                  <span className='input-header-title'>App.py</span>
                </div>
                <div className='input-header-buttons'>
                  <button className='run' onClick={handleRunClick}>Run</button>
                  <button className='save' onClick={handleSaveClick}>Save</button>
                  <button className='download' onClick={handleDownloadClick}>Download</button>
                </div>
              </div>
              <textarea className='input-textarea' value={inputValue} onChange={handleInputChange} />
            </div>
            <div className='output-container'>
              <div className='output-tabs output-tabs-horizontal'>
                <div className='output-tab'>console</div>
                <div className='output-tab'>output</div>
                <div className='output-tab'>problems</div>
              </div>
              <textarea className='output-textarea' defaultValue={outputValue}></textarea>
            </div>
          </div>
        </div>
        {showInputData && (
          <div className='save-data-container'>
            <div className='save-data-content'>
              <div className='save-data-header'>
                <h2>Save Input Data</h2>
                <button className='close-button' onClick={() => setShowInputData(false)}>Close</button>
              </div>
              <div className='save-data-form'>
                <div className='save-data-input'>
                  <label htmlFor='title-input'>Title:</label>
                  <input type='text' id='title-input' value={titleValue} onChange={handleTitleChange} />
                </div>
                <div className='save-data-input'>
                  <label htmlFor='description-input'>Description:</label>
                  <textarea id='description-input' value={descriptionValue} onChange={handleDescriptionChange} />
                </div>
                <button className='save-button' onClick={handleSaveDataClick}>Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
}

export default CodeEditor;
