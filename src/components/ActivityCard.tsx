import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { theme } from "../ThemeOptions";

export default function ActivityCard({
  title,
  description,
  imageUrl,
  documentLink,
}: {
  title: string;
  description: string;
  imageUrl: string;
  documentLink: string;
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 500,
        marginTop: "1rem",
        background: theme.palette.background.default,
        boxShadow: 2,
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <CardMedia component="img" image={imageUrl} alt={title} height={"240"} />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button href={documentLink} size="large" target="_blank">
          Learn more!
        </Button>
      </CardActions>
    </Card>
  );
}
