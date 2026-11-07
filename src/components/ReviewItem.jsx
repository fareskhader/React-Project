import {
  TextField,
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Alert,
  Chip,
  Rating,
  Card
} from "@mui/material";
export default function ReviewItem({review}) {
  return (
    <Card>
        <Box sx={{display:'flex' ,flexDirection:'column',gap:2,p:2}}>
            <Typography>
                {review.userName}
            </Typography>
             <Typography>
                {new Date(review.createdAt).toLocaleDateString()}
            </Typography>
            <Typography>
                {review.comment}
            </Typography>
            <Rating value={review.rating} readOnly />
        <Divider  sx={{color:'primary.main',my:3,borderBottomWidth:3,borderColor:'primary.main'}}></Divider>
            
            </Box>
    </Card>
  )
}
