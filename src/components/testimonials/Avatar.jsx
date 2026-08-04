import { UserCircleIcon } from "lucide-react";

const Avatar = ({ color, size = "md" }) => {
  const sizes = {
    sm: "w-9 h-9 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-14 h-14 text-lg",
  };
  return (
    <div
      className={`${sizes[size]} rounded-full ${color}
                     flex items-center justify-center 
                     shrink-0 shadow-lg`}
    >
      <UserCircleIcon strokeWidth={1.5} className="h-full w-full" />
      {/* {initials} */}
    </div>
  );
};

export default Avatar;
