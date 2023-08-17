import createEditor from "./editor";
import background from "./better.png";
import "./global.css";

const editor = createEditor();
document.body.appendChild(editor);

const img = new Image();
img.src = background;
document.body.appendChild(img);

if (module.hot) {
  let lastEditor = editor;
  module.hot.accept("./editor", () => {
    const editorContent = lastEditor.innerHTML;
    document.body.removeChild(lastEditor);
    const newEditor = createEditor();
    newEditor.innerHTML = editorContent;
    document.body.appendChild(newEditor);
    lastEditor = newEditor;
    //   console.log("editor module hot accept");
  });

  module.hot.accept("./better.png", () => {
    img.src = background;
    //   console.log("img module hot accept");
  });
}
