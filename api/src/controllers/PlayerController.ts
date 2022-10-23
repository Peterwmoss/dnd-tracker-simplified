import TraditionBuilder from '../builders/TraditionBuilder'
import PlayerFacade from '../facades/PlayerFacade'
import Class from '../models/Class'
import Player from '../models/Player'
import Tradition from '../models/Tradition'
import ClassRepository from '../repositories/classes/ClassRepository'

export function getTestPlayer(): PlayerFacade {
  const levelMap: Map<Class, number> = new Map([
    [ClassRepository.Elementalist(), 1]
  ])
  const proficiencies: Proficiencies = {}
  
  const tradition = new TraditionBuilder()
  .setBoons({})
  .setDrawbacks({})
  .setName('Custom')
  .setKeyAbility('Wisdom')
  .setSpheres([])
  .build()

  const player = new Player(
    tradition, 
    levelMap, 
    {
      Charisma: 9,
      Constitution: 11,
      Dexterity: 20,
      Intelligence: 14,
      Strength: 15,
      Wisdom: 4, 
    },
  proficiencies)
  return new PlayerFacade(player)
}