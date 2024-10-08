import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "../../components/ui/avatar"
  
  export function AvatarDemo() {
    return (
      <Avatar>
        <AvatarImage src={"/images/avatar.jpg"} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  