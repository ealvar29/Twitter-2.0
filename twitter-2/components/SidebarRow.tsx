import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div
      className="flex items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 cursor-pointer 
    transitio duration-200 group max-w-fit"
    >
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-twitter">{title}</p>
    </div>
  );
}

export default SidebarRow;
