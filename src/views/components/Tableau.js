import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ff9a9e",
	color: theme.palette.common.white,
	height:"70px"
 },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(hebergement, domaine, securité, stockage, transfert) {
  return { hebergement, domaine, securité, stockage, transfert };
}

const rows = [
  createData('Hébergement gratuit',  <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>, <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>,  <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>,  
  //<i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>
  ),
  createData('Nom de domaine gratuit',  <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>, <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>,  <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>, 
  // <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>
  ),
  createData('Securité SSL (Https)',  <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>, <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>,  <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>,  
  //<i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>
  ),
  createData('Stockage SSD', '50GO', '100GO', '200GO', 
  //'Illimité'
  ),
  createData('Transfert Mensuel', 'Illimité', 'Illimité', 'Illimité', 
  //'Illimité'
  ),
  createData('Emails profesionnels', 3, 10, 20, 
  //100
  ),
  createData('Produits', 20, 50, 100, 
  //200
  ),
  createData('Panier en ligne', <i class="fa fa-times" aria-hidden="true" style={{color:"red"}}></i>,<i class="fa fa-times" aria-hidden="true" style={{color:"red"}}></i>, <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>,  
  //<i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>
  ),
  createData('Formation marketing', <i class="fa fa-times" aria-hidden="true" style={{color:"red"}}></i>,<i class="fa fa-times" aria-hidden="true" style={{color:"red"}}></i>, <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>, 
  //  <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>
   ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nos Offres</StyledTableCell>
            <StyledTableCell align="right">Bronze</StyledTableCell>
            <StyledTableCell align="right">Silver</StyledTableCell>
            <StyledTableCell align="right">Gold</StyledTableCell>
            {/* <StyledTableCell align="right">Diamond</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.hebergement}>
              <StyledTableCell component="th" scope="row">
                {row.hebergement}
              </StyledTableCell>
              <StyledTableCell align="right">{row.domaine}</StyledTableCell>
              <StyledTableCell align="right">{row.securité}</StyledTableCell>
              <StyledTableCell align="right">{row.stockage}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.transfert}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
