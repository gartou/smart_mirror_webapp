import Api from '@/services/Api'

export default {
  GetAllData() {
    return Api().post('/getalluserdata')
  },
  SetUserEmail (user) {
    return Api().post('/setuseremail', user)
  },
  SetUsername (user) {
    return Api().post('/setusername', user)
  },
  SetUserFirstName (user) {
    return Api().post('/setuserfirstname', user)
  },
  SetUserLastName (user) {
    return Api().post('/setuserlastname', user)
  },
  GetUserMirrorSettings (user) {
    return Api().post('/usermirrorsettings', user)
  },
  GetUserPictures (user) {
    return Api().post('/userpics', user)
  },
  SendUserPics (formData) {
    return Api().post('/uploadimg', formData)
  },
  GetUserPics (user) {
    return Api().post('/getuserpics', user)
  }
}
