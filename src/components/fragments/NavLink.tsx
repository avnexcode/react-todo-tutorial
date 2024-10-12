import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import { Link } from 'react-router-dom'

export default function NavLink() {
    return (
        <NavigationMenu className="z-[5] w-full">
            <NavigationMenuList className="w-full">
                <NavigationMenuItem>
                    <Link to="/" className={navigationMenuTriggerStyle()}>
                        <span className="m750:max-w-[80px] m750:text-xs">
                            Home
                        </span>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to="/todo" className={navigationMenuTriggerStyle()}>
                        <span className="m750:max-w-[80px] m750:text-xs">
                            Todo
                        </span>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

