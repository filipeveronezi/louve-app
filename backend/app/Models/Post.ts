import { DateTime } from 'luxon'
import { BaseModel, column, computed } from '@ioc:Adonis/Lucid/Orm'
import { slugify } from '@ioc:Adonis/Addons/LucidSlugify'

export default class Post extends BaseModel {
  @column()
  public id: number

  @column({ isPrimary: true })
  @slugify({
    strategy: 'simple',
    fields: ['title'],
    allowUpdates: true
  })
  public slug: string

  @column()
  public title: string

  @column()
  public author: string

  @column()
  public lyric: string

  @column()
  public cipher_link: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
