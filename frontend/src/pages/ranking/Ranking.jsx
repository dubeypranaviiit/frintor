import React,{useState,useEffect} from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link, Typography } from '@mui/material';
import api from '../../api'
import { Container, CircularProgress } from '@mui/material';

const CollegeTable = ({ colleges }) => {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="college table">
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h6">Rank</Typography></TableCell>
              <TableCell><Typography variant="h6">College Name</Typography></TableCell>
              <TableCell><Typography variant="h6">Address</Typography></TableCell>
              <TableCell><Typography variant="h6">Contact</Typography></TableCell>
              <TableCell><Typography variant="h6">Email</Typography></TableCell>
              <TableCell><Typography variant="h6">Website</Typography></TableCell>
              <TableCell><Typography variant="h6">Approved Authority</Typography></TableCell>
              <TableCell><Typography variant="h6">User Rating</Typography></TableCell>
              <TableCell><Typography variant="h6">Hostel</Typography></TableCell>
              <TableCell><Typography variant="h6">Startup Incubation</Typography></TableCell>
              <TableCell><Typography variant="h6">Sports</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {colleges.map((college) => (
              <TableRow key={college._id}>
                <TableCell component="th" scope="row">{college.ranking?(`#${college.ranking}`):("-")}</TableCell>
                <TableCell component="th" scope="row">{college.collegename}</TableCell>
                <TableCell>{college.address}, {college.city}, {college.state}, {college.country}</TableCell>
                <TableCell>{college.contact}</TableCell>
                <TableCell>{college.email}</TableCell>
                <TableCell>
                  <Link href={college.website} target="_blank" rel="noopener noreferrer">
                    {college.website}
                  </Link>
                </TableCell>
                <TableCell>{college.approvedauthority || college.approvedaurthority}</TableCell>
                <TableCell>{college.userrating} / 5 ({college.totalrating} reviews)</TableCell>
                <TableCell>{college.hostel ? 'Yes' : 'No'}</TableCell>
                <TableCell>{college.startupincubation ? 'Yes' : 'No'}</TableCell>
                <TableCell>{college.sports ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };


const Ranking = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchcolleges = async () => {
        try {
            const response = await api.get('/colleges/byranking');
            setColleges(response.data.data);
            // console.log(response.data.data);
        } catch (error) {
            // console.log(error);
        } finally {
            setLoading(false);
        }
    }
  
    useEffect(() => {
        fetchcolleges();
    }, []);

  return (
    <Container style={{ padding: '20px',maxWidth:"98vw" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Top BTech Colleges in India 2024
      </Typography>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress />
        </div>
      ) : (
        <CollegeTable colleges={colleges} />
      )}
    </Container>
  )
}

export default Ranking