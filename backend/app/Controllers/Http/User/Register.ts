import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UserRegisterController {
  public async index({}: HttpContextContract) {
    const registers = await User.all()
    return registers
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['username', 'password', 'role'])
    const register = await User.create(data)
    return register
  }

  public async show({ params }: HttpContextContract) {
    const register = await User.findOrFail(params.id)
    return register
  }

  public async update({ request, params }: HttpContextContract) {
    const register = await User.findOrFail(params.id)
    const data = request.only(['username', 'password', 'role'])
    register.merge(data)
    await register.save()
    return register
  }

  public async destroy({ params }: HttpContextContract) {
    const register = await User.findOrFail(params.id)
    await register.delete()
  }
}
