import "./editor.css";

export default () => {
  const editorElement = document.createElement("div");

  editorElement.contentEditable = true;
  editorElement.className = "editor";

  console.log("editor init completed 11111");

  //   alert("Hello World!")

  return editorElement;
};
