import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        username: 'master',
        password: 'master',
        role: 'master'
      },
      {
        username: 'admin',
        password: 'admin',
        role: 'admin'
      },
      {
        username: 'normal',
        password: 'normal',
        role: 'normal'
      }
    ])
  }
}
