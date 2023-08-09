import React from "react";
import "./AdminProfilePage.css";
function AdminProfilePage() {
  return (
    <div className="adminprofilepage">
      <div className="adminprofilepage_heading">
        <p>Update Profile </p>
      </div>
      <div className="adminprofilepage_details">
        <form>
          <span>
            <input type="text" placeholder="Name of admin " />
          </span>
          <span>
            <input type="text" placeholder="Email" />
          </span>
          <p> Profile Picture</p>
          <input type="file" />

          <span>
            <input type="text" placeholder="Password" />
          </span>
          <button >
            Update Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminProfilePage;
