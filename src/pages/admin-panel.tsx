import adminProtected from "@/hooks/adminProtected";
import { BASE_URL } from "@/utils";
import { useEffect, useState } from "react";

const AdminPanel = () => {
  const [data, setData] = useState<any>();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`${BASE_URL}/userActivity/get-all-activity`);
    const resData = await res.json();
    setData(resData?.data);
  };
  console.log("data--", data?.data);

  return (
    <section className="main-container min-h-screen h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 font-semibold text-gray-800 py-8 lg:py-12">
      {data?.map((item: any) => (
        <div
          key={item?._id}
          className="h-fit shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-3 rounded-md flex flex-col gap-2 font-normal"
        >
          <div className="tracking-wider break-all">
            <p className="text-blue-500 text-sm font-medium mr-2">user_id:</p>
            {item?.user_id}
          </div>
          <div className="tracking-wider">
            <p className="text-blue-500 text-sm font-medium mr-2">page_name:</p>
            {item?.page_name}
          </div>
          <div className="tracking-wider">
            <p className="text-blue-500 text-sm font-medium mr-2">
              activity_type:
            </p>
            {item?.activity_type}
          </div>
          <div className="tracking-wider">
            <p className="text-blue-500 text-sm font-medium mr-2">
              additional_info:
            </p>
            {item?.additional_info?.device_info}
          </div>
          <div className="tracking-wider">
            <p className="text-blue-500 text-sm font-medium mr-2">timestamp:</p>
            {item?.createdAt}
          </div>
        </div>
      ))}
    </section>
  );
};

export default adminProtected(AdminPanel);
