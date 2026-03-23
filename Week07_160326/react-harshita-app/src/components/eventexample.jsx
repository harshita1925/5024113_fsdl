import { useState } from "react";

function EventExample() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div>
      <h2>Product Feedback</h2>

      <button onClick={() => setLikes(likes + 1)}>
        👍 Likes: {likes}
      </button>

      <button onClick={() => setDislikes(dislikes + 1)}>
        👎 Dislikes: {dislikes}
      </button>
    </div>
  );
}

export default EventExample;