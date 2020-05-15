import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

   


const Designer = () => {
 
    return (
        <React.Fragment style={{height:"3000px",width:"1100px"}}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </React.Fragment>
  );
}

export default Designer;