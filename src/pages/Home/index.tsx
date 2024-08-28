import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'windows',
    image: resident,
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    category: 'RPG',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Diablo 4',
    system: 'Windows',
    image: diablo,
    infos: ['5%', 'R$ 290,00']
  },
  {
    id: 3,
    category: 'Aventura',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Zelda Tears of the Kingdom',
    system: 'Nintendo Switch',
    image: zelda,
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Star Wars - Jedi Survivor',
    system: 'Xbox',
    image: starWars,
    infos: ['10%', 'R$ 250,00']
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'windows',
    image: resident,
    infos: ['17/05']
  },
  {
    id: 6,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'windows',
    image: resident,
    infos: ['17/05']
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'windows',
    image: resident,
    infos: ['17/05']
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4 - Remake',
    system: 'windows',
    image: resident,
    infos: ['17/05']
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
