///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 👉 Author      : R U Bharti
// 👉 Component   : FPDashboard
// 👉 Status      : Close
// 👉 Description : This component is for marriage home page.
// 👉 Functions   :
//                  1. fetchApprovedList    -> To fetch approve marriage list.
//                  2. fetchPendingList     -> To fetch pending marriage list.
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 👉 Importing Packages 👈
import React, { useEffect, useState } from "react";
import "./home.css";
import AxiosInterceptors from "@/Components/Common/AxiosInterceptors";
import ApiHeader from "@/Components/api/ApiHeader";
import ProjectApiList from "@/Components/api/ProjectApiList";
import useSetTitle from "@/Components/Common/useSetTitle";
import { getLocalStorageItemJsonParsed } from "@/Components/Common/localstorage";
import Heading from "./Heading";
import ApplicationCard from "./ApplicationCard";
import ShortcutCard from "./ShortcutCard";
import Table from "./Table";

function FPDashboard() {
  // 👉 Setting Title 👈
  useSetTitle("Home");

  // 👉 API constants 👈
  const { api_FPTrack, api_getInfractionList } = ProjectApiList();

  // 👉 Roles constant 👈
  const userDetails = getLocalStorageItemJsonParsed("userDetails");

  // 👉 State constants 👈
  const [pendingData, setpendingData] = useState(null);
  const [approvedData, setapprovedData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isLoading2, setisLoading2] = useState(false);

  // ______________FUNCTION TO FETCH APPROVED LIST DATA FROM API, HANDLE LOADING STATE, AND UPDATE STATE WITH RESPONSE________________

  const fetchApprovedList = () => {
    setisLoading(true);
    AxiosInterceptors.post(api_FPTrack, {}, ApiHeader())
      .then(function (response) {
        console.log("approved list data", response.data.data);
        setapprovedData(response.data.data);
      })
      .catch(function (error) {
        console.log("errorrr.... ", error);
      })
      .finally(() => setisLoading(false));
  };

  //__________________ FUNCTION TO FETCH PENDING LIST DATA FROM API, HANDLE LOADING STATE, AND UPDATE STATE WITH RESPONSE_________________

  const fetchPendingList = () => {
    setisLoading2(true);
    AxiosInterceptors.post(api_getInfractionList, {}, ApiHeader())
      .then(function (response) {
        console.log("pending list data", response.data.data);
        setpendingData(response.data.data);
        setisLoading(false);
      })
      .catch(function (error) {
        console.log("errorrr.... ", error);
      })
      .finally(() => setisLoading2(false));
  };

  // 👉 Render to call functions 👈
  useEffect(() => {
    fetchApprovedList();
    fetchPendingList();
  }, []);

  return (
    <>
      {/* 👉 Heading Card 👈 */}
      <Heading
        // matchForApply={['JSK']}
        // matchForSafWf={userDetails}
        allRole={userDetails}
        heading={"Fines & Penalties Home Page"}
        subHeading={"Verified Account"}
        mainWorkflowLink={"/fp-workflow"}
        // applyLink={'/fp-apply'}
      />

      {/* 👉 Middle Cards 👈 */}
      <div class="grid grid-cols-12 items-center mx-10 ">
        {/* 👉 Application Card 👈 */}
        <div class="flex flex-row flex-wrap gap-2 items-start col-span-12 md:col-span-6 ">
          <div className="w-[45%] animate__animated animate__zoomIn animate__faster">
            <ApplicationCard
              heading={"Pending Application"}
              total={pendingData?.total}
              loading={isLoading}
            />
          </div>
          <div className="w-[45%] animate__animated animate__zoomIn animate__faster">
            <ApplicationCard
              heading={"Challan Generated"}
              total={approvedData?.total}
              loading={isLoading}
            />
          </div>
        </div>

        {/* 👉 Shortcuts Card 👈 */}
        <div class="flex flex-col flex-wrap gap-4 justify-center col-span-12 md:col-span-6 md:mt-0 mt-10 animate__animated animate__fadeInLeft animate__faster">
          <div className="w-full md:w-[50%]">
            <ShortcutCard heading={"Application List"} path={"/fp-list"} />
          </div>
          <div className="w-full md:w-[50%]">
            <ShortcutCard heading={"Search Challan"} path={"/search-challan"} />
          </div>
        </div>
      </div>

      {/* 👉 Recent Application Table 👈 */}
      <div className="mx-10 mt-10 md:w-auto w-[80vw] overflow-auto animate__animated animate__fadeInUp animate__faster">
        <div className="font-bold text-md mb-2 flex-1 text-gray-600">
          # Recent Applications
        </div>
        <Table
          loading={isLoading2}
          heading={[
            "Application No.",
            "Name",
            "Mobile No.",
            "Holding No.",
            "Violation Name",
            "Violation Section",
            "Amount (₹)",
            "Apply Date",
          ]}
          dataKey={[
            "application_no",
            "full_name",
            "mobile_no",
            "holding_no",
            "violation_name",
            "violation_section",
            "amount",
            "date",
          ]}
          data={pendingData?.data ?? []}
          viewLink={"/fp-details/"}
        />
      </div>
    </>
  );
}

export default FPDashboard;
