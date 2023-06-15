import React, { useState } from "react";
import styles from "./Styles/BlogAdd.module.css";
import "./Styles/Editor.css";
import ImageUploader from "./ImageUploader";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactEditor from "./ReactEditor";

const BlogAdd = () => {
  const [dataFromChild, setDataFromChild] = useState("");
  const [formData, setFormData] = useState({
    blogTitle: "",
    url: "",
    description: "",
    field1: "",
    sectionTitle: [],
    tags: [],
    date: "",
  });

  const handleDataTransfer = (data) => {
    setDataFromChild(data);
  };
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function AddSection() {
    setFormData((prev) => ({
      ...prev,
      sectionTitle: [...prev.sectionTitle, prev.field1],
      field1: "",
    }));
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    const updatedFormData = { ...formData, editorValue: dataFromChild };
    console.log(updatedFormData);
  }

  function AddTag(event) {
    event.preventDefault();
  }

  return (
    <>
      <header className="headerEditor">
        <h2> Add a new Blog</h2>
      </header>
      <form className={styles.scrollCover} onSubmit={handleFormSubmit}>
        <div className={styles.addBlogContainer}>
          {/*==============================================================right side of form starts here ============================================================*/}
          <div className={styles.addBlogMainForm}>
            <div className={styles.fromFiled}>
              <input
                type="text"
                name="blogTitle"
                id="blogtitle"
                placeholder="Blog Title"
                onChange={handleChange}
              />
            </div>
            <div className={styles.fromUrl}>
              <input
                type="text"
                name="url"
                id="url"
                placeholder="Url"
                onChange={handleChange}
              />
              <ImageUploader buttonTitle="Add Image" />
            </div>
            <div className={styles.fromFiled}>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                onChange={handleChange}
              />
            </div>

            <div className={styles.fromBlogSection}>
              <input
                type="text"
                name="field1"
                id="sectiontitle"
                placeholder="Section Title"
                onChange={handleChange}
              />
              <div className={styles.formBtnBox}>
                <ImageUploader buttonTitle="Add Blog Section Image" />
                <button onClick={AddSection} className={styles.addSectionBtn}>
                  Add Section
                </button>
              </div>
              <ul>
                {formData.sectionTitle.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
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
                    onClick={AddTag}
                    type="button"
                    className={styles.primaryBtn}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.tags}>
              <div className={styles.tagContent}>
                <h3>Publish</h3>
                <div className={styles.contentBox}>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    placeholder="please publish date"
                    onChange={handleChange}
                  />
                  <input
                    type="submit"
                    value="Publish"
                    className={styles.secondaryBtn}
                  />
                </div>
              </div>
            </div>
          </div>
          {/*==============================================================left side of form ends here ============================================================*/}
        </div>
        <div className={styles.formEditor}>
          <ReactEditor onDataTransfer={handleDataTransfer} />
        </div>
      </form>
    </>
  );
};

export default BlogAdd;
