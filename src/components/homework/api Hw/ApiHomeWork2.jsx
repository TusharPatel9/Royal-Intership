import axios from "axios";
import React, { useState } from "react";

function ApiHomeWork2() {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const apiCall = async () => {
    const res = await axios.get("https://dummyjson.com/comments?limit=5");
    const data = res.data.comments;
    setComments(data);
    setLoading(false);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Api Homework 2</h2>
      <button onClick={() => apiCall()}>GET</button>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="table table-primary">
          <thead>
            <tr>
              <th>Comment</th>
              <th>likes</th>
              <th>postID</th>
              <th>userName</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.body}</td>
                <td>{comment.likes}</td>
                <td>{comment.postId}</td>
                <td>{comment.user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApiHomeWork2;
