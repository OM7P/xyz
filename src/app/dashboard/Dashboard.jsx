"use client";

import React, { useEffect, useState } from "react";
import { Component } from "../mainapp/chartbar";
import  Footer  from "../component/footer";
import { TableDemo } from "../component/table";
import Banner from "../component/banner";
import { CalendarDemo } from "../component/calendar";
import Sidebar from "../component/Sidebar";
import Header from "../component/header";
import { BarChart } from "../component/barchart";
import SpinnerApp from "../component/loader";
import SiteLoading from "../component/loader";


const Dashboard = () => {
    // const { loading } = useStore();
    // if (loading) return <div>Loading....</div>;
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      // Simulate a data fetch
      setTimeout(() => {
        setLoading(false);
      }, 2000); // 2 seconds delay
    }, []);


    if (loading) {
      return <SiteLoading />;
    } else {
  return (
    <div>

       <Header />
      <Sidebar />
      <BarChart/>
      {/* <CalendarDemo /> */}
      <Banner/>
      <TableDemo />
      <Component />
      <Footer />
      {/* <SpinnerApp/> */}
    </div>
  );
}
};

export default Dashboard;
