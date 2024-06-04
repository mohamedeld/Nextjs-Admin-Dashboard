import Image from "next/image";
import Link from "next/link";
import logo from "@/public/img/t.png";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar(){
  return (
    <div className="bg-primary dark:bg-slate-700 px-5 py-2 flex justify-between text-white" >
      <Link href={"/"}>
        <Image src={logo} alt="logo image" quality={90} width={40}/>
      </Link>
      
    <DropdownMenu>
  <DropdownMenuTrigger>
  <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className="text-black">CN</AvatarFallback>
    </Avatar>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Link href="/profile">Profile</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href="/auth">Logout</Link>
    </DropdownMenuItem>
   
  </DropdownMenuContent>
</DropdownMenu>
    </div>
  )
}