const { usersParams } = require('../models')

module.exports = {
  async getalluserdata (req,res) {
    const {username} = req.body
    const userP = await usersParams.findOne({
      where: {
        parameter_name: 'username',
        parameter_value: username
      }
    })

    const userD = await usersParams.findAll({
      where: {
        user_id: userP.user_id
      },
      raw: true
    })

    if (userD == null) {
      return res.status(403).send({
        error: "Something bad happened on our end."
      })
    }

    allData = JSON.stringify(userD)

    res.send({
      data: allData
    })
  },
  // usersettings SECTION
  async setuseremail (req, res) {
    const { username, newemail } = req.body
    UpdateData(username, newemail, 'email', res)
  },

  async setusername (req, res) {
    const { username, newusername } = req.body
    UpdateData(username, newusername, 'username', res)
  },

  async setuserFirstName (req, res) {
    const { username, newfirstname } = req.body
    UpdateData(username, newfirstname, 'firstname', res)
  },
  async setuserLastName (req, res) {
    const { username, newlastname } = req.body
    UpdateData(username, newlastname, 'lastname', res)
  },
  // usersettings SECTION
  async setusersettings (req, res) {
  },

  // usermirrorsettings SECTION
  async setusermirrorsettings (req,res) {
  },

  // userpics SECTION
  async setuserpics (req,res) {

  }
}

async function UpdateData(username, newThing, where, res) {
  try {
    const userP = await usersParams.findOne({
      where: {
        parameter_name: 'username',
        parameter_value: username
      }
    })

    if (userP == null) {
      return res.status(403).send({
        error: "Update wasn't successfull!"
      })
    }

    const updateCheck = await usersParams.findOne({
      where: {
        user_id: userP.user_id,
        parameter_name: where
      }
    })
    .then(async function(res) {
      if(res!=null) {
        const update = await usersParams.update({ parameter_value: newThing }, {
          where: {
            user_id: userP.user_id,
            parameter_name: where
          }
        });
      } else {
        const updateCreate = await usersParams.create({ user_id: userP.user_id, parameter_name: where, parameter_value: newThing })
      }
    })

    res.send({
      msg: "ok"
    })

  } catch (err) {
    res.status(500).send({
      error: "Something went wrong on our end!"+err
    })
  }
}

// try {
    //   const {username, newemail} = req.body
    //   const userP = await usersParams.findOne({
    //     where: {
    //       parameter_name: 'username',
    //       parameter_value: username
    //     }
    //   })

    //   await usersParams.update({ parameter_value: newemail }, {
    //     where: {
    //       user_id: userP.user_id,
    //       parameter_name: 'email'
    //     }
    //   });

    //   res.send({
    //     msg: "ok"
    //   })

    // } catch (error) {
    //   res.status(500).send({
    //     error: "Something went wrong on our end!"+err
    //   })
    // }
