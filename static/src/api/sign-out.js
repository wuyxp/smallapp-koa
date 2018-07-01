// 2018年07月01日18:15:38 退出登录
import Request from './../utils/request'

const signOutApi = async () => {
  let result = await Request.form({
    url: '/api/user/signOut.json'
  })
  return result
}

export  { signOutApi }

