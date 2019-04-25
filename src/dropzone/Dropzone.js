import React, { Component } from 'react'
import './Dropzone.css'

class Dropzone extends Component {
    constructor(props) {
        super(props)
        this.state = { hightlight: false };
        this.fileInputRef = React.createRef();
        this.openFileDialog = this.openFileDialog.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.onDragLeave = this.onDragLeave.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    openFileDialog() {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }

    fileListToArray(list) {
        const array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    }

    onFilesAdded(event) {
        if (this.props.disabled) return;
        const files = event.target.files;
        if (this.props.onFilesAdded) {
          const array = this.fileListToArray(files);
          this.props.onFilesAdded(array);
        }
    }

    onDragOver(event) {
        event.preventDefault();
        if (this.props.disabled) return;
        this.setState({ hightlight: true });
    }

    onDragLeave() {
        this.setState({ hightlight: false });
    }

    onDrop(event) {
        event.preventDefault();
        if (this.props.disabled) return;
        const files = event.dataTransfer.files;
        if (this.props.onFilesAdded) {
          const array = this.fileListToArray(files);
          this.props.onFilesAdded(array);
        }
        this.setState({ hightlight: false });
    }

    render() {
        return (
            <div 
              className={`Dropzone ${this.state.hightlight ? "Highlight" : ""}`}
              onDragOver={this.onDragOver}
              onDragLeave={this.onDragLeave}
              onDrop={this.onDrop}
              onClick={this.openFileDialog}
              style={{ cursor: this.props.disabled ? "default" : "pointer" }}
            >
                <img
                    alt="upload"
                    className="Icon"
                    src="baseline-cloud_upload-24px.svg"
                />
            <input
                ref={this.fileInputRef}
                className="FileInput"
                type="file"
                multiple
                onChange={this.onFilesAdded}
            />
                <span>Upload Files</span>
            </div>
        )
    }
}