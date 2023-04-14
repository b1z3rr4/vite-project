/* INSIRA SEU CÓDIGO NESSE ARQUIVO */
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableFooter,
} from "@mui/material";

function App() {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head">Cabecalho 1</TableCell>
            <TableCell variant="head">Cabecalho 2</TableCell>
            <TableCell variant="head">Cabecalho 3</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>Informacao 1</TableCell>
            <TableCell>Informacao 2</TableCell>
            <TableCell>Informacao 3</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Informacao 4</TableCell>
            <TableCell>Informacao 5</TableCell>
            <TableCell>Informacao 6</TableCell>
          </TableRow>
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell variant="footer">Total de informacoes</TableCell>
            <TableCell variant="footer" colSpan={2}>
              6
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  );
}

export default App;
