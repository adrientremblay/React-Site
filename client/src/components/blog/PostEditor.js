import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import styled from "styled-components";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";

const Container = styled.div`
  background-color: white;
  color: black;

  a {
    color: black;
  }
`;

export default class PostEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
    title: "",
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  submitPostHandler = () => {
    axios
      .post("/api/posts/add", {
        username: "adrientremblay",
        title: this.state.title,
        description: JSON.stringify(
          convertToRaw(this.state.editorState.getCurrentContent())
        ),
        date: new Date(),
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Container>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <hr />
        <label>Title</label>
        <br />
        <input
          onChange={(e) => {
            this.setState({ title: e.target.value });
          }}
        ></input>
        <button onClick={this.submitPostHandler}>Submit</button>
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </Container>
    );
  }
}
