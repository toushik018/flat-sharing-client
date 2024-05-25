import { USER_ROLE } from "@/constants/role";
import { DrawerItem, TUserRole } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyIcon from "@mui/icons-material/Key";

export const drawerItems = (role: TUserRole) => {
    const roleMenus: DrawerItem[] = [];
    const defaultMenus = [
        {
            title: "Profile",
            path: `${role}/profile`,
            icon: PersonOutlineIcon,
        },
        {
            title: "Change Password",
            path: "change-password",
            icon: KeyIcon,
        },
    ];
    switch (role) {
        case USER_ROLE.ADMIN:
            roleMenus.push(
                {
                    title: "Dashborad",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Manage Users",
                    path: `${role}/manage-users`,
                    icon: GroupIcon,
                },
                {
                    title: "Manage Flats",
                    path: `${role}/all-flats`,
                    icon: GroupIcon,
                }
            );
            break;

        case USER_ROLE.USER:
            roleMenus.push(
                {
                    title: "Dashborad",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Post Flat",
                    path: `${role}/post-flats`,
                    icon: AddBusinessIcon,
                },
                {
                    title: "My Flats",
                    path: `${role}/my-flats`,
                    icon: ApartmentIcon,
                },
            );
            break;


        default:
            break;
    }

    return [...roleMenus, ...defaultMenus];
};
