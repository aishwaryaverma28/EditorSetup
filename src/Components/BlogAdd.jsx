import React from "react";
import styles from "./Styles/BlogAdd.module.css";
import "./Styles/Editor.css";
import ImageUploader from "./ImageUploader";
import ReactEditor from './ReactEditor'


const BlogAdd = () => {
  function AddSection(event) {
    event.preventDefault();
  }

  return (
    <>
      <header className="headerEditor">
        <h2> Add a new Blog</h2>
      </header>
      <form>
        <div className={styles.addBlogContainer}>
          {/*==============================================================right side of form starts here ============================================================*/}
          <div className={styles.addBlogMainForm}>
            <div className={styles.fromFiled}>
              <input
                type="text"
                name="blogtitle"
                id="blogtitle"
                placeholder="Blog Title"
              />
            </div>
            <div className={styles.fromFiled}>
              <input type="text" name="url" id="url" placeholder="Url" />
            </div>
            <div className={styles.fromFiled}>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
              />
            </div>
            <ImageUploader buttonTitle="Add Image" />
            <div className={styles.fromBlogSection}>
              <input
                type="text"
                name="sectiontitle"
                id="sectiontitle"
                placeholder="Section Title"
              />
              <ImageUploader buttonTitle="Add Blog Section Image" />
              <button onClick={AddSection} className={styles.addSectionBtn}>
                Add Section
              </button>
            </div>
          </div>
          {/*==============================================================right side of form end here ============================================================*/}
          {/*==============================================================left side of form starts here ============================================================*/}
          <div className={styles.addBlogRightForm}>
            <div className={styles.tags}>
              <div className={styles.tagContent}>
                <h3>Tags</h3>
                <div className={styles.contentBox}>
                  <select name="" id="" className={styles.tagSelectBox}>
                    <option value="1">Please select tags</option>
                    <option value="2">please select tags 2</option>
                    <option value="3">please select tags 3</option>
                    <option value="4">please select tags 4</option>
                    <option value="5">please select tags 5</option>
                  </select>
                  <button
                    onClick={AddSection}
                    type="button"
                    className={`${styles.primaryBtn} ${styles.btnDefault}`}
                  >
                    Add New Tag
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.tags}>
              <div className={styles.tagContent}>
                <h3>Publish</h3>
                <div className={styles.contentBox}>
                  <div className={styles.fromFiled}>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      placeholder="please publish date"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={AddSection}
                    className={styles.secondaryBtn}
                  >
                    Publish
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*==============================================================left side of form ends here ============================================================*/}
        </div>
        <div className={styles.formEditor}>
          <ReactEditor/>
        </div>
      </form>
    </>
  );
};

export default BlogAdd;
