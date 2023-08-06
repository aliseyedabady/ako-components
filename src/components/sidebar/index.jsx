import AkoLink from "../link";

const Sidebar = () => {
  return (
    <div className=" relative z-20">
      <div className="py-6 px-4 flex justify-between">
        <img alt="" src={require("../../assets/images/logo/1.svg").default} />
      </div>
      <div className="sidebar-menu px-4 h-[calc(100%-100px)]">
        <AkoLink />
        <AkoLink />
        <AkoLink />
        {/* <AkoLink /> */}
      </div>
    </div>
  );
};

export default Sidebar;
