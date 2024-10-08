import Game from '../../models/Game'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ background, title, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            image={game.image}
            infos={game.infos}
            title={game.title}
            category={game.category}
            system={game.system}
            description={game.description}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
