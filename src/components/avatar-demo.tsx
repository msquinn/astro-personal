import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
   
  export default function AvatarDemo() {
    return (
      <Avatar className="w-32 h-32 m-2">
        <AvatarImage className="w-32 h-32" src="https://github.com/msquinn.png" alt="@shadcn" />
        <AvatarFallback className="w-32 h-32">MQ</AvatarFallback>
      </Avatar>
    )
  }