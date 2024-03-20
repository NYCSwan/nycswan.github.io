import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
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
        height: "80px",
        top: "-80px",
        backgroundColor: "transparent",
        color: "text.secondary",
        marginLeft: "300px",
        paddingLeft: "2rem",
        width: "50%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        alignContent: "center",
      }}
    >
      <Tab
        value={"0"}
        label="About"
        {...a11yProps(0)}
        sx={{ height: "80px", px: "16px" }}
      />
      <Tab value={"1"} label="Skills" {...a11yProps(1)} />
      <Tab value={"2"} label="Experience" {...a11yProps(2)} />
      <Tab value={"3"} label="Contact" {...a11yProps(3)} />
    </TabList>
  );
}
