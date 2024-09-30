import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import "./Courses.css"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarFallback } from "./components/ui/avatar"

const Courses=()=>{
    return(
        <main>
            <nav>
                <img src="../citilink-logo.png"/>
                <MenuNavbar clasName="bg-green"/>
                <Avatar>
                    <AvatarFallback>CL</AvatarFallback>
                </Avatar>
            </nav>
            
        </main>
    )
}

const MenuNavbar=()=>{
    return(
        <>
            <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Course 1</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Sub Course 1
          </MenubarItem>
          <MenubarItem>
          Sub Course 2
          </MenubarItem>
          <MenubarItem >Sub Course 3</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Course 2</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Sub Course 1
          </MenubarItem>
          <MenubarItem>
          Sub Course 2
          </MenubarItem>
          <MenubarItem >Sub Course 3</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Course 3</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Sub Course 1
          </MenubarItem>
          <MenubarItem>
          Sub Course 2
          </MenubarItem>
          <MenubarItem >Sub Course 3</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
        </>
    )
}

export default Courses