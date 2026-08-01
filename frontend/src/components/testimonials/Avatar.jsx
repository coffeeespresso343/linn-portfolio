const Avatar = ({ initials, color, size = "md" }) => {
  const sizes = {
    sm: "w-9 h-9 text-sm",
    md: "w-12 h-12 text-base",
    lg: "w-14 h-14 text-lg",
  };
  return (
    <div
      className={`${sizes[size]} rounded-full bg-linear-to-br ${color}
                     flex items-center justify-center font-display font-bold
                     text-white shrink-0 shadow-lg`}
    >
      {initials}
    </div>
  );
};

export default Avatar;
