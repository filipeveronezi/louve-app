import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async store({ request, auth }: HttpContextContract) {
    const { username, password } = request.all()
    const token = await auth.attempt(username, password, {
      expiresIn: '30 days'
    })
    return token
  }

  public async destroy({ auth }: HttpContextContract) {
    await auth.logout()
  }
}
