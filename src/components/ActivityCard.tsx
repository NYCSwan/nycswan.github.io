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
        maxWidth: 445,
        marginTop: "1rem",
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
        <IconButton aria-label="share" color="primary">
          <ShareIcon />
        </IconButton>
        <Button href={documentLink} size="small" target="_blank">
          Learn more!
        </Button>
      </CardActions>
    </Card>
  );
}
