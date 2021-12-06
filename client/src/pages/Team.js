import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

export default function Team() {
  return (
      <>
      <br></br>
      <div className="team-container">
      <h2 style={{fontFamily:'Oswald, sans-serif'}}>The People</h2>
      <br></br>
      <div style={{ width: '100%' }}>
      <Box sx={{ display: 'flex',flexWrap:'wrap', justifyContent: 'center', p: 1, m: 1}}>
    <Card sx={{ maxWidth: 345, margin: 1, bgcolor:'#d9cba0'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image=""
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' , fontFamily: 'Fuzzy Bubbles, cursive'}}>
        Christa Baccas
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345, margin: 1 ,bgcolor:'#d9cba0'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="./images/ismeny-profile-pic.jpg"
          alt="ismeny"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontFamily: 'Fuzzy Bubbles, cursive'}}>
          Ismeny Castro
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345, margin: 1, bgcolor:'#d9cba0'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="./images/jayla-profile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontFamily: 'Fuzzy Bubbles, cursive'}}>
          Jayla Newton
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345, margin: 1, bgcolor:'#d9cba0'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="./images/alex-profile-pic2.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontFamily: 'Fuzzy Bubbles, cursive'}}>
            Alex Gonzalez
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 , margin: 1, bgcolor:'#d9cba0'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="./images/nikki-profile-pic.jpg"
          alt="nikki"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', fontFamily: 'Fuzzy Bubbles, cursive'}}>
           Nicole Dodge
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hey I’m Nicole! (some people call me Nikki)
            I’m new to the world of web development but have been no stranger to technology. Expertised in DSLR camera processes and Adobe applications, my profession prior to computers involved Wedding & Festival Photography, as well as the team photographer for a Division I football team. I spend most of my time at festivals and traveling across different national parks and different countries!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Box>
    </div>
    </div>
    </>
  );
}




