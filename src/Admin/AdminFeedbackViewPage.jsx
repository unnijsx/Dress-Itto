import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import Sidemenu from './AdminSidemenu';
import AdminHeader from './AdminHeader';

const feedbacks = [
  {
    id: 1,
    name: 'Alice Johnson',
    feedback:
      'Great product quality! I love how fast the shipping was. Will definitely order again.',
    avatar:
      'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 2,
    name: 'Bob Smith',
    feedback:
      'Customer support was really helpful. However, the packaging could be improved.',
    avatar:
      'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: 3,
    name: 'Charlie Davis',
    feedback: 'Decent experience overall.',
    avatar:
      'https://randomuser.me/api/portraits/men/22.jpg',
  },
];

export default function AdminFeedbackViewPage() {
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleViewMore = (feedback) => {
    setSelectedFeedback(feedback);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedFeedback(null);
  };

  return (
    <Container
      sx={{
        py: 4,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: '99vw',
        minHeight: '100vh',
        backgroundColor: '#121212',
      }}
    >
      <AdminHeader />
      <Sidemenu />

      <Paper
        elevation={4}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 800,
          backgroundColor: '#1e1e1e',
          borderRadius: 3,
          mt: 4,
        }}
      >
        <Typography variant="h4" color="white" gutterBottom align="center">
          User Feedback
        </Typography>

        <List>
          {feedbacks.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: 2,
                backgroundColor: '#2a2a2a',
                borderRadius: 2,
                p: 2,
              }}
            >
              <ListItemAvatar>
                <Avatar src={item.avatar} alt={item.name} />
              </ListItemAvatar>

              <Box sx={{ flex: 1, ml: 2 }}>
                <Typography variant="subtitle1" color="#90caf9">
                  {item.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="white"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    mt: 0.5,
                  }}
                >
                  {item.feedback}
                </Typography>

                <Box sx={{ mt: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleViewMore(item)}
                    sx={{
                      color: '#90caf9',
                      borderColor: '#90caf9',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#90caf9',
                        color: '#000',
                      },
                    }}
                  >
                    View
                  </Button>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>

      <Dialog
        open={openDialog}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: '#1e1e1e',
            color: 'white',
          },
        }}
      >
        <DialogTitle sx={{ color: '#90caf9' }}>
          Feedback Details
        </DialogTitle>
        <DialogContent dividers>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar
              src={selectedFeedback?.avatar}
              alt={selectedFeedback?.name}
              sx={{ mr: 2 }}
            />
            <Typography variant="subtitle2">
              {selectedFeedback?.name}
            </Typography>
          </Box>
          <Typography variant="body1">{selectedFeedback?.feedback}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#90caf9' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
