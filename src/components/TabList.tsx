import TabList from "@mui/lab/TabList";
import { Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { SyntheticEvent } from "react";

function a11ySxProps(index: string) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tab-${index}`,
    sx: {},
  };
}

const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: theme.palette.primary.main,
  color: "#EEFEBF",
  marginRight: "1px",
  transition: "all 0.2s ease",

  "&.Mui-active, &.Mui-selected": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.grey[100],
  },
}));

export default function CustomTabList({
  setValue,
}: {
  setValue: (value: string) => void;
}) {
  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabList
      onChange={handleChange}
      aria-label="page navigation"
      centered
      sx={{
        position: "absolute",
        height: { xs: "60px", xl: "80px" },
        px: { xs: "2rem", xl: "3rem" },
        fontSize: { xs: "1rem", xl: "1.25rem" },
        fontWeight: "400",
        top: { xs: "-60px", xl: "-80px" },
        backgroundColor: "transparent",
        color: "text.secondary",
        marginLeft: "375px",
        width: { xs: "50%", lg: "60%", xl: "70%" },
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        flexWrap: "nowrap",
        alignContent: "center",
      }}
    >
      <StyledTab
        value={"0"}
        label="About"
        {...a11ySxProps("0")}
        color="primary"
      />
      <StyledTab
        value={"1"}
        label={<Typography>Skills</Typography>}
        {...a11ySxProps("1")}
      />
      <StyledTab
        value={"2"}
        label={<Typography>Experience</Typography>}
        {...a11ySxProps("2")}
      />
      <StyledTab
        value={"3"}
        label={<Typography>Portfolio</Typography>}
        {...a11ySxProps("3")}
      />
      <StyledTab
        value={"4"}
        label={<Typography>Contact</Typography>}
        {...a11ySxProps("4")}
      />
    </TabList>
  );
}
