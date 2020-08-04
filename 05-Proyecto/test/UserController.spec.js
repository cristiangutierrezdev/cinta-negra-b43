jest.mock("../services/userServices", () =>
  jest.requireActual("../services/_mock_/userServices.js")
);
const { create } = require('../controllers/userController');

describe('User test group', ()=>{
// Todos los test para User Create
  describe('Create User', ()=>{
    it('Create', async()=>{
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      }

      const req = {
        body: {
          email: "test@test.com",
          name: "Cristian",
          last_name: "Gutierrez",
          password: "qwerty123456"
        }
      }

      await create(req, res)
      expect(res.status.mock.calls).toEqual([[201]]);
      expect(res.send.mock.calls).toEqual([[{user: expect.objectContaining({is_active: true})}]])
    })

    it('Create Error', async()=>{
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      }

      const req = {
        body: {
          name: "Cristian",
          last_name: "Gutierrez",
          password: "qwerty123456"
        }
      }

      await create(req, res)
      expect(res.status.mock.calls).toEqual([[409]]);
    })
  })
// Todo lo relacionado con el update user

})