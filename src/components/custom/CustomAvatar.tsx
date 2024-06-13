import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const CustomAvatar = ({
  image,
  username,
}: {
  image: string | undefined | null;
  username: string | undefined | null;
}) => {
  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>{username?.charAt(1).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
