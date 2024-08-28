class Game {
  image: string
  infos: string[]
  title: string
  category: string
  system: string
  description: string
  id: number

  constructor(
    id: number,
    image: string,
    infos: string[],
    title: string,
    category: string,
    system: string,
    description: string
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.title = title
    this.category = category
    this.system = system
    this.description = description
  }
}

export default Game
