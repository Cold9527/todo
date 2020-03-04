const Router = require('koa-router')

const userRouter = new Router({
  prefix: '/user'
})

userRouter.post('/login', async (ctx) => {
  const user = ctx.request.body
  if(user.username === 'vidy' && user.password === '123456'){
    ctx.session.user = {
      username: 'vidy'
    }
    ctx.body = {
      success: true,
      data: {
        username: 'vidy'
      }
    }
  } else {
    ctx.status = 400
    ctx.body = {
      success: false,
      message: 'Invalid username or password error'
    }
  }
})

module.exports = userRouter