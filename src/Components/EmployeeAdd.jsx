import React from "react";
import "./Styles/Editor.css";
import styles from "./Styles/EmployeeUpdate.module.css";
const EmployeeAdd = () => {
  function submitForm (event) {
    event.preventDefault();
  }
  return (
    <>
      <header className="headerEditor">
        <h2>Add a new Employee</h2>
      </header>
      <form className={styles.addEmployeeFrom}>
         <div className={styles.formDiv}>
          <div className={styles.leftForm}>
            <div className={styles.fromFiled}>
              <label for="">
                employee code<span>*</span>
              </label>
              <br />
              <br />
              <input
                type="text"
                name="employeecode"
                id="employeecode"
                placeholder=""
              />
            </div>
            <div className={styles.fromFiled}>
              <label for="">
                employee name<span>*</span>
              </label>
              <br />
              <br />
              <input
                type="text"
                name="employeename"
                id="employeename"
                placeholder=""
              />
            </div>
            <div className={styles.fromFiled} top-align>
              <label for="">
                current address<span>*</span>
              </label>
              <br />
              <br />
              <textarea
                type="textarea"
                id="currentaddress"
                rows="5"
                cols="30"
                placeholder=""
              ></textarea>
            </div>
            <div className={styles.fromFiled}>
              <label for="">
                date of joining<span>*</span>
              </label>
              <br />
              <br />
              <input type="date" name="date" id="date" placeholder="" />
            </div>
            <div className={styles.fromFiled}>
              <label for="">
                client/franchisee<span>*</span>
              </label>
              <br />
              <br />
              <input type="text" name="client" id="client" placeholder="" />
            </div>
            <div className={styles.fromFiled}>
              <label for="">
                remarks<span>*</span>
              </label>
              <br />
              <br />
              <input type="text" name="remarks" id="remarks" placeholder="" />
            </div>
            <div className={styles.fromFiled}>
              <label for="">registration date</label>
              <br />
              <br />
              <input
                type="text"
                name="registration"
                id="registration"
                placeholder=""
              />
            </div>
          </div>
          <div className={styles.rightForm}>
            <div className={styles.fromFiled}>
              <label for="">
                employee type<span>*</span>
              </label>
              <br />
              <br />
              <input
                type="text"
                name="employeetype"
                id="employeetype"
                placeholder=""
              />
            </div>
            <div className={styles.fromFiled}>
              <label for="">
                phone number<span>*</span>
              </label>
              <br />
              <br />
              <input
                type="tel"
                name="phonenumber"
                id="phonenumber"
                maxlength="10"
                placeholder=""
              />
            </div>
            <div className={styles.fromFiled}>
              <label for="">
                permanent address<span>*</span>
              </label>
              <br />
              <br />
              <textarea
                type="textarea"
                id="permanentaddress"
                rows="5"
                cols="30"
                placeholder=""
              ></textarea>
            </div>
            <div className={styles.fromFiled}>
              <label for="">
                password<span>*</span>
              </label>
              <br />
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder=""
              />
            </div>
            <div className={styles.fromFiled}>
              <label for="">
                org name<span>*</span>
              </label>
              <br />
              <br />
              <input type="text" name="orgname" id="orgname" placeholder="" />
            </div>
            <div className={styles.fromFiled}>
              <label for="">
                OTP<span>*</span>
              </label>
              <br />
              <br />
              <input type="text" name="otp" id="otp" placeholder="" />
            </div>
          </div>
          </div>
          <div className={styles.saveBtnRight}>
          <button type="button" className={`${styles.secondaryBtn} ${styles.saveBtn}`} onClick={submitForm}>Save</button>
          </div>
        
      </form>
    </>
  );
};

export default EmployeeAdd;
