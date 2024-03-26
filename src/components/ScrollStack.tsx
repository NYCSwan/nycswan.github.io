import Stack from "@mui/material/Stack";

export default function ScrollStack({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Stack
      spacing={2}
      direction={"column"}
      sx={{
        position: "relative",
        maxWidth: { xs: "100%", xl: "80%" },
        px: { xs: "1.5rem", sm: "3rem", xl: "4rem" },
        overflowY: "scroll",
        paddingTop: { xs: "1.5rem", sm: "2rem" },
        paddingBottom: { xs: "1.5rem", sm: "2rem", xl: "3rem" },
        scrollbarWidth: "none",
      }}
    >
      {children}
    </Stack>
  );
}
