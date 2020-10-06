import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    const [upLoadedFile, setUploadedFile] = useState({});

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { fileName, filePath} = res.data;
            setUploadedFile({ fileName, filePath});

        } catch (err) {
            if(err.response.status === 500){
                console.log("problem with server");
            }
            else{
                console.log(err.response.data.msg);
            }
        }
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div>
                    <input onChange={onChange} type="file" name="customFile" id=""/>
                    <label htmlFor="customFile">{filename}</label>
                </div>
                <input type="submit" value="Upload"/>
            </form>
        </Fragment>
    );
};

export default FileUpload;