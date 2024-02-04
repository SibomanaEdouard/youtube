import { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="flex justify-center flex-row h-[calc(100%-56px)] bg-white dark:bg-black">
    <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
      <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
        <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a public comment..."
        />
        <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
          Comment
        </button>
      </form>
      <ul>
        {comments.map((comment, index) => (
         <li key={index} className="border-md border-gray-800 p-5">
            <div className="font-bold text-white">User Name</div>
            <div className='text-white font-serif font-2px'>{comment}</div>
            <div className="text-sm text-gray-500">1 minute ago</div>
            <div className="flex items-center space-x-2 mt-2">
              <button className="text-blue-500">Like</button>
              <button className="text-blue-500">Reply</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </div>
  
  );
};

export default CommentSection;