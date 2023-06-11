import React from 'react';
import styles from './Styles/BlogAdd.module.css'
import './Styles/Editor.css'
import ImageUploader from './ImageUploader';

const BlogAdd = () => {
 
  return (
    <>
      <header className='headerEditor'>
        <h2> Add a new Blog</h2>
      </header>
      <div className={styles.addBlogContainer}>
        <div className={styles.addBlogMainForm}>
        <form>
          <div className={styles.fromFiled}>
            <input  type="text" name="blogtitle" id="blogtitle" placeholder="Blog Title"/>
          </div>
          <div className={styles.fromFiled}>
            <input type="text" name="url" id="url" placeholder="Url"/>
          </div>
          <div className={styles.fromFiled}>
            <input type="text" name="description" id="description" placeholder="Description"/>
          </div>
          <ImageUploader buttonTitle="Add Image"/>
          <div className={styles.fromFiled}>
            <input type="text" name="sectiontitle" id="sectiontitle" placeholder="Section Title"/>
            <ImageUploader buttonTitle="Add Blog Section Image"/>
          </div>
        </form>

        </div>
        <div className={styles.addBlogRightForm}>
          
        </div>
      </div>
    </>
  )
}

export default BlogAdd
