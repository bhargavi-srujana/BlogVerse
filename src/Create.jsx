import React from 'react'

const Create = () => {
  return (
    <div>
      <div>
        <h1>Create Posts</h1>
        <p>Share your thoughts in blogverse community</p>
        <div>
            <button>Write</button>
            <button>Preview</button>
        </div>
      </div>
      <div>
        <div>
            <div>
                <p>Post Title</p>
                <input type="text" placeholder='Write a compelling title that grabs attention' />
            </div>
            <div>
                <p>Content</p>
                <textarea name="" id="" placeholder='Tell your story... What;s on your mind? Share your thoughts, experiences, or insights with the community'></textarea>
            </div>
            <div>
                <p>Featured Image</p>
                <input type="image" />
            </div>
            <div>
                <button>Save Draft</button>
                <button>Publish Post</button>
            </div>
        </div>
      </div>
      <div>
        <h1>Post Settings</h1>
        <div>
            <p>Category</p>
            <input type="" />
        </div>
      </div>
    </div>
  )
}

export default Create
