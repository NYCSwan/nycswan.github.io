import Stack from "@mui/material/Stack";
import { ReactNode } from "react";

export default function ScrollStack({
  children,
  direction = { xs: "column" },
  sx = {},
}: {
  children: ReactNode;
  direction?: { [key in "xs" | "md" | "lg"]?: "row" | "column" };
  sx?: { [key: string]: any };
}) {
  return (
    <Stack
      spacing={2}
      direction={direction}
      sx={{
        ...sx,
        alignSelf: "center",
        position: "relative",
        maxWidth: { xs: "100%", xl: "80%" },
        px: { xs: "1.5rem", sm: "3rem", xl: "4rem" },
        overflowY: "scroll",
        paddingTop: { xs: "1.5rem", xl: "2rem" },
        paddingBottom: { xs: "1.5rem", sm: "2rem", xl: "3rem" },
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {children}
    </Stack>
  );
}
