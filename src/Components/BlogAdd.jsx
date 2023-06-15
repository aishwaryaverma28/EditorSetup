import React, { useState,useRef } from "react";
import styles from "./Styles/BlogAdd.module.css";
import "./Styles/Editor.css";
import BlogSection from "./BlogSection";


const BlogAdd = () => {
  
  const [selectedTags, setSelectedTags] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    blogTitle: "",
    url: "",
    description: "",
  });

  const options = [
    { id: 1, value: "Tag 1" },
    { id: 2, value: "Tag 2" },
    { id: 3, value: "Tag 3" },
    { id: 4, value: "Tag 4" },
    { id: 5, value: "Tag 5" },
    { id: 6, value: "Tag 6" },
    { id: 7, value: "Tag 7" },
    { id: 8, value: "Tag 8" },
    { id: 9, value: "Tag 9" },
    { id: 10, value: "Tag 10" },
  ];
  // ===================================================================functions for tags addition and removal
  const handleTagSelection = (event) => {
    const tagId = event.target.value;
    setSelectedTags(selectedTags ? `${selectedTags},${tagId}` : tagId);
  };

  const handleTagRemoval = (tagIdToRemove) => {
    const updatedTags = selectedTags
      .split(",")
      .filter((tagId) => tagId !== tagIdToRemove)
      .join(",");

    setSelectedTags(updatedTags);
  };

  const getTagName = (tagId) => {
    const selectedOption = options.find(
      (option) => option.id.toString() === tagId
    );
    return selectedOption ? selectedOption.value : "";
  };
  //==================================================================== get image name from child component
  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
      setImageName(file.name);
    };
    reader.readAsDataURL(file);
  };

  const handleEditImage = () => {
    setUploadedImage(null);
  };
  //===================================================================== function to add date in the form data
  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
  };

 

  //===================================================================== function to track on chnage of form paramerters
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

    // =====================================================================function to handle form data when submited
    function handleFormSubmit(event) {
      event.preventDefault();
      const updatedFormData = {
        ...formData,
        tag: selectedTags,
        image: imageName,
        date: selectedDate,
        };
      console.log(updatedFormData);
    }

  function AddTag(event) {
    event.preventDefault();
  }
// ==========================================================================changes in section


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
              <div>
                {!uploadedImage ? (
                  <div className={styles.imageUploaderData}>
                    <button
                      onClick={handleImageUpload}
                      className={styles.addSectionImageBtn}
                    >
                      Add Image <i className="fa-sharp fa-solid fa-plus"></i>
                    </button>
                  </div>
                ) : (
                  <div className={styles.editImg}>
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className={styles.imageHolder}
                    />
                    <div className={styles.imageUploaderData}>
                      <button onClick={handleEditImage}>Edit Image</button>
                    </div>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                />
              </div>
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
            <BlogSection/>
                       
          </div>
          {/*==============================================================right side of form end here ============================================================*/}
          {/*==============================================================left side of form starts here ============================================================*/}
          <div className={styles.addBlogRightForm}>
            <div className={styles.tags}>
              <div className={styles.tagContent}>
                <h3>Tags</h3>
                <div className={styles.contentBox}>
                  <select
                    onChange={handleTagSelection}
                    className={styles.tagSelectBox}
                  >
                    <option value="">Select a tag</option>
                    {options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.value}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={AddTag}
                    type="button"
                    className={styles.primaryBtn}
                  >
                    Add
                  </button>
                </div>
                <div className={styles.tagData}>
                  {selectedTags &&
                    selectedTags.split(",").map((tagId, index) => (
                      <div key={index} className={styles.tagItems}>
                        {getTagName(tagId)}
                        <button onClick={() => handleTagRemoval(tagId)}>
                          <i className="fa-solid fa-x"></i>
                        </button>
                      </div>
                    ))}
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
                    onChange={handleDateChange}
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
        
      </form>
    </>
  );
};

export default BlogAdd;
