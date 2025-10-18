import {
  Home as HomeIcon,
  SportsEsports as SportsIcon,
  Casino as CasinoIcon,
  Whatshot as HotIcon,
} from "@mui/icons-material";

export type SidebarItem = {
  title: string;
  icon: React.ReactNode;
  path?: string;
  children?: SidebarItem[];
};

export const sidebarItems: SidebarItem[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    title: "HOT",
    icon: <HotIcon />,
    children: [
      { title: "BETJILI GEMS", path: "hot/betjili-gems", icon: <HomeIcon /> },
      { title: "HEYVIP Crash", path: "hot/heyvip-crash", icon: <HomeIcon /> },
    ],
  },
  {
    title: "Sports",
    icon: <SportsIcon />,
    children: [
      { title: "CRICKET", path: "sports/cricket", icon: <HomeIcon /> },
      { title: "SEBA", path: "sports/seba", icon: <HomeIcon /> },
    ],
  },
  {
    title: "Casino",
    icon: <CasinoIcon />,
    path: "/casino",
  },
];
