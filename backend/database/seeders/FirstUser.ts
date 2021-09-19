import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class FirstUserSeeder extends BaseSeeder {
  public async run() {
    await User.create({
      username: 'admin',
      password: 'admin'
    })
  }
}
