import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const CustomAvatar = ({
  image,
  username,
}: {
  image: string | undefined ;
  username: string | undefined | null;
}) => {
  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>{username?.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;
