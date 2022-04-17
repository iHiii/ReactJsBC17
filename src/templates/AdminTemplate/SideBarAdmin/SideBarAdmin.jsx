import React from "react";

export default function SideBarAdmin() {
  return (
    <div className="bg-success text-light h-100 w-100">
      <div className="d-flex align-items-center justify-content-center">
        <ContentSidebar />
      </div>
    </div>
  );
}

function ContentSidebar(props) {
  return <div>Sidebar</div>;
}
