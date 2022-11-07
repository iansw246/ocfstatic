import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { ReactNode } from "react"
import NavbarButton from "./NavbarButton"

export type NavbarDropdownProps = {
  title: string | JSX.Element
  width?: number
  children: ReactNode
}

const NavbarDropdown = ({ title, width, children }: NavbarDropdownProps) => {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <NavbarButton>
          {typeof title === "string" ? <Text>{title}</Text> : title}
          <ChevronDownIcon ml={1} />
        </NavbarButton>
      </PopoverTrigger>
      <PopoverContent w={width ?? 200}>
        <PopoverBody px={0}>{children}</PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default NavbarDropdown
