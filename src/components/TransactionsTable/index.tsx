import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>01/10/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.000</td>
            <td>Casa</td>
            <td>05/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
