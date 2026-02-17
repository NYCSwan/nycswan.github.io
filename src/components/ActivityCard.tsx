import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

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
        maxWidth: 545,
        marginTop: "1rem",
        boxShadow: 2,
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <CardMedia component="img" image={imageUrl} alt={title} width={"100%"} />
      <CardContent>
        <CardHeader title={title} />
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button href={documentLink}>Learn more!</Button>
      </CardActions>
    </Card>
  );
}
