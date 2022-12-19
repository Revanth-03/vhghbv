import { firestore } from "../firebase";
import useSetValue from "../hoooks";

function CreatePost() {
  const title = useSetValue("");
  const subtitle = useSetValue("");
  const comment = useSetValue("");

  function handleSublmit(e) {
    e.preventDefault();
    console.log("title", title.value);
    console.log("subtitle", subtitle.value);
    console.log("comment", comment.value);

    firestore.collection("Post").add({
      title: title.value,
      subtitle: subtitle.value,
      comment: comment.value,
      createdAt: new Date()
    });
  }

  return (
    <div className="CreatePost">
      <h1 style={{ textAlign: "center" }}>CreatePost</h1>
      <form onSubmit={handleSublmit}>
        <div className="form-field">
          <label>Title</label> <br />
          <input {...title} />
        </div>
        <div className="form-field">
          <label>SubTitle</label> <br />
          <input {...subtitle} />
        </div>
        <div className="form-field">
          <label>Comment</label> <br />
          <textarea {...comment} />
        </div>
        <button
          style={{
            background: "green",
            color: "white",
            fontSize: "20px",
            marginLeft: "10px",
            borderRadius: "5px"
          }}
        >
          CreatePost
        </button>
      </form>
    </div>
  );
}
export default CreatePost;
