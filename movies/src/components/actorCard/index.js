import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader"
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Grid from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import img from '../../images/film-poster-placeholder.png'

const ActorCard = ({ actor = {} }) => {
    const { name, character, profile_path, id, favorite } = actor;

    return (
        <Card borderRadius="2px solid black" border ="10px" >
            <CardHeader
                avatar={
                    actor.favorite ? (
                        <Avatar sx={{ border : '2px solid black', borderRadius:'10px', backgroundColor: 'red' }}>
                            <PersonIcon />
                        </Avatar>
                    ) : null
                }
                title={
                    <Typography variant="h5" component="p">
                        {name || "Unknown Actor"}
                    </Typography>
                }
                
            />       

            <CardMedia
                sx={{ height: 500, border : '2px solid black', borderRadius:'10px'}}
                image={
                    actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : img
                }
                alt={name || "Actor Image"}
            />
            <CardContent>
                <Grid container>
                    <Grid size={{ xs: 6 }} >
                        <Typography variant="h6" component="p">
                            {`as ${actor.character}`}
                        </Typography>
                    </Grid>
                    
                </Grid>
            </CardContent>
            <Grid container justifyContent="center" sx={{ padding: "10px" }}>
                <Link to={`/actors/${actor.id}`} style={{ textDecoration: "none" }}>
                    <Typography variant="body2" color="primary">
                        View More
                    </Typography>
                </Link>
            </Grid>
        </Card>
    );
};

export default ActorCard;
