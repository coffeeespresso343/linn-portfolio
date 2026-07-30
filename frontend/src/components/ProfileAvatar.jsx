import Avatar from "../assets/avatar1.jpg";

export default function ProfileAvatar({ size = 200 }) {
  return (
    <img
      src={Avatar}
      alt="Linn Avatar"
      width={size}
      height={size}
      loading="lazy"
      className="object-cover"
    />
  );
}
