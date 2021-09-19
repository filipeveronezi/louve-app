import Route from '@ioc:Adonis/Core/Route'
import PostsController from 'App/Controllers/Http/PostsController'

Route.get('/', async () => {
  return { hello: 'world' }
})

//Route.resource('/posts', 'PostsController').apiOnly()
Route.get('/posts', 'PostsController.index')
Route.post('/posts', 'PostsController.store')
Route.get('/posts/:slug', 'PostsController.show')
Route.put('/posts/:slug', 'PostsController.update')
Route.delete('/posts/:slug', 'PostsController.destroy')
