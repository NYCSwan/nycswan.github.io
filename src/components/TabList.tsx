import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";

function a11ySxProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    sx: {
      height: { xs: "60px", xl: "80px" },
      px: { xs: "2rem", xl: "3rem" },
      fontSize: { xs: "1rem", xl: "1.25rem" },
      fontWeight: "400",
    },
  };
}

export default function CustomTabList({
  setValue,
}: {
  setValue: (value: string) => void;
}) {
  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setValue(newValue);
  };

  return (
    <TabList
      onChange={handleChange}
      aria-label="Navigation"
      centered
      sx={{
        position: "absolute",
        height: { xs: "60px", xl: "80px" },
        top: { xs: "-60px", xl: "-80px" },
        backgroundColor: "transparent",
        color: "text.secondary",
        marginLeft: "350px",
        paddingLeft: "2rem",
        width: "50%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignContent: "center",
      }}
    >
      <Tab value={"0"} label="About" {...a11ySxProps(0)} />
      <Tab value={"1"} label="Skills" {...a11ySxProps(1)} />
      <Tab value={"2"} label="Experience" {...a11ySxProps(2)} />
      <Tab value={"3"} label="Portfolio" {...a11ySxProps(3)} />
      <Tab value={"4"} label="Contact" {...a11ySxProps(4)} />
    </TabList>
  );
}
