import React from "react";
import ProfileAvatar from "./fragments/profile-avatar";
import { Verified } from "lucide-react";
import CompanyName from "./fragments/name";
import CompanyCategory from "./fragments/category";
import Buttons from "./fragments/buttons";

const Information = () => {
  return (
    <div className="h-[152px] pr-14 absolute w-full  flex justify-between items-end top-[60%]">
      <div className="flex items-end gap-6">
        <ProfileAvatar />
        <div className="">
          <CompanyName name="گروه دیجی‌کالا" isVerified />
          <CompanyCategory value="تجارت الکترونیک" />
        </div>
      </div>
      <Buttons/>
    </div>
  );
};

export default Information;
