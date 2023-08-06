import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div>
      <Link to={"/blogs"}>Blogs</Link>
    </div>
  );
};

export default Dashboard;
