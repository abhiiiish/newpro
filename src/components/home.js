import React, { useState } from 'react';
import './home.module.css';

function Home() {
  const [showContent, setShowContent] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [post, setPost] = useState('');
  const [imageURL, setImageURL] = useState('');

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const handleGeneratePost = () => {
    setCaption(userInput);
    setHashtags(`#${userInput.split(' ').join(' #')}`);
    setPost(`Check out my new post: ${userInput}`);
    // Set imageURL here if needed
  };

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
  };

  // Replace this with your image download logic
  const handleDownloadImage = () => {
    // Download logic here
  };

  return (
    <div className={`home ${showContent ? 'show' : 'hide'}`}>
      <h2>Generate Post</h2>
      <p>You can start writing your ideas here...</p>

      <div className="toggle-section">
        <input
          type="text"
          placeholder="Enter something"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button onClick={handleGeneratePost}>
          Generate Post
        </button>
      </div>
      
      <div className="preview-section">
        <section>
          <h3>Caption:</h3>
          <p>{caption}</p>
          <button onClick={() => handleCopyText(caption)}>
            Copy Caption
          </button>
        </section>
        
        <section>
          <h3>Hashtags:</h3>
          <p>{hashtags}</p>
          <button onClick={() => handleCopyText(hashtags)}>
            Copy Hashtags
          </button>
        </section>
        
        <section>
          <h3>Post:</h3>
          <p>{post}</p>
          <button onClick={() => handleCopyText(post)}>
            Copy Post
          </button>
        </section>
        
        <section>
          <h3>Image:</h3>
          <img className="image-preview" src={imageURL} alt="Preview" />
          <button onClick={handleDownloadImage}>
            Download Image
          </button>
        </section>
        
        {/* Social Media Post Box */}
        <section className="social-media-post">
          <div className="post-image">
            <img src={imageURL} alt="Post" />
          </div>
          <div className="post-content">
            <p className="post-caption">{caption}</p>
            <p className="post-hashtags">{hashtags}</p>
            <p className="post-text">{post}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
